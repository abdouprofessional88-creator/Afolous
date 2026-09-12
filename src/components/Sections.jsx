import React from 'react';
import { MousePointerClick, SlidersHorizontal, BadgePercent, Bike, MapPin, Clock, Phone, Camera, Star, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '../data/menu';
import { FoodImage, Reveal, SectionHead } from './ui';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 max-w-7xl mx-auto px-4 pt-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center bg-white border border-ink-900/10 rounded-[2rem] overflow-hidden shadow-soft">
        <div className="relative min-h-[320px] lg:min-h-[460px]">
          <FoodImage src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1000&auto=format&fit=crop" alt="أجواء أفولوس" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink-950/30" />
          <div className="absolute bottom-4 right-4 bg-ink-950 text-white rounded-2xl px-4 py-3 flex items-center gap-3 border border-white/15">
            <Logo size={40} dark withWord={false} />
            <span><span className="block font-black text-sm">AFOULLOUS</span><span className="block text-[11px] text-white/60 font-bold">هوية بصرية مقترحة للعرض</span></span>
          </div>
        </div>
        <div className="p-7 md:p-10">
          <Reveal>
            <span className="inline-flex text-[13px] font-black px-3 py-1.5 rounded-full bg-ink-950 text-cream-100">حكاية أفولوس 🍗</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-[1.4]">نكهة مصممة لعشاق الدجاج المقرمش</h2>
            <p className="mt-4 text-[15px] leading-8 font-bold text-ink-900/60">
              أفولوس علامة تهتم بتقديم تجربة دجاج شهية — بهوية مميزة ومنتجات مصممة لعشاق النكهة.
              هذا النص عرض تقديمي مقترح (وليس تاريخاً رسمياً)، ويمكن لصاحب المطعم تزويدنا بالقصة الحقيقية لاحقاً.
            </p>
          </Reveal>
          <Reveal delay="reveal-d1" className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              ['الجودة', ShieldCheck, 'مكونات مختارة'],
              ['الطعم', Star, 'تتبيلات خاصة'],
              ['النظافة', HeartHandshake, 'معايير صارمة'],
              ['السرعة', Zap, 'تحضير سريع'],
              ['التجربة', MousePointerClick, 'طلب سهل'],
              ['الثقة', BadgePercent, 'عروض واضحة'],
            ].map(([t, Icon, s]) => (
              <div key={t} className="rounded-2xl bg-cream-100 border border-ink-900/10 p-3 text-center">
                <Icon size={20} className="mx-auto text-brand-600" />
                <p className="mt-1.5 font-black text-[13px]">{t}</p>
                <p className="text-[11px] font-bold text-ink-900/50">{s}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    [MousePointerClick, 'اطلب بسهولة', 'اختَر وجبتك وأكمل طلبك في خطوات بسيطة، بلا اتصالات ولا انتظار.'],
    [SlidersHorizontal, 'خصّص وجبتك', 'النكهة، الصلصات، الإضافات والمشروب — كلشي على ذوقك والسعر يتبدل مباشرة.'],
    [BadgePercent, 'اكتشف العروض', 'حزم وبوكسات عائلية وعرض اليوم — واضحة بالسعر قبل ما تطلب.'],
    [Bike, 'اختر طريقة الاستلام', 'توصيل لباب الدار أو استلام من المطعم، حسب المتاح (عرض تجريبي).'],
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 pt-14">
      <SectionHead kicker="علاش تطلب من الموقع؟" title="تجربة طلب أسرع وأوضح" sub="الفوائد التي سيحس بها الزبون من أول زيارة — وهي نفسها التي ترفع المبيعات للمطعم." />
      <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(([Icon, t, s], i) => (
          <Reveal key={t} delay={i === 1 ? 'reveal-d1' : i === 2 ? 'reveal-d2' : i === 3 ? 'reveal-d3' : ''} className="bg-white border border-ink-900/10 rounded-[1.6rem] p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <span className="w-12 h-12 rounded-2xl bg-ink-950 text-amber-300 flex items-center justify-center"><Icon size={22} /></span>
            <h3 className="mt-4 font-black text-[16px]">{t}</h3>
            <p className="mt-1.5 text-[13px] leading-7 font-bold text-ink-900/60">{s}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Info() {
  return (
    <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-4 pt-14 pb-4">
      <SectionHead kicker="معلومات المطعم" title="فين تلقانا؟ 📍" sub="جميع البيانات التالية مؤقتة (DEMO) — تُستبدل بالعنوان والهاتف وساعات العمل الحقيقية." />
      <div className="mt-7 grid md:grid-cols-3 gap-4">
        {[
          [MapPin, 'الموقع', SITE.address, 'التوصيل: حسب المناطق المتاحة (تُحدَّد لاحقاً)'],
          [Clock, 'أوقات العمل', SITE.hours, 'الاستلام: ' + SITE.pickupTime],
          [Phone, 'التواصل', SITE.phone, SITE.instagramHandle],
        ].map(([Icon, t, a, b], i) => (
          <Reveal key={t} delay={i === 1 ? 'reveal-d1' : i === 2 ? 'reveal-d2' : ''} className="bg-ink-950 text-white rounded-[1.6rem] p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-40" />
            <div className="relative">
              <span className="w-11 h-11 rounded-2xl bg-brand-500 flex items-center justify-center"><Icon size={20} /></span>
              <h3 className="mt-3 font-black">{t}</h3>
              <p className="mt-1 font-black text-amber-300 text-[14px]" dir="auto">{a}</p>
              <p className="mt-1 text-[12px] font-bold text-white/60">{b}</p>
              <span className="mt-3 inline-block text-[10px] font-black bg-white/10 border border-white/15 rounded-full px-2.5 py-1 text-white/60">DEMO — بيانات تجريبية</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-4 bg-gradient-to-l from-brand-600 to-ember-500 rounded-[1.6rem] p-6 md:p-8 text-white flex flex-col md:flex-row items-start md:items-center gap-4 justify-between shadow-pop">
        <div>
          <h3 className="font-black text-xl">جاهز تذوق الفرق؟ 🍗</h3>
          <p className="text-[13px] font-bold text-white/85 mt-1">تابعنا على إنستغرام وطلب وجبتك المفضلة في دقيقة.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-ink-950 font-black text-sm hover:bg-ink-950 hover:text-white transition">
            <Camera size={17} /> إنستغرام
          </a>
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="px-5 py-3 rounded-2xl bg-ink-950 font-black text-sm hover:bg-black transition">
            اطلب الآن
          </button>
        </div>
      </Reveal>
    </section>
  );
}
