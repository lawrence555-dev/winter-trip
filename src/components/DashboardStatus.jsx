import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  CloudSun, 
  Car, 
  Plane, 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink,
  ArrowRightLeft,
  Calendar,
  Clock,
  Coins,
  FileCheck
} from 'lucide-react';

export default function DashboardStatus() {
  const [exchangeRate, setExchangeRate] = useState(4.38);
  const [lastUpdated, setLastUpdated] = useState('Fetching...');
  const [thbAmount, setThbAmount] = useState('10000');
  const [isThbToJpy, setIsThbToJpy] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/THB');
        const data = await response.json();
        if (data && data.rates && data.rates.JPY) {
          setExchangeRate(data.rates.JPY);
          setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
      } catch (error) {
        console.warn('Using fallback THB to JPY exchange rate:', error);
        setExchangeRate(4.38);
        setLastUpdated('Estimated (4.38)');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRate();
    const interval = setInterval(fetchRate, 60000);
    return () => clearInterval(interval);
  }, []);

  const numVal = parseFloat(thbAmount) || 0;
  const convertedValue = isThbToJpy 
    ? (numVal * exchangeRate).toLocaleString('ja-JP', { maximumFractionDigits: 0 })
    : (numVal / exchangeRate).toLocaleString('en-US', { maximumFractionDigits: 2 });

  const quickThbAmounts = [1000, 3000, 5000, 10000, 20000, 50000];

  return (
    <div className="space-y-6">
      {/* Flight Schedule Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Outbound Flight */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Plane className="w-3.5 h-3.5" /> Outbound Flight
            </span>
            <span className="text-xs font-mono text-slate-400">EVA Air</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold tracking-tight text-white">BR106</div>
              <div className="text-xs text-slate-400 mt-0.5">Dec 19, 2025 (Fri)</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-emerald-400">11:15 AM</div>
              <div className="text-xs text-slate-400">Arrive Fukuoka (FUK)</div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Pick up car at International Terminal</span>
            <span className="font-semibold text-slate-300">Activate KEP Pass</span>
          </div>
        </div>

        {/* Return Flight */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Plane className="w-3.5 h-3.5" /> Inbound Return Flight
            </span>
            <span className="text-xs font-mono text-slate-400">EVA Air</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold tracking-tight text-white">BR105</div>
              <div className="text-xs text-slate-400 mt-0.5">Dec 28, 2025 (Sun)</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-indigo-400">12:15 PM</div>
              <div className="text-xs text-slate-400">Depart Fukuoka (FUK)</div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Return car at 09:30 AM</span>
            <span className="font-semibold text-slate-300">Free Airport Shuttle</span>
          </div>
        </div>
      </div>

      {/* Real-time THB to JPY Exchange Rate & Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-wide">Live FX Rate: THB to JPY</h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Open Exchange API
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time market rate for Thai visitors in Japan • Updated: {lastUpdated}
              </p>
            </div>
          </div>
          <div className="text-right bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">1 THB (฿) =</div>
            <div className="text-xl font-mono font-bold text-amber-400">
              {isLoading ? '...' : exchangeRate.toFixed(3)} <span className="text-xs text-slate-400">JPY (¥)</span>
            </div>
          </div>
        </div>

        {/* Currency Converter Form */}
        <div className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Input Side */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 focus-within:border-amber-500/50 transition">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span className="font-medium">{isThbToJpy ? 'You Pay (THB - Thai Baht)' : 'You Pay (JPY - Japanese Yen)'}</span>
                <span className="text-[11px] font-mono">{isThbToJpy ? '฿' : '¥'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-400">{isThbToJpy ? '฿' : '¥'}</span>
                <input
                  type="number"
                  value={thbAmount}
                  onChange={(e) => setThbAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full bg-transparent text-xl font-bold text-white focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* Converted Output Side */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span className="font-medium">{isThbToJpy ? 'Estimated in Japan (JPY)' : 'Estimated in Thailand (THB)'}</span>
                <button
                  type="button"
                  onClick={() => setIsThbToJpy(!isThbToJpy)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300 transition"
                  title="Swap currencies"
                >
                  <ArrowRightLeft className="w-3 h-3" /> Swap
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-amber-400">{isThbToJpy ? '¥' : '฿'}</span>
                <span className="text-2xl font-bold font-mono text-amber-400 truncate">
                  {convertedValue}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div>
            <div className="text-[11px] font-medium text-slate-400 mb-2">Quick Thai Baht presets:</div>
            <div className="flex flex-wrap gap-2">
              {quickThbAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setIsThbToJpy(true);
                    setThbAmount(amt.toString());
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                    thbAmount === amt.toString() && isThbToJpy
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  ฿{amt.toLocaleString()} ➔ ¥{Math.round(amt * exchangeRate).toLocaleString()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thai Citizen Driving & Entry Regulations Alert Box */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-900/90 border-2 border-indigo-500/30 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex-shrink-0 flex items-center justify-center text-indigo-400">
            <FileCheck className="w-6 h-6" />
          </div>
          <div className="space-y-3 flex-1">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  Self-Drive & Entry Regulations for Thai Citizens
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  1949 Geneva Convention Model
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Under Japanese traffic law, Thailand is a party to the <strong className="text-white">1949 Geneva Convention on Road Traffic</strong>. 
                Unlike Taiwanese or Swiss driver permits, <strong className="text-amber-400">a Japanese translation is NOT accepted</strong> for Thai licenses. You must present the physical 1949 IDP booklet at the rental counter.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
                <div className="text-[11px] font-semibold text-indigo-400 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 1. Thai Passport
                </div>
                <div className="text-xs text-slate-300">
                  Valid for 6+ months. Thai tourists enjoy <strong className="text-white">15-day visa-free</strong> entry in Japan.
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
                <div className="text-[11px] font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 2. 1949 Geneva IDP
                </div>
                <div className="text-xs text-slate-300">
                  International Driving Permit issued by the <strong className="text-white">Department of Land Transport (DLT) Thailand</strong>.
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
                <div className="text-[11px] font-semibold text-amber-400 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 3. Original Thai License
                </div>
                <div className="text-xs text-slate-300">
                  Physical 5-Year or Lifetime smart card. Digital app licenses are not accepted by car rental staff.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kyushu Winter Weather Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Fukuoka City Weather */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-white text-sm">Fukuoka City (Coastal)</span>
            </div>
            <span className="text-xs text-slate-400">Late December</span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-white">6°C – 12°C</span>
            <span className="text-xs text-slate-400">Crisp & Dry</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ideal running weather at Ohori Park during mornings (6-8°C). A breathable windbreaker and light layers are recommended.
          </p>
        </div>

        {/* Beppu & Yufuin Highland Weather */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-sky-400" />
              <span className="font-bold text-white text-sm">Beppu & Yufuin (Highland)</span>
            </div>
            <span className="text-xs text-slate-400">Late December</span>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-white">1°C – 8°C</span>
            <span className="text-xs text-sky-400 font-medium">Sub-zero at night</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Highland glamping at GRAND VERDE and Yufuin gets very cold after sunset. Heavy down jackets, thermal beanies, and gloves required for outdoor BBQ.
          </p>
        </div>
      </div>
    </div>
  );
}
