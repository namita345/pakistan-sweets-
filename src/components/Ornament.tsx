export default function Ornament({ light = false, className = '' }: { light?: boolean; className?: string }) {
  const color = light ? 'bg-gold-light' : 'bg-gold';
  const border = light ? 'border-gold-light' : 'border-gold';
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden>
      <span className={`h-px w-10 sm:w-16 ${color} opacity-60`} />
      <span className={`h-2 w-2 rotate-45 border ${border}`} />
      <span className={`h-2.5 w-2.5 rotate-45 ${color}`} />
      <span className={`h-2 w-2 rotate-45 border ${border}`} />
      <span className={`h-px w-10 sm:w-16 ${color} opacity-60`} />
    </div>
  );
}
