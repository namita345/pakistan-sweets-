import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Phone, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../lib/cart';
import { BUSINESS, qar } from '../lib/data';

export default function CartDrawer() {
  const { lines, isOpen, closeCart, setQty, remove, total, clear } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-maroon-deep/60 backdrop-blur-sm" onClick={closeCart} />
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.28 }} className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col bg-cream shadow-2xl" aria-label="Shopping cart">
            <div className="flex items-center justify-between border-b border-gold/25 bg-maroon px-5 py-4">
              <p className="flex items-center gap-2 font-display text-xl font-bold text-cream"><ShoppingBag className="h-5 w-5 text-gold-light" /> Your Cart</p>
              <button onClick={closeCart} className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold-light transition hover:bg-gold/20" aria-label="Close cart"><X className="h-4.5 w-4.5" /></button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-cream-dark text-gold"><ShoppingBag className="h-7 w-7" /></span>
                <p className="font-display text-2xl font-semibold text-maroon">Your cart is empty</p>
                <p className="text-sm text-brown/60">Browse our sweets, bakery and restaurant menus and add your favourites.</p>
                <Link to="/shop" onClick={closeCart} className="mt-2 rounded-full bg-burgundy px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale transition hover:bg-maroon">Browse the Shop</Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <ul className="space-y-4">
                    {lines.map(({ product, qty, unitPrice, variationLabel, variationKey }) => (
                      <li key={variationKey} className="flex gap-3 rounded-xl border border-gold/25 bg-white p-3">
                        <img src={product.img} alt={product.en} className="h-20 w-20 shrink-0 rounded-lg object-cover" />
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="font-display text-base font-semibold leading-tight text-maroon">{product.en}</p>
                              <p dir="rtl" className="text-right font-arabic text-[13px] text-brown/55">{product.ar}</p>
                              {variationLabel && <p className="mt-1 text-[11px] font-semibold text-burgundy">Option: {variationLabel}</p>}
                            </div>
                            <button onClick={() => remove(variationKey)} className="text-brown/40 transition hover:text-burgundy" aria-label={`Remove ${product.en}`}><Trash2 className="h-4 w-4" /></button>
                          </div>
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center gap-1 rounded-full border border-gold/40 px-1 py-0.5">
                              <button onClick={() => setQty(variationKey, qty - 1)} className="grid h-6 w-6 place-items-center rounded-full text-maroon hover:bg-gold/20" aria-label="Decrease"><Minus className="h-3 w-3" /></button>
                              <span className="min-w-5 text-center text-sm font-bold text-maroon">{qty}</span>
                              <button onClick={() => setQty(variationKey, qty + 1)} className="grid h-6 w-6 place-items-center rounded-full bg-maroon text-gold-pale hover:bg-burgundy" aria-label="Increase"><Plus className="h-3 w-3" /></button>
                            </div>
                            <p className="text-sm font-bold text-burgundy"><span className="mr-1 text-[10px] uppercase tracking-wider text-gold">QAR</span>{qar(unitPrice * qty)}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button onClick={clear} className="mt-4 text-xs font-semibold uppercase tracking-wider text-brown/45 underline-offset-2 transition hover:text-burgundy hover:underline">Clear cart</button>
                </div>

                <div className="border-t border-gold/25 bg-cream-dark px-5 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brown/60">Subtotal</p>
                    <p className="font-display text-2xl font-bold text-maroon"><span className="mr-1.5 text-xs font-body font-bold uppercase tracking-wider text-gold">QAR</span>{qar(total)}</p>
                  </div>
                  <Link to="/checkout" onClick={closeCart} className="mt-4 flex w-full items-center justify-center rounded-full bg-burgundy py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale shadow-lg shadow-burgundy/30 transition hover:bg-maroon">Proceed to Checkout</Link>
                  <a href={`tel:${BUSINESS.phoneTel}`} className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-full border border-maroon/40 py-3 text-xs font-bold uppercase tracking-[0.2em] text-maroon transition hover:bg-maroon hover:text-gold-pale"><Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}</a>
                  <p className="mt-3 text-center text-[11px] text-brown/50">Secure payment can be connected to your preferred Qatar payment gateway at checkout.</p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
