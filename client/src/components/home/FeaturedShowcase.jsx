import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Flame } from 'lucide-react';
import { PRODUCTS } from '../../data/seedData';
import ProductCard from '../catalog/ProductCard';

export default function FeaturedShowcase() {
  const [activeTab, setActiveTab] = useState('bestsellers');

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);
  const allHighlights = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);

  const displayedProducts = activeTab === 'bestsellers' ? bestSellers : allHighlights;

  return (
    <section id="bestsellers" className="py-12 sm:py-16 bg-cream-100/50 border-y border-cream-200 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-bold uppercase tracking-wider text-amber-900 shadow-xs mb-2">
              <Flame className="w-3.5 h-3.5 fill-current text-amber-600" />
              <span>Customer Favorites & Best Sellers</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900">
              Our Best-Selling Designs
            </h2>
            <p className="text-xs sm:text-sm text-ink-600 mt-1 max-w-xl">
              Most requested by families across Kurukshetra for auspicious Sagan, Milni, and royal wedding cash gifting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* View Switcher Tabs */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-cream-200 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('bestsellers')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'bestsellers'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${activeTab === 'bestsellers' ? 'fill-current text-white' : 'text-amber-600'}`} />
                <span>Best Sellers ({bestSellers.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('highlights')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'highlights'
                    ? 'bg-crimson-800 text-white shadow-sm'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>All Highlights</span>
              </button>
            </div>

            <Link
              to="/catalog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-crimson-800 hover:text-gold-700 transition-colors whitespace-nowrap pl-1"
            >
              <span>View All ({PRODUCTS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${
          activeTab === 'bestsellers' ? 'lg:grid-cols-3 xl:grid-cols-6' : 'lg:grid-cols-4'
        } gap-3 sm:gap-4 md:gap-5`}>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
