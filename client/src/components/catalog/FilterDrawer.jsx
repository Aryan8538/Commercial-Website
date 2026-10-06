import React, { useEffect } from 'react';
import { X, RotateCcw, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

export default function FilterDrawer({ isOpen, onClose }) {
  const {
    category,
    setCategory,
    color,
    setColor,
    style,
    setStyle,
    priceRangeIndex,
    setPriceRangeIndex,
    filterMeta,
    products,
    resetFilters,
    activeFiltersCount
  } = useCatalog();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-Up Bottom Sheet on Mobile / Slide-In Drawer on Tablet */}
      <div className="fixed inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto max-h-[90vh] md:max-h-full max-w-md w-full bg-cream-50 rounded-t-3xl md:rounded-none md:rounded-l-2xl shadow-2xl flex flex-col z-10 border-t md:border-l md:border-t-0 border-cream-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cream-200 flex items-center justify-between bg-cream-100/50">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-crimson-800" />
            <h2 className="font-serif font-bold text-ink-900 text-lg">
              Filter Collection
            </h2>
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-crimson-800 text-gold-200 text-xs font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-crimson-700 hover:text-crimson-900 font-semibold px-2 py-1"
              >
                Reset
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-ink-500 hover:text-ink-800 hover:bg-cream-200 transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Filter Sections */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          
          {/* 1. Category */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-500 mb-2.5">
              Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {filterMeta.categories.map((cat) => {
                const isSelected = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-crimson-800 text-gold-200 border-crimson-800 shadow-sm'
                        : 'bg-white text-ink-800 border-cream-200 hover:border-gold-300'
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-gold-300" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Color Palette */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-500 mb-2.5">
              Color Hue
            </label>
            <div className="flex flex-wrap gap-2">
              {filterMeta.colors.map((c) => {
                const isSelected = color === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-crimson-800 text-gold-200 border-crimson-800 shadow-sm'
                        : 'bg-white text-ink-700 border-cream-200 hover:border-gold-300'
                    }`}
                  >
                    {c !== 'All' && (
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                        style={{
                          backgroundColor:
                            c === 'Red' ? '#C53030' :
                            c === 'Golden' ? '#D69E2E' :
                            c === 'Pink' ? '#ED64A6' :
                            c === 'Green' ? '#38A169' :
                            c === 'Blue' ? '#3182CE' :
                            c === 'White' ? '#FFFFFF' :
                            c === 'Maroon' ? '#7A1B28' :
                            '#805AD5'
                        }}
                      />
                    )}
                    <span>{c}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Style / Pattern */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-500 mb-2.5">
              Craft & Style
            </label>
            <div className="flex flex-wrap gap-2">
              {filterMeta.styles.map((s) => {
                const isSelected = style === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStyle(s)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                      isSelected
                        ? 'bg-crimson-800 text-gold-200 border-crimson-800 shadow-sm'
                        : 'bg-white text-ink-700 border-cream-200 hover:border-gold-300'
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Price Brackets */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-500 mb-2.5">
              Price Range (Per Piece / Pack)
            </label>
            <div className="space-y-1.5">
              {filterMeta.priceRanges.map((range, idx) => {
                const isSelected = priceRangeIndex === idx;
                return (
                  <button
                    key={range.label}
                    type="button"
                    onClick={() => setPriceRangeIndex(idx)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium text-left transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-crimson-800 text-gold-200 border-crimson-800 shadow-sm'
                        : 'bg-white text-ink-800 border-cream-200 hover:border-gold-300'
                    }`}
                  >
                    <span>{range.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-gold-300" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Drawer Footer */}
        <div className="p-4 border-t border-cream-200 bg-cream-100/60 flex items-center gap-3">
          <button
            type="button"
            onClick={resetFilters}
            className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-ink-700 bg-white border border-cream-200 hover:bg-cream-50 transition-colors flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-[2] py-3 px-4 rounded-xl text-xs font-bold text-white bg-crimson-800 hover:bg-crimson-900 shadow-md transition-transform active:scale-95 flex items-center justify-center gap-1.5"
          >
            <span>Show {products.length} Products</span>
          </button>
        </div>

      </div>
    </div>
  );
}
