import React from 'react';

export default function Badge({ children, variant = 'neutral', className = '' }) {
  const variants = {
    neutral: 'bg-cream-200/80 text-ink-700 border-cream-300',
    gold: 'bg-gold-50 text-gold-700 border-gold-300/80 font-medium',
    crimson: 'bg-crimson-50 text-crimson-800 border-crimson-200 font-semibold',
    sku: 'bg-ink-800 text-gold-300 border-ink-900 font-mono tracking-wider font-bold',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200'
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] border leading-normal ${
        variants[variant] || variants.neutral
      } ${className}`}
    >
      {children}
    </span>
  );
}
