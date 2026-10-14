/**
 * CATALOG API SERVICE
 * Connects to Express REST API with seamless local fallback to seedData
 */
import { PRODUCTS, CATEGORIES, FILTER_METADATA } from '../data/seedData';
import { BUSINESS_CONFIG } from '../config/business';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Fetch all products with query filters
  async getProducts(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.search) query.append('search', params.search);
      if (params.category && params.category !== 'all') query.append('category', params.category);
      if (params.color && params.color !== 'All') query.append('color', params.color);
      if (params.style && params.style !== 'All') query.append('style', params.style);
      if (params.minPrice) query.append('minPrice', params.minPrice);
      if (params.maxPrice) query.append('maxPrice', params.maxPrice);
      if (params.sort) query.append('sort', params.sort);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout before fallback

      const res = await fetch(`${API_BASE_URL}/products?${query.toString()}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        return data;
      }
      throw new Error(`Server returned ${res.status}`);
    } catch {
      // Local Client-Side Fallback Engine
      return filterLocalProducts(params);
    }
  },

  // Fetch single product by slug or ID
  async getProductBySlug(slug) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const res = await fetch(`${API_BASE_URL}/products/${slug}`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        return await res.json();
      }
      throw new Error(`Server returned ${res.status}`);
    } catch {
      const found = PRODUCTS.find(p => p.slug === slug || p.id.toLowerCase() === slug.toLowerCase());
      if (found) return found;
      return null;
    }
  },

  // Fetch categories
  async getCategories() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const res = await fetch(`${API_BASE_URL}/categories`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        return await res.json();
      }
      throw new Error(`Server returned ${res.status}`);
    } catch {
      return CATEGORIES;
    }
  },

  // Fetch business config
  async getBusinessConfig() {
    try {
      const res = await fetch(`${API_BASE_URL}/config`);
      if (res.ok) return await res.json();
      return BUSINESS_CONFIG;
    } catch {
      return BUSINESS_CONFIG;
    }
  }
};

// Helper: Filter products locally
function filterLocalProducts(params = {}) {
  let list = [...PRODUCTS];

  // 1. Text Search (matches name, SKU ID, style, color, tags, description)
  if (params.search && params.search.trim()) {
    const q = params.search.trim().toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.color.toLowerCase().includes(q) ||
      p.style.toLowerCase().includes(q) ||
      p.productType.toLowerCase().includes(q) ||
      p.tags.some(tag => tag.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // 2. Category Filter
  if (params.category && params.category !== 'all') {
    list = list.filter(p => p.categoryId === params.category);
  }

  // 3. Color Filter
  if (params.color && params.color !== 'All') {
    list = list.filter(p => 
      p.color.toLowerCase() === params.color.toLowerCase() ||
      p.colors.some(c => c.toLowerCase() === params.color.toLowerCase())
    );
  }

  // 4. Style Filter
  if (params.style && params.style !== 'All') {
    list = list.filter(p => p.style.toLowerCase() === params.style.toLowerCase());
  }

  // 5. Price Range Filter
  if (params.minPrice !== undefined && params.minPrice !== null && params.minPrice !== '') {
    list = list.filter(p => p.priceMax >= Number(params.minPrice));
  }
  if (params.maxPrice !== undefined && params.maxPrice !== null && params.maxPrice !== '') {
    list = list.filter(p => p.priceMin <= Number(params.maxPrice));
  }

  // 6. Sort
  if (params.sort === 'price-asc') {
    list.sort((a, b) => a.priceMin - b.priceMin);
  } else if (params.sort === 'price-desc') {
    list.sort((a, b) => b.priceMax - a.priceMax);
  } else if (params.sort === 'sku') {
    list.sort((a, b) => a.id.localeCompare(b.id));
  } else {
    // Best Sellers & Featured first
    list.sort((a, b) => {
      if (b.isBestSeller !== a.isBestSeller) {
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      }
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }

  return {
    products: list,
    total: list.length,
    filters: FILTER_METADATA
  };
}

export default api;
