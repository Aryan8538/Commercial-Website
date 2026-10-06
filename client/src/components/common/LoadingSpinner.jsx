import React from 'react';

export default function LoadingSpinner({ message = 'Loading showroom products...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-cream-300"></div>
        <div className="absolute inset-0 rounded-full border-2 border-crimson-800 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border border-gold-400 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <p className="mt-4 text-xs sm:text-sm font-medium text-ink-600 tracking-wide font-serif">
        {message}
      </p>
    </div>
  );
}
