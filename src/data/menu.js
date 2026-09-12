// ─── AFOULLOUS · central demo config ─────────────────────────────
// كل ما هو موسوم بـ DEMO يجب استبداله بالبيانات الحقيقية لاحقاً.

export const SITE = {
  brand: 'AFOULLOUS',
  brandAr: 'أفولوس',
  tagline: 'الطعم اللي يستاهل التجربة',
  instagram: 'https://www.instagram.com/afoullous.mks/', // الحساب الرسمي
  instagramHandle: '@afoullous.mks',
  phone: '06 XX XX XX XX', // DEMO placeholder — لا رقم حقيقي
  address: 'عنوان المتجر — يُحدَّد لاحقاً (DEMO)',
  hours: 'يومياً: 11:30 — 23:30 (توقيت تجريبي)',
  deliveryFee: 20, // DEMO درهم
  freeDeliveryOver: 150, // DEMO
  currency: 'د.م.',
  pickupTime: '15–20 دقيقة (تقدير تجريبي)',
  deliveryTime: '30–45 دقيقة (تقدير تجريبي)',
};

export const CATEGORIES = [
  { id: 'all', nameAr: 'الكل', nameEn: 'All', icon: 'sparkles' },
  { id: 'chicken', nameAr: 'وجبات الدجاج', nameEn: 'Chicken', icon: 'drumstick' },
  { id: 'wings', nameAr: 'وينغز', nameEn: 'Wings', icon: 'flame' },
  { id: 'burgers', nameAr: 'برجر', nameEn: 'Burgers', icon: 'burger' },
  { id: 'box', nameAr: 'بوكسات', nameEn: 'Box Meals', icon: 'box' },
  { id: 'sides', nameAr: 'بطاطس وإضافات', nameEn: 'Sides', icon: 'fries' },
  { id: 'sauces', nameAr: 'صلصات', nameEn: 'Sauces', icon: 'drop' },
  { id: 'drinks', nameAr: 'مشروبات', nameEn: 'Drinks', icon: 'cup' },
];

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

