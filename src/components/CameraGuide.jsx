import React, { useState } from 'react';
import { Camera, Sun, Moon, Utensils, Info, Film, Aperture, Activity, Eye, Sparkles, Copy, Check, Sliders } from 'lucide-react';

const OPPO_WINTER_PRESETS = [
  {
    id: "p1",
    tag: "PORTRAIT",
    name: "P1: 冬日晨霧與柔焦人像 (3x / 85mm)",
    desc: "金鱗湖晨霧 / 湯之坪街拍 / 隈研吾星巴克",
    icon: Camera,
    color: "bg-sky-50 text-sky-700 border-sky-200",
    badgeColor: "bg-sky-600",
    modeName: "哈蘇人像模式 (Hasselblad Portrait)",
    lens: "3x 潛望長焦 (等效 85mm 人像黃金焦段)",
    aperture: "模擬 f/2.4 ~ f/3.2 柔美光學散景",
    ev: "+0.3 到 +0.7 (提亮晨霧膚色)",
    wb: "5200K (溫潤暖調膚色)",
    style: "哈蘇自然色彩 (HNCS)",
    tips: "拍攝金鱗湖清晨霧氣或湯之坪街道時，3x 潛望鏡頭能完美避開周圍遊客，壓縮背景的水氣與古樸木造店鋪，營造如日本電影般的夢幻景深。"
  },
  {
    id: "p2",
    tag: "XPAN",
    name: "P2: XPAN 電影寬幅絕景 (45mm)",
    desc: "別府海地獄 / 糸島夫婦岩純白鳥居 / 門司港大正建築",
    icon: Film,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    badgeColor: "bg-indigo-600",
    modeName: "XPAN 模式 (65:24 超寬比例)",
    lens: "1x 主鏡頭 (等效 45mm 裁切視野)",
    aperture: "光學固定大光圈",
    ev: "-0.3 (壓制地熱白煙高光，保留層次)",
    wb: "5400K / 自動日光",
    style: "XPAN 經典彩色 / 復古黑白",
    tips: "別府海地獄的蒸氣滾滾或糸島櫻井二見之浦的純白鳥居，使用 65:24 極寬比例拍攝，海天一線與地熱升騰的橫向視覺張力無與倫比！"
  },
  {
    id: "p3",
    tag: "ACTION",
    name: "P3: 運動與動態高速抓拍 (1/1000s)",
    desc: "大濠公園 Zone 2 晨跑 / 猛獸餵食 / 水族館海豚飛躍",
    icon: Activity,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeColor: "bg-emerald-600",
    modeName: "哈蘇大師運動抓拍 (Action Freeze)",
    lens: "3x / 6x 望遠長焦光學鏡頭",
    aperture: "自動高速光圈",
    ev: "0.0 ~ +0.3",
    wb: "自動",
    style: "大師清晰運動模式",
    tips: "拍攝大濠公園跑步動態或野生動物園叢林巴士親手餵獅子時，開啟高速追焦連拍與 1/1000s 快門，鎖定水花、步伐與猛獸銳利眼神！"
  },
  {
    id: "p4",
    tag: "MACRO",
    name: "P4: 暖冬長焦微距美食 (3x 望遠)",
    desc: "極致炭火和牛 BBQ / 唐戶市場海膽握壽司 / 糸島現烤牡蠣",
    icon: Utensils,
    color: "bg-amber-50 text-amber-700 border-amber-200",
    badgeColor: "bg-amber-600",
    modeName: "哈蘇大師微距 (Master Food)",
    lens: "3x 潛望長焦 (最近對焦距離 25cm)",
    aperture: "光學自然淺景深",
    ev: "+0.3 ~ +0.5 (通透晶瑩食慾感)",
    wb: "偏暖 5500K",
    style: "大師濃郁美食影調",
    tips: "拍攝炭火燒肉與烤牡蠣時，切忌用 1x 貼太近以免手機陰影擋光或被炭火噴濺。請退後 35cm 切換至 3x 鏡頭，對焦肉汁油花，光澤晶瑩剔透！"
  }
];

