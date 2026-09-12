import React from 'react';
import { Plus, Eye, Clock } from 'lucide-react';
import { useStore } from '../store/StoreContext';
import { FoodImage, Stars } from './ui';
import { money } from '../data/menu';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, setQuickView } = useStore();

  const quickAdd = (e) => {
    e.stopPropagation();
    if (product.custom?.length) { setQuickView(product); return; }
    addToCart(product, 1, {}, product.basePrice);
  };

  return (
    <article
      onClick={() => setQuickView(product)}
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      className="animate-fade-up group cursor-pointer bg-white rounded-[1.4rem] border border-ink-900/10 overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <FoodImage src={product.image} alt={product.nameAr} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition" />
        {product.badge && (
          <span className="absolute top-3 right-3 text-[11px] font-black bg-ink-950 text-amber-300 px-3 py-1.5 rounded-full shadow flex items-center gap-1">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 left-3 text-[11px] font-black bg-white/95 px-2.5 py-1.5 rounded-full flex items-center gap-1">
          <Clock size={12} /> {product.time}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); setQuickView(product); }}
          aria-label="عرض سريع"
          className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition hover:bg-ink-950 hover:text-white"
        >
          <Eye size={17} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-black text-[15px] leading-6 text-ink-950">{product.nameAr}</h3>
          <Stars rating={product.rating || 4.7} />
        </div>
        <p className="text-[12px] text-ink-900/55 font-bold leading-5 mt-1 clamp-2">{product.description}</p>
        <div className="mt-1 text-[11px] font-bold text-ink-900/40">{product.nameEn} · {product.orders} طلب</div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div>
            <div className="text-[17px] font-black text-ink-950">{money(product.basePrice)}</div>
            <div className="text-[10px] font-bold text-ink-900/40">سعر تجريبي</div>
          </div>
          <button
            onClick={quickAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-ink-950 text-white text-[13px] font-black hover:bg-brand-600 transition active:scale-95 shadow-soft"
          >
            <Plus size={16} /> زيد للسلة
          </button>
        </div>
      </div>
    </article>
  );
}
