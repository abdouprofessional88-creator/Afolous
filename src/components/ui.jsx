import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { money } from '../data/menu';

/* Scroll-reveal wrapper */
export function Reveal({ children, delay = '', className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); } }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${delay} ${className}`}>{children}</Tag>;
}

export function SectionHead({ kicker, title, sub, light = false }) {
  return (
    <Reveal className="max-w-2xl">
      <span className={`inline-flex items-center gap-2 text-[13px] font-bold px-3 py-1.5 rounded-full border ${light ? 'border-white/20 bg-white/10 text-amber-200' : 'border-ink-900/15 bg-ink-900 text-cream-100'}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
        {kicker}
      </span>
      <h2 className={`mt-4 text-3xl md:text-[2.6rem] leading-[1.25] font-black ${light ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
      {sub && <p className={`mt-3 text-[15px] md:text-base leading-8 ${light ? 'text-white/70' : 'text-ink-900/60'}`}>{sub}</p>}
    </Reveal>
  );
}

export function Price({ value, old, dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-lg font-black ${dark ? 'text-white' : 'text-ink-900'}`}>{money(value)}</span>
      {old && <span className={`text-sm line-through ${dark ? 'text-white/50' : 'text-ink-900/40'}`}>{money(old)}</span>}
      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-ink-900/5 text-ink-900/50 border border-ink-900/10">سعر تجريبي</span>
    </div>
  );
}

/* Image with graceful fallback */
export function FoodImage({ src, alt, className = '' }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-ink-900 via-ink-800 to-brand-700 ${className}`}>
        <span className="text-5xl">🍗</span>
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className={className} />;
}

export function Toasts({ toasts }) {
  return (
    <div className="fixed bottom-5 right-1/2 translate-x-1/2 md:translate-x-0 md:right-5 z-[120] flex flex-col gap-2 items-center md:items-end">
      {toasts.map((t) => (
        <div key={t.id} className="animate-pop flex items-center gap-3 bg-ink-950 text-white ps-3 pe-4 py-2.5 rounded-2xl shadow-pop border border-white/10 max-w-[92vw]">
          <span className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shrink-0"><CheckCircle2 size={18} /></span>
          <span>
            <span className="block text-sm font-extrabold leading-5">{t.title}</span>
            {t.sub && <span className="block text-xs text-white/70 leading-5">{t.sub}</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Stars({ rating }) {
  return (
    <span className="inline-flex items-center gap-1 text-[12px] font-bold text-ink-900/70">
      <span className="text-gold">★</span> {rating}
    </span>
  );
}