// ─── Products (DEMO menu — replace names/prices/images later) ───
export const PRODUCTS = [
  {
    id: 'wings-classic-6',
    nameAr: 'وينغز كلاسيك — 6 قطع',
    nameEn: 'Classic Wings · 6pc',
    category: 'wings',
    description: 'أجنحة دجاج مقرمشة بتتبيلة أفولوس الخاصة، تُقدَّم ساخنة مع صلصة من اختيارك.',
    image: img('photo-1527477396000-e27163b481c2'),
    basePrice: 45,
    badge: 'الأكثر طلباً',
    rating: 4.9,
    orders: '2.4k',
    time: '15 د',
    keywords: ['wings', 'دجاج', 'اجنحة', 'وينغز', 'مقرمش'],
    custom: [
      {
        id: 'flavor', title: 'اختار النكهة', type: 'single', required: true, default: 'f-original',
        options: [
          { id: 'f-original', label: 'أوريجينال', price: 0 },
          { id: 'f-spicy', label: 'سبايسي 🌶️', price: 5 },
          { id: 'f-bbq', label: 'باربكيو مدخّن', price: 5 },
        ],
      },
      {
        id: 'size', title: 'عدد القطع', type: 'single', required: true, default: 's6',
        options: [
          { id: 's6', label: '6 قطع', price: 0 },
          { id: 's10', label: '10 قطع', price: 25 },
          { id: 's14', label: '14 قطع', price: 45 },
        ],
      },
      {
        id: 'sauce', title: 'الصلصة', type: 'single', required: false, default: 'sc-garlic',
        options: [
          { id: 'sc-garlic', label: 'ثومية', price: 0 },
          { id: 'sc-spicy', label: 'حارة', price: 0 },
          { id: 'sc-bbq', label: 'باربكيو', price: 0 },
          { id: 'sc-cheese', label: 'جبن (+6)', price: 6 },
        ],
      },
      {
        id: 'extras', title: 'إضافات', type: 'multi',
        options: [
          { id: 'x-fries', label: 'بطاطس مقلية', price: 12 },
          { id: 'x-drink', label: 'مشروب غازي', price: 8 },
          { id: 'x-sauce', label: 'صلصة إضافية', price: 6 },
        ],
      },
    ],
  },
  {
    id: 'wings-spicy',
    nameAr: 'سبايسي وينغز',
    nameEn: 'Spicy Wings',
    category: 'wings',
    description: 'لعشاق الحرارة: وينغز متبّلة بصلصة حارة مدخنة مع لمسة عسل خفيفة.',
    image: img('photo-1512152272829-e3139592d56f'),
    basePrice: 52,
    badge: 'حار 🔥',
    rating: 4.8,
    orders: '1.8k',
    time: '15 د',
    keywords: ['spicy', 'wings', 'حار', 'وينغز'],
    custom: [
      {
        id: 'heat', title: 'درجة الحرارة', type: 'single', required: true, default: 'h-med',
        options: [
          { id: 'h-med', label: 'متوسطة', price: 0 },
          { id: 'h-hot', label: 'حارة', price: 0 },
          { id: 'h-fire', label: 'نار (+4)', price: 4 },
        ],
      },
      {
        id: 'extras', title: 'إضافات', type: 'multi',
        options: [
          { id: 'x-fries', label: 'بطاطس', price: 12 },
          { id: 'x-cool', label: 'صلصة مبردة', price: 6 },
        ],
      },
    ],
  },
  {
    id: 'chicken-crispy-box',
    nameAr: 'كرسبي تشيكن بوكس',
    nameEn: 'Crispy Chicken Box',
    category: 'chicken',
    description: 'قطع دجاج مقرمشة ذهبية، بطاطس، خبز طري وصلصة ثومية — الوجبة الأشهر.',
    image: img('photo-1562967914-608f82629710'),
    basePrice: 55,
    badge: 'الأكثر طلباً',
    rating: 4.9,
    orders: '3.1k',
    time: '20 د',
    keywords: ['chicken', 'box', 'دجاج', 'مقرمش', 'كرسبي'],
    custom: [
      {
        id: 'pieces', title: 'القطع', type: 'single', required: true, default: 'p3',
        options: [
          { id: 'p3', label: '3 قطع', price: 0 },
          { id: 'p5', label: '5 قطع (+18)', price: 18 },
        ],
      },
      {
        id: 'sauce', title: 'الصلصة', type: 'single', default: 'sc-garlic',
        options: [
          { id: 'sc-garlic', label: 'ثومية', price: 0 },
          { id: 'sc-spicy', label: 'حارة', price: 0 },
          { id: 'sc-alg', label: 'ألجيرين', price: 3 },
        ],
      },
      {
        id: 'extras', title: 'زوّد وجبتك', type: 'multi',
        options: [
          { id: 'x-cheese-fries', label: 'بطاطس بالجبن (+10)', price: 10 },
          { id: 'x-drink', label: 'مشروب (+8)', price: 8 },
        ],
      },
    ],
  },
  {
    id: 'tenders',
    nameAr: 'تشيكن تندرز',
    nameEn: 'Chicken Tenders',
    category: 'chicken',
    description: 'أصابع دجاج طرية من الداخل ومقرمشة من الخارج، مثالية للمشاركة.',
    image: img('photo-1569058242253-92a9c755a0ec'),
    basePrice: 48,
    rating: 4.7,
    orders: '1.2k',
    time: '15 د',
    keywords: ['tenders', 'دجاج', 'ستريبس', 'مقرمش'],
    custom: [
      {
        id: 'count', title: 'العدد', type: 'single', required: true, default: 'c5',
        options: [
          { id: 'c5', label: '5 قطع', price: 0 },
          { id: 'c8', label: '8 قطع (+16)', price: 16 },
        ],
      },
      {
        id: 'sauce', title: 'صلصتان من اختيارك', type: 'multi',
        options: [
          { id: 's1', label: 'ثومية', price: 0 },
          { id: 's2', label: 'باربكيو', price: 0 },
          { id: 's3', label: 'حارة', price: 0 },
          { id: 's4', label: 'جبن (+5)', price: 5 },
        ],
      },
    ],
  },
  {
    id: 'burger-classic',
    nameAr: 'تشيكن برجر كلاسيك',
    nameEn: 'Classic Chicken Burger',
    category: 'burgers',
    description: 'صدر دجاج مقرمش، خس، طماطم، مخلل وصلصة أفولوس في خبز بريوش طري.',
    image: img('photo-1568901346375-23c9450c58cd'),
    basePrice: 42,
    badge: 'جديد',
    rating: 4.8,
    orders: '980',
    time: '12 د',
    keywords: ['burger', 'برجر', 'دجاج'],
    custom: [
      {
        id: 'formula', title: 'الصيغة', type: 'single', required: true, default: 'solo',
        options: [
          { id: 'solo', label: 'برجر فقط', price: 0 },
          { id: 'menu', label: 'وجبة + بطاطس + مشروب (+18)', price: 18 },
        ],
      },
      {
        id: 'adds', title: 'إضافات', type: 'multi',
        options: [
          { id: 'a-cheese', label: 'جبن شيدر (+6)', price: 6 },
          { id: 'a-chicken', label: 'قطعة دجاج إضافية (+14)', price: 14 },
          { id: 'a-sauce', label: 'صلصة مضاعفة (+4)', price: 4 },
        ],
      },
      {
        id: 'remove', title: 'بدون', type: 'multi',
        options: [
          { id: 'r-onion', label: 'بدون بصل', price: 0 },
          { id: 'r-pickle', label: 'بدون مخلل', price: 0 },
        ],
      },
    ],
  },
  {
    id: 'burger-double',
    nameAr: 'دبل كرسبي برجر',
    nameEn: 'Double Crispy Burger',
    category: 'burgers',
    description: 'طبقتا دجاج مقرمش، جبن ذائب وصلصة مدخنة — للجوع الكبير.',
    image: img('photo-1594212699903-ec8a3eca50f5'),
    basePrice: 58,
    rating: 4.8,
    orders: '760',
    time: '15 د',
    keywords: ['burger', 'double', 'برجر', 'دبل'],
    custom: [
      {
        id: 'formula', title: 'الصيغة', type: 'single', required: true, default: 'solo',
        options: [
          { id: 'solo', label: 'برجر فقط', price: 0 },
          { id: 'menu', label: 'وجبة (+18)', price: 18 },
        ],
      },
      {
        id: 'adds', title: 'إضافات', type: 'multi',
        options: [
          { id: 'a-cheese', label: 'جبن إضافي (+6)', price: 6 },
          { id: 'a-fries', label: 'بطاطس كبيرة (+8)', price: 8 },
        ],
      },
    ],
  },
  {
    id: 'family-box',
    nameAr: 'فاميلي بوكس — للمشاركة',
    nameEn: 'Family Box',
    category: 'box',
    description: '9 قطع دجاج + 2 بطاطس كبيرة + 4 مشروبات + 3 صلصات. تكفي 3–4 أشخاص.',
    image: img('photo-1562967916-eb82221dfb92'),
    basePrice: 149,
    badge: 'الأكثر قيمة',
    rating: 5.0,
    orders: '640',
    time: '25 د',
    keywords: ['family', 'box', 'عائلي', 'بوكس', 'مشاركة'],
    custom: [
      {
        id: 'mix', title: 'تشكيلة الدجاج', type: 'single', required: true, default: 'm-mix',
        options: [
          { id: 'm-mix', label: 'مشكّل', price: 0 },
          { id: 'm-spicy', label: 'كله سبايسي', price: 0 },
          { id: 'm-tenders', label: 'تندرز بدل القطع (+10)', price: 10 },
        ],
      },
      {
        id: 'drinks', title: 'المشروبات (4)', type: 'multi',
        options: [
          { id: 'd-cola', label: 'كولا', price: 0 },
          { id: 'd-sprite', label: 'سبرايت', price: 0 },
          { id: 'd-fanta', label: 'فانتا', price: 0 },
        ],
      },
    ],
  },
  {
    id: 'duo-box',
    nameAr: 'دويو بوكس لشخصين',
    nameEn: 'Duo Box for Two',
    category: 'box',
    description: '2 برجر + بطاطس كبيرة + 2 مشروب + وينغز 4 قطع. مثالي لشخصين.',
    image: img('photo-1561758033-d89a9ad46330'),
    basePrice: 99,
    badge: 'عرض اليوم',
    rating: 4.9,
    orders: '890',
    time: '20 د',
    keywords: ['box', 'duo', 'بوكس', 'شخصين'],
    custom: [
      {
        id: 'burger2', title: 'البرجر الثاني', type: 'single', required: true, default: 'b-same',
        options: [
          { id: 'b-same', label: 'نفس البرجر', price: 0 },
          { id: 'b-spicy', label: 'نسخة سبايسي', price: 0 },
        ],
      },
    ],
  },
  {
    id: 'loaded-fries',
    nameAr: 'بطاطس محمّلة بالدجاج',
    nameEn: 'Loaded Fries',
    category: 'sides',
    description: 'بطاطس ذهبية عليها قطع دجاج مقرمشة، جبن ذائب وصلصة ألجيرين.',
    image: img('photo-1585109649139-366815a0d713'),
    basePrice: 35,
    badge: 'جديد',
    rating: 4.7,
    orders: '1.1k',
    time: '10 د',
    keywords: ['fries', 'بطاطس', 'loaded'],
    custom: [
      {
        id: 'size', title: 'الحجم', type: 'single', required: true, default: 'r',
        options: [
          { id: 'r', label: 'عادية', price: 0 },
          { id: 'l', label: 'كبيرة (+8)', price: 8 },
        ],
      },
      {
        id: 'top', title: 'إضافات', type: 'multi',
        options: [
          { id: 't-cheese', label: 'جبن مضاعف (+6)', price: 6 },
          { id: 't-chicken', label: 'دجاج إضافي (+10)', price: 10 },
        ],
      },
    ],
  },
  {
    id: 'fries-classic',
    nameAr: 'بطاطس مقلية ذهبية',
    nameEn: 'Golden Fries',
    category: 'sides',
    description: 'بطاطس مقرمشة مرشوشة ببهارات أفولوس السرية.',
    image: img('photo-1573080496219-bb080dd4f877'),
    basePrice: 18,
    rating: 4.6,
    orders: '2k',
    time: '8 د',
    keywords: ['fries', 'بطاطس', 'frite'],
  },
  {
    id: 'crispy-strips-meal',
    nameAr: 'وجبة ستريبس + بطاطس',
    nameEn: 'Strips Meal',
    category: 'chicken',
    description: 'ستربس مقرمشة مع بطاطس ومشروب — وجبة متوازنة وسريعة.',
    image: img('photo-1626082927389-6cd097cdc6ec'),
    basePrice: 49,
    rating: 4.7,
    orders: '720',
    time: '15 د',
    keywords: ['chicken', 'meal', 'دجاج', 'وجبة'],
  },
  {
    id: 'sauce-trio',
    nameAr: 'تشكيلة 3 صلصات',
    nameEn: 'Sauce Trio',
    category: 'sauces',
    description: 'ثومية + باربكيو + حارة. الحجم المثالي للغمس والمشاركة.',
    image: img('photo-1472476443507-c7a5948772fc'),
    basePrice: 15,
    rating: 4.8,
    orders: '1.5k',
    time: '2 د',
    keywords: ['sauce', 'صلصة', 'صوص'],
  },
  {
    id: 'sauce-alg',
    nameAr: 'صلصة ألجيرين',
    nameEn: 'Algérienne Sauce',
    category: 'sauces',
    description: 'الصلصة المفضلة لعشاق التاكوس والدجاج — كريمية ومدخنة.',
    image: img('photo-1472476443507-c7a5948772fc'),
    basePrice: 8,
    rating: 4.9,
    orders: '2.2k',
    time: '2 د',
    keywords: ['sauce', 'الجيرين', 'صلصة'],
  },
  {
    id: 'drink-cola',
    nameAr: 'مشروب غازي 33cl',
    nameEn: 'Soda 33cl',
    category: 'drinks',
    description: 'كولا، سبرايت أو فانتا — مثلجة ومنعشة.',
    image: img('photo-1554866585-cd94860890b7'),
    basePrice: 8,
    rating: 4.5,
    orders: '3k',
    time: '2 د',
    keywords: ['drink', 'cola', 'مشروب', 'boisson'],
    custom: [
      {
        id: 'kind', title: 'النوع', type: 'single', required: true, default: 'cola',
        options: [
          { id: 'cola', label: 'كولا', price: 0 },
          { id: 'sprite', label: 'سبرايت', price: 0 },
          { id: 'fanta', label: 'فانتا', price: 0 },
          { id: 'water', label: 'ماء معدني', price: 0 },
        ],
      },
    ],
  },
  {
    id: 'drink-mojito',
    nameAr: 'موهيتو كلاسيك',
    nameEn: 'Classic Mojito',
    category: 'drinks',
    description: 'نعناع وليمون مثلج — الانتعاش المثالي مع السبايسي.',
    image: img('photo-1581636625402-29b2a704ef13'),
    basePrice: 16,
    badge: 'منعش 🍋',
    rating: 4.6,
    orders: '540',
    time: '5 د',
    keywords: ['mojito', 'drink', 'موهيتو', 'مشروب'],
  },
  {
    id: 'kids-meal',
    nameAr: 'وجبة أطفال',
    nameEn: 'Kids Meal',
    category: 'box',
    description: '3 تندرز صغيرة + بطاطس صغيرة + عصير + مفاجأة. مصممة للصغار.',
    image: img('photo-1561758033-d89a9ad46330'),
    basePrice: 32,
    rating: 4.7,
    orders: '410',
    time: '12 د',
    keywords: ['kids', 'box', 'اطفال'],
  },
];

export const OFFERS = [
  {
    id: 'offer-duo',
    title: 'عرض الدويو',
    subtitle: 'وينغز 6 + بطاطس + مشروبين',
    price: 69,
    oldPrice: 86,
    image: img('photo-1512152272829-e3139592d56f'),
    tag: 'وفّر 17 درهم',
    productIds: ['wings-classic-6', 'fries-classic', 'drink-cola'],
  },
  {
    id: 'offer-family',
    title: 'فاميلي بوكس',
    subtitle: 'تكفي 3–4 أشخاص + توصيل مخفّض',
    price: 149,
    oldPrice: 182,
    image: img('photo-1562967916-eb82221dfb92'),
    tag: 'الأكثر قيمة',
    productIds: ['family-box'],
  },
  {
    id: 'offer-burger',
    title: 'برجر ميل',
    subtitle: 'برجر + بطاطس + مشروب + صلصة',
    price: 55,
    oldPrice: 68,
    image: img('photo-1568901346375-23c9450c58cd'),
    tag: 'عرض اليوم',
    productIds: ['burger-classic', 'fries-classic'],
  },
];

export const money = (n) => `${n} ${SITE.currency}`;
