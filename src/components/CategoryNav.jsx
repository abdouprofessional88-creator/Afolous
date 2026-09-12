import React from 'react';
import { Drumstick, Flame, Sandwich, Package, Popcorn, Droplet, CupSoda, Sparkles, LayoutGrid } from 'lucide-react';
import { CATEGORIES } from '../data/menu.js';
import { Reveal } from './ui.jsx';

const ICONS = {
  drumstick: Drumstick, flame: Flame, burger: Sandwich, box: Package,
  fries: Popcorn, drop: Droplet, cup: CupSoda, sparkles: Sparkles, all: LayoutGrid,
};

// شريط الأصناف — واجهة ({active, onSelect}) يغذيها مخزن المتجر من App
export default function CategoryNav({ active, onSelect }) {
  const pick = (id) => {
    onSelect?.(id);
    setTimeout(() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }), 60);
  };
  return (
    <section className="max-w-7xl mx-auto px-4 -mt-2 pt-10" aria-label="أصناف المينيو">
      <Reveal className="text-center">
        <h2 className="text-2xl md:text-4xl font-black text-ink-950">شنو باغي اليوم؟ 😋</h2>
        <p className="mt-2 text-ink-900/60 font-bold text-sm md:text-base">اختار الصنف وغادي نوصلوك نيشان لبلاصتو في المينيو</p>
      </Reveal>
      <Reveal delay="reveal-d1" className="mt-6 flex gap-3 overflow-x-auto no-scrollbar pb-2 md:grid md:grid-cols-8 md:overflow-visible" role="tablist" aria-label="فلترة حسب الصنف">
        {CATEGORIES.map((c) => {
          const Icon = ICONS[c.icon] || LayoutGrid;
          const isActive = active === c.id;
          return (
            <button
              key={c.id} role="tab" aria-selected={isActive}
              onClick={() => pick(c.id)}
              className={`shrink-0 min-w-[104px] md:min-w-0 rounded-3xl border-2 px-3 py-4 flex flex-col items-center gap-2 transition active:scale-95 ${
                isActive ? 'bg-ink-950 text-white border-ink-950 shadow-card' : 'bg-white text-ink-900 border-ink-900/10 hover:border-ink-950 shadow-soft'
              }`}
            >
              <span className={`w-11 h-11 rounded-2xl flex items-center justify-center ${isActive ? 'bg-brand-500 text-white' : 'bg-cream-100 text-ink-900'}`}>
                <Icon size={22} aria-hidden />
              </span>
              <span className="text-[13px] font-black leading-4">{c.nameAr}</span>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white/60' : 'text-ink-900/40'}`}>{c.nameEn}</span>
            </button>
          );
        })}
      </Reveal>
    </section>
  );
}
