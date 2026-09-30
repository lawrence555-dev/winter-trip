import React, { useState } from 'react';
import { 
  Compass, 
  Calendar, 
  Car, 
  CheckSquare, 
  BarChart3, 
  Plane, 
  MapPin, 
  ShieldCheck, 
  ShoppingBag, 
  Activity, 
  Flame,
  ChevronRight,
  ExternalLink,
  Coins
} from 'lucide-react';
import DashboardStatus from './components/DashboardStatus';
import ItineraryCard from './components/ItineraryCard';
import DrivingHighlights from './components/DrivingHighlights';
import PackingList from './components/PackingList';
import JournalCharts from './components/JournalCharts';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview & FX', icon: Compass },
    { id: 'itinerary', label: '10-Day Schedule', icon: Calendar },
    { id: 'driving', label: 'Driving & Outlets', icon: Car },
    { id: 'packing', label: 'Packing List', icon: CheckSquare },
    { id: 'analytics', label: 'Trip Analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-lg shadow-lg shadow-amber-500/20">
              K
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  KYUSHU ROAD TRIP 2026
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  ENGLISH EDITION
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                10 Days • Dual Outlets • Glamping & Onsen • Self-Drive
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
              <Plane className="w-3.5 h-3.5 text-emerald-400" />
              <span>BR106 (12/19) ➔ BR105 (12/28)</span>
            </div>
          </div>
        </div>

        {/* Desktop Tab Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 hidden sm:flex items-center gap-1 border-t border-slate-900 pt-1">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 ${
                  isActive
                    ? 'border-amber-500 text-amber-400 bg-slate-900/80 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative border-b border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  DEC 19 – DEC 28, 2026
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Thai Driver Regulation Ready (1949 IDP)
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                10-Day Kyushu Self-Drive Master Itinerary
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Fukuoka, Beppu Onsen, African Safari, Tosu & Kitakyushu Dual Outlets, Zone 2 Ohori running, and Seaside National Park.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-center">
                <div className="text-[10px] uppercase font-mono text-slate-400">Total Distance</div>
                <div className="text-base font-bold font-mono text-white">~650 km</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-center">
                <div className="text-[10px] uppercase font-mono text-slate-400">Outlets</div>
                <div className="text-base font-bold font-mono text-amber-400">2 Mega Malls</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-center">
                <div className="text-[10px] uppercase font-mono text-slate-400">Tolls</div>
                <div className="text-base font-bold font-mono text-emerald-400">KEP Unlimited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <DashboardStatus />
            <JournalCharts />
          </div>
        )}

        {activeTab === 'itinerary' && (
          <div>
            <ItineraryCard />
          </div>
        )}

        {activeTab === 'driving' && (
          <div>
            <DrivingHighlights />
          </div>
        )}

        {activeTab === 'packing' && (
          <div>
            <PackingList />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <JournalCharts />
            <DrivingHighlights />
          </div>
        )}
      </main>

      {/* Mobile Floating Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-2 py-2">
        <div className="grid grid-cols-5 gap-1">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span className="text-[9px] font-medium tracking-tight truncate max-w-full">
                  {tab.id === 'itinerary' ? 'Schedule' : tab.label.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 text-center text-xs text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-2">
          <span>Kyushu Winter Expedition 2026</span>
          <span>•</span>
          <span>English Edition</span>
          <span>•</span>
          <span>THB FX & Thai IDP 1949 Guide</span>
        </div>
        <p className="text-[11px] text-slate-400">
          Flights BR106 / BR105 • Fukuoka • Beppu • Yufuin • Tosu • Kitakyushu • Dazaifu • Itoshima
        </p>
      </footer>
    </div>
  );
}
