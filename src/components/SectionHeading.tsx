import Ornament from './Ornament';

interface Props {
  eyebrow?: string;
  title: string;
  arabic?: string;
  description?: string;
  light?: boolean;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  arabic,
  description,
  light = false,
  align = 'center',
}: Props) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col ${alignCls} gap-3 mb-10 sm:mb-12`}>
      {eyebrow && (
        <p className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] ${light ? 'text-gold-light' : 'text-burgundy'}`}>
          {eyebrow}
        </p>
      )}
      <div className={`flex flex-col ${alignCls} gap-1`}>
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold ${light ? 'text-cream' : 'text-maroon'}`}
        >
          {title}
        </h2>
        {arabic && (
          <p dir="rtl" className={`font-arabic text-lg sm:text-xl ${light ? 'text-gold-light/80' : 'text-gold'}`}>
            {arabic}
          </p>
        )}
      </div>
      {align === 'center' && <Ornament light={light} />}
      {description && (
        <p className={`max-w-2xl text-sm sm:text-base leading-relaxed ${light ? 'text-beige/85' : 'text-brown/70'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
