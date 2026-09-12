import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { SITE } from '../data/menu';

const StoreCtx = createContext(null);
export const useStore = () => useContext(StoreCtx);

const load = (k, fb) => {
  try {
    const v = sessionStorage.getItem(k);
    return v ? JSON.parse(v) : fb;
  } catch { return fb; }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => load('af-cart', []));
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quickView, setQuickView] = useState(null); // product
  const [toasts, setToasts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const idRef = useRef(0);

  useEffect(() => {
    try { sessionStorage.setItem('af-cart', JSON.stringify(cart)); } catch { /* ignore */ }
  }, [cart]);

  const pushToast = useCallback((title, sub) => {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, title, sub }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);

  const addToCart = useCallback((product, qty = 1, selections = {}, unitPrice = null) => {
    const price = unitPrice ?? product.basePrice;
    const selLabels = [];
    (product.custom || []).forEach((g) => {
      const v = selections[g.id];
      if (!v) return;
      if (g.type === 'multi') {
        (Array.isArray(v) ? v : []).forEach((oid) => {
          const o = g.options.find((x) => x.id === oid);
          if (o) selLabels.push(o.label);
        });
      } else {
        const o = g.options.find((x) => x.id === v);
        if (o && o.price === 0 && g.default === v) {
          // skip default zero-price to keep label short, unless meaningful
          if (['flavor', 'size', 'formula', 'heat', 'kind', 'mix'].includes(g.id)) selLabels.push(o.label);
        } else if (o) selLabels.push(o.label);
      }
    });
    const key = product.id + '|' + JSON.stringify(selections);
    setCart((c) => {
      const found = c.find((i) => i.key === key);
      if (found) return c.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
      return [...c, {
        key, productId: product.id, nameAr: product.nameAr, nameEn: product.nameEn,
        image: product.image, unitPrice: price, qty, selections: selLabels,
      }];
    });
    pushToast('تْزادت للسلة 🍗', `${product.nameAr} × ${qty}`);
  }, [pushToast]);

  const updateQty = useCallback((key, delta) => {
    setCart((c) => c.map((i) => (i.key === key ? { ...i, qty: Math.max(1, i.qty + delta) } : i)));
  }, []);

  const removeItem = useCallback((key) => {
    setCart((c) => c.filter((i) => i.key !== key));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const counts = useMemo(() => ({
    items: cart.reduce((s, i) => s + i.qty, 0),
    subtotal: cart.reduce((s, i) => s + i.qty * i.unitPrice, 0),
  }), [cart]);

  const deliveryFee = counts.subtotal === 0 ? 0 : counts.subtotal >= SITE.freeDeliveryOver ? 0 : SITE.deliveryFee;
  const total = counts.subtotal + deliveryFee;

  const value = {
    cart, cartOpen, setCartOpen, checkoutOpen, setCheckoutOpen,
    quickView, setQuickView, toasts, pushToast,
    activeCategory, setActiveCategory, search, setSearch,
    addToCart, updateQty, removeItem, clearCart,
    counts, deliveryFee, total,
  };
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}
