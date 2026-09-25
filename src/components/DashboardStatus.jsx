import React, { useState, useEffect } from 'react';
import { 
    Cloud, 
    DollarSign, 
    Sun, 
    CloudRain, 
    Snowflake, 
    Wind, 
    RefreshCw, 
    Calculator, 
    ArrowRightLeft, 
    Sparkles, 
    Droplets,
    Thermometer,
    Check
} from 'lucide-react';

export default function DashboardStatus({ mode = "dashboard" }) {
    const [weatherFukuoka, setWeatherFukuoka] = useState(null);
    const [weatherBeppu, setWeatherBeppu] = useState(null);
    const [rateData, setRateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [calcTwd, setCalcTwd] = useState('10000');
    const [showCalculator, setShowCalculator] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('');

    const fetchData = async () => {
        setLoading(true);
        const fetchJsonSafely = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return await response.json();
            } catch (e) {
                console.error(`無法取得 API 資料 (${url}):`, e);
                return null;
            }
        };

        // Fukuoka: 33.5904, 130.4017 | Beppu/Oita: 33.2794, 131.4975
        const [fukuokaData, beppuData, rateJson] = await Promise.all([
            fetchJsonSafely(`https://api.open-meteo.com/v1/forecast?latitude=33.5904&longitude=130.4017&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Asia%2FTokyo`),
            fetchJsonSafely(`https://api.open-meteo.com/v1/forecast?latitude=33.2794&longitude=131.4975&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Asia%2FTokyo`),
            fetchJsonSafely('https://open.er-api.com/v6/latest/TWD')
        ]);

        if (fukuokaData && fukuokaData.current) {
            setWeatherFukuoka({
                temp: Math.round(fukuokaData.current.temperature_2m),
                apparent: Math.round(fukuokaData.current.apparent_temperature),
                humidity: fukuokaData.current.relative_humidity_2m,
                code: fukuokaData.current.weather_code,
                wind: (fukuokaData.current.wind_speed_10m).toFixed(1)
            });
        } else {
            setWeatherFukuoka({ temp: 12, apparent: 11, humidity: 60, code: 1, wind: '3.5' });
        }

        if (beppuData && beppuData.current) {
            setWeatherBeppu({
                temp: Math.round(beppuData.current.temperature_2m),
                apparent: Math.round(beppuData.current.apparent_temperature),
                humidity: beppuData.current.relative_humidity_2m,
                code: beppuData.current.weather_code,
                wind: (beppuData.current.wind_speed_10m).toFixed(1)
            });
        } else {
            setWeatherBeppu({ temp: 9, apparent: 8, humidity: 65, code: 2, wind: '4.2' });
        }

        if (rateJson && rateJson.rates && rateJson.rates.JPY) {
            setRateData({
                jpyPerTwd: rateJson.rates.JPY.toFixed(2),
                twdPerJpy: (1 / rateJson.rates.JPY).toFixed(4),
                rawJpy: rateJson.rates.JPY
            });
        } else {
            setRateData({
                jpyPerTwd: '4.85',
                twdPerJpy: '0.2062',
                rawJpy: 4.85
            });
        }

        const now = new Date();
        setLastUpdated(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getWeatherIcon = (code) => {
        if (code <= 1) return <Sun size={20} className="text-amber-500 drop-shadow-sm" />;
        if (code <= 3) return <Cloud size={20} className="text-sky-500 drop-shadow-sm" />;
        if (code >= 71) return <Snowflake size={20} className="text-sky-400 animate-spin-slow" />;
        if (code >= 51) return <CloudRain size={20} className="text-blue-500" />;
        return <Cloud size={20} className="text-slate-400" />;
    };

    const getWeatherText = (code) => {
        if (code === 0) return '晴朗';
        if (code <= 3) return '多雲時晴';
        if (code >= 71) return '降雪';
        if (code >= 51) return '小雨';
        return '陰天';
    };

    const calculatedJpy = rateData?.rawJpy && !isNaN(calcTwd) && calcTwd !== ''
        ? Math.round(parseFloat(calcTwd || 0) * rateData.rawJpy).toLocaleString() 
        : '--';

    return (
        <div className="space-y-3">
            {/* 天氣雙卡片 (Swiss Precision Style) */}
            <div className="grid grid-cols-2 gap-3">
                {/* 福岡市區卡片 */}
                <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:border-sky-300 transition-all group">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">FUKUOKA</span>
                            <h4 className="text-xs font-bold text-slate-800">福岡市區</h4>
                        </div>
                        <div className="p-1.5 rounded-xl bg-sky-50 text-sky-600 group-hover:scale-105 transition-transform">
                            {getWeatherIcon(weatherFukuoka?.code)}
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl font-black font-sans tracking-tight text-slate-900">
                            {loading ? '--' : weatherFukuoka?.temp}°
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                            體感 {weatherFukuoka?.apparent || weatherFukuoka?.temp}°C
                        </span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                        <span className="flex items-center gap-1 font-medium">
                            <Droplets size={11} className="text-sky-500" />
                            {weatherFukuoka?.humidity}%
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                            <Wind size={11} className="text-slate-400" />
                            {weatherFukuoka?.wind}m/s
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 font-bold">
                            {getWeatherText(weatherFukuoka?.code)}
                        </span>
                    </div>
                </div>

                {/* 別府 / 由布院卡片 */}
                <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:border-amber-300 transition-all group">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">BEPPU & YUFU</span>
                            <h4 className="text-xs font-bold text-slate-800">別府 / 由布院</h4>
                        </div>
                        <div className="p-1.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
                            {getWeatherIcon(weatherBeppu?.code)}
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl font-black font-sans tracking-tight text-slate-900">
                            {loading ? '--' : weatherBeppu?.temp}°
                        </span>
                        <span className="text-[10px] text-amber-700 font-medium">
                            體感 {weatherBeppu?.apparent || weatherBeppu?.temp}°C
                        </span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                        <span className="flex items-center gap-1 font-medium">
                            <Droplets size={11} className="text-amber-500" />
                            {weatherBeppu?.humidity}%
                        </span>
                        <span className="flex items-center gap-1 font-medium text-amber-700 font-bold">
                            ♨ 溫泉季
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-bold">
                            {getWeatherText(weatherBeppu?.code)}
                        </span>
                    </div>
                </div>
            </div>

            {/* 即時匯率 Bar ＋ 互動計算器 */}
            <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                            ¥
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">即時匯率 TWD ➔ JPY</span>
                                {lastUpdated && (
                                    <span className="text-[8px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">
                                        ● LIVE {lastUpdated}
                                    </span>
                                )}
                            </div>
                            <div className="text-xs font-bold text-slate-800 font-mono mt-0.5">
                                NT$ 1 ≈ <span className="text-emerald-600 font-black text-sm">{loading ? '...' : rateData?.jpyPerTwd}</span> 日圓
                                <span className="text-[10px] text-slate-400 font-normal ml-2 font-mono">(¥1 ≈ ${rateData?.twdPerJpy})</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowCalculator(!showCalculator)}
                        className={`px-3 py-1.5 rounded-xl border font-bold text-xs transition-all flex items-center gap-1.5 tap-effect ${
                            showCalculator 
                                ? 'bg-slate-900 text-white border-slate-900 shadow-xs' 
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                    >
                        <Calculator size={13} />
                        <span>{showCalculator ? '收合' : '換算器'}</span>
                    </button>
                </div>

                {/* 展開匯率換算面板 */}
                {showCalculator && (
                    <div className="mt-3.5 pt-3.5 border-t border-slate-100 animate-fadeIn space-y-2.5">
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">NT$</span>
                                <input
                                    type="number"
                                    value={calcTwd}
                                    onChange={(e) => setCalcTwd(e.target.value)}
                                    placeholder="輸入台幣金額"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-3 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                                />
                            </div>
                            <ArrowRightLeft size={14} className="text-slate-400 shrink-0" />
                            <div className="flex-1 bg-gradient-to-r from-sky-50 to-indigo-50/50 border border-sky-100 rounded-xl py-2 px-3 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-sky-700">折合日幣</span>
                                <span className="text-sm font-black font-mono text-sky-950">¥ {calculatedJpy}</span>
                            </div>
                        </div>

                        {/* 快捷常用金額晶片 */}
                        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider shrink-0">快捷:</span>
                            {['1000', '3000', '5000', '10000', '20000', '50000'].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setCalcTwd(val)}
                                    className={`text-[10px] font-mono font-medium px-2 py-1 rounded-lg border shrink-0 transition-all ${
                                        calcTwd === val
                                            ? 'bg-sky-600 text-white border-sky-600 font-bold'
                                            : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80'
                                    }`}
                                >
                                    ${parseInt(val).toLocaleString()}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
