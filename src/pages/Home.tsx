import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Flame,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
  Wheat,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import Ornament from '../components/Ornament';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS, CATEGORIES, PRODUCTS, find, waLink } from '../lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const TESTIMONIALS = [
  {
    name: 'Ahmed R.',
    origin: 'Doha, Qatar',
    text: 'The sohan halwa tastes exactly like the traditional taste I grew up loving. I order mithai boxes for every Eid and family gathering — never once disappointed.',
  },
  {
    name: 'Fatima K.',
    origin: 'Doha, Qatar',
    text: 'Their khameeri roti and nihari on a Friday morning is a ritual for us now. Fresh, generous portions and the WhatsApp ordering makes it so easy.',
  },
  {
    name: 'Imran S.',
    origin: 'Doha, Qatar',
    text: 'Ordered a custom graduation cake and two kilos of barfi for the office. Beautifully decorated, delivered on time, and the barfi vanished in minutes.',
  },
];

export default function Home() {
  const signatureSweets = find(
    'Gulab Jamun',
    'Kaju Katli',
    'Special Sweets Mix',
    'Motichoor Laddu',
    'Badaam Barfi',
    'Ras Malai',
    'Jalebi',
    'Gajar Halwa',
  );
  const bakeryPicks = find('Cake Rusk', 'Sheermal Bun', 'Badaam Khtaai', 'Cream Roll');
  const restaurantPicks = find('Nihari Beef', 'Mutton Qorma', 'Haleem Chicken', 'Chicken Biryani');
  const cakePicks = find('Signature Chocolate Cake', 'Red Velvet Cake', 'Lotus Cake', 'Ferrero Cake');
  const chaatPicks = find(
    'Samosa Chaat',
    'Pani Puri',
    'Dahi Bharay',
    'Chana Papri Chaat',
    'Halwa Puri nashta',
    'Pakora',
    'Chicken Samosa',
    'Dahi Puri',
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[86vh] items-center overflow-hidden bg-maroon-deep">
        <img
          src="/images/hero-sweets.jpg"
          alt="Traditional Pakistani mithai on brass stands"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep via-maroon-deep/80 to-maroon-deep/30" />
        <div className="jaali absolute inset-0 opacity-70" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="font-arabic text-xl text-gold-light sm:text-2xl">
              <span dir="rtl">حلويات باكستان – لذة نقية</span>
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              Pure Delight,
              <br />
              <span className="text-gold-light">Made the Pakistani Way</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-beige/90 sm:text-lg">
              Handmade mithai, a bakery that never sleeps, celebration cakes and a
              full desi kitchen — all under one roof in Doha, Qatar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-maroon-deep shadow-xl shadow-gold/20 transition hover:bg-gold-light"
              >
                Order Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sweets"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-gold-light transition hover:bg-gold/15"
              >
                Explore Sweets
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-gold/30 bg-gold/20 sm:grid-cols-4"
          >
            {[
              [`${PRODUCTS.length}+`, 'Menu items'],
              ['9', 'Categories'],
              ['Daily', 'Fresh batches'],
              ['7–10:30', 'Open every day'],
            ].map(([num, label]) => (
              <div key={label} className="bg-maroon-deep/80 px-4 py-4 backdrop-blur">
                <dt className="order-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-beige/70">{label}</dt>
                <dd className="font-display text-2xl font-bold text-gold-light sm:text-3xl">{num}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ============ FEATURED CATEGORIES ============ */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="What are you craving?"
            title="Shop by Category"
            arabic="تسوق حسب الفئة"
            description="From the tandoor to the sweets counter — nine categories of the approved menu, each with its own page, photography and prices in QAR."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.slice(0, 6).map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.slice(6).map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SIGNATURE SWEETS ============ */}
      <section className="border-y border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="The mithai counter"
            title="Signature Sweets"
            arabic="حلوياتنا المميزة"
            description="Khoya kneaded by hand, desi ghee, slow caramelised sugar — the classics that made our name, weighed fresh at the counter every day."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {signatureSweets.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/sweets"
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale transition hover:bg-burgundy"
            >
              View All Sweets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ BAKERY HIGHLIGHT ============ */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp} className="relative">
              <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_24px_60px_-24px_rgba(70,9,14,0.5)]">
                <img src="/images/bakery.jpg" alt="Freshly baked breads and buns on wooden shelves" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-xl bg-maroon px-5 py-3 shadow-xl sm:-right-5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
                  <Wheat className="h-4 w-4" /> Baked fresh daily
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">The Bakery · المخبز</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-maroon sm:text-4xl">
                Before Doha Wakes Up,
                <br />
                Our Ovens Are Already Warm
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-brown/70 sm:text-base">
                Milky breads, sheermal buns, cake rusk for your karak, and puff pastries by
                the kilo. Everything is baked in small batches through the day, so what you
                take home is always from the latest tray.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {bakeryPicks.map((p) => (
                  <Link
                    key={p.id}
                    to="/bakery"
                    className="group flex items-center gap-3 rounded-xl border border-gold/30 bg-white p-3 transition hover:border-gold"
                  >
                    <img src={p.img} alt={p.en} loading="lazy" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                    <span className="min-w-0">
                      <span className="block truncate font-display text-[15px] font-semibold text-maroon">{p.en}</span>
                      <span className="text-xs font-bold text-burgundy">QAR {p.price}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <Link to="/bakery" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-burgundy transition hover:text-gold">
                Browse the Bakery <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ RESTAURANT HIGHLIGHT ============ */}
      <section className="jaali relative overflow-hidden bg-maroon-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
                <Flame className="h-4 w-4" /> The Restaurant · المطعم
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                Nihari at Dawn, Karahi at Dusk —
                <br />A Full Desi Kitchen
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-beige/80 sm:text-base">
                Our kitchen runs like a Lahori dhaba: nihari simmering overnight, daal on a
                low flame, biryani layered to order and khameeri roti flying out of the
                tandoor. Order a single plate or a family spread.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {restaurantPicks.map((p) => (
                  <Link
                    key={p.id}
                    to="/shop/restaurant-items"
                    className="group flex items-center gap-3 rounded-xl border border-gold/25 bg-maroon/60 p-3 backdrop-blur transition hover:border-gold/60"
                  >
                    <img src={p.img} alt={p.en} loading="lazy" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                    <span className="min-w-0">
                      <span className="block truncate font-display text-[15px] font-semibold text-cream">{p.en}</span>
                      <span className="text-xs font-bold text-gold-light">QAR {p.price}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/restaurant" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-maroon-deep transition hover:bg-gold-light">
                  About the Restaurant
                </Link>
                <Link to="/shop/restaurant-items" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-light transition hover:bg-gold/15">
                  Order Dishes <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
                <img src="/images/restaurant.jpg" alt="A spread of Pakistani curries, kebabs and biryani" className="aspect-[4/3] w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CAKES ============ */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Made-to-order celebration cakes"
            title="Cakes for Every Milestone"
            arabic="كيك لكل مناسبة"
            description="Birthdays, graduations, Umrah homecomings and everything in between — decorated in-house and ready when you are."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
            {cakePicks.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/cakes" className="inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale transition hover:bg-burgundy">
              View All Cakes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CHAAT & SNACKS STRIP ============ */}
      <section className="border-y border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">Street-style corner</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-maroon sm:text-4xl">Chaat, Samosas & Snacks</h2>
              <p dir="rtl" className="mt-1 text-left font-arabic text-lg text-gold">تشات وسمبوسة</p>
            </div>
            <Link to="/shop/chaat-snacks" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-burgundy transition hover:text-gold">
              All snacks <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="gold-scroll -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
            {chaatPicks.map((p) => (
              <div key={p.id} className="w-[220px] shrink-0 snap-start sm:w-[250px]">
                <ProductCard product={p} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr]">
            <motion.div {...fadeUp} className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_24px_60px_-24px_rgba(70,9,14,0.5)]">
                <img src="/images/heritage.jpg" alt="Chai being poured the traditional way" className="aspect-[3/4] w-full object-cover" />
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">Our story · قصتنا</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-maroon sm:text-4xl">
                A Little Corner of Pakistan,
                <br />
                in the Heart of Doha
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-brown/70 sm:text-base">
                Pakistan Sweets began with a simple promise: mithai that tastes like home.
                Today our counters carry over {PRODUCTS.length} items — hand-set barfi and
                halwa, tandoor breads, slow-cooked curries and celebration cakes — every
                recipes rooted in Pakistani tradition, every batch made fresh in Doha, Qatar.
              </p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Sparkles, title: 'Made fresh daily', text: 'Small batches all day, nothing left overnight.' },
                  { icon: Award, title: 'Authentic recipes', text: 'Khoya, desi ghee & spices — no shortcuts.' },
                ].map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-3.5 rounded-xl border border-gold/30 bg-white p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-maroon text-gold-light">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold text-maroon">{title}</span>
                      <span className="text-xs leading-relaxed text-brown/65">{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale transition hover:bg-maroon">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="jaali bg-maroon-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What Doha Says About Us"
            arabic="ماذا يقول عملاؤنا"
            light
          />
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col rounded-xl border border-gold/25 bg-maroon/60 p-6 backdrop-blur"
              >
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-beige/85">“{t.text}”</blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-gold/20 pt-4">
                  <div>
                    <p className="font-display text-base font-semibold text-cream">{t.name}</p>
                    <p className="text-xs text-beige/60">{t.origin}</p>
                  </div>
                  <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-burgundy">
        <div className="jaali absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p dir="rtl" className="font-arabic text-xl text-gold-light">اطلب الآن</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-5xl">
            Craving Something? We're Already Baking.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-beige/85 sm:text-base">
            Send your order on WhatsApp or call the store — fresh mithai, hot naan and
            celebration cakes, ready for pickup or delivery across Doha.
          </p>
          <Ornament light className="mt-6" />
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href={waLink('Assalam o Alaikum! I would like to place an order with Pakistan Sweets.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-maroon-deep transition hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp {BUSINESS.phoneDisplay}
            </a>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-gold-light transition hover:bg-gold/15"
            >
              Browse the Shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
