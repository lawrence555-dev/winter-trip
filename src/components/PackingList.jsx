import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Square, 
  CheckCircle2, 
  RotateCcw, 
  FileCheck, 
  Activity, 
  BatteryCharging, 
  Sparkles,
  Luggage
} from 'lucide-react';
import { packingChecklistEn } from '../data/winterItineraryEn';

export default function PackingList() {
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('kyushu_winter_packing_en');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('kyushu_winter_packing_en', JSON.stringify(checkedItems));
    } catch (e) {
      console.error('Could not save checklist to localStorage', e);
    }
  }, [checkedItems]);

  const toggleItem = (itemText) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemText]: !prev[itemText]
    }));
  };

  const allItems = packingChecklistEn.flatMap((cat) => cat.items);
  const totalItemsCount = allItems.length;
  const checkedCount = allItems.filter((it) => checkedItems[it]).length;
  const progressPercent = totalItemsCount > 0 ? Math.round((checkedCount / totalItemsCount) * 100) : 0;

  const handleCheckAll = () => {
    const updated = {};
    allItems.forEach((it) => {
      updated[it] = true;
    });
    setCheckedItems(updated);
  };

  const handleReset = () => {
    setCheckedItems({});
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Documents')) return FileCheck;
    if (category.includes('Running')) return Activity;
    if (category.includes('Electronics')) return BatteryCharging;
    return Luggage;
  };

  return (
    <div className="space-y-6">
      {/* Packing Progress Bar Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Luggage className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white tracking-wide">
                Kyushu Winter Trip Packing Checklist
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Customized for Thai drivers, winter glamping, Zone 2 running, and family gear
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCheckAll}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
            >
              Check All
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>

        {/* Progress Display */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">
              Packed: <strong className="text-white">{checkedCount}</strong> / {totalItemsCount} items
            </span>
            <span className="text-amber-400 font-bold">{progressPercent}% Completed</span>
          </div>
          <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {packingChecklistEn.map((categoryGroup, idx) => {
          const CatIcon = getCategoryIcon(categoryGroup.category);
          const isDoc = categoryGroup.category.includes('Documents');

          return (
            <div
              key={idx}
              className={`bg-slate-900 border rounded-2xl p-5 shadow-lg space-y-3.5 ${
                isDoc ? 'border-indigo-500/30' : 'border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isDoc ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-800 text-amber-400'
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{categoryGroup.category}</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {categoryGroup.items.filter((it) => checkedItems[it]).length} / {categoryGroup.items.length}
                </span>
              </div>

              <div className="space-y-2">
                {categoryGroup.items.map((item, itemIdx) => {
                  const isChecked = !!checkedItems[item];
                  return (
                    <button
                      key={itemIdx}
                      type="button"
                      onClick={() => toggleItem(item)}
                      className={`w-full text-left p-3 rounded-xl border transition flex items-start gap-3 ${
                        isChecked
                          ? 'bg-slate-950/40 border-slate-800/80 text-slate-500 line-through'
                          : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-200'
                      }`}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                      <span className="text-xs leading-relaxed">{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
