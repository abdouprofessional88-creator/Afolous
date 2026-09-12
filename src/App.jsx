import { ShoppingBag, Camera } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CategoryNav from './components/CategoryNav.jsx';
import MenuSection from './components/MenuSection.jsx';
import ProductModal from './components/ProductModal.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Checkout from './components/Checkout.jsx';
import Offers from './components/Offers.jsx';
import ProductCard from './components/ProductCard.jsx';
import Logo from './components/Logo.jsx';
import { About, WhyUs, Info } from './components/Sections.jsx';
import { Reveal, SectionHead, Toasts } from './components/ui.jsx';
import { PRODUCTS, SITE, money } from './data/menu.js';
import { useStore } from './store/StoreContext.jsx';

function Featured() {
  const list = PRODUCTS.filter((p) => p.badge).slice(0, 4);
  return (
    <section className="max-w-7xl mx-auto px-4 pt-14">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <SectionHead kicker="مختارات الشيف 🍗" title="الأطباق المميزة" sub="الأكثر طلباً في هذا النموذج التجريبي — اضغط على أي وجبة لتخصيصها." />
        <button
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2.5 rounded-full border-2 border-ink-950 text-sm font-black hover:bg-ink-950 hover:text-white transition"
        >
          شوف المينيو كامل
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {list.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>
    </section>
  );
}

function MobileBar() {
  const { counts, setCartOpen } = useStore();
  if (counts.items === 0) return null;
  return (
    <button
      onClick={() => setCartOpen(true)}
      className="sm:hidden fixed bottom-4 inset-x-4 z-[90] bg-brand-500 text-white rounded-2xl px-5 py-4 flex items-center justify-between font-black shadow-pop"
      aria-label={`عرض السلة، ${counts.items} منتجات`}
    >
      <span className="flex items-center gap-2"><ShoppingBag size={18} /> السلة · {counts.items}</span>
      <span>{money(counts.subtotal)} ←</span>
    </button>
  );
}

function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="mt-14 bg-ink-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <Logo size={44} dark />
          <p className="mt-3 text-sm font-bold text-white/60 leading-7">تجربة دجاج شهية بهوية مميزة — اطلب، خصّص، واستمتع.</p>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-black text-amber-300 hover:underline">
            <Camera size={16} /> {SITE.instagramHandle}
          </a>
        </div>
        <div>
          <p className="font-black mb-4 text-sm text-white/40">روابط سريعة</p>
          <ul className="space-y-2.5 font-bold text-[15px]">
            {[['home', 'الرئيسية'], ['menu', 'المينيو'], ['offers', 'العروض'], ['about', 'علاش أفولوس'], ['contact', 'تواصل']].map(([id, l]) => (
              <li key={id}><button onClick={() => go(id)} className="text-white/70 hover:text-amber-300 transition">{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-black mb-4 text-sm text-white/40">الطلب</p>
          <ul className="space-y-2.5 font-bold text-[15px] text-white/70">
            <li>🛵 توصيل (حسب المتاح)</li>
            <li>🏃 استلام من المطعم</li>
            <li>💵 كاش · 💳 بطاقة (قريباً)</li>
          </ul>
        </div>
        <div>
          <p className="font-black mb-4 text-sm text-white/40">ملاحظة العرض</p>
          <p className="text-white/50 text-xs font-bold leading-6">نموذج تجريبي تفاعلي — الأسماء والأسعار والعنوان والهاتف وساعات العمل بيانات للتوضيح فقط وتُستبدل بالرسمية.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40 font-bold px-4">
        © 2026 AFOULLOUS. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

function Shell() {
  const { activeCategory, setActiveCategory, toasts } = useStore();
  return (
    <div className="min-h-screen bg-cream-50 text-ink-950 font-cairo">
      <Header />
      <main>
        <Hero />
        <CategoryNav active={activeCategory} onSelect={setActiveCategory} />
        <Reveal><Featured /></Reveal>
        <MenuSection />
        <Offers />
        <About />
        <WhyUs />
        <Info />
      </main>
      <Footer />
      <ProductModal />
      <CartDrawer />
      <Checkout />
      <Toasts toasts={toasts} />
      <MobileBar />
    </div>
  );
}

export default function App() {
  return <Shell />;
}
