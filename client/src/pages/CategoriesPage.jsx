import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/seedData';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-800 bg-crimson-50 px-3 py-1 rounded-full border border-crimson-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Product Taxonomy</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink-900">
            Showroom Categories
          </h1>
          <p className="text-xs sm:text-sm text-ink-600 mt-2">
            Select a category to view specialized designs, paper textures, and pricing brackets.
          </p>
        </div>

        {/* Category Cards Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalog?category=${cat.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cream-100 relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent flex items-end p-5">
                  <span className="px-3 py-1 rounded-lg bg-gold-400/90 text-crimson-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                    {cat.productCount} Designs Ready
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif font-bold text-lg sm:text-xl text-ink-900 group-hover:text-crimson-800 transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-600 mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-cream-100 flex items-center justify-between text-xs font-bold text-crimson-800">
                  <span>Explore {cat.name}</span>
                  <div className="w-7 h-7 rounded-full bg-cream-100 group-hover:bg-crimson-800 group-hover:text-gold-200 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
