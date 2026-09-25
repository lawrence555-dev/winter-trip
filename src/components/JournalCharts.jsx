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

// 1. 行程均衡度雷達圖 (九州 10 天全自駕)
export const WinterRadarChart = () => {
    // 雙Outlet購物、晨跑運動、親子放電、溫泉美食、自駕效率
    const data = [96, 92, 95, 98, 94];

    const radarData = {
        labels: ['雙Outlet購物', '晨跑運動', '親子放電', '溫泉美食', '自駕效率'],
        datasets: [{
            label: '行程評分',
            data: data,
            borderColor: '#0284c7',
            backgroundColor: 'rgba(2, 132, 199, 0.18)',
            borderWidth: 2.5,
            pointRadius: 4,
            pointBackgroundColor: '#0284c7',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: { 
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => ` 指標評分: ${context.raw}%`
                }
            }
        },
        scales: {
            r: {
                grid: { color: '#e2e8f0' },
                angleLines: { color: '#e2e8f0' },
                pointLabels: {
                    font: { size: 10, weight: 'bold', family: 'Work Sans, Noto Sans TC' },
                    color: '#334155',
                    padding: 8
                },
                ticks: { display: false },
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    };

    return <Radar data={radarData} options={options} />;
};

// 2. 每日自駕里程與行車時間趨勢圖
export const DriveDistanceChart = () => {
    const driveDistances = [120, 35, 110, 15, 10, 45, 170, 75, 50, 20];
    const days = ['D1別府', 'D2動物園', 'D3鳥栖', 'D4大濠', 'D5超人', 'D6太宰府', 'D7門司港', 'D8糸島', 'D9海之中道', 'D10機場'];

    const chartData = {
        labels: days,
        datasets: [{
            label: '預估自駕里程 (km)',
            data: driveDistances,
            borderColor: '#0284c7',
            backgroundColor: 'rgba(2, 132, 199, 0.12)',
            tension: 0.35,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#0284c7',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            borderWidth: 2.5
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => ` 預估行駛: ${context.raw} km`
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { 
                    font: { size: 9, family: 'Work Sans, Noto Sans TC', weight: 'bold' },
                    color: '#64748b'
                }
            },
            y: {
                beginAtZero: true,
                grid: { color: '#f1f5f9' },
                ticks: {
                    font: { size: 9 },
                    color: '#94a3b8',
                    stepSize: 50
                }
            }
        }
    };

    return (
        <div className="w-full h-32">
            <Line data={chartData} options={options} />
        </div>
    );
};
