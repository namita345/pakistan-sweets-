import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productsOf, type CategoryConfig } from '../lib/data';

export default function CategoryCard({ category }: { category: CategoryConfig }) {
  const count = productsOf(category.slug).length;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
    >
      <Link
        to={category.path}
        className="group block overflow-hidden rounded-xl border border-gold/25 bg-white shadow-sm transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(70,9,14,0.4)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={category.cardImg}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-maroon-deep/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
            <div>
              <p dir="rtl" className="font-arabic text-sm text-gold-light/90">{category.ar}</p>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-cream">{category.name}</h3>
            </div>
            <span className="rounded-full bg-gold/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-pale backdrop-blur">
              {count} items
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <p className="line-clamp-1 text-xs sm:text-[13px] text-brown/65">{category.tagline}</p>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-wider text-burgundy transition-colors group-hover:text-gold">
            Browse <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
