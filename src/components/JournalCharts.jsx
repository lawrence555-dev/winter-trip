import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Radar, Line } from 'react-chartjs-2';
import { Activity, Car, Gauge, Sparkles } from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export const WinterRadarChart = () => {
  const radarData = {
    labels: [
      'Dual Outlets',
      'Zone 2 Running',
      'Family Play',
      'Onsen & Wagyu',
      'Driving Efficiency'
    ],
    datasets: [
      {
        label: 'Trip Experience Score',
        data: [96, 92, 95, 98, 94],
        borderColor: '#f59e0b', // amber-500
        backgroundColor: 'rgba(245, 158, 11, 0.25)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#f59e0b',
        pointBorderColor: '#0f172a',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => ` Score: ${context.raw}%`,
        },
      },
    },
    scales: {
      r: {
        grid: { color: 'rgba(51, 65, 85, 0.6)' },
        angleLines: { color: 'rgba(51, 65, 85, 0.8)' },
        pointLabels: {
          font: { size: 11, weight: 'bold', family: 'Inter, sans-serif' },
          color: '#cbd5e1',
          padding: 8,
        },
        ticks: { display: false },
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };

  return <Radar data={radarData} options={options} />;
};

export const DriveDistanceChart = () => {
  const driveDistances = [120, 35, 110, 15, 10, 45, 170, 75, 50, 20];
  const days = [
    'D1 Beppu',
    'D2 Safari',
    'D3 Tosu',
    'D4 Ohori',
    'D5 Outlets',
    'D6 Dazaifu',
    'D7 Mojiko',
    'D8 Itoshima',
    'D9 Seaside',
    'D10 Airport',
  ];

  const chartData = {
    labels: days,
    datasets: [
      {
        label: 'Est. Driving Distance (km)',
        data: driveDistances,
        borderColor: '#38bdf8', // sky-400
        backgroundColor: 'rgba(56, 189, 248, 0.15)',
        tension: 0.35,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#38bdf8',
        pointBorderColor: '#0f172a',
        pointBorderWidth: 2,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => ` Est. Distance: ${context.raw} km`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10, family: 'Inter, sans-serif', weight: 'bold' },
          color: '#94a3b8',
        },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(51, 65, 85, 0.5)' },
        ticks: {
          font: { size: 10 },
          color: '#64748b',
          stepSize: 50,
        },
      },
    },
  };

  return (
    <div className="w-full h-44">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default function JournalCharts() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Radar Chart Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">Trip Focus Balance</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Comprehensive index balancing outlet shopping, Zone 2 running, kid attractions, and onsen gastronomy.
            </p>
          </div>
          <div className="max-w-[280px] mx-auto w-full">
            <WinterRadarChart />
          </div>
        </div>

        {/* Driving Trend Chart Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Car className="w-5 h-5 text-sky-400" />
              <h3 className="text-base font-bold text-white">10-Day Driving Mileage Breakdown</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Estimated highway & local driving distances per day (Total approx. 650 km with KEP Pass).
            </p>
          </div>
          <div>
            <DriveDistanceChart />
          </div>
        </div>
      </div>
    </div>
  );
}
