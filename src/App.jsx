import React, { useState, useEffect } from 'react';
import { 
    Calendar, 
    MapPin, 
    Info, 
    Aperture, 
    ChevronDown, 
    ChevronUp, 
    ArrowLeft, 
    Sparkles, 
    Clock, 
    Utensils, 
    Bed, 
    Car, 
    Hotel, 
    Home, 
    Plane, 
    Camera,
    TrendingUp,
    ShieldCheck,
    Luggage,
    ChevronRight,
    ChevronLeft,
    Compass,
    Share2,
    Check,
    Flame,
    Activity,
    ShoppingBag,
    Award,
    QrCode
} from 'lucide-react';

// 導入行程資料庫
import { winterItinerary, drivingHighlights } from './data/winterItinerary';

// 導入組件
import CameraGuide from './components/CameraGuide';
import DashboardStatus from './components/DashboardStatus';
import ItineraryCard from './components/ItineraryCard';
import { WinterRadarChart, DriveDistanceChart } from './components/JournalCharts';
import DrivingHighlights from './components/DrivingHighlights';
import PackingList from './components/PackingList';

function App() {
    const [view, setView] = useState('dashboard'); // 'dashboard' | 'itinerary' | 'driving' | 'packing'
    const [selectedDay, setSelectedDay] = useState(1);
    const [showOPPOGuide, setShowOPPOGuide] = useState(false);
    const [showCharts, setShowCharts] = useState(false);
    const [copied, setCopied] = useState(false);

    // 當前選中的天數行程資料
    const currentDayData = winterItinerary.find(d => d.day === selectedDay) || winterItinerary[0];

    // 跳轉到特定天數
    const goToDay = (dayNum) => {
        setSelectedDay(dayNum);
        setView('itinerary');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 上一天 / 下一天導航
    const prevDay = () => {
        if (selectedDay > 1) {
            setSelectedDay(selectedDay - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const nextDay = () => {
        if (selectedDay < winterItinerary.length) {
            setSelectedDay(selectedDay + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: '九州 10天9夜全自駕行程表',
                text: '🚗 10天9夜「雙 Outlet、潮流與運動」全自駕行程表',
                url: window.location.href,
            }).catch(() => {});
        } else {
            navigator.clipboard?.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex justify-center selection:bg-sky-500/30 selection:text-sky-200 p-0 sm:p-4 md:p-6 lg:p-8">
            
            {/* Main Luxury Frame Container */}
            <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl bg-slate-50 min-h-screen sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.6)] overflow-hidden border border-slate-200/80 relative pb-28 flex flex-col justify-between">
                
                {/* Main Content Area */}
                <div className="flex-1">

                    {/* ============================================================== */}
                    {/* 1. 主控制面板 VIEW: DASHBOARD */}
                    {/* ============================================================== */}
                    {view === 'dashboard' && (
                        <div className="animate-fadeIn">
                            
                            {/* Hero Header (Monocle / Japanese Editorial Aesthetic) */}
                            <header className="pt-8 pb-6 px-6 bg-gradient-to-b from-sky-100/90 via-sky-50/50 to-slate-50 border-b border-sky-200/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                                        <span className="text-[10px] font-black tracking-[0.25em] text-sky-700 uppercase font-mono">
                                            KYUSHU EXPEDITION '26
                                        </span>
                                    </div>
                                    <button
                                        onClick={handleShare}
                                        className="text-slate-500 hover:text-sky-700 p-2 bg-white/80 hover:bg-white rounded-full border border-slate-200/80 shadow-2xs transition-all tap-effect"
                                        title="分享行程"
                                    >
                                        {copied ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
                                    </button>
                                </div>

                                <h1 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight leading-tight">
                                    九州全境自駕 <span className="text-sky-600 font-light text-xl sm:text-2xl font-sans">10 Days</span>
                                </h1>
                                
                                <p className="text-xs text-slate-600 mt-2 tracking-wide pl-2.5 border-l-2 border-sky-500 font-medium leading-relaxed">
                                    雙 Outlet 購物 ✕ 潮流運動 ✕ 溫泉度假 ✕ 親子放電
                                </p>

                                {/* 專業特色標籤列 */}
                                <div className="flex flex-wrap gap-1.5 mt-3.5 pt-1">
                                    <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 shadow-2xs">
                                        🚗 全程自駕 ＋ KEP Pass
                                    </span>
                                    <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 shadow-2xs">
                                        🏃 大濠公園 Zone 2 跑道
                                    </span>
                                    <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 shadow-2xs">
                                        🛍️ 鳥栖 ＆ 北九州雙 Outlet
                                    </span>
                                    <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 border border-amber-200 text-amber-800 shadow-2xs">
                                        ♨️ 由布院私人露天風呂
                                    </span>
                                </div>
                            </header>

                            {/* 即時氣象與匯率換算 (Swiss Precision Weather & FX) */}
                            <div className="px-5 mt-4 mb-5">
                                <DashboardStatus mode="dashboard" />
                            </div>

                            {/* 航空機票與自駕取車 Boarding Pass Card */}
                            <section className="mx-5 mb-5 ticket-card p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <Plane className="w-4 h-4 text-emerald-600" />
                                        <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase font-mono">
                                            FLIGHT & CAR LOGISTICS
                                        </span>
                                    </div>
                                    <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                                        EVA AIR 長榮 BR105
                                    </span>
                                </div>

                                <div className="space-y-2.5 text-xs text-slate-700">
                                    {/* 去程 */}
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-mono">
                                                    12/19 (五)
                                                </span>
                                                <span className="font-bold text-slate-800">11:15 抵達福岡機場</span>
                                            </div>
                                            <span className="text-[10px] text-slate-400 mt-0.5 block pl-1">國際線航廈取車 ＋ 裝安全座椅</span>
                                        </div>
                                        <span className="text-[10px] font-black text-sky-700 bg-sky-50 px-2 py-1 rounded-lg border border-sky-100">
                                            務必加購 KEP
                                        </span>
                                    </div>

                                    {/* Perforated Divider */}
                                    <div className="ticket-divider">
                                        <div className="ticket-notch-left"></div>
                                        <div className="ticket-notch-right"></div>
                                    </div>

                                    {/* 回程 */}
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-mono">
                                                    12/28 (一)
                                                </span>
                                                <span className="font-bold text-slate-800">12:15 BR105 福岡 ➔ 桃園</span>
                                            </div>
                                            <span className="text-[10px] text-slate-400 mt-0.5 block pl-1">09:00 機場租車門市還車加滿油</span>
                                        </div>
                                        <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
                                            接駁車直達 T1
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* OPPO Find 9 Ultra 哈蘇旗艦大師指南 (折疊卡片) */}
                            <div className="mx-5 mb-5 shadow-xs">
                                <button
                                    onClick={() => setShowOPPOGuide(!showOPPOGuide)}
                                    className="w-full flex items-center justify-between p-3.5 bg-slate-900 text-white rounded-2xl hover:bg-slate-850 transition-all tap-effect"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#f97316]"></span>
                                        <Aperture size={16} className="text-orange-400 animate-spin-slow" />
                                        <span className="text-xs font-bold tracking-wider uppercase font-mono">
                                            OPPO Find 9 Ultra 哈蘇大師指南
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <span className="text-[10px]">{showOPPOGuide ? '收合' : 'P1~P4 參數'}</span>
                                        {showOPPOGuide ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                    </div>
                                </button>
                                {showOPPOGuide && <CameraGuide />}
                            </div>

                            {/* 10 天行程一覽卡片清單 (10-Day Timeline Cards) */}
                            <section className="px-5 space-y-3 mb-6">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 font-mono">
                                        DAILY ITINERARY SELECTOR (10 DAYS)
                                    </h3>
                                    <span className="text-[10px] text-sky-700 font-bold">點擊進入每日時間軸 ➔</span>
                                </div>

                                <div className="space-y-2.5">
                                    {winterItinerary.map((day) => (
                                        <div
                                            key={day.day}
                                            onClick={() => goToDay(day.day)}
                                            className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 cursor-pointer hover:border-sky-400 hover:shadow-md transition-all group relative overflow-hidden tap-effect"
                                        >
                                            <div className="flex items-center justify-between mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-black bg-slate-900 text-sky-300 px-2 py-0.5 rounded-lg font-mono">
                                                        DAY {day.day}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-slate-500">
                                                        {day.date}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] text-sky-700 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                                                    詳情 <ChevronRight size={12} />
                                                </span>
                                            </div>

                                            <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                                                {day.title}
                                            </h4>

                                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 font-light">
                                                {day.summary}
                                            </p>

                                            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                                                <span className="flex items-center gap-1 font-medium text-slate-600">
                                                    <MapPin size={11} className="text-sky-500" /> {day.region}
                                                </span>
                                                <span className="font-mono text-slate-500 bg-slate-50 px-1.5 py-0.2 rounded border border-slate-100">
                                                    🚗 {day.driveTime}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 自駕與行程亮點專區 */}
                            <div className="px-5 mb-6">
                                <DrivingHighlights />
                            </div>

                            {/* 行程評衡雷達與自駕數據分析 (可摺疊) */}
                            <div className="mx-5 mb-6">
                                <button
                                    onClick={() => setShowCharts(!showCharts)}
                                    className="w-full flex items-center justify-between p-3.5 bg-white/95 hover:bg-slate-50 text-slate-700 rounded-2xl border border-slate-200/90 transition-colors shadow-xs tap-effect"
                                >
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={16} className="text-sky-600" />
                                        <span className="text-xs font-bold tracking-wider uppercase text-slate-800">
                                            行程雷達平衡 ＆ 每日自駕里程分析
                                        </span>
                                    </div>
                                    {showCharts ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                </button>
                                
                                {showCharts && (
                                    <div className="bg-white border-x border-b border-slate-200/90 rounded-b-2xl p-4 space-y-6 animate-fadeIn shadow-xs">
                                        <div className="flex flex-col items-center">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-center font-mono">
                                                TRIP BALANCE RADAR (10 DAYS)
                                            </p>
                                            <div className="w-48 h-48 relative">
                                                <WinterRadarChart />
                                            </div>
                                            <div className="grid grid-cols-5 gap-1.5 mt-3 w-full bg-slate-50 rounded-xl p-2.5 border border-slate-100 text-center">
                                                {[
                                                    { label: '雙Outlet', val: '96%' },
                                                    { label: '晨跑運動', val: '92%' },
                                                    { label: '親子放電', val: '95%' },
                                                    { label: '溫泉美食', val: '98%' },
                                                    { label: '自駕效率', val: '94%' },
                                                ].map((item, idx) => (
                                                    <div key={idx}>
                                                        <p className="text-[11px] font-black text-slate-900 leading-none">{item.val}</p>
                                                        <p className="text-[8px] text-slate-400 mt-1 font-bold">{item.label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="h-[1px] bg-slate-100 w-full" />

                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-center font-mono">
                                                DAILY ESTIMATED DRIVING DISTANCE (KM)
                                            </p>
                                            <DriveDistanceChart />
                                            <p className="text-[9px] text-slate-400 text-center mt-2 font-medium">
                                                全程約 650 公里 ｜ 建議加購 KEP 方案省 40% 通行費
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* 行前準備與行李清單 */}
                            <div className="px-5 mb-6">
                                <PackingList />
                            </div>

                            {/* Footer */}
                            <footer className="mt-8 text-center text-[10px] text-slate-400 font-medium pb-4 space-y-1">
                                <p className="font-serif">Winter Expedition 2026 | 九州全自駕 10天9夜</p>
                                <p className="opacity-80">主力影像裝備：OPPO Find 9 Ultra | 哈蘇大師色彩</p>
                            </footer>
                        </div>
                    )}

                    {/* ============================================================== */}
                    {/* 2. 每日行程詳情 VIEW: ITINERARY (Day 1 - Day 10) */}
                    {/* ============================================================== */}
                    {view === 'itinerary' && (
                        <div className="animate-fadeIn">
                            
                            {/* Sticky Header Nav */}
                            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-3 flex justify-between items-center border-b border-slate-200/90 shadow-2xs">
                                <button 
                                    onClick={() => setView('dashboard')}
                                    className="flex items-center gap-1 text-slate-700 hover:text-sky-700 font-bold text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition-all tap-effect"
                                >
                                    <ArrowLeft size={15} />
                                    <span>總覽首頁</span>
                                </button>

                                <div className="text-center">
                                    <span className="text-[10px] font-black tracking-[0.2em] font-mono text-slate-900 uppercase block">
                                        DAY {selectedDay} / 10
                                    </span>
                                </div>

                                <button
                                    onClick={handleShare}
                                    className="p-2 text-slate-500 hover:text-sky-700 bg-slate-50 hover:bg-white rounded-xl border border-slate-200/80 transition-all tap-effect"
                                    title="分享當天行程"
                                >
                                    {copied ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
                                </button>
                            </nav>

                            {/* 即時天氣與匯率 */}
                            <div className="px-5 mt-4">
                                <DashboardStatus mode="itinerary" />
                            </div>

                            {/* 10 天快速橫向滑動選單 (Horizontal Day Pills) */}
                            <div className="sticky top-[51px] z-40 bg-white/95 backdrop-blur-md border-y border-slate-200/90 py-2 px-4 overflow-x-auto no-scrollbar scroll-smooth my-4 shadow-2xs">
                                <div className="flex gap-2">
                                    {winterItinerary.map((d) => (
                                        <button
                                            key={d.day}
                                            onClick={() => setSelectedDay(d.day)}
                                            className={`
                                                flex flex-col items-center justify-center min-w-[52px] py-1.5 px-2 rounded-2xl transition-all duration-200 shrink-0 select-none tap-effect
                                                ${selectedDay === d.day 
                                                    ? 'bg-slate-900 text-white font-bold shadow-md ring-2 ring-sky-400 scale-102' 
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'}
                                            `}
                                        >
                                            <span className={`text-[7px] font-black uppercase tracking-widest ${selectedDay === d.day ? 'text-sky-400 font-mono' : 'text-slate-400'}`}>
                                                DAY
                                            </span>
                                            <span className="text-base font-serif leading-none mt-0.5">{d.day}</span>
                                            <span className="text-[8px] font-mono opacity-70 mt-0.5">{d.date.split(' ')[0]}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 當日 Header 總結卡片 */}
                            <div className="px-5 mb-5">
                                <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-mono font-bold bg-sky-50 text-sky-800 px-2.5 py-0.5 rounded-lg border border-sky-200/70">
                                            {currentDayData.date}
                                        </span>
                                        <span className="text-[10px] font-medium text-slate-500 flex items-center gap-1">
                                            <MapPin size={12} className="text-sky-600" /> {currentDayData.region}
                                        </span>
                                    </div>

                                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                                        {currentDayData.title}
                                    </h2>

                                    <p className="text-xs text-slate-600 leading-relaxed mt-2 pl-3 border-l-2 border-sky-500 font-light">
                                        {currentDayData.summary}
                                    </p>

                                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                                        <span className="font-medium flex items-center gap-1.5">
                                            <Bed size={14} className="text-indigo-600" /> {currentDayData.stay}
                                        </span>
                                        <span className="font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                                            🚗 {currentDayData.driveTime}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* OPPO Find 9 Ultra 哈蘇大師指南 (可摺疊) */}
                            <div className="mx-5 mb-5 shadow-xs">
                                <button
                                    onClick={() => setShowOPPOGuide(!showOPPOGuide)}
                                    className="w-full flex items-center justify-between p-3 bg-slate-900 text-white rounded-2xl hover:bg-slate-850 transition-all tap-effect"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                        <Aperture size={15} className="text-orange-400 animate-spin-slow" />
                                        <span className="text-[10px] font-bold tracking-widest uppercase font-mono">
                                            OPPO Find 9 Ultra 攝影指南
                                        </span>
                                    </div>
                                    {showOPPOGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </button>
                                {showOPPOGuide && <CameraGuide />}
                            </div>

                            {/* 時間軸活動清單 (Timeline Activity Cards) */}
                            <main className="px-5 space-y-4">
                                {currentDayData.activities.map((activity, index) => (
                                    <ItineraryCard
                                        key={index}
                                        activity={activity}
                                        isLast={index === currentDayData.activities.length - 1}
                                    />
                                ))}

                                {/* 當日備忘與用車貼士 */}
                                {currentDayData.notes && currentDayData.notes.length > 0 && (
                                    <div className="mt-8 border-t border-slate-200/90 pt-5">
                                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-mono">
                                            <Info size={13} className="text-sky-600" /> NOTES & DRIVING TIPS
                                        </h4>
                                        <div className="space-y-2">
                                            {currentDayData.notes.map((note, idx) => (
                                                <div key={idx} className="flex gap-2.5 p-3.5 bg-sky-50/70 rounded-2xl border border-sky-100">
                                                    <div className="text-sky-600 shrink-0 mt-0.5">
                                                        <Info size={15} />
                                                    </div>
                                                    <p className="text-xs text-slate-800 leading-relaxed font-normal">{note.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 前一天 / 後一天快速導航 Bar */}
                                <div className="flex justify-between items-center pt-6 border-t border-slate-200/90 mt-8">
                                    <button
                                        onClick={prevDay}
                                        disabled={selectedDay === 1}
                                        className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all tap-effect ${
                                            selectedDay === 1 
                                                ? 'text-slate-300 bg-slate-100/50 cursor-not-allowed' 
                                                : 'text-slate-700 bg-white border border-slate-200 shadow-2xs hover:bg-slate-50'
                                        }`}
                                    >
                                        <ChevronLeft size={16} />
                                        <span>前一日 (Day {selectedDay - 1})</span>
                                    </button>

                                    <button
                                        onClick={nextDay}
                                        disabled={selectedDay === winterItinerary.length}
                                        className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all tap-effect ${
                                            selectedDay === winterItinerary.length 
                                                ? 'text-slate-300 bg-slate-100/50 cursor-not-allowed' 
                                                : 'text-white bg-sky-600 shadow-md hover:bg-sky-700'
                                        }`}
                                    >
                                        <span>下一日 (Day {selectedDay + 1})</span>
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </main>
                        </div>
                    )}

                    {/* ============================================================== */}
                    {/* 3. 自駕與雙 Outlet 專題 VIEW: DRIVING */}
                    {/* ============================================================== */}
                    {view === 'driving' && (
                        <div className="animate-fadeIn p-5">
                            <nav className="flex justify-between items-center mb-4">
                                <button 
                                    onClick={() => setView('dashboard')}
                                    className="flex items-center gap-1 text-slate-700 hover:text-sky-700 font-bold text-xs bg-slate-100 px-3 py-1.5 rounded-xl tap-effect"
                                >
                                    <ArrowLeft size={15} />
                                    <span>總覽首頁</span>
                                </button>
                                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
                                    DRIVING & OUTLETS SPECIAL
                                </h2>
                            </nav>

                            <div className="space-y-5">
                                <DrivingHighlights />

                                {/* 雙 Outlet 深度比較矩陣卡片 */}
                                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                                    <h3 className="text-xs font-bold text-slate-900 mb-3.5 flex items-center gap-2">
                                        <ShoppingBag size={15} className="text-sky-600" />
                                        <span>鳥栖 vs 北九州 雙 Outlet 策略矩陣</span>
                                    </h3>

                                    <div className="space-y-3.5 text-xs">
                                        {/* 鳥栖 */}
                                        <div className="bg-gradient-to-br from-amber-50/70 to-slate-50 rounded-2xl p-4 border border-amber-200/70">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">鳥栖 Premium Outlets (佐賀)</h4>
                                                    <span className="text-[10px] text-slate-500">美式露天購物村 ｜ Day 3 拜訪</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                                                    運動戶外強項
                                                </span>
                                            </div>
                                            <div className="text-slate-700 space-y-1 text-[11px] leading-relaxed">
                                                <p>• <strong>強勢品牌</strong>：Nike、Adidas、Under Armour、New Balance、The North Face、Columbia、Asics。</p>
                                                <p>• <strong>採購策略</strong>：主攻跑鞋、跑步壓力緊身褲、保暖風衣與滑雪裝備，折扣極深。</p>
                                                <p>• <strong>自駕後勤</strong>：買完大包戰利品直接丟入後車廂，輕便回天神飯店。</p>
                                            </div>
                                        </div>

                                        {/* 北九州 */}
                                        <div className="bg-gradient-to-br from-sky-50/70 to-indigo-50/40 rounded-2xl p-4 border border-sky-200/70">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">THE OUTLETS KITAKYUSHU (北九州)</h4>
                                                    <span className="text-[10px] text-slate-500">2022 新世代巨型商場 ｜ Day 7 拜訪</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-200">
                                                    潮流 ＋ 親子遊樂
                                                </span>
                                            </div>
                                            <div className="text-slate-700 space-y-1 text-[11px] leading-relaxed">
                                                <p>• <strong>強勢亮點</strong>：日本在地潮流設計服飾、日用生活選品、相連 AEON MALL 大型商場。</p>
                                                <p>• <strong>親子無敵</strong>：附設超大型「ASOBI PARK」室內親子互動遊樂園，老婆安心逛街，小孩瘋玩不無聊。</p>
                                                <p>• <strong>美食亮點</strong>：直接於館內享用頂級炭火和牛燒肉晚餐，隨後順暢自駕回天神。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ============================================================== */}
                    {/* 4. 行李清單 VIEW: PACKING */}
                    {/* ============================================================== */}
                    {view === 'packing' && (
                        <div className="animate-fadeIn p-5">
                            <nav className="flex justify-between items-center mb-4">
                                <button 
                                    onClick={() => setView('dashboard')}
                                    className="flex items-center gap-1 text-slate-700 hover:text-sky-700 font-bold text-xs bg-slate-100 px-3 py-1.5 rounded-xl tap-effect"
                                >
                                    <ArrowLeft size={15} />
                                    <span>總覽首頁</span>
                                </button>
                                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
                                    EQUIPMENT & PACKING CHECKLIST
                                </h2>
                            </nav>
                            <PackingList />
                        </div>
                    )}

                </div>

                {/* ============================================================== */}
                {/* 底部浮動導覽欄 (Ultra Luxury Floating Glass Bar) */}
                {/* ============================================================== */}
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm sm:max-w-md h-16 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] z-[100] flex justify-around items-center px-3">
                    
                    <button 
                        onClick={() => {
                            setView('dashboard');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`flex flex-col items-center gap-1 transition-all tap-effect ${
                            view === 'dashboard' 
                                ? 'text-sky-700 font-black scale-105' 
                                : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <Home size={20} strokeWidth={view === 'dashboard' ? 2.5 : 1.8} />
                        <span className="text-[9px] tracking-tight">總覽</span>
                    </button>

                    <button 
                        onClick={() => {
                            setView('itinerary');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`flex flex-col items-center gap-1 transition-all tap-effect ${
                            view === 'itinerary' 
                                ? 'text-sky-700 font-black scale-105' 
                                : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <Calendar size={20} strokeWidth={view === 'itinerary' ? 2.5 : 1.8} />
                        <span className="text-[9px] tracking-tight">10天行程</span>
                    </button>

                    <button 
                        onClick={() => {
                            setView('driving');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`flex flex-col items-center gap-1 transition-all tap-effect ${
                            view === 'driving' 
                                ? 'text-sky-700 font-black scale-105' 
                                : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <Car size={20} strokeWidth={view === 'driving' ? 2.5 : 1.8} />
                        <span className="text-[9px] tracking-tight">自駕亮點</span>
                    </button>

                    <button 
                        onClick={() => {
                            setView('packing');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`flex flex-col items-center gap-1 transition-all tap-effect ${
                            view === 'packing' 
                                ? 'text-sky-700 font-black scale-105' 
                                : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        <Luggage size={20} strokeWidth={view === 'packing' ? 2.5 : 1.8} />
                        <span className="text-[9px] tracking-tight">裝備清單</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default App;
