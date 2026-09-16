import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS, CATEGORIES, waLink } from '../lib/data';

export default function Footer() {
  return (
    <footer className="jaali bg-maroon-deep text-beige/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="Pakistan Sweets & Bakers — Doha, Qatar" className="h-14 w-auto object-contain" />
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">Doha, Qatar</p>
          <p className="mt-4 text-sm leading-relaxed text-beige/70">
            Authentic Pakistani mithai, fresh bakery, celebration cakes and a full desi
            kitchen — made fresh daily in the heart of Doha since day one.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-maroon-deep">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={BUSINESS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-maroon-deep">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={waLink('Assalam o Alaikum! I have a question about Pakistan Sweets.')} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold hover:text-maroon-deep">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Shop', '/shop'],
              ['Bakery', '/bakery'],
              ['Sweets', '/sweets'],
              ['Cakes', '/cakes'],
              ['Restaurant', '/restaurant'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-gold-light">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop categories */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">Shop Categories</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to={c.path} className="flex items-center justify-between gap-2 transition-colors hover:text-gold-light">
                  {c.name}
                  <span dir="rtl" className="font-arabic text-[13px] text-gold/70">{c.ar}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">Visit Us</p>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{BUSINESS.address}<br />{BUSINESS.poBox}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${BUSINESS.phoneTel}`} className="transition-colors hover:text-gold-light">{BUSINESS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${BUSINESS.email}`} className="break-all transition-colors hover:text-gold-light">{BUSINESS.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-gold" />
              {BUSINESS.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-beige/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Pakistan Sweets — Pure Delight. All rights reserved.</p>
          <p className="font-arabic text-sm text-gold/70" dir="rtl">حلويات باكستان – الدوحة، قطر</p>
        </div>
      </div>
    </footer>
  );
}
