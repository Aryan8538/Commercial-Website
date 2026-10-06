import React from 'react';
import { useCatalog } from '../context/CatalogContext';
import SearchBar from '../components/catalog/SearchBar';
import QuickFilterPills from '../components/catalog/QuickFilterPills';
import ProductGrid from '../components/catalog/ProductGrid';
import FilterDrawer from '../components/catalog/FilterDrawer';
import { QrCode, Sparkles } from 'lucide-react';

export default function CatalogPage() {
  const {
    products,
    isLoading,
    search,
    setSearch,
    resetFilters,
    isFilterDrawerOpen,
    setIsFilterDrawerOpen
  } = useCatalog();

  return (
    <div className="min-h-screen bg-cream-50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Title & In-Store Notice */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson-800">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Digital Product Showroom</span>
            </div>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 mt-1">
              Browse Showroom Collection
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-cream-200 text-xs text-ink-600 shadow-sm self-start md:self-auto">
            <QrCode className="w-4 h-4 text-gold-600 shrink-0" />
            <span>In-Store QR Catalog — Fast Instant Discovery</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search by code (e.g. SL-001), color (Red, Gold), or style (Velvet)..."
          />
        </div>

        {/* Quick Filter Pills & Category Switcher */}
        <div className="mb-6">
          <QuickFilterPills />
        </div>

        {/* Count Bar */}
        <div className="flex items-center justify-between text-xs text-ink-500 font-medium mb-4 pb-2 border-b border-cream-200">
          <span>
            Showing <strong className="text-ink-900">{products.length}</strong> designs in showroom
          </span>
          {search && (
            <span>
              Searching for: <strong className="text-crimson-800">"{search}"</strong>
            </span>
          )}
        </div>

        {/* Responsive Product Grid */}
        <ProductGrid
          products={products}
          isLoading={isLoading}
          onResetFilters={resetFilters}
          searchQuery={search}
        />

        {/* Mobile Slide-Up Filter Drawer */}
        <FilterDrawer
          isOpen={isFilterDrawerOpen}
          onClose={() => setIsFilterDrawerOpen(false)}
        />

      </div>
    </div>
  );
}
