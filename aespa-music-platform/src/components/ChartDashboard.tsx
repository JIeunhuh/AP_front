// components/ChartDashboard.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Chart.js의 모든 요소와 스케일을 등록합니다.
Chart.register(...registerables);

const ChartDashboard: React.FC = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Melon',
        data: [5, 6, 7, 8, 6, 7, 9],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Genie',
        data: [4, 5, 6, 7, 5, 6, 8],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Bugs',
        data: [3, 4, 5, 6, 4, 5, 7],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">음원 사이트별 순위 차트</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartDashboard;