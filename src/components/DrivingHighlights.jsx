import React from 'react';
import { drivingHighlights } from '../data/winterItinerary';
import { Sparkles, Car, CheckCircle2, ChevronRight, Navigation, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

export default function DrivingHighlights() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700">
                        <Car className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        自駕與行程精準亮點 (Driving Insights)
                    </h3>
                </div>
                <span className="text-[10px] text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                    4 大精闢心法
                </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {drivingHighlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div 
                            key={idx}
                            className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-sky-300 hover:shadow-md transition-all group"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                                    <Icon size={17} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <h4 className="text-xs font-bold text-slate-900 leading-snug">
                                            {item.title}
                                        </h4>
                                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 shrink-0 font-mono">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <div className="text-[11px] font-semibold text-sky-700 mt-1 flex items-center gap-1">
                                        <Sparkles size={11} />
                                        <span>{item.summary}</span>
                                    </div>
                                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1.5 font-normal bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
