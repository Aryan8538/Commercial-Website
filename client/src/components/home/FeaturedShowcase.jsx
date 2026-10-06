import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/seedData';
import ProductCard from '../catalog/ProductCard';

export default function FeaturedShowcase() {
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-cream-100/50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-800">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Showroom Highlights</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 mt-1">
              Popular & Trending Designs
            </h2>
          </div>

          <Link
            to="/catalog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-crimson-800 hover:text-gold-700 transition-colors"
          >
            <span>Explore Entire Catalog ({PRODUCTS.length}+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
