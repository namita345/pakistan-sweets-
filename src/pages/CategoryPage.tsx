import { ArrowRight } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import {
  CATEGORIES,
  getCategory,
  productsOf,
  productsOfSub,
} from '../lib/data';
import { Link } from 'react-router-dom';

export default function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug)!;
  const all = productsOf(slug);
  const isShopChild = category.path.startsWith('/shop/');
  const crumbs = isShopChild
    ? [{ label: 'Shop', to: '/shop' }, { label: category.name }]
    : [{ label: category.name }];

  const sections = category.subcats
    .map((sc) => ({ ...sc, products: productsOfSub(slug, sc.id) }))
    .filter((sc) => sc.products.length > 0);

  const others = CATEGORIES.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={category.name}
        arabic={category.ar}
        tagline={category.description}
        crumbs={crumbs}
        meta={`${all.length} items · Prices in QAR`}
        image={category.cardImg}
      />

      {/* Subcategory chip nav */}
      {sections.length > 1 && (
        <div className="sticky top-[68px] z-40 border-b border-gold/25 bg-cream/95 backdrop-blur lg:top-[76px]">
          <div className="gold-scroll mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
            {sections.map((sc) => (
              <a
                key={sc.id}
                href={`#${sc.id}`}
                className="shrink-0 rounded-full border border-gold/40 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-maroon transition hover:bg-maroon hover:text-gold-pale"
              >
                {sc.title}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="jaali-light">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {sections.map((sc, i) => (
            <section key={sc.id} id={sc.id} className={`scroll-mt-40 ${i > 0 ? 'mt-16 sm:mt-20' : ''}`}>
              <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b-2 border-gold/30 pb-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">{sc.title}</h2>
                  <p dir="rtl" className="mt-0.5 text-left font-arabic text-base text-gold">{sc.ar}</p>
                </div>
                <span className="rounded-full bg-maroon/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-burgundy">
                  {sc.products.length} items
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
                {sc.products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Explore more */}
      <section className="border-t border-gold/25 bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">Explore more of the menu</h2>
            <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-burgundy transition hover:text-gold">
              Full shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
