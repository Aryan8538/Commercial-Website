import React from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';
import EmptyState from '../common/EmptyState';

export default function ProductGrid({ products, isLoading, onResetFilters, searchQuery }) {
  if (isLoading) {
    return <LoadingSpinner message="Fetching showroom collection..." />;
  }

  if (!products || products.length === 0) {
    return <EmptyState onReset={onResetFilters} searchQuery={searchQuery} />;
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
