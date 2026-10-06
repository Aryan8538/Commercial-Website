import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedShowcase from '../components/home/FeaturedShowcase';
import StoreUSPs from '../components/home/StoreUSPs';
import LocationSection from '../components/home/LocationSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroBanner />
      <CategoryGrid />
      <FeaturedShowcase />
      <StoreUSPs />
      <LocationSection />
    </div>
  );
}
