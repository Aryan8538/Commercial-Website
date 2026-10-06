import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import { FILTER_METADATA } from '../data/seedData';

const CatalogContext = createContext(null);

export function CatalogProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // State from URL params or defaults
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [color, setColor] = useState(searchParams.get('color') || 'All');
  const [style, setStyle] = useState(searchParams.get('style') || 'All');
  const [priceRangeIndex, setPriceRangeIndex] = useState(
    Number(searchParams.get('priceRangeIndex')) || 0
  );
  const [sort, setSort] = useState(searchParams.get('sort') || 'featured');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Data states
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync state with URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category && category !== 'all') params.set('category', category);
    if (color && color !== 'All') params.set('color', color);
    if (style && style !== 'All') params.set('style', style);
    if (priceRangeIndex > 0) params.set('priceRangeIndex', priceRangeIndex.toString());
    if (sort && sort !== 'featured') params.set('sort', sort);

    setSearchParams(params, { replace: true });
  }, [search, category, color, style, priceRangeIndex, sort, setSearchParams]);

  // Fetch products whenever filters change
  const fetchFilteredProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const selectedRange = FILTER_METADATA.priceRanges[priceRangeIndex] || FILTER_METADATA.priceRanges[0];
      const params = {
        search,
        category,
        color,
        style,
        minPrice: selectedRange.min > 0 ? selectedRange.min : undefined,
        maxPrice: selectedRange.max < 9000 ? selectedRange.max : undefined,
        sort
      };

      const result = await api.getProducts(params);
      setProducts(result.products || []);
    } catch (err) {
      console.error("Error fetching catalog products:", err);
      setError("Unable to load products. Please check connection.");
    } finally {
      setIsLoading(false);
    }
  }, [search, category, color, style, priceRangeIndex, sort]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [fetchFilteredProducts]);

  // Load initial categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const catData = await api.getCategories();
        setCategories(catData || []);
      } catch (e) {
        console.error("Error loading categories", e);
      }
    }
    loadCategories();
  }, []);

  // Compute active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (category && category !== 'all') count++;
    if (color && color !== 'All') count++;
    if (style && style !== 'All') count++;
    if (priceRangeIndex > 0) count++;
    return count;
  }, [category, color, style, priceRangeIndex]);

  // Reset all filters
  const resetFilters = useCallback(() => {
    setSearch('');
    setCategory('all');
    setColor('All');
    setStyle('All');
    setPriceRangeIndex(0);
    setSort('featured');
  }, []);

  const value = {
    search,
    setSearch,
    category,
    setCategory,
    color,
    setColor,
    style,
    setStyle,
    priceRangeIndex,
    setPriceRangeIndex,
    sort,
    setSort,
    products,
    categories,
    filterMeta: FILTER_METADATA,
    isLoading,
    error,
    activeFiltersCount,
    resetFilters,
    isFilterDrawerOpen,
    setIsFilterDrawerOpen
  };

  return (
    <CatalogContext.Provider value={value}>
      {children}
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider');
  }
  return context;
}
