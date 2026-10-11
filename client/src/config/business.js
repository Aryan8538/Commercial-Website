/**
 * CLIENT BUSINESS CONFIGURATION
 * 
 * Central source of truth for all business details.
 * Placeholders marked [CLIENT INPUT REQUIRED] will be replaced by client when confirmed.
 */

export const BUSINESS_CONFIG = {
  // Business branding
  name: "Kumar Printers and Cards", // [CLIENT INPUT REQUIRED: Legal/Display Name]
  shortName: "Kumar Printers and Cards",
  tagline: "Premier Wedding Stationery & Shagun Lifafe Showroom",
  subTagline: "Handcrafted Shagun Envelopes, Designer Lifafe & Bespoke Wedding Invitation Cards",
  foundedYear: "1998",
  
  // Contact numbers
  phone: "+91 98765 43210", // [CLIENT INPUT REQUIRED: Verified contact number]
  phoneRaw: "+919876543210", // Raw phone for direct tel: links
  whatsapp: "919876543210", // [CLIENT INPUT REQUIRED: WhatsApp Business number without '+' or spaces]
  email: "orders@kumarprintersandcards.example.com", // [CLIENT INPUT REQUIRED: Verified email]
  
  // Physical store location
  address: {
    shopNo: "Shop No. 14, Ground Floor", // [CLIENT INPUT REQUIRED]
    market: "Radha Govind Market", // [CLIENT INPUT REQUIRED]
    street: "Nai Sarak / Chawri Bazar Road", // [CLIENT INPUT REQUIRED]
    area: "Central Wholesale Paper Market", // [CLIENT INPUT REQUIRED]
    city: "Delhi", // [CLIENT INPUT REQUIRED]
    pincode: "110006", // [CLIENT INPUT REQUIRED]
    state: "Delhi",
    country: "India",
    fullAddress: "Shop No. 14, Radha Govind Market, Nai Sarak, Central Wholesale Market, Delhi - 110006 [CLIENT INPUT REQUIRED]"
  },
  
  // Working hours
  hours: {
    weekdays: "10:30 AM – 8:30 PM",
    sunday: "Closed (Special Wedding Order Appointments Available)",
    summary: "Mon – Sat: 10:30 AM – 8:30 PM"
  },
  
  // Navigation & Maps
  googleMapsUrl: "https://maps.google.com/?q=Kumar+Printers+Delhi", // [CLIENT INPUT REQUIRED]
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.15858055005!2d77.2249!3d28.6507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17c91db0ad%3A0x6a0a23277cb54c51!2sChawri%20Bazar%2C%20Chandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000",
  
  // Social links
  social: {
    instagram: "https://instagram.com/kumarprintersandcards", // [CLIENT INPUT REQUIRED]
    facebook: "https://facebook.com/kumarprintersandcards" // [CLIENT INPUT REQUIRED]
  },
  
  // WhatsApp generator
  createWhatsAppLink: (product) => {
    const text = product
      ? `Hello Kumar Printers and Cards, I found *${product.name}* (Code: *${product.id}*) on your digital catalog.\n\nPlease share price, minimum order quantity, and color availability.\nCatalog link: ${window.location.origin}/product/${product.slug}`
      : `Hello Kumar Printers and Cards, I am browsing your digital showroom and would like to inquire about your Shagun Lifafe and Wedding Card collections.`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  }
};

export default BUSINESS_CONFIG;
