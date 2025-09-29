'use client';
// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import GlobalStyle from '@/styles/GlobalStyles';
import StreamingList from '../components/StreamingList';
import Button from '../components/Button';
import Footer from '../components/Footer';
import ChartDashboard from '@/components/ChartDashboard';
import chartsData from '@/data/charts.json';
import songsData from '@/data/songs.json';

const navigation = ['차트', '채팅방', '투표', '캘린더', '굿즈'];
type ChartServiceKey = keyof typeof chartsData;

const serviceLabels: Record<ChartServiceKey, string> = {
  melon: 'Melon',
  genie: 'Genie',
  bugs: 'Bugs',
  flo: 'FLO',
  appleMusic: 'Apple Music',
};

const Home: React.FC = () => {
  const chartHighlights = (Object.keys(chartsData) as ChartServiceKey[]).map((serviceKey) => ({
    service: serviceLabels[serviceKey] ?? serviceKey,
    topSong: chartsData[serviceKey]?.[0]?.title ?? '정보 없음',
    rank: chartsData[serviceKey]?.[0]?.rank ?? '-',
  }));

  const topSong = [...songsData].sort((a, b) => a.rank - b.rank)[0];

  return (
    <>
      <Head>
        <title>AESPA Music Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 md:px-10 lg:px-16">
          <header className="flex flex-col gap-6 rounded-3xl border border-white/20 bg-gradient-to-r from-[#7253ffdd] via-[#ff62d5d9] to-[#7253ffcc] p-6 shadow-[0_20px_45px_-20px_rgba(124,58,237,0.6)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/15 px-4 py-2 text-xl font-semibold text-white shadow-inner shadow-white/20 backdrop-blur-sm">AESPA</div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Music Platform</p>
                <h1 className="text-3xl font-semibold text-white md:text-4xl">엣플리</h1>
              </div>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-200">
              {navigation.map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-white transition hover:border-white hover:bg-white/40 hover:text-slate-900"
                >
                  {item}
                </button>
              ))}
            </nav>
          </header>

          <main className="mt-8 flex flex-1 flex-col gap-8">
            <section className="grid gap-6 lg:grid-cols-[2.5fr,1fr]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">실시간 스트리밍 추이</h2>
                    <p className="text-sm text-slate-300">주요 플랫폼 순위를 시각화하여 하루 변화를 확인하세요.</p>
                  </div>
                  <Button variant="secondary">전체 보기</Button>
                </div>
                <ChartDashboard />
              </div>
              <aside className="flex flex-col gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-base font-semibold text-white">오늘의 하이라이트</h3>
                  <p className="mt-2 text-xs uppercase tracking-wide text-pastelPink">실시간 차트</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {chartHighlights.slice(0, 3).map(({ service, topSong: songTitle, rank }) => (
                      <li key={service} className="flex items-center justify-between gap-3">
                        <span>{service}</span>
                        <span className="truncate text-right text-slate-100">{songTitle}</span>
                        <span className="rounded-full bg-pastelBlue/30 px-2 py-0.5 text-xs text-white">{rank}위</span>
                      </li>
                    ))}
                  </ul>
                  {topSong && (
                    <p className="mt-5 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-xs text-slate-200">
                      지금 가장 많이 재생된 곡은 <span className="font-semibold text-white">{topSong.title}</span>
                      입니다.
                    </p>
                  )}
                  <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">업데이트 5분 전</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-base font-semibold text-white">다가오는 일정</h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-200">
                    <li className="flex items-start justify-between gap-3">
                      <span>팬 사인회</span>
                      <span className="rounded-full bg-pastelPink/30 px-3 py-1 text-xs text-white">오늘 19:00</span>
                    </li>
                    <li className="flex items-start justify-between gap-3">
                      <span>뮤직 쇼 챌린지</span>
                      <span className="rounded-full bg-pastelPurple/40 px-3 py-1 text-xs text-white">D-2</span>
                    </li>
                    <li className="flex items-start justify-between gap-3">
                      <span>굿즈 드롭</span>
                      <span className="rounded-full bg-pastelBlue/40 px-3 py-1 text-xs text-white">D-4</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">하이라이트 콘텐츠</h2>
                <Button variant="primary">라이브 보기</Button>
              </div>
              <StreamingList />
            </section>
          </main>

          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
