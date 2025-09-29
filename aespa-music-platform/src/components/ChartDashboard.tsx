// components/ChartDashboard.tsx
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables, ChartOptions, Plugin } from 'chart.js';
import chartsData from '@/data/charts.json';
import songsData from '@/data/songs.json';

// Chart.js의 모든 요소와 스케일을 등록합니다.
const gradientFillPlugin: Plugin<'line'> = {
  id: 'rankGradientFill',
  beforeDatasetsDraw: (chart) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) {
      return;
    }

    chart.data.datasets.forEach((dataset, index) => {
      if ((dataset as { fill?: boolean | string }).fill) {
        const gradient = ctx.createLinearGradient(
          chartArea.left,
          chartArea.top,
          chartArea.left,
          chartArea.bottom,
        );

        gradient.addColorStop(0, 'rgba(232, 121, 249, 0.35)');
        gradient.addColorStop(1, 'rgba(93, 63, 211, 0)');

        dataset.backgroundColor = gradient;
      }

      const meta = chart.getDatasetMeta(index);
      if (!meta?.dataset) {
        return;
      }

      // 부드러운 라인 가장자리를 위한 둥근 라인 처리
      meta.dataset.options = {
        ...meta.dataset.options,
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
      };
    });
  },
};

const glowLinePlugin: Plugin<'line'> = {
  id: 'glowLine',
  beforeDatasetsDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    ctx.shadowColor = 'rgba(125, 82, 255, 0.35)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 12;
  },
  afterDatasetsDraw: (chart) => {
    chart.ctx.restore();
  },
};

Chart.register(...registerables, gradientFillPlugin, glowLinePlugin);

type ChartServiceKey = keyof typeof chartsData;

const serviceLabels: Record<ChartServiceKey, string> = {
  melon: 'Melon',
  genie: 'Genie',
  bugs: 'Bugs',
  flo: 'FLO',
  appleMusic: 'Apple Music',
};

const accentPalette = ['#c084fc', '#f472b6', '#60a5fa', '#facc15', '#34d399'];

const ChartDashboard: React.FC = () => {
  const { labels, datasets, stats } = useMemo(() => {
    const services = Object.keys(chartsData) as ChartServiceKey[];
    const formattedLabels = services.map((serviceKey) => serviceLabels[serviceKey] ?? serviceKey);
    const topSongs = [...songsData].sort((a, b) => a.rank - b.rank).slice(0, 5);

    const formattedDatasets = topSongs.map((song, index) => {
      const ranksByService = services.map((serviceKey) => {
        const entry = chartsData[serviceKey]?.find((item) => item.title === song.title);
        return entry ? entry.rank : 6;
      });

      return {
        label: song.title,
        data: ranksByService,
        borderColor: accentPalette[index % accentPalette.length],
        backgroundColor: accentPalette[index % accentPalette.length] + '33',
        tension: 0.45,
        borderWidth: 2.5,
        pointRadius: 4,
        pointHoverRadius: 8,
        pointBackgroundColor: accentPalette[index % accentPalette.length],
        pointBorderColor: '#0f172a',
        pointBorderWidth: 2,
        pointHitRadius: 14,
        fill: index === 0 ? 'origin' : false,
        clip: 8,
      };
    });

    const spotlight = topSongs.reduce(
      (best, song, index) => {
        const ranksByService = services.map((serviceKey) => {
          const entry = chartsData[serviceKey]?.find((item) => item.title === song.title);
          return entry ? entry.rank : 6;
        });

        const averageRank = ranksByService.reduce((sum, rank) => sum + rank, 0) / ranksByService.length;
        if (averageRank < best.averageRank) {
          return {
            title: song.title,
            averageRank: Number(averageRank.toFixed(1)),
            color: accentPalette[index % accentPalette.length],
          };
        }
        return best;
      },
      {
        title: topSongs[0]?.title ?? '집계 중',
        averageRank: Number.POSITIVE_INFINITY,
        color: accentPalette[0],
      },
    );

    if (!Number.isFinite(spotlight.averageRank)) {
      spotlight.averageRank = topSongs[0] ? topSongs[0].rank : 0;
    }

    const bestService = services.reduce(
      (best, serviceKey) => {
        const leader = chartsData[serviceKey]?.[0];
        if (!leader) {
          return best;
        }

        if (leader.rank < best.rank) {
          return {
            service: serviceLabels[serviceKey] ?? serviceKey,
            song: leader.title,
            rank: leader.rank,
          };
        }

        return best;
      },
      {
        service: serviceLabels[services[0] ?? 'melon'] ?? 'Melon',
        song: chartsData[services[0] as ChartServiceKey]?.[0]?.title ?? '집계 중',
        rank: chartsData[services[0] as ChartServiceKey]?.[0]?.rank ?? 0,
      },
    );

    const datasetLegend = topSongs.map((song, index) => ({
      label: song.title,
      color: accentPalette[index % accentPalette.length],
      rank: song.rank,
    }));

    return {
      labels: formattedLabels,
      datasets: formattedDatasets,
      stats: {
        spotlight,
        bestService,
        datasetLegend,
      },
    };
  }, []);

  const options: ChartOptions<'line'> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 20,
          bottom: 12,
          left: 4,
          right: 4,
        },
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(148, 163, 184, 0.04)',
          },
          ticks: {
            color: 'rgba(226, 232, 240, 0.75)',
            font: {
              weight: '500',
            },
          },
          border: {
            display: false,
          },
        },
        y: {
          reverse: true,
          min: 1,
          max: 5,
          ticks: {
            stepSize: 1,
            color: 'rgba(226, 232, 240, 0.65)',
            callback: (value) => `순위 ${value}`,
          },
          grid: {
            color: 'rgba(148, 163, 184, 0.06)',
            drawBorder: false,
          },
          border: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'rgba(226, 232, 240, 0.8)',
            boxWidth: 12,
            usePointStyle: true,
            padding: 20,
          },
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          borderColor: 'rgba(148, 163, 184, 0.2)',
          borderWidth: 1,
          displayColors: false,
          callbacks: {
            label: (context) => {
              const rank = context.parsed.y as number | undefined;
              if (!rank) {
                return `${context.dataset.label} · ${context.label} -`;
              }

              return `${context.dataset.label} · ${context.label} ${rank}위`;
            },
          },
        },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      animation: {
        tension: {
          duration: 900,
          easing: 'easeOutQuart',
          from: 0.5,
          to: 0.45,
        },
      },
    }),
    [],
  );

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white md:text-xl">플랫폼별 순위 트렌드</h3>
          <p className="text-xs text-slate-300 md:text-sm">
            주간 스트리밍 데이터를 시각화하여 플랫폼별 강세 곡을 빠르게 확인하세요.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] text-white">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: stats.spotlight.color }}
            />
            <span className="font-medium">Top Avg · {stats.spotlight.title}</span>
            <span className="text-slate-200">{stats.spotlight.averageRank.toFixed(1)}위</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-slate-100">
            <span className="rounded-full bg-slate-900/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-pastelPink">
              Best Platform
            </span>
            <span className="font-medium">{stats.bestService.service}</span>
            <span className="text-slate-200">#{stats.bestService.rank}</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(96,165,250,0.18),_transparent_52%)]" />
        <div className="relative z-10 h-[320px] w-full">
          <Line data={{ labels, datasets }} options={options} />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-slate-200">
        {stats.datasetLegend.map((legend) => (
          <div
            key={legend.label}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: legend.color }} />
            <span>{legend.label}</span>
            <span className="text-slate-400">#{legend.rank}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChartDashboard;
