import React from 'react';
import { ArrowDown, Bike, Star, Flame, BadgeCheck } from 'lucide-react';
import { FoodImage } from './ui';
import Logo from './Logo';

export default function Hero() {
  const scrollMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
      {/* ember glows */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-brand-600/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-ember-500/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 font-black text-[19vw] leading-none text-stroke opacity-20 select-none pointer-events-none whitespace-nowrap hidden md:block">
        AFOULLOUS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-10 md:pt-20 md:pb-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* copy */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full ps-2 pe-4 py-1.5 text-[13px] font-bold text-amber-200">
            <span className="bg-brand-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full">جديد</span>
            وينغز سبايسي + صلصات أفولوس الخاصة
          </div>

          <h1 className="mt-5 text-[2.5rem] md:text-6xl font-black leading-[1.3] md:leading-[1.35]">
            الطعم اللي
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-ember-400 via-brand-500 to-ember-400 mx-2">
              يستاهل
              <svg className="absolute -bottom-2 right-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none"><path d="M2 8 Q 100 -2 198 6" stroke="#E0301E" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
            </span>
            التجربة 🍗
          </h1>

          <p className="mt-5 text-white/70 text-[15px] md:text-lg leading-8 max-w-xl">
            اكتشف تشكيلة أفولوس من الدجاج المقرمش والوينغز والبرجر — اختار وجبتك، خصّصها على ذوقك، واستلمها سخونة. تجربة طلب سريعة تشبه التطبيقات الكبرى.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button onClick={scrollMenu} className="group px-8 py-4 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-black text-base transition shadow-pop flex items-center gap-2 active:scale-[.98]">
              اطلب الآن
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition" />
            </button>
            <button onClick={scrollMenu} className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 font-black text-base transition active:scale-[.98]">
              اكتشف المينيو
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-bold text-white/70">
            <span className="inline-flex items-center gap-1.5"><Bike size={16} className="text-amber-300" /> توصيل + استلام (عرض تجريبي)</span>
            <span className="inline-flex items-center gap-1.5"><Star size={16} className="text-gold" /> 4.9 — تقييم عرض توضيحي</span>
            <span className="inline-flex items-center gap-1.5"><BadgeCheck size={16} className="text-emerald-400" /> دفع عند الاستلام</span>
          </div>

          {/* mini stats */}
          <div className="mt-8 grid grid-cols-3 max-w-md gap-3">
            {[
              ['+16', 'وجبة في المينيو'],
              ['8', 'أصناف وصلصات'],
              ['~20د', 'تحضير سريع*'],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-white/[.06] border border-white/10 px-3 py-3 text-center">
                <div className="text-xl font-black">{n}</div>
                <div className="text-[11px] text-white/60 font-bold mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-white/40">* أرقام توضيحية ضمن النموذج التجريبي.</p>
        </div>

        {/* visual */}
        <div className="relative animate-zoom-in">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl">
            <FoodImage
              src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000&auto=format&fit=crop"
              alt="دجاج أفولوس المقرمش"
              className="w-full h-[340px] md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 left-4 flex items-end justify-between gap-3">
              <div className="bg-white/95 backdrop-blur rounded-2xl px-4 py-3 text-ink-950 shadow-card">
                <p className="text-[12px] font-bold text-ink-900/60">بوكس اليوم</p>
                <p className="font-black">كرسبي تشيكن بوكس 🍗</p>
              </div>
              <div className="bg-ink-950/80 backdrop-blur border border-white/15 rounded-2xl px-4 py-3 text-center">
                <p className="text-amber-300 font-black text-lg leading-none">55 د.م.</p>
                <p className="text-[10px] text-white/60 font-bold mt-1">سعر تجريبي</p>
              </div>
            </div>
          </div>

          {/* floating cards */}
          <div className="absolute -top-4 -right-2 md:-right-5 animate-floaty bg-white text-ink-950 rounded-2xl shadow-card px-4 py-3 flex items-center gap-2.5 border border-ink-900/10">
            <span className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600"><Flame size={18} /></span>
            <span><span className="block text-[13px] font-black">سبايسي وينغز</span><span className="block text-[11px] text-ink-900/55 font-bold">الأكثر طلباً 🔥</span></span>
          </div>
          <div className="absolute -bottom-5 right-8 animate-floaty [animation-delay:1.2s] bg-ink-950 text-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2.5 border border-white/15">
            <Logo size={36} dark withWord={false} />
            <span><span className="block text-[13px] font-black">AFOULLOUS</span><span className="block text-[11px] text-white/60 font-bold">هوية الدجاج الأسود</span></span>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-t border-white/10 bg-ink-900/60 py-3 overflow-hidden" dir="ltr">
        <div className="flex gap-8 whitespace-nowrap animate-[marquee_22s_linear_infinite] w-max" style={{ animationDirection: 'reverse' }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-8 text-[13px] font-black text-white/60">
              {['CRISPY CHICKEN 🍗', 'SPICY WINGS 🔥', 'أفولوس', 'BURGERS 🍔', 'FAMILY BOX 📦', 'صلصات خاصة', 'FRESH & HOT'].map((t) => (
                <span key={t + k} className="flex items-center gap-8"><span>{t}</span><span className="text-brand-500">•</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
