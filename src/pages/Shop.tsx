import { MessageCircle, Search, ShoppingBag, Store } from 'lucide-react';
import { useMemo, useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS, CATEGORIES, PRODUCTS, find, waLink } from '../lib/data';

const FEATURED = [
  'Chicken Biryani',
  'Nihari Beef',
  'Garlic Naan',
  'Chicken Achari Pratha roll',
  'Gulab Jamun',
  'Tea Karak',
  'Samosa Chaat',
  'Green Chutney',
];

export default function Shop() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return PRODUCTS.filter(
      (p) => p.en.toLowerCase().includes(q) || p.ar.includes(query.trim()),
    ).slice(0, 12);
  }, [query]);

  return (
    <>
      <PageHeader
        title="The Shop"
        arabic="المتجر"
        tagline="Every item we make, in one place — browse by category, add to your cart and send your order on WhatsApp. Fresh from our kitchen in Doha, Qatar."
        crumbs={[{ label: 'Shop' }]}
        meta={`${PRODUCTS.length} items · ${CATEGORIES.length} categories`}
        image="/images/hero-sweets.jpg"
      />

      {/* Search */}
      <div className="border-b border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <label className="relative block max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gold" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu — e.g. biryani, naan, barfi…"
              className="w-full rounded-full border border-gold/40 bg-white py-3 pl-11 pr-4 text-sm text-brown placeholder:text-brown/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </label>
          {query.trim().length >= 2 && (
            <div className="mt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-burgundy">
                {results.length > 0 ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query}”` : `No items found for “${query}”`}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
                {results.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Categories */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Order by category"
            title="Browse the Full Menu"
            arabic="تصفح القائمة الكاملة"
            description="Nine categories, one kitchen. Restaurant plates, tandoor breads, house specials, sauces and drinks — plus our bakery, sweets and cakes."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Customer favourites"
            title="Most Ordered This Week"
            arabic="الأكثر طلباً"
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {find(...FEATURED).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="jaali bg-maroon-deep">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Ordering made simple"
            title="How Ordering Works"
            arabic="كيف تطلب"
            light
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShoppingBag,
                step: '01',
                title: 'Add to your cart',
                text: 'Browse any category and tap “Add” on the items you want. Adjust quantities any time from the cart.',
              },
              {
                icon: MessageCircle,
                step: '02',
                title: 'Send on WhatsApp',
                text: 'One tap sends your full order to our team on WhatsApp. We confirm availability and total right away.',
              },
              {
                icon: Store,
                step: '03',
                title: 'Pickup or delivery',
                text: `Collect from our store in Doha — ${BUSINESS.hoursShort} — or arrange delivery across Doha.`,
              },
            ].map(({ icon: Icon, step, title, text }) => (
              <div key={step} className="rounded-xl border border-gold/25 bg-maroon/60 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-gold/40">{step}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-cream">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-beige/75">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={waLink('Assalam o Alaikum! I would like to place an order with Pakistan Sweets.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-maroon-deep transition hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-light transition hover:bg-gold/15"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
