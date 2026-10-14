import { PRODUCTS, CATEGORIES, FILTER_METADATA } from '../data/seedData.js';
import { BUSINESS_CONFIG } from '../config/business.js';

export const getProducts = (req, res) => {
  try {
    const { search, category, color, style, minPrice, maxPrice, sort } = req.query;
    let list = [...PRODUCTS];

    // Search filter
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
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

    // Category filter
    if (category && category !== 'all') {
      list = list.filter(p => p.categoryId === category);
    }

    // Color filter
    if (color && color !== 'All') {
      list = list.filter(p => 
        p.color.toLowerCase() === color.toLowerCase() ||
        p.colors.some(c => c.toLowerCase() === color.toLowerCase())
      );
    }

    // Style filter
    if (style && style !== 'All') {
      list = list.filter(p => p.style.toLowerCase() === style.toLowerCase());
    }

    // Price range
    if (minPrice !== undefined && minPrice !== '') {
      list = list.filter(p => p.priceMax >= Number(minPrice));
    }
    if (maxPrice !== undefined && maxPrice !== '') {
      list = list.filter(p => p.priceMin <= Number(maxPrice));
    }

    // Sorting
    if (sort === 'price-asc') {
      list.sort((a, b) => a.priceMin - b.priceMin);
    } else if (sort === 'price-desc') {
      list.sort((a, b) => b.priceMax - a.priceMax);
    } else if (sort === 'sku') {
      list.sort((a, b) => a.id.localeCompare(b.id));
    } else {
      list.sort((a, b) => {
        if (b.isBestSeller !== a.isBestSeller) {
          return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
        }
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
    }

    res.json({
      success: true,
      total: list.length,
      products: list,
      filters: FILTER_METADATA
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving products' });
  }
};

export const getProductBySlug = (req, res) => {
  try {
    const { slug } = req.params;
    const product = PRODUCTS.find(
      p => p.slug === slug || p.id.toLowerCase() === slug.toLowerCase()
    );

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving product' });
  }
};

export const getCategories = (req, res) => {
  try {
    res.json(CATEGORIES);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving categories' });
  }
};

export const getBusinessConfig = (req, res) => {
  try {
    res.json(BUSINESS_CONFIG);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error retrieving business config' });
  }
};
