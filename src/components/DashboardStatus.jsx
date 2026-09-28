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
    Check,
    Flame
} from 'lucide-react';

export default function DashboardStatus({ mode = "dashboard" }) {
    const [weatherFukuoka, setWeatherFukuoka] = useState(null);
    const [weatherBeppu, setWeatherBeppu] = useState(null);
    const [rateData, setRateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [calcTwd, setCalcTwd] = useState('10000');
    const [showCalculator, setShowCalculator] = useState(false);

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

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getWeatherIcon = (code) => {
        if (code <= 1) return <Sun size={22} className="text-amber-500 drop-shadow-sm" />;
        if (code <= 3) return <Cloud size={22} className="text-sky-500 drop-shadow-sm" />;
        if (code >= 71) return <Snowflake size={22} className="text-sky-400 animate-spin-slow" />;
        if (code >= 51) return <CloudRain size={22} className="text-blue-500" />;
        return <Cloud size={22} className="text-slate-400" />;
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
        <div className="space-y-3.5">
            {/* 天氣雙卡片 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* 福岡市區卡片 */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:border-sky-300 transition-all group">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono block">FUKUOKA</span>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900">福岡市區</h4>
                        </div>
                        <div className="p-2 rounded-xl bg-sky-50 text-sky-600 group-hover:scale-105 transition-transform">
                            {getWeatherIcon(weatherFukuoka?.code)}
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2.5">
                        <span className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-950">
                            {loading ? '--' : weatherFukuoka?.temp}°
                        </span>
                        <span className="text-xs text-slate-600 font-medium">
                            體感 {weatherFukuoka?.apparent || weatherFukuoka?.temp}°C
                        </span>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                        <span className="flex items-center gap-1">
                            <Droplets size={13} className="text-sky-500" />
                            {weatherFukuoka?.humidity}%
                        </span>
                        <span className="flex items-center gap-1">
                            <Wind size={13} className="text-slate-400" />
                            {weatherFukuoka?.wind}m/s
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 font-bold border border-sky-100">
                            {getWeatherText(weatherFukuoka?.code)}
                        </span>
                    </div>
                </div>

                {/* 別府 / 由布院卡片 */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:border-amber-300 transition-all group">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono block">BEPPU & YUFU</span>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900">別府 / 由布院</h4>
                        </div>
                        <div className="p-2 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
                            {getWeatherIcon(weatherBeppu?.code)}
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2.5">
                        <span className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-slate-950">
                            {loading ? '--' : weatherBeppu?.temp}°
                        </span>
                        <span className="text-xs text-amber-800 font-bold">
                            體感 {weatherBeppu?.apparent || weatherBeppu?.temp}°C
                        </span>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                        <span className="flex items-center gap-1">
                            <Droplets size={13} className="text-amber-500" />
                            {weatherBeppu?.humidity}%
                        </span>
                        <span className="flex items-center gap-1 text-amber-800 font-bold">
                            <Flame size={12} className="text-amber-600" /> 溫泉名湯
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 font-bold border border-amber-100">
                            {getWeatherText(weatherBeppu?.code)}
                        </span>
                    </div>
                </div>
            </div>

            {/* 即時匯率 Bar ＋ 互動計算器 (Removed overlapping Live badge for clean UI) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-base shadow-xs font-mono">
                            ¥
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                                即時匯率 TWD ➔ JPY
                            </div>
                            <div className="text-sm sm:text-base font-bold text-slate-900 font-mono mt-0.5">
                                NT$ 1 ≈ <span className="text-emerald-600 font-black text-base sm:text-lg">{loading ? '...' : rateData?.jpyPerTwd}</span> 日圓
                                <span className="text-xs text-slate-500 font-normal ml-2 font-mono">(¥1 ≈ ${rateData?.twdPerJpy})</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowCalculator(!showCalculator)}
                        className={`px-3.5 py-2 rounded-xl border font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 tap-effect ${
                            showCalculator 
                                ? 'bg-slate-900 text-white border-slate-900 shadow-xs' 
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                        }`}
                    >
                        <Calculator size={15} />
                        <span>{showCalculator ? '收合' : '換算器'}</span>
                    </button>
                </div>

                {/* 展開匯率換算面板 */}
                {showCalculator && (
                    <div className="mt-4 pt-4 border-t border-slate-100 animate-fadeIn space-y-3">
                        <div className="flex items-center gap-2.5">
                            <div className="relative flex-1">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-bold">NT$</span>
                                <input
                                    type="number"
                                    value={calcTwd}
                                    onChange={(e) => setCalcTwd(e.target.value)}
                                    placeholder="輸入台幣金額"
                                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-12 pr-3 text-sm font-mono font-bold text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                                />
                            </div>
                            <ArrowRightLeft size={16} className="text-slate-400 shrink-0" />
                            <div className="flex-1 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-xl py-2.5 px-3.5 flex items-center justify-between">
                                <span className="text-xs font-bold text-sky-800">折合日幣</span>
                                <span className="text-base font-black font-mono text-sky-950">¥ {calculatedJpy}</span>
                            </div>
                        </div>

                        {/* 快捷常用金額晶片 */}
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 font-mono">快捷:</span>
                            {['1000', '3000', '5000', '10000', '20000', '50000'].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setCalcTwd(val)}
                                    className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border shrink-0 transition-all tap-effect ${
                                        calcTwd === val
                                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-300'
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
