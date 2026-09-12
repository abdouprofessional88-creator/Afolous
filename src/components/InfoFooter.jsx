import Logo from './Logo.jsx'
import Reveal from './Reveal.jsx'
import { CONTACT } from '../data/menu.js'

export function Info() {
  return (
    <section id="contact" className="py-20 bg-ink-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-10">
            <div className="text-[#FF6B35] font-black text-sm mb-1">— فين لقاونا؟</div>
            <h2 className="font-display font-black text-3xl sm:text-5xl">معلومات المطعم 📍</h2>
            <p className="text-white/50 text-sm font-bold mt-2">البيانات أسفله placeholders تجريبية — تُستبدل بالمعلومات الرسمية</p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '📍', t: 'الموقع', d: CONTACT.addressPlaceholder, tag: 'تجريبي' },
            { icon: '🕐', t: 'أوقات العمل', d: CONTACT.hoursPlaceholder, tag: 'تجريبي' },
            { icon: '📞', t: 'الهاتف', d: CONTACT.phonePlaceholder, tag: 'تجريبي', ltr: true },
            { icon: '📸', t: 'إنستغرام', d: CONTACT.instagramLabel, tag: 'رسمي', link: CONTACT.instagram },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-lift bg-white/5 border border-white/10 rounded-3xl p-6 text-center h-full">
                <div className="text-3xl mb-3">{c.icon}</div>
                <div className="font-black mb-1">{c.t}</div>
                <div className="text-sm text-white/60 font-bold leading-relaxed" dir={c.ltr ? 'ltr' : 'rtl'}>{c.d}</div>
                <span className={`inline-block mt-3 text-[10px] font-black px-2.5 py-1 rounded-full ${c.tag === 'رسمي' ? 'bg-green-500/20 text-green-300' : 'bg-[#E8B44A]/15 text-[#E8B44A]'}`}>{c.tag}</span>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noreferrer" className="block mt-3 text-sm font-black text-[#FF6B35] hover:underline">تابعنا ←</a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-14 pb-28 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <Logo size={44} light={false} />
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              تجربة دجاج شهية بهوية مميزة — اطلب، خصّص، واستمتع.
            </p>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 btn-ghost rounded-full px-5 py-2.5 text-sm font-black">
              📸 {CONTACT.instagramLabel}
            </a>
          </div>
          <div>
            <div className="font-black mb-4 text-sm text-white/40 tracking-wide">روابط سريعة</div>
            <ul className="space-y-2.5 font-bold text-[15px]">
              {[['#home', 'الرئيسية'], ['#menu', 'المينيو'], ['#offers', 'العروض'], ['#about', 'علاش أفولوس'], ['#contact', 'تواصل']].map(([h, l]) => (
                <li key={h}><a href={h} className="text-white/70 hover:text-[#FF6B35] transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-black mb-4 text-sm text-white/40 tracking-wide">الطلب</div>
            <ul className="space-y-2.5 font-bold text-[15px] text-white/70">
              <li>🛵 توصيل (حسب المتاح)</li>
              <li>🏃 استلام من المطعم</li>
              <li>💵 كاش · 💳 بطاقة (قريباً)</li>
              <li className="text-white/40 text-sm">رسوم التوصيل التجريبية: {CONTACT.deliveryFee} د.م.</li>
            </ul>
          </div>
          <div>
            <div className="font-black mb-4 text-sm text-white/40 tracking-wide">النشرة البريدية</div>
            <p className="text-white/50 text-sm mb-3 font-bold">توصل بالعروض الجديدة (عرض تجريبي)</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input placeholder="رقم الهاتف" inputMode="tel" aria-label="رقم الهاتف للنشرة"
                className="flex-1 min-w-0 bg-white/5 border border-white/15 rounded-full px-4 py-2.5 text-sm font-bold outline-none focus:border-[#FF6B35] placeholder:opacity-40" />
              <button className="btn-ember text-white font-black rounded-full px-5 py-2.5 text-sm shrink-0" aria-label="اشتراك">اشترك</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-bold">
          <span>© 2026 AFOULLOUS. جميع الحقوق محفوظة.</span>
          <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">نموذج عرض تجريبي · الأسعار والبيانات للتوضيح فقط</span>
        </div>
      </div>
    </footer>
  )
}
