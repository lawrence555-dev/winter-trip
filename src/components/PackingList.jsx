import React, { useState, useEffect } from 'react';
import { packingChecklist } from '../data/winterItinerary';
import { CheckSquare, Square, CheckCircle2, RotateCcw, Luggage, Sparkles, Filter } from 'lucide-react';

export default function PackingList() {
    const [checkedItems, setCheckedItems] = useState(() => {
        try {
            const saved = localStorage.getItem('winter_trip_packing_v2');
            return saved ? JSON.parse(saved) : {};
        } catch {
            return {};
        }
    });
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    useEffect(() => {
        try {
            localStorage.setItem('winter_trip_packing_v2', JSON.stringify(checkedItems));
        } catch (e) {
            console.error('Failed to save packing list', e);
        }
    }, [checkedItems]);

    const toggleItem = (category, item) => {
        const key = `${category}__${item}`;
        setCheckedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const resetAll = () => {
        if (window.confirm('確定要重設所有行李勾選項目嗎？')) {
            setCheckedItems({});
        }
    };

    const totalItems = packingChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
    const completedItems = Object.values(checkedItems).filter(Boolean).length;
    const progress = Math.round((completedItems / totalItems) * 100);

    const filteredGroups = selectedCategory === 'ALL'
        ? packingChecklist
        : packingChecklist.filter(g => g.category === selectedCategory);

    return (
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-4">
            {/* Header and Progress Bar */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                        <Luggage className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            行前裝備與行李檢查清單
                        </h3>
                        <span className="text-[10px] text-slate-400">已自動同步至瀏覽器儲存</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-black text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/70 shadow-2xs">
                        {completedItems} / {totalItems} ({progress}%)
                    </span>
                    {completedItems > 0 && (
                        <button 
                            onClick={resetAll}
                            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                            title="重置清單"
                        >
                            <RotateCcw size={13} />
                        </button>
                    )}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-100">
                <div 
                    className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 rounded-full transition-all duration-300 shadow-2xs"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Category Filter Pills */}
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
                <button
                    onClick={() => setSelectedCategory('ALL')}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-xl border shrink-0 transition-all ${
                        selectedCategory === 'ALL'
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80'
                    }`}
                >
                    全部項目 ({totalItems})
                </button>
                {packingChecklist.map((cat, cIdx) => (
                    <button
                        key={cIdx}
                        onClick={() => setSelectedCategory(cat.category)}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-xl border shrink-0 transition-all ${
                            selectedCategory === cat.category
                                ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80'
                        }`}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* Category Groups */}
            <div className="space-y-3">
                {filteredGroups.map((group, gIdx) => (
                    <div key={gIdx} className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-200/60">
                        <div className="flex justify-between items-center mb-2.5">
                            <h4 className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                {group.category}
                            </h4>
                            <span className="text-[9px] font-mono text-slate-400">
                                {group.items.filter(item => checkedItems[`${group.category}__${item}`]).length} / {group.items.length} 完成
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-1.5">
                            {group.items.map((item, iIdx) => {
                                const key = `${group.category}__${item}`;
                                const isChecked = !!checkedItems[key];
                                return (
                                    <button
                                        key={iIdx}
                                        onClick={() => toggleItem(group.category, item)}
                                        className={`flex items-center gap-2.5 text-left p-2 rounded-xl transition-all text-xs border ${
                                            isChecked 
                                                ? 'text-slate-400 line-through bg-slate-100/50 border-transparent' 
                                                : 'text-slate-850 bg-white border-slate-200/70 shadow-2xs hover:border-sky-300'
                                        }`}
                                    >
                                        {isChecked ? (
                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 animate-fadeIn" />
                                        ) : (
                                            <Square size={16} className="text-slate-300 shrink-0" />
                                        )}
                                        <span className="leading-snug font-medium">{item}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
