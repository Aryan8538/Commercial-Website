import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/seedData';

export default function CategoryGrid() {
  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-crimson-800">
              Browse By Category
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 mt-1">
              Explore Our Product Lines
            </h2>
          </div>
          <Link
            to="/categories"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-crimson-800 hover:text-gold-700 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalog?category=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-cream-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Category Image */}
              <div className="aspect-[4/3] overflow-hidden bg-cream-100 relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-bold text-ink-800 shadow-sm">
                  {cat.productCount} Designs
                </span>
              </div>

              {/* Category Details */}
              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink-900 group-hover:text-crimson-800 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-ink-500 line-clamp-2 mt-1 leading-snug">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-crimson-800 group-hover:text-gold-600 transition-colors">
                  <span>Browse</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
