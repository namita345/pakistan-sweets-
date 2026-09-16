import { motion } from 'framer-motion';
import { ArrowRight, Clock, Flame, MessageCircle, Soup, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS, CATEGORIES, find, waLink } from '../lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

export default function Restaurant() {
  const specialties = find(
    'Nihari Beef',
    'Mutton Qorma',
    'Haleem Chicken',
    'Chicken Biryani',
    'Chicken Yakhni Pulao',
    'Paya',
    'Daal Makhni',
    'Chicken Masala Fry',
  );
  const tandoorPicks = find('Khameeri Roti', 'Garlic Naan', 'Qeema Naan', 'Aloo Pratha', 'Desi Ghee Pratha', 'Roghni Naan');
  const shopCats = CATEGORIES.filter((c) => c.inDropdown);

  return (
    <>
      <PageHeader
        title="The Restaurant"
        arabic="المطعم"
        tagline="The savoury heart of Pakistan Sweets — a dhaba-style kitchen where nihari simmers overnight, biryani is layered to order and the tandoor glows from morning to close."
        crumbs={[{ label: 'Restaurant' }]}
        meta={BUSINESS.hours}
        image="/images/restaurant.jpg"
      />

      {/* Intro */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">
                <UtensilsCrossed className="h-4 w-4" /> Desi kitchen · مطبخ باكستاني
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-maroon sm:text-4xl">
                Cooked Like a Dhaba,
                <br />
                Served Like Family
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-brown/70 sm:text-base">
                Most people know us for mithai — then they smell the nihari. Our restaurant
                side runs a full Pakistani day: halwa puri and anda pratha for breakfast,
                daal chawal and biryani through the afternoon, karahi-style specials and
                fresh rolls as the evening crowd rolls in.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brown/70 sm:text-base">
                Everything on this side of the house lives in the Shop — browse a category,
                add plates to your cart and send the order on WhatsApp for pickup or delivery.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/shop/restaurant-items" className="inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale transition hover:bg-maroon">
                  Order Restaurant Items <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={waLink('Assalam o Alaikum! I would like to order from the Pakistan Sweets restaurant menu.')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-maroon/40 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-maroon transition hover:bg-maroon hover:text-gold-pale">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Order
                </a>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_24px_60px_-24px_rgba(70,9,14,0.5)]">
                <img src="/images/tandoor.jpg" alt="Bread baking against the tandoor wall" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-xl bg-maroon px-5 py-3 shadow-xl">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
                  <Clock className="h-4 w-4" /> {BUSINESS.hoursShort}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="border-y border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="House specialties"
            title="Dishes Worth Crossing Doha For"
            arabic="أطباقنا المميزة"
            description="Slow-cooked, spice-forward and served with fresh tandoor bread — these are the plates our regulars refuse to share."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {specialties.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Tandoor strip */}
      <section className="jaali bg-maroon-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
                <Flame className="h-4 w-4" /> Hot from the clay
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-cream sm:text-4xl">Pair It With the Tandoor</h2>
              <p dir="rtl" className="mt-1 text-left font-arabic text-lg text-gold-light/80">من التنور مباشرة</p>
            </div>
            <Link to="/shop/tandoor" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-light transition hover:text-gold">
              Full tandoor menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="gold-scroll -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
            {tandoorPicks.map((p) => (
              <div key={p.id} className="w-[220px] shrink-0 snap-start sm:w-[250px]">
                <ProductCard product={p} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category links */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Order from the kitchen"
            title="Restaurant Categories in the Shop"
            arabic="فئات المطعم"
            description="Five savoury categories, each with its own page — tap through, add to cart, and your order is one WhatsApp away."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {shopCats.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link to={c.path} className="group flex h-full flex-col overflow-hidden rounded-xl border border-gold/30 bg-white transition hover:shadow-[0_16px_36px_-16px_rgba(70,9,14,0.4)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={c.cardImg} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-lg font-semibold text-maroon">{c.name}</h3>
                    <p dir="rtl" className="text-left font-arabic text-sm text-gold">{c.ar}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-burgundy transition group-hover:text-gold">
                      Order <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-burgundy px-6 py-10 text-center">
            <Soup className="h-8 w-8 text-gold-light" />
            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">Feeding a gathering?</h3>
            <p className="max-w-xl text-sm leading-relaxed text-beige/85">
              Family trays of biryani, nihari by the kilo and bread by the dozen — call us a few
              hours ahead and we’ll have it packed and ready.
            </p>
            <a href={`tel:${BUSINESS.phoneTel}`} className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-maroon-deep transition hover:bg-gold-light">
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
