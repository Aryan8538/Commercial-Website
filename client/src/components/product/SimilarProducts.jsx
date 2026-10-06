import React from 'react';
import ProductCard from '../catalog/ProductCard';

export default function SimilarProducts({ currentProduct, allProducts = [] }) {
  const similar = allProducts
    .filter(
      (p) =>
        p.id !== currentProduct.id &&
        (p.categoryId === currentProduct.categoryId || p.color === currentProduct.color)
    )
    .slice(0, 4);

  if (similar.length === 0) return null;

  return (
    <div className="pt-10 border-t border-cream-200">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-ink-900">
            More Designs You May Like
          </h3>
          <p className="text-xs text-ink-500 mt-0.5">
            Similar style & color options available in our showroom
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {similar.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