export default function CameraGuide() {
    const [activeTab, setActiveTab] = useState("p1");
    const [copiedId, setCopiedId] = useState(null);

    const currentPreset = OPPO_WINTER_PRESETS.find(p => p.id === activeTab) || OPPO_WINTER_PRESETS[0];

    const copySettings = (preset) => {
        const text = `【OPPO Find 9 Ultra 攝影設定 - ${preset.name}】\n模式：${preset.modeName}\n鏡頭：${preset.lens}\n光圈：${preset.aperture}\nEV：${preset.ev}\n白平衡：${preset.wb}\n風格：${preset.style}\n技巧：${preset.tips}`;
        navigator.clipboard?.writeText(text);
        setCopiedId(preset.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="bg-slate-900 border-x border-b border-slate-800 rounded-b-2xl p-4 text-white animate-fadeIn">
            {/* 哈蘇大師標題 Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#f97316]"></span>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-orange-400">
                        HASSELBLAD MASTER SYSTEM
                    </span>
                </div>
                <button
                    onClick={() => copySettings(currentPreset)}
                    className="flex items-center gap-1 text-[10px] font-bold text-slate-300 hover:text-white bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700 transition-colors"
                    title="複製參數"
                >
                    {copiedId === currentPreset.id ? (
                        <>
                            <Check size={11} className="text-emerald-400" />
                            <span className="text-emerald-400">已複製</span>
                        </>
                    ) : (
                        <>
                            <Copy size={11} />
                            <span>複製參數</span>
                        </>
                    )}
                </button>
            </div>

            {/* 快速切換 4 大預設模式按鈕 */}
            <div className="grid grid-cols-4 gap-2 mb-4">
                {OPPO_WINTER_PRESETS.map((s) => {
                    const Icon = s.icon;
                    const isActive = activeTab === s.id;
                    return (
                        <button
                            key={s.id}
                            onClick={(e) => { e.stopPropagation(); setActiveTab(s.id); }}
                            className={`
                                flex flex-col items-center justify-center p-2 rounded-xl border transition-all text-center
                                ${isActive 
                                    ? "bg-slate-800 border-orange-500/80 text-white shadow-md ring-1 ring-orange-500/50 scale-102" 
                                    : "bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}
                            `}
                        >
                            <Icon size={17} className={`mb-1 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                            <span className="text-[9px] font-black tracking-wider font-mono">{s.tag}</span>
                            <span className="text-[7px] text-slate-400 mt-0.5">{s.id.toUpperCase()}</span>
                        </button>
                    );
                })}
            </div>

            {/* 當前選中配置詳情 (Pro Dial Card) */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-4 space-y-3.5">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                {currentPreset.tag} MODE
                            </span>
                            <h3 className="font-bold text-xs text-white leading-tight">
                                {currentPreset.name}
                            </h3>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">{currentPreset.desc}</p>
                    </div>
                </div>

                {/* 參數矩陣 Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800/80">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">建議鏡頭焦段</span>
                        <span className="text-[11px] font-bold text-orange-400 font-mono mt-0.5 block">{currentPreset.lens}</span>
                    </div>

                    <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800/80">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">相機模式</span>
                        <span className="text-[11px] font-bold text-sky-400 mt-0.5 block">{currentPreset.modeName}</span>
                    </div>

                    <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800/80">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">光圈與散景</span>
                        <span className="text-[11px] font-bold text-slate-200 font-mono mt-0.5 block">{currentPreset.aperture}</span>
                    </div>

                    <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800/80">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">曝光補償 (EV)</span>
                        <span className="text-[11px] font-bold text-emerald-400 font-mono mt-0.5 block">{currentPreset.ev}</span>
                    </div>

                    <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800/80">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">白平衡色溫</span>
                        <span className="text-[11px] font-bold text-slate-300 font-mono mt-0.5 block">{currentPreset.wb}</span>
                    </div>

                    <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800/80">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">色彩風格影調</span>
                        <span className="text-[11px] font-bold text-slate-300 mt-0.5 block">{currentPreset.style}</span>
                    </div>
                </div>

                {/* 大師實戰小撇步 */}
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 flex gap-2">
                    <Info size={14} className="text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                        {currentPreset.tips}
                    </p>
                </div>
            </div>
        </div>
    );
}
