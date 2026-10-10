import React from 'react';
import { Layers, ShieldCheck, Sparkles, Tag, Users } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function StoreUSPs() {
  const usps = [
    {
      title: 'Extensive In-Store Collection',
      description: 'Over 200+ unique shagun lifafe, envelope patterns, and wedding card suites ready in our showroom.',
      icon: Layers
    },
    {
      title: 'Wholesale & Retail Pricing',
      description: 'Budget-friendly bulk rates for wedding events alongside single and assorted gift packs.',
      icon: Tag
    },
    {
      title: 'Custom Gold Foil Printing',
      description: 'In-house name stamping, couple monograms, family gotra, and custom event wordings.',
      icon: Sparkles
    },
    {
      title: '300+ GSM Premium Materials',
      description: 'Crafted with authentic micro-velvet, imported metallic shimmer boards, and handmade paper.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-crimson-800">
            Showroom Excellence
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink-900 mt-1">
            Why Shop At {BUSINESS_CONFIG.name}
          </h2>
          <p className="text-xs sm:text-sm text-ink-600 mt-2">
            Trusted wedding stationery craftsmanship serving families, event planners, and retail shoppers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-200/80 shadow-sm hover:border-gold-300 transition-colors flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-4 border border-crimson-100">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-ink-900 mb-2">
                  {usp.title}
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
