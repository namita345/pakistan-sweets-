import {
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS, waLink } from '../lib/data';

const CARDS = [
  {
    icon: MapPin,
    title: 'Visit the Store',
    lines: [BUSINESS.address, BUSINESS.poBox],
    action: { label: 'Open in Google Maps', href: BUSINESS.mapsLink },
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [BUSINESS.phoneDisplay, 'Orders, cakes & bulk enquiries'],
    action: { label: 'Call now', href: `tel:${BUSINESS.phoneTel}` },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Orders',
    lines: [BUSINESS.phoneDisplay, 'Fastest way to place an order'],
    action: {
      label: 'Chat on WhatsApp',
      href: waLink('Assalam o Alaikum! I would like to place an order with Pakistan Sweets.'),
    },
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Saturday – Friday', '7:00 AM – 10:30 PM · Open every day'],
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        arabic="اتصل بنا"
        tagline="Order a celebration cake, book mithai trays for your event, or just ask what came out of the tandoor this morning — we are one call or message away."
        crumbs={[{ label: 'Contact' }]}
        meta={BUSINESS.hours}
        image="/images/heritage.jpg"
      />

      <section className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map(({ icon: Icon, title, lines, action }) => (
              <div key={title} className="flex flex-col rounded-xl border border-gold/25 bg-white p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon text-gold-light">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-maroon">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="mt-1.5 text-sm leading-relaxed text-brown/70">{l}</p>
                ))}
                {action && (
                  <a
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-burgundy transition hover:text-gold"
                  >
                    {action.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Email + social */}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-gold/25 bg-maroon p-7 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-light">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Email us</p>
                  <a href={`mailto:${BUSINESS.email}`} className="break-all font-display text-lg font-semibold text-cream hover:text-gold-light">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-gold/25 bg-white p-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-burgundy">Follow along</p>
                <p className="font-display text-lg font-semibold text-maroon">Fresh batches, daily on social</p>
              </div>
              <div className="flex gap-3">
                <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-maroon text-gold-light transition hover:bg-burgundy">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={BUSINESS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-maroon text-gold-light transition hover:bg-burgundy">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Find us in Doha"
            title="Doha, Qatar"
            arabic="غانم القديم، الدوحة"
            description="Visit us in Doha, Qatar for sweets, bakery favourites and Pakistani food."
          />
          <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_20px_50px_-20px_rgba(70,9,14,0.4)]">
            <iframe
              title="Pakistan Sweets location — Doha, Qatar"
              src={BUSINESS.mapsEmbed}
              className="h-[380px] w-full sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
