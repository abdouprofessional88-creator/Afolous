# AFOULLOUS — أفولوس · Restaurant Ordering Demo

High-end, Arabic-first (RTL) restaurant ordering prototype: menu, meal
customization, cart, checkout simulation, offers, and brand sections.

> ⚠️ **Demo data:** product names, prices, address, phone, hours and time
> estimates are placeholders (`src/data/menu.js` → `SITE`). Replace them
> with the restaurant's real information before any public launch.

## Run the project

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Where to update real data later

| What | File |
|---|---|
| Products, categories, prices, offers | `src/data/menu.js` |
| Phone, address, hours, Instagram, delivery fee | `SITE` object in `src/data/menu.js` |
| Logo (current: recreated vector chicken) | `src/components/Logo.jsx` |
| Food photos (current: Unsplash + fallback) | `image` fields in `src/data/menu.js` |

## Stack

React 18 · Vite 5 · Tailwind CSS 3 · lucide-react · no backend (cart &
checkout run on frontend state, cart persists per session).
