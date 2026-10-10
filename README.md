# Kumar Printers and Cards — Digital Product Catalog & QR-Based Customer Showroom (V1)

A luxury, mobile-first digital product showroom and digital catalog built for physical stationery and wedding envelope retail stores. 

Customers visiting the physical shop scan a counter QR code using their smartphone camera and immediately access an app-like digital showroom where they can search by SKU, filter by color/style/price, inspect high-resolution photographs and specifications, and inquire via WhatsApp or phone call.

---

## 🌟 Key Features

1. **In-Store QR Entry Journey**:
   - Physical countertop QR code directs customers to `/catalog` with zero download required.
   - Built-in printable countertop QR card generator on `/contact` page.

2. **Mobile-First Luxury Stationery Design**:
   - Custom tailored palette (Royal Crimson, Antique Gold Foil, Alabaster Ivory, Deep Ink Charcoal).
   - Serif headings (`Cinzel` & `Playfair Display`) + highly legible body type (`Plus Jakarta Sans`).
   - Sticky mobile conversion bar (`Enquire on WhatsApp` + `Call Shop`) on product detail pages.

3. **High-Performance Catalog & Filtering**:
   - Instant search by product code (e.g. `SL-001`, `SL-002`), name, color, and craft style.
   - Mobile bottom sheet filter drawer for one-handed thumb interaction.
   - Categorized across Shagun Lifafe, Designer Lifafe, Gift Envelopes, Wedding Cards, and Invitation Cards.

4. **Zero-Friction In-Store Conversion**:
   - Dynamic WhatsApp inquiry links that prefill the exact product title and SKU code:
     `"Hello Kumar Printers and Cards, I found Royal Crimson Velvet Shagun Lifafa (Code: SL-001) on your digital catalog..."`
   - Direct telephone dialer button for immediate counter inquiries.

5. **Dual-Mode Data Resilience**:
   - Express REST API backend (`/api/products`, `/api/categories`, `/api/config`).
   - Built-in client offline/seed fallback engine ensuring 100% uptime even before database connection.

---

## 📁 Project Structure

```
kumar printers/
├── client/                     # Vite + React 18 + Tailwind CSS Frontend
│   ├── public/
│   │   ├── favicon.svg         # Luxury gold/crimson monogram favicon
│   │   ├── robots.txt          # SEO crawler rules
│   │   └── sitemap.xml         # XML sitemap
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/         # Header, Footer, MobileNav, Badge, EmptyState, LoadingSpinner
│   │   │   ├── catalog/        # ProductCard, ProductGrid, SearchBar, FilterDrawer, QuickFilterPills
│   │   │   ├── product/        # ProductGallery, ProductSpecs, StickyMobileActionBar, SimilarProducts
│   │   │   └── home/           # HeroBanner, CategoryGrid, FeaturedShowcase, StoreUSPs, LocationSection
│   │   ├── config/
│   │   │   └── business.js     # Centralized business config with [CLIENT INPUT REQUIRED] placeholders
│   │   ├── context/
│   │   │   └── CatalogContext.jsx # Search, filter state and URL sync
│   │   ├── data/
│   │   │   └── seedData.js     # 15+ curated realistic lifafe & wedding card items
│   │   ├── pages/              # HomePage, CatalogPage, ProductDetailPage, CategoriesPage, ContactPage
│   │   ├── services/
│   │   │   └── api.js          # API service with automatic fallback to seedData
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
├── server/                     # Node.js + Express REST API
│   ├── config/
│   │   └── business.js
│   ├── controllers/
│   │   └── productController.js
│   ├── data/
│   │   └── seedData.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── app.js
│   └── package.json
└── package.json                # Root orchestration scripts
```

---

## 🚀 Running Locally

### 1. Start the Client (Digital Showroom)
```bash
cd client
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your mobile browser or desktop.

### 2. Start the Backend API (Optional / For Live API Mode)
```bash
cd server
npm start
```
Runs at [http://localhost:5000](http://localhost:5000).

---

## 📝 Updating Store Information (`[CLIENT INPUT REQUIRED]`)

When the business owner provides verified details, edit:
- `client/src/config/business.js`
- `server/config/business.js`

Fields to update:
- `name`: Official store name (e.g. "Kumar Printers and Cards")
- `phone`: Physical store contact number
- `whatsapp`: WhatsApp Business number (without `+` or spaces)
- `address`: Shop number, market name, street, city, and pincode
- `googleMapsUrl`: Google Maps location URL

---

## 🎨 Replacing Seed Products with Client's Catalog

To replace the placeholder products with the client's actual photography and pricing:
1. Open `client/src/data/seedData.js` and `server/data/seedData.js`.
2. Add your products matching the schema:
   ```javascript
   {
     id: "SL-001",
     name: "Product Name",
     slug: "product-name-sl001",
     productType: "Lifafa",
     categoryId: "shagun-lifafe",
     priceMin: 15,
     priceMax: 25,
     currency: "INR",
     priceUnit: "piece",
     images: ["https://..."],
     thumbnail: "https://...",
     color: "Red",
     style: "Traditional",
     material: "350 GSM Micro-Velvet",
     size: "7.6 x 3.6 inches",
     minimumOrderQuantity: 25,
     customizationAvailable: true
   }
   ```
