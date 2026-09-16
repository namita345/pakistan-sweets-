import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useCart } from '../lib/cart';
import { qar, type Product } from '../lib/data';

export default function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add, openCart } = useCart();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSelectedIndex(0);
    setQty(1);
  }, [product?.id]);

  useEffect(() => {
    if (!product) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [product, onClose]);

  const selectedVariation = product?.variations?.[selectedIndex];
  const unitPrice = selectedVariation?.price ?? product?.price ?? 0;
  const variationKey = selectedVariation ? `${product?.id}:${selectedVariation.label}` : `${product?.id}:base`;
  const variationLabel = selectedVariation?.label;
  const total = useMemo(() => unitPrice * qty, [unitPrice, qty]);

  if (!product) return null;

  const handleAdd = () => {
    add(product, qty, variationLabel, unitPrice, variationKey);
    onClose();
    openCart();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center bg-maroon-deep/75 p-3 backdrop-blur-sm sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={product.en}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-gold/40 bg-cream shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-maroon text-gold-light shadow-lg transition hover:bg-burgundy"
            aria-label="Close product"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid md:grid-cols-2">
            <div className="bg-cream-dark p-3 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-gold/30 bg-white">
                <img src={product.img} alt={product.en} className="aspect-square w-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col p-5 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy">Pakistan Sweets · Doha, Qatar</p>
              <h2 className="mt-2 pr-10 font-display text-3xl font-bold leading-tight text-maroon sm:text-4xl">{product.en}</h2>
              <p dir="rtl" className="mt-1 text-right font-arabic text-lg text-brown/65">{product.ar}</p>
              <p className="mt-5 text-sm leading-7 text-brown/70">Select your preferred option, choose the quantity, then add it to your cart.</p>

              {product.variations && product.variations.length > 0 && (
                <div className="mt-6">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-maroon">Available options</p>
                    <p className="text-xs text-brown/50">Choose one</p>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {product.variations.map((variation, index) => (
                      <button
                        key={`${variation.label}-${variation.price}`}
                        onClick={() => setSelectedIndex(index)}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${selectedIndex === index ? 'border-gold bg-maroon text-cream' : 'border-gold/30 bg-white text-maroon hover:border-gold hover:bg-cream-dark'}`}
                      >
                        <span className="text-sm font-semibold">{variation.label}</span>
                        <span className={`text-sm font-bold ${selectedIndex === index ? 'text-gold-light' : 'text-burgundy'}`}>QAR {qar(variation.price)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center justify-between rounded-xl border border-gold/25 bg-white p-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brown/50">Price</p>
                  <p className="mt-0.5 font-display text-3xl font-bold text-burgundy"><span className="mr-1 text-xs font-body uppercase tracking-wider text-gold">QAR</span>{qar(unitPrice)}</p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-gold/40 bg-cream px-1 py-1">
                  <button onClick={() => setQty((v) => Math.max(1, v - 1))} className="grid h-8 w-8 place-items-center rounded-full text-maroon hover:bg-gold/20" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="min-w-8 text-center font-bold text-maroon">{qty}</span>
                  <button onClick={() => setQty((v) => v + 1)} className="grid h-8 w-8 place-items-center rounded-full bg-maroon text-gold-pale hover:bg-burgundy" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
              </div>

              <button onClick={handleAdd} className="mt-4 flex w-full items-center justify-between rounded-full bg-burgundy px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-gold-pale shadow-lg shadow-burgundy/20 transition hover:bg-maroon">
                <span className="flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Add to Cart</span>
                <span>QAR {qar(total)}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
