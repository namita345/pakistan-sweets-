import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Clock,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../lib/cart';
import { BUSINESS, DROPDOWN_CATEGORIES } from '../lib/data';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Shop', to: '/shop', dropdown: true },
  { label: 'Bakery', to: '/bakery' },
  { label: 'Sweets', to: '/sweets' },
  { label: 'Cakes', to: '/cakes' },
  { label: 'Restaurant', to: '/restaurant' },
  { label: 'Contact', to: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center">
      <img src="/logo.png" alt="Pakistan Sweets & Bakers — Doha, Qatar" className="h-14 w-auto object-contain sm:h-16" />
    </Link>
  );
}

export default function Navbar() {
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const enterShop = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setShopOpen(true);
  };
  const leaveShop = () => {
    closeTimer.current = window.setTimeout(() => setShopOpen(false), 160);
  };

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
      isActive ? 'text-burgundy' : 'text-brown/75 hover:text-maroon'
    } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-gold after:transition-transform ${
      isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
    }`;

  return (
    <>
      {/* Top strip */}
      <div className="bg-maroon-deep text-[11px] text-beige/80 sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-1.5 transition-colors hover:text-gold-light">
              <Phone className="h-3 w-3 text-gold" /> {BUSINESS.phoneDisplay}
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3 w-3 text-gold" /> {BUSINESS.hours}
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold" />
            <span className="hidden sm:inline">{BUSINESS.addressShort}</span>
            <span className="sm:hidden">Doha, Qatar</span>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="sticky top-0 z-50 border-b border-gold/25 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[76px] lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Main navigation">
            {NAV.map((item) =>
              item.dropdown ? (
                <div key={item.to} className="relative" onMouseEnter={enterShop} onMouseLeave={leaveShop}>
                  <NavLink to={item.to} className={linkCls} end>
                    <span className="inline-flex items-center gap-1">
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </NavLink>
                  <AnimatePresence>
                    {shopOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-xl border border-gold/30 bg-cream shadow-[0_24px_50px_-16px_rgba(49,5,8,0.45)]">
                          <div className="bg-maroon px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-gold-light">
                            Shop Categories
                          </div>
                          {DROPDOWN_CATEGORIES.map((c) => (
                            <Link
                              key={c.slug}
                              to={c.path}
                              className="flex items-center justify-between border-b border-gold/15 px-4 py-3 transition-colors last:border-0 hover:bg-cream-dark"
                            >
                              <span className="text-sm font-semibold text-maroon">{c.name}</span>
                              <span dir="rtl" className="font-arabic text-[13px] text-gold">{c.ar}</span>
                            </Link>
                          ))}
                          <Link
                            to="/shop"
                            className="block bg-cream-dark px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-burgundy transition-colors hover:bg-gold/20"
                          >
                            View Full Shop →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={linkCls} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={openCart}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-maroon transition-colors hover:bg-gold/15"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-burgundy px-1 text-[10px] font-bold text-cream">
                  {count}
                </span>
              )}
            </button>
            <Link
              to="/shop"
             className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-maroon shadow-lg shadow-gold/25 transition-all hover:bg-gold-light hover:shadow-gold/30 sm:inline-flex"
            >
              Order Now
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-maroon lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-maroon-deep/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col overflow-y-auto bg-maroon-deep lg:hidden"
              aria-label="Mobile menu"
            >
              <div className="jaali flex items-center justify-between border-b border-gold/20 px-5 py-4">
                <img src="/logo.png" alt="Pakistan Sweets & Bakers — Doha, Qatar" className="h-12 w-auto max-w-[235px] object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold-light"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <nav className="flex-1 px-5 py-4">
                {NAV.map((item) =>
                  item.dropdown ? (
                    <div key={item.to} className="border-b border-gold/15">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/shop"
                          className="flex-1 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-cream"
                        >
                          Shop
                        </Link>
                        <button
                          onClick={() => setMobileShopOpen((v) => !v)}
                          className="grid h-9 w-9 place-items-center text-gold-light"
                          aria-label="Toggle shop categories"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileShopOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {mobileShopOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {DROPDOWN_CATEGORIES.map((c) => (
                              <Link
                                key={c.slug}
                                to={c.path}
                                className="flex items-center justify-between py-2.5 pl-4 text-[13px] text-beige/85"
                              >
                                {c.name}
                                <span dir="rtl" className="font-arabic text-gold/80">{c.ar}</span>
                              </Link>
                            ))}
                            <div className="pb-3" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block border-b border-gold/15 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-cream"
                    >
                      {item.label}
                    </Link>
                  ),
                )}

                <Link
                  to="/shop"
                  className="mt-6 block rounded-full bg-gold py-3.5 text-center text-xs font-bold uppercase tracking-[0.22em] text-maroon-deep"
                >
                  Order Now
                </Link>
              </nav>

              <div className="border-t border-gold/20 px-5 py-4 text-xs text-beige/70">
                <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> {BUSINESS.phoneDisplay}</p>
                <p className="mt-2 flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" /> {BUSINESS.hours}</p>
                <p className="mt-2 flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" /> {BUSINESS.address}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
