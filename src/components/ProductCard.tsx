import { motion } from 'framer-motion';
import { Plus, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { qar, type Product } from '../lib/data';
import ProductModal from './ProductModal';

export default function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const hasVariations = Boolean(product.variations?.length);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gold/25 bg-white shadow-[0_1px_2px_rgba(49,5,8,0.06)] transition-shadow hover:shadow-[0_14px_34px_-14px_rgba(70,9,14,0.35)]"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}
      >
        <div className={`relative overflow-hidden ${compact ? 'aspect-[5/4]' : 'aspect-square'} bg-cream-dark`}>
          <img src={product.img} alt={product.en} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {hasVariations && <span className="absolute left-2.5 top-2.5 rounded-full bg-maroon/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-pale">Options</span>}
        </div>
        <div className="flex flex-1 flex-col gap-0.5 p-3.5 sm:p-4">
          <h3 className="font-display text-lg font-semibold leading-snug text-maroon sm:text-[1.2rem]">{product.en}</h3>
          <p dir="rtl" className="text-right font-arabic text-[15px] leading-relaxed text-brown/60">{product.ar}</p>
          <div className="mt-auto flex items-end justify-between gap-2 pt-3">
            <p className="flex items-baseline gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">QAR</span>
              <span className="font-display text-2xl font-bold leading-none text-burgundy">{qar(product.variations?.length ? Math.min(...product.variations.map(v => v.price)) : product.price)}</span>
              {product.variations?.length ? <span className="text-[10px] text-brown/45">from</span> : null}
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(true); }}
              className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-gold-pale transition-colors hover:bg-burgundy active:scale-95"
              aria-label={`Choose ${product.en}`}
            >
              <ShoppingBag className="h-3.5 w-3.5" /> <span>{hasVariations ? 'Choose' : 'Add'}</span>
              {!hasVariations && <Plus className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </motion.article>
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
