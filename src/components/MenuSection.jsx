import React, { useMemo, useState } from 'react';
import { Search, X, SlidersHorizontal, SearchX } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/menu';
import { useStore } from '../store/StoreContext';
import ProductCard from './ProductCard';
import { Reveal, SectionHead } from './ui';

const SORTS = [
  { id: 'pop', label: 'الأكثر طلباً' },
  { id: 'cheap', label: 'السعر: من الأقل' },
  { id: 'exp', label: 'السعر: من الأعلى' },
  { id: 'az', label: 'أبجدي' },
];

export default function MenuSection({ featuredOnly = false, id = 'menu', title = null }) {
  const { activeCategory, setActiveCategory, search, setSearch } = useStore();
  const [sort, setSort] = useState('pop');

  const list = useMemo(() => {
    let l = [...PRODUCTS];
    if (featuredOnly) l = l.filter((p) => p.badge);
    if (!featuredOnly && activeCategory !== 'all') l = l.filter((p) => p.category === activeCategory);
    const q = search.trim().toLowerCase();
    if (q) {
      l = l.filter((p) =>
        [p.nameAr, p.nameEn, p.description, ...(p.keywords || []), p.category]
          .join(' ').toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case 'cheap': l.sort((a, b) => a.basePrice - b.basePrice); break;
      case 'exp': l.sort((a, b) => b.basePrice - a.basePrice); break;
      case 'az': l.sort((a, b) => a.nameAr.localeCompare(b.nameAr, 'ar')); break;
      default: l.sort((a, b) => parseFloat(b.orders) - parseFloat(a.orders));
    }
    return l;
  }, [activeCategory, search, sort, featuredOnly]);

  return (
    <section id={id} className="scroll-mt-24 max-w-7xl mx-auto px-4 pt-14">
      {featuredOnly ? (
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHead kicker="مختارات الشيف 🍗" title="الأطباق المميزة" sub="الأكثر طلباً في هذا النموذج التجريبي — اضغط على أي وجبة لتخصيصها." />
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2.5 rounded-full border-2 border-ink-950 text-sm font-black hover:bg-ink-950 hover:text-white transition">
            شوف المينيو كامل
          </button>
        </div>
      ) : (
        <SectionHead kicker="المينيو · Menu" title={title || 'المينيو الكامل'} sub="قلّب، بحَث، وخصّص وجبتك. جميع الأسماء والأسعار في هذا النموذج تجريبية وقابلة للتعديل." />
      )}

      {!featuredOnly && (
        <Reveal delay="reveal-d1" className="mt-6 bg-white border border-ink-900/10 rounded-[1.4rem] p-3 md:p-4 shadow-soft">
          {/* search row */}
          <div className="flex flex-col md:flex-row gap-3">
            <label className="flex-1 flex items-center gap-2 bg-cream-100 border border-ink-900/10 rounded-2xl px-4 py-3 focus-within:border-ink-950 transition">
              <Search size={18} className="text-ink-900/50 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="قلّب على wings, burger, دجاج, بطاطس, box, spicy…"
                className="flex-1 bg-transparent outline-none text-sm font-bold placeholder:text-ink-900/35 placeholder:font-bold"
              />
              {search && (
                <button onClick={() => setSearch('')} aria-label="مسح البحث" className="w-7 h-7 rounded-full bg-ink-900/10 flex items-center justify-center hover:bg-ink-950 hover:text-white transition">
                  <X size={14} />
                </button>
              )}
            </label>
            <label className="flex items-center gap-2 bg-cream-100 border border-ink-900/10 rounded-2xl px-4 py-3 md:w-60">
              <SlidersHorizontal size={16} className="text-ink-900/50 shrink-0" />
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent outline-none text-sm font-black flex-1 cursor-pointer">
                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </label>
          </div>
          {/* pills */}
          <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-black border-2 transition active:scale-95 ${
                  activeCategory === c.id ? 'bg-ink-950 text-white border-ink-950' : 'bg-white text-ink-900/70 border-ink-900/10 hover:border-ink-950'
                }`}
              >
                {c.nameAr}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[12px] font-bold text-ink-900/50 px-1">
            {search ? <>نتائج البحث عن <b className="text-ink-950">“{search}”</b>: <b className="text-brand-600">{list.length}</b> وجبة</> : <><b className="text-ink-950">{list.length}</b> وجبة متاحة (بيانات تجريبية)</>}
          </p>
        </Reveal>
      )}

      {list.length === 0 ? (
        <div className="mt-6 bg-white border-2 border-dashed border-ink-900/15 rounded-[1.6rem] py-16 px-6 text-center">
          <span className="mx-auto w-16 h-16 rounded-3xl bg-cream-100 flex items-center justify-center"><SearchX size={28} className="text-ink-900/50" /></span>
          <h3 className="mt-4 text-xl font-black">ما لقيناش هاد الوجبة 😅</h3>
          <p className="mt-1 text-sm font-bold text-ink-900/55">جرّب تبحث باسم آخر أو اكتشف باقي المينيو.</p>
          <button onClick={() => { setSearch(''); setActiveCategory('all'); }} className="mt-5 px-6 py-3 rounded-2xl bg-ink-950 text-white text-sm font-black hover:bg-brand-600 transition">
            عرض كل الوجبات
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {list.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      )}
    </section>
  );
}
