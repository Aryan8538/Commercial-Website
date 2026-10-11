import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductGallery({ images = [], productName = '', productId = '' }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = images[activeImageIndex] || images[0] || '';

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-3">
      {/* Main Image Display */}
      <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-cream-100/80 border border-cream-200 shadow-sm group p-3 sm:p-4 flex items-center justify-center">
        <img
          src={currentImage}
          alt={`${productName} - Image ${activeImageIndex + 1}`}
          className="w-full h-full object-contain transition-all duration-300"
        />

        {/* Lightbox Trigger */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 hover:bg-white text-ink-800 shadow-md backdrop-blur-sm transition-transform active:scale-90"
          title="Zoom image"
          aria-label="Zoom product image"
        >
          <Maximize2 className="w-4 h-4 text-crimson-800" />
        </button>

        {/* Swipe/Nav Arrows on Main Image (if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-ink-800 flex items-center justify-center shadow-md backdrop-blur-sm transition-transform active:scale-90"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-ink-800 flex items-center justify-center shadow-md backdrop-blur-sm transition-transform active:scale-90"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
          {images.map((img, idx) => {
            const isSelected = activeImageIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 bg-cream-100/80 p-1 flex items-center justify-center transition-all ${
                  isSelected
                    ? 'border-crimson-800 ring-2 ring-gold-400/50 shadow-sm'
                    : 'border-cream-200 opacity-70 hover:opacity-100 hover:border-gold-300'
                }`}
              >
                <img
                  src={img}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <img
              src={currentImage}
              alt={productName}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="mt-4 text-center text-xs text-white/80">
            <p className="font-semibold text-white">{productName} ({productId})</p>
            <p className="text-[11px] text-white/60">Photo {activeImageIndex + 1} of {images.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
