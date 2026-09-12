import React from 'react';
import { Camera, Phone, MapPin, Clock, Bike, Store as StoreIcon, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '../data/menu';

const NAV = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'menu', label: 'المينيو' },
  { id: 'offers', label: 'العروض' },
  { id: 'about', label: 'علاش أفولوس' },
  { id: 'contact', label: 'تواصل معانا' },
];

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer className="mt-16 bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-60" aria-hidden />
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo dark />
            <p className="mt-4 text-sm leading-7 text-white/60">
              تجربة دجاج شهية بهوية مميزة — اطلب، خصّص وجبتك، واستلمها بالطريقة اللي تناسبك.
            </p>
            <a
              href={SITE.instagram} target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white/85 hover:border-brand-500 hover:text-white transition"
            >
              <Camera size={16} /> {SITE.instagramHandle}
            </a>
          </div>

          <nav aria-label="روابط سريعة">
            <h3 className="text-sm font-black text-white/40 tracking-wide mb-4">روابط سريعة</h3>
            <ul className="space-y-2.5 text-[15px] font-bold">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => go(n.id)} className="text-white/70 hover:text-ember-400 transition">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-black text-white/40 tracking-wide mb-4">الطلب والاستلام</h3>
            <ul className="space-y-2.5 text-[15px] font-bold text-white/70">
              <li className="flex items-center gap-2"><Bike size={16} className="text-ember-400" /> توصيل (حسب المتاح)</li>
              <li className="flex items-center gap-2"><StoreIcon size={16} className="text-ember-400" /> استلام من المطعم</li>
              <li className="flex items-center gap-2"><Clock size={16} className="text-ember-400" /> {SITE.hours}</li>
              <li className="flex items-center gap-2" dir="ltr" style={{ textAlign: 'right' }}>
                <Phone size={16} className="text-ember-400" /> <span className="text-white/50 text-sm">{SITE.phone} (تجريبي)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={16} className="text-ember-400 shrink-0 mt-0.5" /> {SITE.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-white/40 tracking-wide mb-4">توصّل بالجديد</h3>
            <p className="text-sm text-white/50 font-bold mb-3">العروض والوجبات الجديدة — نموذج تجريبي</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <label htmlFor="nl-phone" className="sr-only">رقم الهاتف</label>
              <input
                id="nl-phone" inputMode="tel" placeholder="06 XX XX XX XX"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold placeholder:text-white/30 outline-none focus:border-brand-500"
              />
              <button className="shrink-0 rounded-full bg-brand-500 hover:bg-brand-600 transition px-5 py-2.5 text-sm font-black">
                اشترك
              </button>
            </form>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-5 inline-flex items-center gap-2 text-xs font-black text-white/50 hover:text-white transition"
            >
              <span className="w-9 h-9 rounded-full border border-white/15 grid place-items-center"><ArrowUp size={15} /></span>
              رجوع للفوق
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs font-bold text-white/40">
          <span>© 2026 AFOULLOUS — جميع الحقوق محفوظة.</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            نموذج عرض تجريبي · الأسعار والبيانات للتوضيح فقط
          </span>
        </div>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </footer>
  );
}
