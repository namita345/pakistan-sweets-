import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Ornament from './Ornament';

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  title: string;
  arabic?: string;
  tagline?: string;
  crumbs?: Crumb[];
  meta?: string;
  image?: string;
}

export default function PageHeader({ title, arabic, tagline, crumbs = [], meta, image }: Props) {
  return (
    <header className="relative overflow-hidden bg-maroon-deep">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/70 via-maroon-deep/80 to-maroon-deep" />
        </>
      )}
      <div className="jaali absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-beige/60">
          <Link to="/" className="transition-colors hover:text-gold-light">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-gold/60" />
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-gold-light">{c.label}</Link>
              ) : (
                <span className="text-gold-light">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-3xl">
          {arabic && (
            <p className="mb-1 font-arabic text-xl sm:text-2xl text-gold-light/85">
              <span dir="rtl">{arabic}</span>
            </p>
          )}
          <h1 className="font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {tagline && <p className="mt-4 max-w-xl text-sm leading-relaxed text-beige/85 sm:text-base">{tagline}</p>}
          {meta && (
            <p className="mt-5 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">
              {meta}
            </p>
          )}
        </div>
        <Ornament light className="mt-10 !justify-start" />
      </div>
    </header>
  );
}
