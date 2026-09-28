import React from 'react';
import { drivingHighlights } from '../data/winterItinerary';
import { Sparkles, Car, CheckCircle2, ChevronRight, Navigation, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';

export default function DrivingHighlights() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                        <Car className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider font-mono">
                        自駕與行程精準亮點 (Driving Insights)
                    </h3>
                </div>
                <span className="text-xs text-sky-800 font-bold bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    4 大精闢心法
                </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
                {drivingHighlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div 
                            key={idx}
                            className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:border-sky-300 hover:shadow-md transition-all group"
                        >
                            <div className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                                    <Icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h4 className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                                            {item.title}
                                        </h4>
                                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-mono">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-sky-800 mt-1.5 flex items-center gap-1.5">
                                        <Sparkles size={13} className="text-sky-600 shrink-0" />
                                        <span>{item.summary}</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2 font-normal bg-slate-50/90 rounded-2xl p-3.5 border border-slate-200/70">
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
