import React, { useState } from 'react';
import { MapPin, Camera, ChevronDown, ChevronUp, Sparkles, ExternalLink, Navigation, Sliders } from 'lucide-react';

const ItineraryCard = ({ activity, isLast }) => {
    const { time, title, desc, icon: Icon, type, highlight, camera, map } = activity;
    const [showCameraDetail, setShowCameraDetail] = useState(false);

    // Style mappings for different activity types in winter palette
    const typeConfig = {
        transit: {
            border: 'border-slate-200',
            tagBg: 'bg-slate-100 text-slate-800 border border-slate-200/80',
            iconBg: 'bg-slate-100 text-slate-700 border-slate-200',
            label: '交通移動'
        },
        stay: {
            border: 'border-indigo-100',
            tagBg: 'bg-indigo-50 text-indigo-800 border border-indigo-200',
            iconBg: 'bg-indigo-100 text-indigo-700 border-indigo-200',
            label: '溫泉宿泊'
        },
        dining: {
            border: 'border-amber-100',
            tagBg: 'bg-amber-50 text-amber-900 border border-amber-200',
            iconBg: 'bg-amber-100 text-amber-800 border-amber-200',
            label: '極致美食'
        },
        shopping: {
            border: 'border-rose-100',
            tagBg: 'bg-rose-50 text-rose-800 border border-rose-200',
            iconBg: 'bg-rose-100 text-rose-700 border-rose-200',
            label: '商場採買'
        },
        activity: {
            border: 'border-sky-100',
            tagBg: 'bg-sky-50 text-sky-800 border border-sky-200',
            iconBg: 'bg-sky-100 text-sky-700 border-sky-200',
            label: '景點體驗'
        },
        sport: {
            border: 'border-emerald-100',
            tagBg: 'bg-emerald-50 text-emerald-900 border border-emerald-200',
            iconBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
            label: 'Zone 2 跑步'
        },
        nature: {
            border: 'border-teal-100',
            tagBg: 'bg-teal-50 text-teal-900 border border-teal-200',
            iconBg: 'bg-teal-100 text-teal-800 border-teal-200',
            label: '自然絕景'
        }
    };

    const currentStyle = typeConfig[type] || typeConfig.activity;

    return (
        <div className={`relative flex gap-3.5 sm:gap-4 ${isLast ? '' : 'pb-7'}`}>

            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-sky-300 via-slate-200 to-slate-200/60" />
            )}

            {/* Time & Icon Column */}
            <div className="flex flex-col items-center shrink-0 w-10 gap-1.5 pt-0.5 z-10">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs border transition-all ${
                    highlight 
                        ? 'bg-slate-900 text-sky-300 border-slate-900 ring-4 ring-sky-100 shadow-md scale-105' 
                        : `${currentStyle.iconBg} bg-white`
                }`}>
                    {Icon ? <Icon size={18} strokeWidth={highlight ? 2.2 : 1.8} /> : <Sparkles size={18} />}
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono tracking-tight text-center leading-tight">
                    {time.split('–')[0]}
                </span>
            </div>

            {/* Main Card Content */}
            <div className={`flex-1 transition-all duration-200 ${highlight ? 'transform -translate-y-0.5' : ''}`}>
                <div className={`
                    p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative
                    ${highlight
                        ? 'bg-white border-sky-300 shadow-[0_8px_30px_-6px_rgba(2,132,199,0.12)] ring-1 ring-sky-100'
                        : 'bg-white border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-sm'
                    }
                `}>
                    {/* Header with Type Badge, Time Range & Highlight */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-lg ${currentStyle.tagBg}`}>
                                {currentStyle.label}
                            </span>
                            <span className="text-xs font-mono text-slate-600 font-bold bg-slate-100 px-2 py-0.5 rounded-md">
                                {time}
                            </span>
                        </div>
                        {highlight && (
                            <span className="text-xs font-black px-2.5 py-0.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 rounded-md border border-amber-200/80 flex items-center gap-1 shadow-2xs">
                                <Sparkles size={12} className="text-amber-500 animate-pulse" /> 核心亮點
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className={`text-base sm:text-lg font-bold mb-2 leading-snug tracking-tight ${
                        highlight ? 'text-slate-950 font-black' : 'text-slate-900'
                    }`}>
                        {title}
                    </h3>

                    {/* Description - Larger, Comfortable Mobile Reading Font */}
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal mb-3.5">
                        {desc}
                    </p>

                    {/* Camera Config Badge / Collapsible */}
                    {camera && (
                        <div className="mt-3 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-2xl p-3.5 shadow-xs transition-all border border-slate-800">
                            <div 
                                onClick={() => setShowCameraDetail(!showCameraDetail)}
                                className="flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#f97316]"></span>
                                    <Camera size={15} className="text-orange-400" />
                                    <span className="text-slate-200">OPPO 哈蘇配置 ｜ <span className="text-orange-400 font-bold">{camera.mode}</span></span>
                                </div>
                                <button className="text-slate-400 hover:text-white transition-colors p-1">
                                    {showCameraDetail ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                            </div>
                            
                            {/* Always visible brief description */}
                            <div className="text-xs sm:text-sm text-slate-300 mt-1.5 pl-3.5 border-l-2 border-orange-500 font-medium">
                                <span>{camera.desc}</span>
                            </div>

                            {/* Collapsible settings details */}
                            {showCameraDetail && (
                                <div className="mt-3 pt-3 border-t border-slate-800 pl-3.5 border-l-2 border-orange-400 animate-fadeIn">
                                    <div className="text-xs font-mono text-orange-200 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 leading-relaxed flex items-center gap-1.5">
                                        <Sliders size={13} className="text-orange-400 shrink-0" />
                                        <span>{camera.settings}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Map Pin Navigation Button */}
                    {map && (
                        <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex justify-end">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-800 hover:text-white bg-sky-50 hover:bg-sky-600 px-3.5 py-2 rounded-xl border border-sky-200 transition-all shadow-2xs tap-effect"
                                title="在 Google 地圖中開啟精準導航"
                            >
                                <Navigation size={13} className="text-sky-600 group-hover:text-white" />
                                <span>Google Maps 導航</span>
                                <ExternalLink size={12} className="opacity-60 ml-0.5" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;
