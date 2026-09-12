import React, { useEffect, useState } from 'react';
import { ShoppingBag, Menu, X, Bike, Store } from 'lucide-react';
import Logo from './Logo';
import { useStore } from '../store/StoreContext';

const LINKS = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'menu', label: 'المينيو' },
  { id: 'offers', label: 'العروض' },
  { id: 'about', label: 'قصتنا' },
  { id: 'contact', label: 'تواصل معنا' },
];

export default function Header() {
  const { counts, setCartOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => {
    if (!counts.items) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 400);
    return () => clearTimeout(t);
  }, [counts.items]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* top strip */}
      <div className="bg-ink-950 text-cream-100 text-[12px] font-bold">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center md:justify-between gap-3">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            التوصيل والاستلام متاحان — نموذج تجريبي للعرض
          </p>
          <p className="hidden md:flex items-center gap-4 text-white/60">
            <span className="inline-flex items-center gap-1"><Bike size={14} /> توصيل سريع</span>
            <span className="inline-flex items-center gap-1"><Store size={14} /> استلام من المطعم</span>
          </p>
        </div>
      </div>

      <header className={`sticky top-0 z-[80] transition-all duration-300 ${scrolled ? 'bg-cream-50/90 backdrop-blur-xl shadow-soft border-b border-ink-900/10' : 'bg-cream-50 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between gap-3">
          <button onClick={() => go('home')} aria-label="AFOULLOUS home"><Logo /></button>

          <nav className="hidden lg:flex items-center gap-1 bg-ink-900/[.04] border border-ink-900/10 rounded-full p-1.5">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="px-5 py-2 rounded-full text-sm font-extrabold text-ink-900/70 hover:text-ink-950 hover:bg-white transition">
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go('menu')}
              className="hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-black bg-ink-950 text-white hover:bg-brand-600 transition shadow-soft"
            >
              اطلب الآن
            </button>
            <button
              onClick={() => setCartOpen(true)}
              aria-label="فتح السلة"
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-500 text-white text-sm font-black hover:bg-brand-600 transition shadow-pop"
            >
              <ShoppingBag size={18} />
              <span className="hidden sm:inline">السلة</span>
              <span className={`min-w-[22px] h-[22px] px-1 rounded-full bg-white text-ink-950 text-[12px] font-black flex items-center justify-center ${bump ? 'animate-pop' : ''}`}>
                {counts.items}
              </span>
            </button>
            <button onClick={() => setOpen(!open)} aria-label="القائمة" className="lg:hidden w-11 h-11 rounded-full border border-ink-900/15 flex items-center justify-center bg-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[380px]' : 'max-h-0'}`}>
          <nav className="px-4 pb-4 flex flex-col gap-1.5">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="text-right px-4 py-3 rounded-2xl bg-white border border-ink-900/10 font-extrabold text-ink-900 hover:bg-ink-950 hover:text-white transition">
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
