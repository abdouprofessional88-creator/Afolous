import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Bike } from 'lucide-react';
import { useStore } from '../store/StoreContext';
import { SITE, money } from '../data/menu';
import { FoodImage } from './ui';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeItem, counts, deliveryFee, total, setCheckoutOpen } = useStore();
  if (!cartOpen) return null;

  const toCheckout = () => { setCartOpen(false); setTimeout(() => setCheckoutOpen(true), 150); };

  return (
    <div className="fixed inset-0 z-[100]">
      <div onClick={() => setCartOpen(false)} className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm overlay-enter" />
      <aside className="absolute top-0 bottom-0 left-0 w-full max-w-md bg-cream-50 shadow-2xl flex flex-col animate-[fade-up_.3s_ease_both]" style={{ animationName: 'slideIn' }}>
        <style>{`@keyframes slideIn{from{transform:translateX(-100%)}to{transform:none}}`}</style>
        <div className="p-5 bg-ink-950 text-white flex items-center justify-between">
          <div>
            <h3 className="font-black text-lg flex items-center gap-2"><ShoppingBag size={19} /> سلة الطلب</h3>
            <p className="text-[12px] text-white/60 font-bold mt-0.5">{counts.items} منتج · الأسعار تجريبية</p>
          </div>
          <button onClick={() => setCartOpen(false)} aria-label="إغلاق السلة" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition"><X size={18} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <span className="text-6xl">🧺</span>
              <h4 className="mt-4 font-black text-lg">السلة خاوية</h4>
              <p className="mt-1 text-sm font-bold text-ink-900/55">ما زال ما اخترتي والو — المينيو عامر بالبنين 😋</p>
              <button onClick={() => { setCartOpen(false); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-5 px-6 py-3 rounded-2xl bg-ink-950 text-white text-sm font-black hover:bg-brand-600 transition">
                اكتشف المينيو
              </button>
            </div>
          ) : cart.map((i) => (
            <div key={i.key} className="bg-white border border-ink-900/10 rounded-3xl p-3 flex gap-3 shadow-soft">
              <FoodImage src={i.image} alt={i.nameAr} className="w-20 h-20 rounded-2xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-black text-[13px] leading-5">{i.nameAr}</p>
                  <button onClick={() => removeItem(i.key)} aria-label="حذف" className="text-ink-900/35 hover:text-brand-600 transition shrink-0"><Trash2 size={16} /></button>
                </div>
                {i.selections?.length > 0 && <p className="mt-1 text-[11px] font-bold text-ink-900/50 leading-5">{i.selections.join(' · ')}</p>}
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-cream-100 rounded-full p-1 border border-ink-900/10">
                    <button onClick={() => updateQty(i.key, -1)} aria-label="نقص" className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-ink-950 hover:text-white transition"><Minus size={13} /></button>
                    <span className="w-6 text-center text-[13px] font-black">{i.qty}</span>
                    <button onClick={() => updateQty(i.key, 1)} aria-label="زيد" className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-ink-950 hover:text-white transition"><Plus size={13} /></button>
                  </div>
                  <p className="font-black text-[14px]">{money(i.unitPrice * i.qty)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-ink-900/10 bg-white p-5 space-y-2">
            <div className="flex justify-between text-[13px] font-bold text-ink-900/60"><span>المجموع الفرعي</span><span>{money(counts.subtotal)}</span></div>
            <div className="flex justify-between text-[13px] font-bold text-ink-900/60">
              <span className="inline-flex items-center gap-1"><Bike size={14} /> التوصيل (تجريبي)</span>
              <span>{deliveryFee === 0 ? 'مجاني 🎉' : money(deliveryFee)}</span>
            </div>
            {counts.subtotal < SITE.freeDeliveryOver && (
              <p className="text-[11px] font-bold text-brand-600 bg-brand-50 border border-brand-500/20 rounded-xl px-3 py-2">
                زيد {money(SITE.freeDeliveryOver - counts.subtotal)} باش يولّي التوصيل فابور 🚚
              </p>
            )}
            <div className="flex justify-between font-black text-lg pt-1"><span>المجموع</span><span>{money(total)}</span></div>
            <button onClick={toCheckout} className="w-full py-4 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-black transition shadow-pop active:scale-[.99] flex items-center justify-center gap-2">
              تأكيد الطلب <ArrowLeft size={18} />
            </button>
            <button onClick={() => setCartOpen(false)} className="w-full py-3 rounded-2xl border-2 border-ink-900/10 font-black text-sm hover:border-ink-950 transition">
              كمّل التسوق
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
