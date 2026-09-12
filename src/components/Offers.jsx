import React from 'react';
import { BadgePercent, ArrowLeft, Timer } from 'lucide-react';
import { OFFERS, PRODUCTS, money } from '../data/menu';
import { useStore } from '../store/StoreContext';
import { FoodImage, Reveal, SectionHead } from './ui';

export default function Offers() {
  const { addToCart, setCartOpen, pushToast } = useStore();

  const claim = (offer) => {
    // add first linked product as demo bundle (or family box)
    const main = PRODUCTS.find((p) => p.id === offer.productIds[0]);
    if (main) {
      addToCart({ ...main, nameAr: `${offer.title} — ${main.nameAr}` }, 1, {}, offer.price);
      setTimeout(() => setCartOpen(true), 250);
    } else pushToast('العرض تجريبي 🎁', offer.title);
  };

  return (
    <section id="offers" className="scroll-mt-24 mt-14 bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-50" />
      <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] bg-brand-600/25 blur-[110px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionHead light kicker="العروض · Promo" title="عروض تزيد المبيعات 🎁" sub="أمثلة تجريبية لحزم وباقات: وجبة + مشروب، بوكس للمشاركة، وعرض اليوم. الأسعار والنسب قابلة للتعديل." />
          <Reveal delay="reveal-d1" className="inline-flex items-center gap-2 text-[13px] font-black text-amber-300 bg-white/10 border border-white/15 rounded-full px-4 py-2">
            <Timer size={15} /> عروض محدودة — مثال توضيحي
          </Reveal>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-5">
          {OFFERS.map((o, i) => (
            <Reveal key={o.id} delay={i === 1 ? 'reveal-d1' : i === 2 ? 'reveal-d2' : ''}>
              <article className="group bg-white/[.06] border border-white/12 rounded-[1.6rem] overflow-hidden hover:border-amber-300/50 hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative">
                  <FoodImage src={o.image} alt={o.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 bg-amber-300 text-ink-950 text-[11px] font-black px-3 py-1.5 rounded-full flex items-center gap-1"><BadgePercent size={13} /> {o.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-lg">{o.title}</h3>
                  <p className="text-[13px] font-bold text-white/60 mt-1">{o.subtitle}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xl font-black text-amber-300">{money(o.price)}</span>
                    <span className="text-sm line-through text-white/40">{money(o.oldPrice)}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-white/60">تجريبي</span>
                  </div>
                  <button onClick={() => claim(o)} className="mt-4 w-full py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 font-black text-[14px] transition shadow-pop active:scale-[.98] flex items-center justify-center gap-2">
                    استفد من العرض <ArrowLeft size={16} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
