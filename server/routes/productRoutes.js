import express from 'express';
import {
  getProducts,
  getProductBySlug,
  getCategories,
  getBusinessConfig
} from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:slug', getProductBySlug);
router.get('/categories', getCategories);
router.get('/config', getBusinessConfig);

export default router;
