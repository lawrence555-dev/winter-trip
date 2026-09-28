import React from 'react';
import { 
  Car, 
  Activity, 
  ShoppingBag, 
  ShieldCheck, 
  Hotel, 
  CheckCircle2, 
  AlertTriangle,
  Compass,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { drivingHighlightsEn } from '../data/winterItineraryEn';

export default function DrivingHighlights() {
  const thaiDrivingRules = [
    {
      title: 'Mandatory Documents at Pick-up',
      desc: 'You MUST present (1) Original Thai Passport, (2) International Driving Permit (IDP) 1949 Geneva Convention Model issued by DLT Thailand, and (3) Physical Thai 5-Year/Lifetime Driving License. Japanese translations are strictly not accepted for Thai licenses.',
      type: 'critical'
    },
    {
      title: 'Drive on the Left Side of the Road',
      desc: 'Just like in Thailand, Japan drives on the left-hand side with the driver seated on the right. Road markings and signs are standardized and easy to follow.',
      type: 'info'
    },
    {
      title: 'Mandatory Stop at "止まれ" (TOMARE) Red Triangles',
      desc: 'Japanese traffic police enforce strict full-stop compliance at inverted red triangle signs. You must come to a complete 3-second stop before railway crossings and non-signal intersections.',
      type: 'warning'
    },
    {
      title: 'Expressway ETC & KEP Pass Usage',
      desc: 'Insert the ETC card into the in-car reader before driving. Approach ETC gates at under 20 km/h. Ensure the KEP (Kyushu Expressway Pass) plan is bound to your card for flat-rate toll savings.',
      type: 'info'
    },
    {
      title: 'Zero Tolerance for Alcohol & Phone Distraction',
      desc: 'Japan maintains absolute 0.00% BAC limits. Handheld phone operation while driving is heavily penalized. Always place phones in hands-free dashboard mounts.',
      type: 'warning'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Driving Strategy Overview Cards */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Car className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-bold text-white tracking-wide">
            Kyushu Self-Drive Strategic Playbook
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {drivingHighlightsEn.map((item, idx) => {
            const Icon = item.icon || Car;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs font-medium text-amber-400/90 mb-2">{item.summary}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dual Outlets Comparison Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Dual Outlets Comparison: Tosu vs Kitakyushu</h3>
            <p className="text-xs text-slate-400">Tailored shopping strategy for sportswear, Japanese brands, and family entertainment</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono">
                <th className="py-2.5 px-3">Feature</th>
                <th className="py-2.5 px-3 text-amber-400">Tosu Premium Outlets (Day 3)</th>
                <th className="py-2.5 px-3 text-indigo-400">THE OUTLETS KITAKYUSHU (Day 5)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-200">Location & Vibe</td>
                <td className="py-3 px-3">Saga Prefecture (American open-air resort style)</td>
                <td className="py-3 px-3">Kitakyushu Space World Site (Modern 2022 mega complex)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-200">Brand Strengths</td>
                <td className="py-3 px-3">Nike, Adidas, Under Armour, New Balance, North Face</td>
                <td className="py-3 px-3">BEAMS, Urban Research, Mont-bell, Japanese lifestyle brands</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-200">Kids & Family</td>
                <td className="py-3 px-3">Standard outdoor children playground</td>
                <td className="py-3 px-3">Massive indoor ASOBI PARK PLUS, next to Science Museum & AEON MALL</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-200">Parking & Logistics</td>
                <td className="py-3 px-3">Large flat parking lots right beside store rows</td>
                <td className="py-3 px-3">4,500+ covered multi-story parking spaces with elevator access</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-200">Dining Highlights</td>
                <td className="py-3 px-3">Central fast food court & quick ramen cafes</td>
                <td className="py-3 px-3">Gourmet Food Forest, Kitakyushu Hakata Wagyu & sushi counters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Thai Drivers in Japan Guide & Legal Framework */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Driving Guide for Thai Citizens in Japan</h3>
            <p className="text-xs text-slate-400">Essential rules, traffic etiquette, and legal mandates</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {thaiDrivingRules.map((rule, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                rule.type === 'critical'
                  ? 'bg-red-500/5 border-red-500/30'
                  : rule.type === 'warning'
                  ? 'bg-amber-500/5 border-amber-500/30'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div className="flex items-start gap-2.5 mb-1.5">
                {rule.type === 'critical' ? (
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                ) : rule.type === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                )}
                <h4 className="text-xs font-bold text-white">{rule.title}</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6.5">{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
