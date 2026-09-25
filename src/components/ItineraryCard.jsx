import React, { useState } from 'react';
import { MapPin, Camera, ChevronDown, ChevronUp, Sparkles, ExternalLink } from 'lucide-react';

const ItineraryCard = ({ activity, isLast }) => {
    const { time, title, desc, icon: Icon, type, highlight, camera, map } = activity;
    const [showCameraDetail, setShowCameraDetail] = useState(false);

    // Style mappings for different activity types in winter palette
    const typeConfig = {
        transit: {
            border: 'border-slate-200/90',
            tagBg: 'bg-slate-100 text-slate-700 border border-slate-200/80',
            iconBg: 'bg-slate-100 text-slate-700 border-slate-200',
            label: '交通移動'
        },
        stay: {
            border: 'border-indigo-100',
            tagBg: 'bg-indigo-50 text-indigo-700 border border-indigo-200/60',
            iconBg: 'bg-indigo-100/80 text-indigo-700 border-indigo-200',
            label: '溫泉宿泊'
        },
        dining: {
            border: 'border-amber-100',
            tagBg: 'bg-amber-50 text-amber-800 border border-amber-200/60',
            iconBg: 'bg-amber-100/80 text-amber-800 border-amber-200',
            label: '極致美食'
        },
        shopping: {
            border: 'border-rose-100',
            tagBg: 'bg-rose-50 text-rose-700 border border-rose-200/60',
            iconBg: 'bg-rose-100/80 text-rose-600 border-rose-200',
            label: '商場採買'
        },
        activity: {
            border: 'border-sky-100',
            tagBg: 'bg-sky-50 text-sky-700 border border-sky-200/60',
            iconBg: 'bg-sky-100/80 text-sky-700 border-sky-200',
            label: '景點體驗'
        },
        sport: {
            border: 'border-emerald-100',
            tagBg: 'bg-emerald-50 text-emerald-800 border border-emerald-200/60',
            iconBg: 'bg-emerald-100/80 text-emerald-700 border-emerald-200',
            label: 'Zone 2 跑步'
        },
        nature: {
            border: 'border-teal-100',
            tagBg: 'bg-teal-50 text-teal-800 border border-teal-200/60',
            iconBg: 'bg-teal-100/80 text-teal-700 border-teal-200',
            label: '自然絕景'
        }
    };

    const currentStyle = typeConfig[type] || typeConfig.activity;

    return (
        <div className={`relative flex gap-3 sm:gap-4 ${isLast ? '' : 'pb-6'}`}>

            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[17px] top-9 bottom-0 w-[2px] bg-gradient-to-b from-sky-300 via-slate-200 to-slate-200/60" />
            )}

            {/* Time & Icon Column */}
            <div className="flex flex-col items-center shrink-0 w-9 gap-1.5 pt-0.5 z-10">
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shadow-xs border transition-all ${
                    highlight 
                        ? 'bg-slate-900 text-sky-300 border-slate-900 ring-4 ring-sky-100 shadow-sm scale-105' 
                        : `${currentStyle.iconBg} bg-white`
                }`}>
                    {Icon ? <Icon size={16} strokeWidth={highlight ? 2.2 : 1.8} /> : <Sparkles size={16} />}
                </div>
                <span className="text-[9px] font-bold text-slate-400 font-mono tracking-tighter text-center leading-tight">
                    {time.split('–')[0]}
                </span>
            </div>

            {/* Main Card Content */}
            <div className={`flex-1 transition-all duration-200 ${highlight ? 'transform -translate-y-0.5' : ''}`}>
                <div className={`
                    p-4 rounded-2xl border transition-all duration-200 relative
                    ${highlight
                        ? 'bg-white border-sky-200/90 shadow-[0_8px_25px_-5px_rgba(2,132,199,0.08)] ring-1 ring-sky-100'
                        : 'bg-white/95 border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-sm'
                    }
                `}>
                    {/* Header with Type Badge and Time */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-lg ${currentStyle.tagBg}`}>
                                {currentStyle.label}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 font-semibold bg-slate-100/80 px-1.5 py-0.5 rounded">
                                {time}
                            </span>
                        </div>
                        {highlight && (
                            <span className="text-[9px] font-black px-2 py-0.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-md border border-amber-200/80 flex items-center gap-1 shadow-2xs">
                                <Sparkles size={11} className="text-amber-500 animate-pulse" /> 核心亮點
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className={`text-sm font-bold mb-1.5 leading-snug tracking-tight ${
                        highlight ? 'text-slate-900 font-black' : 'text-slate-850'
                    }`}>
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                        {desc}
                    </p>

                    {/* Camera Config Badge / Collapsible */}
                    {camera && (
                        <div className="mt-2.5 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-xl p-3 shadow-xs transition-all border border-slate-800">
                            <div 
                                onClick={() => setShowCameraDetail(!showCameraDetail)}
                                className="flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-2 text-[11px] font-bold">
                                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                    <Camera size={13} className="text-orange-400" />
                                    <span className="text-slate-200">OPPO 哈蘇配置 ｜ <span className="text-orange-400">{camera.mode}</span></span>
                                </div>
                                <button className="text-slate-400 hover:text-white transition-colors">
                                    {showCameraDetail ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </button>
                            </div>
                            
                            {/* Always visible brief description */}
                            <div className="text-[10px] text-slate-400 mt-1 pl-3.5 border-l border-orange-500/50">
                                <span className="font-medium text-slate-300">{camera.desc}</span>
                            </div>

                            {/* Collapsible settings details */}
                            {showCameraDetail && (
                                <div className="mt-2.5 pt-2.5 border-t border-slate-800 pl-3.5 border-l border-orange-500 animate-fadeIn">
                                    <div className="text-[10px] font-mono text-orange-300 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                                        ⚙️ {camera.settings}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Map Pin Navigation Button */}
                    {map && (
                        <div className="mt-3.5 pt-2 border-t border-slate-100 flex justify-end">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 hover:text-white bg-sky-50 hover:bg-sky-600 px-3 py-1.5 rounded-xl border border-sky-200/80 transition-all shadow-2xs tap-effect"
                                title="在 Google 地圖中開啟精準導航"
                            >
                                <MapPin size={12} className="text-sky-600 group-hover:text-white" />
                                <span>Google Maps 導航</span>
                                <ExternalLink size={10} className="opacity-60 ml-0.5" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;
