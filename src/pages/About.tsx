import { motion } from 'framer-motion';
import {
  ArrowRight,
  Cake,
  ChefHat,
  Flame,
  Handshake,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Timer,
  UtensilsCrossed,
  Wheat,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { PRODUCTS } from '../lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const VALUES = [
  {
    icon: Heart,
    title: 'Taste of Home',
    text: 'For the Pakistani community in Qatar — and everyone else who has fallen for mithai — we make food that tastes like a phone call home.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest Ingredients',
    text: 'Real khoya, desi ghee, nuts and spices ground in-house. If a shortcut changes the taste, we don’t take it.',
  },
  {
    icon: Timer,
    title: 'Fresh, Not Stored',
    text: 'Small batches throughout the day. Sweets are weighed at the counter; breads leave the tandoor minutes before they leave the shop.',
  },
  {
    icon: Handshake,
    title: 'Neighbourly Service',
    text: 'Order by WhatsApp, call ahead, or walk in — our team greets regulars by name and treats first-timers like family.',
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Pakistan Sweets"
        arabic="من نحن"
        tagline="A mithai counter, a bakery, a tandoor and a desi kitchen — one family-run house of Pakistani flavour in Doha, Qatar."
        crumbs={[{ label: 'About Us' }]}
        meta="Pure Delight · Doha, Qatar"
        image="/images/heritage.jpg"
      />

      {/* Brand introduction */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">The brand · العلامة</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-maroon sm:text-4xl">
                Pure Delight Isn’t a Slogan.
                <br />
                It’s the Recipe.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-brown/70 sm:text-base">
                Pakistan Sweets was built around one counter and one conviction: that the
                mithai, breads and dishes of Pakistan deserve to be made properly, far from
                home. What started as a sweets shop grew into a full house of flavour —
                more than {PRODUCTS.length} approved menu items across nine categories,
                every one photographed, priced in QAR and made under our own roof.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brown/70 sm:text-base">
                Walk in and you’ll see it: trays of barfi being scored by hand, khameeri
                roti puffing against the tandoor wall, cakes being piped for the evening’s
                birthdays, and karak being poured without pause.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
              <img src="/images/hero-sweets.jpg" alt="Traditional mithai" className="aspect-[3/4] w-full rounded-2xl border-2 border-gold/40 object-cover" />
              <img src="/images/tandoor.jpg" alt="Naan baking in the tandoor" className="mt-8 aspect-[3/4] w-full rounded-2xl border-2 border-gold/40 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="jaali bg-maroon-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Pakistani culinary heritage"
            title="Recipes That Crossed the Arabian Sea"
            arabic="تراث المطبخ الباكستاني"
            description="Our menu reads like a map of Pakistan — and every region brought its own sweetness to Doha."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                region: 'Pakistan',
                dish: 'Sohan Halwa',
                text: 'The city of saints gave us its most famous export — dense, ghee-rich sohan halwa, slow-stirred to amber.',
              },
              {
                region: 'Pakistan',
                dish: 'Nihari & Chaat',
                text: 'Overnight nihari, tangy papri chaat and halwa puri breakfasts — the street energy of Pakistan, plated.',
              },
              {
                region: 'Pakistan',
                dish: 'Tandoor & Lassi',
                text: 'Khameeri roti, stuffed prathas and frothy sweet lassi — classic Pakistani tandoor favourites.',
              },
              {
                region: 'Pakistan',
                dish: 'Barfi & Biryani',
                text: 'A rich mix of sweets and layered biryani with a proper mirch kick.',
              },
            ].map((h) => (
              <motion.div key={h.region} {...fadeUp} className="rounded-xl border border-gold/25 bg-maroon/60 p-6 backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">{h.region}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-cream">{h.dish}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-beige/75">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sweets & bakery + Restaurant offering */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border border-gold/30 bg-white">
              <img src="/images/cakes.jpg" alt="Celebration cake" className="aspect-[16/8] w-full object-cover" />
              <div className="p-7">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-burgundy">
                  <Cake className="h-4 w-4" /> Sweets, Bakery & Cakes
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-maroon">The Sweet Side of the House</h3>
                <p className="mt-3 text-sm leading-relaxed text-brown/70">
                  Six families of mithai — barfi, halwa, laddu, cham cham, classics and
                  kulfi — sit beside a working bakery of breads, rusks and puffs, and a
                  cake studio decorating for birthdays, graduations and Umrah homecomings.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {[['Sweets', '/sweets'], ['Bakery', '/bakery'], ['Cakes', '/cakes']].map(([l, to]) => (
                    <Link key={to} to={to} className="rounded-full border border-gold/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-maroon transition hover:bg-maroon hover:text-gold-pale">
                      {l} →
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border border-gold/30 bg-white">
              <img src="/images/restaurant.jpg" alt="Pakistani curries and biryani" className="aspect-[16/8] w-full object-cover" />
              <div className="p-7">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-burgundy">
                  <UtensilsCrossed className="h-4 w-4" /> The Restaurant
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-maroon">The Savoury Side of the House</h3>
                <p className="mt-3 text-sm leading-relaxed text-brown/70">
                  A dhaba-style kitchen serving slow curries, biryani and yakhni pulao,
                  tandoor breads by the piece, street chaat, house specials and karak that
                  never stops — from breakfast anda-pratha to late-night rolls.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {[['Restaurant', '/restaurant'], ['Restaurant Items', '/shop/restaurant-items'], ['Tandoor', '/shop/tandoor']].map(([l, to]) => (
                    <Link key={to} to={to} className="rounded-full border border-gold/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-maroon transition hover:bg-maroon hover:text-gold-pale">
                      {l} →
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality & freshness */}
      <section className="border-y border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Quality & freshness"
            title="What “Fresh” Means Here"
            arabic="الجودة والطزاجة"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: 'Batch-made all day', text: 'The counter is restocked in small trays, not warehouse quantities.' },
              { icon: Wheat, title: 'Milled & kneaded in-house', text: 'Doughs for naan, sheermal and rusk are made on-site, never frozen in.' },
              { icon: Flame, title: 'A tandoor that never cools', text: 'Breads are made to order — your naan hits the clay after you ask for it.' },
              { icon: ChefHat, title: 'One kitchen, full control', text: 'Sweets, bakery and restaurant share one standard: would we serve this at our own dastarkhwan?' },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div key={title} {...fadeUp} className="rounded-xl border border-gold/30 bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon text-gold-light">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-maroon">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown/65">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Brand values"
            title="What We Stand Behind"
            arabic="قيمنا"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} {...fadeUp} className="flex gap-5 rounded-xl border border-gold/30 bg-white p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-burgundy text-gold-pale">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-maroon">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brown/70">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-maroon px-6 py-10 text-center">
            <Leaf className="hidden" aria-hidden />
            <p dir="rtl" className="font-arabic text-lg text-gold-light">تذوق الفرق</p>
            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">Taste the difference tradition makes</h3>
            <Link to="/shop" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-maroon-deep transition hover:bg-gold-light">
              Start an Order <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
