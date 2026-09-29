import React, { useState } from 'react';
import { 
  Car, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Calendar, 
  Clock, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  Receipt,
  Sparkles,
  Baby
} from 'lucide-react';
import { carRentalReservation } from '../data/winterItinerary';

export default function RentalCarCard() {
  const [copied, setCopied] = useState(false);
  const [showJapaneseVoucher, setShowJapaneseVoucher] = useState(false);

  const copyReservationNumber = () => {
    navigator.clipboard?.writeText(carRentalReservation.reservationNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <div className="bg-white border-2 border-sky-300/80 rounded-2xl p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden transition-all">
      {/* 頂部裝飾背景光暈 */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* 卡片標題與預約號碼 Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs">
            <Car size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                租車預約確認單 
              </h3>
              <span className="text-[11px] font-mono font-bold bg-sky-50 text-sky-800 px-2 py-0.5 rounded-md border border-sky-200">
                ご予約内容
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              TOYOTA SIENTA Hybrid (W1 等級) • 10天9夜
            </p>
          </div>
        </div>

        {/* 預約號碼複製膠囊 */}
        <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-xl self-start sm:self-auto shadow-xs">
          <div className="text-[11px] font-mono text-slate-300">
            預約號: <strong className="text-sky-300 text-xs sm:text-sm tracking-wider">{carRentalReservation.reservationNumber}</strong>
          </div>
          <button
            onClick={copyReservationNumber}
            className="p-1 hover:bg-slate-800 rounded-lg transition-colors text-slate-300 hover:text-white"
            title="複製預約號碼"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* 核心預約資訊網格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
        {/* 取車資訊 */}
        <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-3.5 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-sky-900 flex items-center gap-1.5 font-mono">
              <Clock size={13} className="text-sky-700" /> 取車時間（出発日時）
            </span>
            <span className="text-[11px] font-bold text-sky-800 bg-sky-100/80 px-2 py-0.5 rounded">
              BR106 抵達後
            </span>
          </div>
          <div className="text-sm sm:text-base font-black font-mono text-slate-950">
            12/19 (五) 12:00
          </div>
          <div className="text-xs text-slate-600">
            店鋪：<strong className="text-slate-900">{carRentalReservation.pickupStore}</strong>
          </div>
        </div>

        {/* 還車資訊 */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-3.5 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-amber-900 flex items-center gap-1.5 font-mono">
              <Clock size={13} className="text-amber-700" /> 還車時間（返却日時）
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
              準時 08:30 前
            </span>
          </div>
          <div className="text-sm sm:text-base font-black font-mono text-slate-950">
            12/28 (日) 08:30
          </div>
          <div className="text-xs text-slate-600">
            店鋪：<strong className="text-slate-900">{carRentalReservation.returnStore}</strong>
          </div>
        </div>
      </div>

      {/* 門市聯絡電話、地址與即時導航 */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 space-y-2.5 text-xs text-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-sky-600 shrink-0" />
            <span className="font-bold text-slate-900">門市電話：</span>
            <a 
              href={`tel:${carRentalReservation.pickupPhone.replace(/-/g, '')}`}
              className="font-mono font-bold text-sky-800 hover:underline hover:text-sky-950"
            >
              {carRentalReservation.pickupPhone}
            </a>
          </div>
          <a
            href={getGoogleMapsUrl(carRentalReservation.pickupAddressJa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-sky-800 bg-white hover:bg-sky-50 px-2.5 py-1.5 rounded-lg border border-sky-200 transition-colors shadow-2xs self-start sm:self-auto"
          >
            <MapPin size={12} className="text-sky-600" />
            <span>Google 地圖導航</span>
            <ExternalLink size={11} className="opacity-60" />
          </a>
        </div>

        <div className="border-t border-slate-200/60 pt-2 space-y-1">
          <div className="text-slate-800 font-medium">
            <span className="font-bold text-slate-950">日文地址：</span>{carRentalReservation.pickupAddressJa}
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            <span className="font-semibold text-slate-600">英文地址：</span>{carRentalReservation.pickupAddressEn}
          </div>
        </div>
      </div>

      {/* 車型與總費用 Bar */}
      <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 font-mono uppercase">車型等級:</span>
          <span className="text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
            {carRentalReservation.carClass}
          </span>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-slate-500 font-medium">租車總計（含稅）:</span>
          <span className="text-base sm:text-lg font-black font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
            ¥{carRentalReservation.totalPriceText}
          </span>
        </div>
      </div>

      {/* 展開日文原始憑證（供日本取車櫃檯人員檢視） */}
      <div className="mt-3 pt-2">
        <button
          onClick={() => setShowJapaneseVoucher(!showJapaneseVoucher)}
          className="w-full text-left py-2 px-3 bg-slate-100/80 hover:bg-slate-200/80 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-between transition-colors tap-effect"
        >
          <span className="flex items-center gap-1.5">
            <FileText size={13} className="text-slate-600" />
            <span>點擊出示日本門市取車完整憑證（ご予約内容 日本語）</span>
          </span>
          {showJapaneseVoucher ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {showJapaneseVoucher && (
          <div className="mt-2.5 p-3.5 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono space-y-2 border border-slate-800 animate-fadeIn">
            <div className="text-amber-400 font-bold border-b border-slate-800 pb-1.5">
              【ご予約内容】
            </div>
            <div className="space-y-1 text-slate-300 leading-relaxed">
              <div>・予約番号 : <span className="text-white font-bold">{carRentalReservation.reservationNumber}</span></div>
              <div>・出発店舗 : {carRentalReservation.pickupStore}（TEL：{carRentalReservation.pickupPhone}）</div>
              <div className="pl-4 text-slate-400">{carRentalReservation.pickupAddressJa}</div>
              <div>・返却店舗 : {carRentalReservation.returnStore}</div>
              <div className="pl-4 text-slate-400">{carRentalReservation.returnAddressJa}</div>
              <div>・出発日時 : {carRentalReservation.pickupDateTime}</div>
              <div>・返却日時 : {carRentalReservation.returnDateTime}</div>
              <div>・車両クラス : {carRentalReservation.carClass}</div>
              <div className="pt-1.5 border-t border-slate-800 text-amber-300 font-bold">
                ・ご利用総額（税込）: {carRentalReservation.totalPriceText}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
