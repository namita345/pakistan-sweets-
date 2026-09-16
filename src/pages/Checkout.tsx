import { ArrowLeft, CheckCircle2, CreditCard, MapPin, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../lib/cart';
import { BUSINESS, qar } from '../lib/data';

export default function Checkout() {
  const { lines, total, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderId] = useState(() => `PS-${Date.now().toString().slice(-7)}`);

  if (submitted) {
    return (
      <section className="jaali-light min-h-[70vh] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-xl sm:p-12">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-maroon text-gold-light"><CheckCircle2 className="h-8 w-8" /></span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-burgundy">Order received</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-maroon">Thank you for your order</h1>
          <p className="mt-4 text-brown/70">Order reference: <strong className="text-maroon">{orderId}</strong></p>
          <p className="mt-2 text-sm text-brown/60">Payment gateway integration is ready to be connected. This demo confirmation does not process a real payment.</p>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-burgundy px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale">Back to Home</Link>
        </div>
      </section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="jaali-light min-h-[70vh] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-gold/30 bg-white p-10 text-center shadow-lg">
          <h1 className="font-display text-3xl font-bold text-maroon">Your cart is empty</h1>
          <p className="mt-3 text-sm text-brown/60">Add products from the Shop before starting checkout.</p>
          <Link to="/shop" className="mt-7 inline-flex rounded-full bg-burgundy px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale">Browse Shop</Link>
        </div>
      </section>
    );
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    clear();
  };

  return (
    <section className="jaali-light px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-burgundy"><ArrowLeft className="h-4 w-4" /> Continue Shopping</Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <form onSubmit={submit} className="rounded-2xl border border-gold/30 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-burgundy">Checkout · Doha, Qatar</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-maroon">Complete Your Order</h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-maroon">Full Name<input required name="name" className="mt-2 w-full rounded-xl border border-gold/30 bg-cream px-4 py-3 font-normal outline-none focus:border-gold" /></label>
              <label className="text-sm font-semibold text-maroon">Phone<input required type="tel" name="phone" className="mt-2 w-full rounded-xl border border-gold/30 bg-cream px-4 py-3 font-normal outline-none focus:border-gold" /></label>
              <label className="text-sm font-semibold text-maroon sm:col-span-2">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-gold/30 bg-cream px-4 py-3 font-normal outline-none focus:border-gold" /></label>
              <label className="text-sm font-semibold text-maroon">Delivery Address<textarea required name="address" rows={3} className="mt-2 w-full rounded-xl border border-gold/30 bg-cream px-4 py-3 font-normal outline-none focus:border-gold" /></label>
              <label className="text-sm font-semibold text-maroon">Area / Location<input required name="area" placeholder="Doha, Qatar" className="mt-2 w-full rounded-xl border border-gold/30 bg-cream px-4 py-3 font-normal outline-none focus:border-gold" /></label>
              <label className="text-sm font-semibold text-maroon sm:col-span-2">Order Notes<textarea name="notes" rows={3} className="mt-2 w-full rounded-xl border border-gold/30 bg-cream px-4 py-3 font-normal outline-none focus:border-gold" /></label>
            </div>

            <div className="mt-8 rounded-xl border border-gold/25 bg-cream-dark p-5">
              <div className="flex items-center gap-3"><CreditCard className="h-5 w-5 text-burgundy" /><div><p className="font-semibold text-maroon">Payment</p><p className="text-xs text-brown/55">Payment gateway placeholder — connect your provider here.</p></div></div>
              <button type="submit" className="mt-5 w-full rounded-full bg-burgundy py-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-pale transition hover:bg-maroon">Proceed to Payment · QAR {qar(total)}</button>
            </div>
          </form>

          <aside className="h-fit rounded-2xl border border-gold/30 bg-maroon p-6 text-cream shadow-lg sm:p-7 lg:sticky lg:top-24">
            <h2 className="font-display text-2xl font-bold">Order Summary</h2>
            <div className="mt-5 space-y-4">
              {lines.map(({ product, qty, unitPrice, variationLabel, variationKey }) => (
                <div key={variationKey} className="flex gap-3 border-b border-gold/20 pb-4">
                  <img src={product.img} alt={product.en} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1"><p className="font-semibold">{product.en}</p>{variationLabel && <p className="text-xs text-gold-light">{variationLabel}</p>}<p className="text-xs text-beige/70">Qty {qty} · QAR {qar(unitPrice)}</p></div>
                  <p className="font-bold text-gold-light">QAR {qar(unitPrice * qty)}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-between border-t border-gold/25 pt-5"><span className="text-xs uppercase tracking-[0.2em] text-beige/70">Total</span><span className="font-display text-2xl font-bold text-gold-light">QAR {qar(total)}</span></div>
            <div className="mt-6 space-y-3 border-t border-gold/20 pt-5 text-xs text-beige/75"><p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" />Doha, Qatar</p><p className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" />{BUSINESS.phoneDisplay}</p></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
