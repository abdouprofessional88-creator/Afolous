import React, { useEffect, useMemo, useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Flame, Info } from 'lucide-react';
import { useStore } from '../store/StoreContext';
import { PRODUCTS, money } from '../data/menu';
import { FoodImage, Stars } from './ui';

export function calcUnit(product, selections) {
  let p = product.basePrice;
  (product.custom || []).forEach((g) => {
    const v = selections[g.id];
    if (v == null) return;
    if (g.type === 'multi') {
      (v || []).forEach((oid) => { const o = g.options.find((x) => x.id === oid); if (o) p += o.price; });
    } else {
      const o = g.options.find((x) => x.id === v);
      if (o) p += o.price;
    }
  });
  return p;
}

export default function ProductModal() {
  const { quickView: product, setQuickView, addToCart, setCartOpen } = useStore();
  const [sel, setSel] = useState({});
  const [qty, setQty] = useState(1);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (product) {
      const d = {};
      (product.custom || []).forEach((g) => {
        if (g.default) d[g.id] = g.default;
        else if (g.type === 'multi') d[g.id] = [];
      });
      setSel(d); setQty(1); setClosing(false);
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  useEffect(() => {
    const f = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', f);
    return () => window.removeEventListener('keydown', f);
  });

  if (!product) return null;
  const close = () => { setClosing(true); setTimeout(() => setQuickView(null), 180); };

  const unit = calcUnit(product, sel);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const setSingle = (gid, oid) => setSel((s) => ({ ...s, [gid]: oid }));
  const toggleMulti = (gid, oid) => setSel((s) => {
    const arr = Array.isArray(s[gid]) ? s[gid] : [];
    return { ...s, [gid]: arr.includes(oid) ? arr.filter((x) => x !== oid) : [...arr, oid] };
  });

  const submit = () => {
    addToCart(product, qty, sel, unit);
    close();
    setTimeout(() => setCartOpen(true), 250);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      <div onClick={close} className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm overlay-enter" />
      <div className={`relative w-full md:max-w-3xl max-h-[92vh] overflow-y-auto no-scrollbar bg-cream-50 rounded-t-[1.8rem] md:rounded-[1.8rem] shadow-2xl ${closing ? 'opacity-0 scale-95 transition duration-200' : 'animate-zoom-in'}`}>
        <div className="relative">
          <FoodImage src={product.image} alt={product.nameAr} className="w-full h-60 md:h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
          <button onClick={close} aria-label="إغلاق" className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-ink-950 hover:text-white transition">
            <X size={18} />
          </button>
          {product.badge && <span className="absolute top-4 right-4 text-[12px] font-black bg-amber-300 text-ink-950 px-3 py-1.5 rounded-full">{product.badge}</span>}
          <div className="absolute bottom-4 right-5 left-5 flex items-end justify-between gap-3 text-white">
            <div>
              <h3 className="text-xl md:text-2xl font-black">{product.nameAr}</h3>
              <p className="text-[12px] text-white/70 font-bold">{product.nameEn}</p>
            </div>
            <Stars rating={product.rating || 4.7} />
          </div>
        </div>

        <div className="p-5 md:p-7">
          <p className="text-sm leading-7 font-bold text-ink-900/65">{product.description}</p>
          <p className="mt-2 flex items-center gap-1.5 text-[12px] font-bold text-ink-900/45"><Info size={13} /> القيم الغذائية ومسببات الحساسية: تُحدَّد مع المطعم لاحقاً (DEMO).</p>

          {(product.custom || []).map((g) => (
            <div key={g.id} className="mt-5">
              <p className="font-black text-[15px] flex items-center gap-2">
                {g.title}
                {g.required && <span className="text-[10px] bg-brand-50 text-brand-600 border border-brand-500/20 px-2 py-0.5 rounded-full">إجباري</span>}
              </p>
              <div className={`mt-2.5 gap-2 ${g.type === 'multi' ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-wrap'}`}>
                {g.options.map((o) => {
                  const activeM = g.type === 'multi' ? (sel[g.id] || []).includes(o.id) : sel[g.id] === o.id;
                  return (
                    <button
                      key={o.id}
                      onClick={() => (g.type === 'multi' ? toggleMulti(g.id, o.id) : setSingle(g.id, o.id))}
                      className={`px-4 py-2.5 rounded-2xl border-2 text-[13px] font-black transition active:scale-95 text-right ${
                        activeM ? 'bg-ink-950 text-white border-ink-950 shadow-soft' : 'bg-white border-ink-900/12 text-ink-900/75 hover:border-ink-950'
                      }`}
                    >
                      {o.label}
                      {o.price > 0 && <span className={`block text-[11px] font-bold ${activeM ? 'text-amber-300' : 'text-brand-600'}`}>+ {money(o.price)}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {related.length > 0 && (
            <div className="mt-6">
              <p className="font-black text-[15px]">قد يعجبك أيضاً 👀</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {related.map((r) => (
                  <button key={r.id} onClick={() => { setQuickView(null); setTimeout(() => setQuickView(r), 120); }} className="bg-white border border-ink-900/10 rounded-2xl overflow-hidden text-right hover:border-ink-950 transition">
                    <FoodImage src={r.image} alt={r.nameAr} className="w-full h-20 object-cover" />
                    <span className="block p-2 text-[11px] font-black leading-4">{r.nameAr}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* sticky footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur border-t border-ink-900/10 p-4 flex items-center gap-3">
          <div className="flex items-center gap-1 bg-cream-100 rounded-2xl p-1 border border-ink-900/10">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="نقص" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center hover:bg-ink-950 hover:text-white transition"><Minus size={16} /></button>
            <span className="w-8 text-center font-black">{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} aria-label="زيد" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center hover:bg-ink-950 hover:text-white transition"><Plus size={16} /></button>
          </div>
          <button onClick={submit} className="flex-1 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-black text-[15px] transition shadow-pop active:scale-[.98] flex items-center justify-center gap-2">
            <ShoppingBag size={18} /> زيد للسلة · {money(unit * qty)}
          </button>
        </div>
        <p className="text-center text-[11px] font-bold text-ink-900/40 pb-4 bg-white flex items-center justify-center gap-1"><Flame size={12} /> السعر يتحدث تلقائياً حسب التخصيص — أسعار تجريبية.</p>
      </div>
    </div>
  );
}
