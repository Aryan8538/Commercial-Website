import React from 'react';
import { SearchX, RotateCcw, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function EmptyState({ onReset, searchQuery }) {
  return (
    <div className="text-center py-16 px-4 bg-white rounded-2xl border border-cream-200/80 shadow-sm max-w-lg mx-auto my-8">
      <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center mx-auto mb-4 border border-cream-200">
        <SearchX className="w-8 h-8 text-crimson-700" />
      </div>

      <h3 className="font-serif font-bold text-lg text-ink-900 mb-2">
        No Matching Products Found
      </h3>

      <p className="text-xs sm:text-sm text-ink-600 mb-6 leading-relaxed">
        {searchQuery ? (
          <>
            We couldn't find any designs matching <span className="font-semibold text-crimson-800">"{searchQuery}"</span>. Try a different keyword, SKU, or clear your filters.
          </>
        ) : (
          "We couldn't find any items matching your current filter selection. Try adjusting your color, style, or price options."
        )}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-crimson-800 bg-crimson-50 border border-crimson-200 hover:bg-crimson-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        )}

        <a
          href={BUSINESS_CONFIG.createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-whatsapp hover:bg-whatsapp-hover transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

      <p className="text-[11px] text-ink-400 mt-4">
        Our physical shop carries over 200+ unlisted designs. Inquire directly with our staff!
      </p>
    </div>
  );
}
