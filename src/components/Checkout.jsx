import React, { useMemo, useState } from 'react';
import { X, Bike, Store, Banknote, CreditCard, Smartphone, CheckCircle2, ClipboardList, User, Phone, MapPin, StickyNote, ArrowLeft, PartyPopper } from 'lucide-react';
import { useStore } from '../store/StoreContext';
import { SITE, money } from '../data/menu';

const STEPS = ['مراجعة الطلب', 'المعلومات والدفع', 'التأكيد'];

export default function Checkout() {
  const { checkoutOpen, setCheckoutOpen, cart, counts, deliveryFee, total, clearCart, setCartOpen } = useStore();
  const [step, setStep] = useState(0);
  const [otype, setOtype] = useState('delivery');
  const [pay, setPay] = useState('cash');
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' });
  const [errs, setErrs] = useState({});
  const [orderNo, setOrderNo] = useState(null);

  const fee = otype === 'pickup' ? 0 : deliveryFee;
  const grand = counts.subtotal + fee;

  const order = useMemo(() => ({ no: orderNo, total: grand, count: counts.items }), [orderNo, grand, counts.items]);

  if (!checkoutOpen) return null;
  const close = () => { setCheckoutOpen(false); setTimeout(() => { setStep(0); setOrderNo(null); }, 300); };

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 3) e.name = 'دخل الاسم الكامل';
    if (!/^0[67]\d{8}$/.test(form.phone.replace(/[\s-]/g, ''))) e.phone = 'رقم مغربي: 06/07 + 8 أرقام (مثال 0612345678)';
    if (otype === 'delivery' && form.address.trim().length < 5) e.address = 'دخل عنوان التوصيل';
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    setOrderNo('AF-' + Math.floor(1000 + Math.random() * 9000));
    setStep(2);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-end md:items-center justify-center">
      <div onClick={close} className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm overlay-enter" />
      <div className="relative w-full md:max-w-2xl max-h-[93vh] overflow-y-auto no-scrollbar bg-cream-50 rounded-t-[1.8rem] md:rounded-[1.8rem] shadow-2xl animate-zoom-in">
        <div className="p-5 md:p-7 bg-ink-950 text-white rounded-t-[1.8rem]">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-lg flex items-center gap-2"><ClipboardList size={19} /> إتمام الطلب</h3>
            <button onClick={close} aria-label="إغلاق" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition"><X size={18} /></button>
          </div>
          {/* progress */}
          <div className="mt-4 flex items-center gap-2">
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-black ${i <= step ? 'bg-brand-500 text-white' : 'bg-white/15 text-white/60'}`}>{i < step ? '✓' : i + 1}</span>
                  <span className={`text-[12px] font-black hidden sm:block ${i <= step ? 'text-white' : 'text-white/50'}`}>{s}</span>
                </div>
                {i < STEPS.length - 1 && <span className="flex-1 h-[2px] bg-white/15 rounded"><span className={`block h-full rounded transition-all ${i < step ? 'bg-brand-500 w-full' : 'w-0'}`} /></span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="p-5 md:p-7">
          {step === 0 && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-5xl">🧺</p>
                  <p className="mt-3 font-black">السلة خاوية</p>
                  <button onClick={() => { close(); setTimeout(() => setCartOpen(true), 200); }} className="mt-4 px-6 py-3 rounded-2xl bg-ink-950 text-white text-sm font-black">رجع للسلة</button>
                </div>
              ) : (
                <>
                  <div className="space-y-2.5">
                    {cart.map((i) => (
                      <div key={i.key} className="flex items-center justify-between bg-white border border-ink-900/10 rounded-2xl px-4 py-3">
                        <div>
                          <p className="font-black text-[13px]">{i.nameAr} <span className="text-ink-900/45">× {i.qty}</span></p>
                          {i.selections?.length > 0 && <p className="text-[11px] font-bold text-ink-900/50">{i.selections.join(' · ')}</p>}
                        </div>
                        <p className="font-black text-[14px]">{money(i.unitPrice * i.qty)}</p>
                      </div>
                    ))}
                  </div>
                  {/* order type */}
                  <p className="mt-5 font-black text-[15px]">طريقة الاستلام</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <button onClick={() => setOtype('delivery')} className={`rounded-2xl border-2 p-4 text-right transition ${otype === 'delivery' ? 'border-ink-950 bg-ink-950 text-white' : 'border-ink-900/12 bg-white'}`}>
                      <Bike size={20} className={otype === 'delivery' ? 'text-amber-300' : 'text-brand-600'} />
                      <span className="block mt-1 font-black text-[14px]">توصيل</span>
                      <span className={`block text-[11px] font-bold ${otype === 'delivery' ? 'text-white/60' : 'text-ink-900/50'}`}>{SITE.deliveryTime}</span>
                    </button>
                    <button onClick={() => setOtype('pickup')} className={`rounded-2xl border-2 p-4 text-right transition ${otype === 'pickup' ? 'border-ink-950 bg-ink-950 text-white' : 'border-ink-900/12 bg-white'}`}>
                      <Store size={20} className={otype === 'pickup' ? 'text-amber-300' : 'text-brand-600'} />
                      <span className="block mt-1 font-black text-[14px]">استلام من المطعم</span>
                      <span className={`block text-[11px] font-bold ${otype === 'pickup' ? 'text-white/60' : 'text-ink-900/50'}`}>{SITE.pickupTime}</span>
                    </button>
                  </div>
                  <div className="mt-4 bg-white border border-ink-900/10 rounded-2xl p-4 text-[13px] font-bold text-ink-900/65 space-y-1.5">
                    <div className="flex justify-between"><span>المجموع الفرعي</span><span>{money(counts.subtotal)}</span></div>
                    <div className="flex justify-between"><span>التوصيل (تجريبي)</span><span>{fee === 0 ? 'مجاني 🎉' : money(fee)}</span></div>
                    <div className="flex justify-between font-black text-ink-950 text-base pt-1 border-t border-ink-900/10"><span>المجموع</span><span>{money(grand)}</span></div>
                  </div>
                  <button onClick={() => setStep(1)} className="mt-4 w-full py-4 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-black transition shadow-pop flex items-center justify-center gap-2">
                    متابعة <ArrowLeft size={18} />
                  </button>
                </>
              )}
            </>
          )}

          {step === 1 && (
            <>
              <div className="grid gap-3">
                <label className="block">
                  <span className="text-[13px] font-black flex items-center gap-1.5"><User size={14} /> الاسم الكامل *</span>
                  <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="مثال: ياسين العلوي" className={`mt-1.5 w-full bg-white border-2 rounded-2xl px-4 py-3 text-sm font-bold outline-none transition ${errs.name ? 'border-brand-500' : 'border-ink-900/10 focus:border-ink-950'}`} />
                  {errs.name && <span className="text-[12px] font-bold text-brand-600">{errs.name}</span>}
                </label>
                <label className="block">
                  <span className="text-[13px] font-black flex items-center gap-1.5"><Phone size={14} /> رقم الهاتف *</span>
                  <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="06XXXXXXXX" inputMode="tel" dir="ltr" className={`mt-1.5 w-full bg-white border-2 rounded-2xl px-4 py-3 text-sm font-bold outline-none transition text-left ${errs.phone ? 'border-brand-500' : 'border-ink-900/10 focus:border-ink-950'}`} />
                  {errs.phone && <span className="text-[12px] font-bold text-brand-600">{errs.phone}</span>}
                </label>
                {otype === 'delivery' ? (
                  <label className="block">
                    <span className="text-[13px] font-black flex items-center gap-1.5"><MapPin size={14} /> عنوان التوصيل *</span>
                    <textarea value={form.address} onChange={(e) => set('address', e.target.value)} placeholder="الحي، الزنقة، رقم العمارة… (عنوان تجريبي)" rows={2} className={`mt-1.5 w-full bg-white border-2 rounded-2xl px-4 py-3 text-sm font-bold outline-none transition ${errs.address ? 'border-brand-500' : 'border-ink-900/10 focus:border-ink-950'}`} />
                    {errs.address && <span className="text-[12px] font-bold text-brand-600">{errs.address}</span>}
                  </label>
                ) : (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 text-[13px] font-bold text-amber-900 flex gap-2">
                    <Store size={16} className="shrink-0 mt-0.5" /> الاستلام من: {SITE.address} — {SITE.pickupTime}
                  </div>
                )}
                <label className="block">
                  <span className="text-[13px] font-black flex items-center gap-1.5"><StickyNote size={14} /> ملاحظات (اختياري)</span>
                  <input value={form.note} onChange={(e) => set('note', e.target.value)} placeholder="بدون بصل، صلصة على جنب…" className="mt-1.5 w-full bg-white border-2 border-ink-900/10 rounded-2xl px-4 py-3 text-sm font-bold outline-none focus:border-ink-950 transition" />
                </label>
              </div>

              <p className="mt-5 font-black text-[15px]">طريقة الدفع <span className="text-[11px] font-bold text-ink-900/45 bg-ink-900/5 px-2 py-1 rounded-full">نموذج بدون دفع حقيقي</span></p>
              <div className="mt-2 grid gap-2">
                {[
                  ['cash', Banknote, 'الدفع عند الاستلام', 'خلّص كاش ملي توصلك الطلبية'],
                  ['card', CreditCard, 'بطاقة بنكية (قريباً)', 'واجهة توضيحية — غير مفعّلة'],
                  ['online', Smartphone, 'دفع إلكتروني (قريباً)', 'CIH / PayPal — للتوسع مستقبلاً'],
                ].map(([id, Icon, t, s]) => (
                  <button key={id} onClick={() => setPay(id)} className={`flex items-center gap-3 rounded-2xl border-2 p-3.5 text-right transition ${pay === id ? 'border-ink-950 bg-ink-950 text-white' : 'border-ink-900/12 bg-white'}`}>
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${pay === id ? 'bg-brand-500 text-white' : 'bg-cream-100'}`}><Icon size={18} /></span>
                    <span><span className="block font-black text-[14px]">{t}</span><span className={`block text-[11px] font-bold ${pay === id ? 'text-white/60' : 'text-ink-900/50'}`}>{s}</span></span>
                    {pay === id && <CheckCircle2 size={18} className="ms-auto text-emerald-400" />}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => setStep(0)} className="px-5 py-4 rounded-2xl border-2 border-ink-900/10 font-black text-sm hover:border-ink-950 transition">رجوع</button>
                <button onClick={submit} className="flex-1 py-4 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-black transition shadow-pop">
                  أكّد الطلب · {money(grand)}
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="text-center py-4">
              <span className="mx-auto w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center animate-pop"><PartyPopper size={34} className="text-emerald-600" /></span>
              <h4 className="mt-4 text-2xl font-black">تم استلام طلبك بنجاح 🎉</h4>
              <p className="mt-1 text-sm font-bold text-ink-900/60">شكراً {form.name || 'صديقنا'}! الطلبية غادية توجد دابا.</p>
              <div className="mt-5 bg-white border border-ink-900/10 rounded-3xl p-5 text-right space-y-2 text-[13px] font-bold">
                <div className="flex justify-between"><span className="text-ink-900/55">رقم الطلب</span><span className="font-black text-brand-600" dir="ltr">{order.no}</span></div>
                <div className="flex justify-between"><span className="text-ink-900/55">الطريقة</span><span>{otype === 'delivery' ? 'توصيل 🚚' : 'استلام من المطعم 🏠'}</span></div>
                <div className="flex justify-between"><span className="text-ink-900/55">الوقت المتوقع (تجريبي)</span><span>{otype === 'delivery' ? SITE.deliveryTime : SITE.pickupTime}</span></div>
                <div className="flex justify-between"><span className="text-ink-900/55">الدفع</span><span>{pay === 'cash' ? 'عند الاستلام' : 'إلكتروني (تجريبي)'}</span></div>
                <div className="flex justify-between border-t border-ink-900/10 pt-2 font-black text-base"><span>المجموع</span><span>{money(order.total)}</span></div>
              </div>
              <p className="mt-3 text-[11px] font-bold text-ink-900/45">هذا تأكيد تجريبي من الواجهة فقط — لا يتم إرسال أي طلب حقيقي.</p>
              <div className="mt-4 flex gap-2">
                <button onClick={close} className="flex-1 py-3.5 rounded-2xl bg-ink-950 text-white font-black text-sm hover:bg-brand-600 transition">رجوع للرئيسية</button>
                <button onClick={() => { setStep(0); setCheckoutOpen(false); }} className="flex-1 py-3.5 rounded-2xl border-2 border-ink-900/10 font-black text-sm hover:border-ink-950 transition">طلب جديد</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
