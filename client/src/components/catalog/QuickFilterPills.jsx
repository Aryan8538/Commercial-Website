import React from 'react';
import { SlidersHorizontal, ArrowUpDown, X, Flame } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';

export default function QuickFilterPills() {
  const {
    category,
    setCategory,
    color,
    setColor,
    style,
    setStyle,
    priceRangeIndex,
    setPriceRangeIndex,
    sort,
    setSort,
    filterMeta,
    activeFiltersCount,
    setIsFilterDrawerOpen,
    resetFilters,
    search,
    setSearch
  } = useCatalog();

  return (
    <div className="space-y-3">
      
      {/* Category Pills Bar + Filter Button */}
      <div className="flex items-center gap-2">
        
        {/* Main Filter Drawer Trigger Button */}
        <button
          type="button"
          onClick={() => setIsFilterDrawerOpen(true)}
          className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
            activeFiltersCount > 0
              ? 'bg-crimson-800 text-gold-200 border-crimson-800 shadow-sm'
              : 'bg-white text-ink-800 border-cream-200 hover:border-gold-400'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-gold-400 text-crimson-900 font-bold text-[10px] flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>

        {/* Horizontal Category Slider with Best Sellers button */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <button
            type="button"
            onClick={() => setSearch(search === 'bestseller' ? '' : 'bestseller')}
            className={`shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              search === 'bestseller'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
            }`}
          >
            <Flame className={`w-3 h-3 ${search === 'bestseller' ? 'fill-current text-white' : 'fill-current text-amber-600'}`} />
            <span>Best Sellers</span>
          </button>

          {filterMeta.categories.map((cat) => {
            const isSelected = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-crimson-800 text-gold-200 shadow-sm'
                    : 'bg-white text-ink-700 border border-cream-200 hover:bg-cream-100 hover:border-gold-300'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

      </div>

      {/* Secondary Bar: Active Filter Chips & Sort Dropdown */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        
        {/* Active Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          {search === 'bestseller' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold">
              <Flame className="w-3 h-3 fill-current text-amber-600" />
              <span>Best Sellers</span>
              <button type="button" onClick={() => setSearch('')}>
                <X className="w-3 h-3 hover:text-amber-950" />
              </button>
            </span>
          )}

          {category !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-crimson-50 text-crimson-800 border border-crimson-200 text-[11px] font-medium">
              <span>{filterMeta.categories.find(c => c.id === category)?.name || category}</span>
              <button type="button" onClick={() => setCategory('all')}>
                <X className="w-3 h-3 hover:text-crimson-950" />
              </button>
            </span>
          )}

          {color !== 'All' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-100 text-ink-800 border border-cream-300 text-[11px] font-medium">
              <span>Color: {color}</span>
              <button type="button" onClick={() => setColor('All')}>
                <X className="w-3 h-3 hover:text-crimson-900" />
              </button>
            </span>
          )}

          {style !== 'All' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-100 text-ink-800 border border-cream-300 text-[11px] font-medium">
              <span>Style: {style}</span>
              <button type="button" onClick={() => setStyle('All')}>
                <X className="w-3 h-3 hover:text-crimson-900" />
              </button>
            </span>
          )}

          {priceRangeIndex > 0 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-100 text-ink-800 border border-cream-300 text-[11px] font-medium">
              <span>Price: {filterMeta.priceRanges[priceRangeIndex]?.label}</span>
              <button type="button" onClick={() => setPriceRangeIndex(0)}>
                <X className="w-3 h-3 hover:text-crimson-900" />
              </button>
            </span>
          )}

          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-[11px] text-crimson-800 hover:underline font-semibold ml-1"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-1.5 ml-auto">
          <ArrowUpDown className="w-3.5 h-3.5 text-ink-400" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent text-ink-700 text-xs font-medium focus:outline-none border-0 cursor-pointer pr-4 py-1"
            aria-label="Sort products"
          >
            {filterMeta.sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
}
