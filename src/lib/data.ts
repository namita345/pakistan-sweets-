import { PRODUCTS, type Product } from './products';

export const BUSINESS = {
  name: 'Pakistan Sweets',
  tagline: 'Pure Delight',
  phoneDisplay: '+974 3100 8787',
  phoneTel: '+97431008787',
  whatsapp: '97431008787',
  email: 'pakistansweetsqatar@gmail.com',
  address: 'Doha, Qatar',
  addressShort: 'Doha, Qatar',
  poBox: 'P.O. Box 21493',
  hours: 'Open Daily · 7:00 AM – 10:30 PM',
  hoursShort: '7 AM – 10:30 PM Daily',
  facebook: 'https://www.facebook.com/PAKISTAN.SWEETS',
  instagram: 'https://www.instagram.com/pakistansweetsbakers/',
  mapsEmbed:
    'https://www.google.com/maps?q=Pakistan+Sweets+%26+Bakers+Doha+Qatar&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Pakistan+Sweets+%26+Bakers+Doha+Qatar',
};

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function qar(n: number) {
  return Number.isInteger(n) ? `${n}` : n.toFixed(2);
}

export interface SubCat {
  id: string;
  title: string;
  ar: string;
}

export interface CategoryConfig {
  slug: string;
  path: string;
  name: string;
  ar: string;
  tagline: string;
  description: string;
  cardImg: string;
  inDropdown: boolean;
  subcats: SubCat[];
}

function img(en: string): string {
  const p = PRODUCTS.find((x) => x.en === en);
  return p ? p.img : '/images/hero-sweets.jpg';
}

export const CATEGORIES: CategoryConfig[] = [
  { slug: 'restaurant-items', path: '/shop/restaurant-items', name: 'Restaurant Items', ar: 'عناصر مطعم', tagline: 'Pakistani favourites from the kitchen', description: 'Curries, rice, breakfast plates and everyday Pakistani favourites.', cardImg: img('Nihari Beef'), inDropdown: true, subcats: [{ id: 'restaurant-items', title: 'Restaurant Items', ar: 'عناصر مطعم' }] },
  { slug: 'tandoor', path: '/shop/tandoor', name: 'Tandoor', ar: 'تنور', tagline: 'Naan, roti and pratha', description: 'Fresh tandoor breads and stuffed prathas.', cardImg: img('Garlic Naan'), inDropdown: true, subcats: [{ id: 'tandoor', title: 'Tandoor', ar: 'تنور' }] },
  { slug: 'specials-rolls', path: '/shop/specials-rolls', name: 'Specials & Rolls', ar: 'أطباق خاصة ورول', tagline: 'House specials and rolls', description: 'Special dishes and Pakistani-style rolls from the approved menu.', cardImg: img('Chicken Achari Pratha roll'), inDropdown: true, subcats: [{ id: 'specials-rolls', title: 'Specials & Rolls', ar: 'أطباق خاصة ورول' }] },
  { slug: 'sauce', path: '/shop/sauce', name: 'Sauce', ar: 'صلصة', tagline: 'Chutneys, raita and sauces', description: 'Sauces and raita to pair with your meal.', cardImg: img('Green Chutney'), inDropdown: true, subcats: [{ id: 'sauce', title: 'Sauce', ar: 'صلصة' }] },
  { slug: 'drinks', path: '/shop/drinks', name: 'Drinks', ar: 'مشروبات', tagline: 'Karak, lassi and sherbat', description: 'Traditional drinks from the approved menu.', cardImg: img('Tea Karak'), inDropdown: true, subcats: [{ id: 'drinks', title: 'Drinks', ar: 'مشروبات' }, { id: 'lassi', title: 'Lassi', ar: 'لسي' }] },
  { slug: 'chaat-snacks', path: '/shop/chaat-snacks', name: 'Chaat & Snacks', ar: 'تشات ووجبات خفيفة', tagline: 'Chaat, snacks and breakfast', description: 'Chaat, savoury snacks and desi breakfast selections.', cardImg: img('Chana Papri Chaat'), inDropdown: false, subcats: [{ id: 'chaat-items', title: 'Chaat Items', ar: 'عناصر شات' }, { id: 'savory-snacks', title: 'Savory Snacks', ar: 'مالـح سناكس' }, { id: 'desi-breakfast', title: 'Desi Breakfast', ar: 'إفطار ديسي' }] },
  { slug: 'bakery', path: '/bakery', name: 'Bakery', ar: 'مخبز', tagline: 'Bakery and frozen favourites', description: 'Breads, biscuits, rusks, puffs, frozen items and mixed bakery selections.', cardImg: img('Cake Rusk'), inDropdown: false, subcats: [{ id: 'bakery', title: 'Bakery', ar: 'مخبز' }, { id: 'frozen', title: 'Frozen', ar: 'مجمد' }, { id: 'mixed-items', title: 'Mixed Items', ar: 'عناصر متنوعة' }] },
  { slug: 'sweets', path: '/sweets', name: 'Sweets', ar: 'حلويات', tagline: 'Mithai and traditional sweets', description: 'Barfi, sweets, halwa, sweet snacks and special mithai.', cardImg: img('Gulab Jamun'), inDropdown: false, subcats: [{ id: 'barfi', title: 'Barfi', ar: 'في بار' }, { id: 'sweets', title: 'Sweets', ar: 'حلويات' }, { id: 'sweet-snacks', title: 'Sweet Snacks', ar: 'وجبات خفيفة حلوة' }, { id: 'special-sweet', title: 'Special Sweet', ar: 'حلويات خاصة' }] },
  { slug: 'cakes', path: '/cakes', name: 'Cakes', ar: 'كيك', tagline: 'Cakes for every occasion', description: 'Whole cakes, signature cakes, cake pieces and pastry boxes.', cardImg: img('Signature Chocolate Cake'), inDropdown: false, subcats: [{ id: 'cakes', title: 'Cakes', ar: 'كيك' }, { id: 'signature-cakes', title: 'Signature Cakes', ar: 'كعكات مميزة' }, { id: 'cake-pieces-pastry', title: 'Cake Pieces & Pastry', ar: 'كيك بايس و حلويات' }] },
];

export const DROPDOWN_CATEGORIES = CATEGORIES.filter((c) => c.inDropdown);

export function getCategory(slug: string): CategoryConfig | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function productsOf(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.cat === slug);
}

export function productsOfSub(slug: string, sub: string): Product[] {
  return PRODUCTS.filter((p) => p.cat === slug && p.sub === sub);
}

export function find(...names: string[]): Product[] {
  return names
    .map((n) => PRODUCTS.find((p) => p.en === n))
    .filter((p): p is Product => Boolean(p));
}

export { PRODUCTS };
export type { Product };
