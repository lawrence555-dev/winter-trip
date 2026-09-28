import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink, 
  Info, 
  Car, 
  Hotel, 
  Compass, 
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { winterItineraryEn } from '../data/winterItineraryEn';

export default function ItineraryCard() {
  const [selectedDay, setSelectedDay] = useState(1);

  const currentDayData = winterItineraryEn.find((d) => d.day === selectedDay) || winterItineraryEn[0];

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'transit':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'activity':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'shopping':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'dining':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'stay':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'nature':
        return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getGoogleMapsUrl = (query) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  return (
    <div className="space-y-6">
      {/* Day Selector Pill Navigation */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2.5 sm:p-3 shadow-lg">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-thin">
          {winterItineraryEn.map((item) => (
            <button
              key={item.day}
              onClick={() => setSelectedDay(item.day)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-0.5 ${
                selectedDay === item.day
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider font-mono">Day {item.day}</span>
              <span className="text-[10px] opacity-80">{item.date.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Day Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                DAY {currentDayData.day} • {currentDayData.date}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentDayData.region}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentDayData.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-3xl">
              {currentDayData.summary}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 bg-slate-950/60 p-3 sm:p-4 rounded-xl border border-slate-800 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span>Drive Time:</span>
            </div>
            <div className="text-xs sm:text-sm font-bold font-mono text-white">
              {currentDayData.driveTime}
            </div>
          </div>
        </div>

        {/* Overnight Accommodation Notice */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
          <Hotel className="w-4 h-4 flex-shrink-0" />
          <span className="font-semibold text-slate-300">Overnight Accommodation:</span>
          <span className="font-medium text-emerald-400 truncate">{currentDayData.stay}</span>
        </div>
      </div>

      {/* Activities Timeline */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 px-1">
          <Clock className="w-4 h-4 text-amber-400" /> Day {currentDayData.day} Schedule & Milestones
        </h3>

        <div className="space-y-3.5">
          {currentDayData.activities.map((act, idx) => {
            const IconComponent = act.icon || Compass;
            return (
              <div
                key={idx}
                className={`bg-slate-900 border rounded-2xl p-4 sm:p-5 transition hover:border-slate-700 shadow-lg ${
                  act.highlight
                    ? 'border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/10'
                    : 'border-slate-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex-shrink-0 flex items-center justify-center text-amber-400 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 text-amber-400 border border-slate-700">
                          {act.time}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border ${getBadgeStyle(
                            act.type
                          )}`}
                        >
                          {act.type}
                        </span>
                        {act.highlight && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Key Highlight
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-white">{act.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Button */}
                  {act.map && (
                    <a
                      href={getGoogleMapsUrl(act.map)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 transition self-start sm:self-auto flex-shrink-0 w-full sm:w-auto"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Practical Notes & Driving Logistics */}
      {currentDayData.notes && currentDayData.notes.length > 0 && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Info className="w-4 h-4" /> Practical Driving & Family Notes
          </div>
          <div className="space-y-2">
            {currentDayData.notes.map((n, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                <p className="leading-relaxed">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Navigation Footer for Days */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setSelectedDay((prev) => Math.max(1, prev - 1))}
          disabled={selectedDay === 1}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition"
        >
          Previous Day
        </button>
        <span className="text-xs text-slate-400 font-mono font-medium">
          Day {selectedDay} of 10
        </span>
        <button
          onClick={() => setSelectedDay((prev) => Math.min(10, prev + 1))}
          disabled={selectedDay === 10}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition flex items-center gap-1"
        >
          <span>Next Day</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
