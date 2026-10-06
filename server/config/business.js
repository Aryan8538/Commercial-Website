/**
 * CENTRALIZED BUSINESS CONFIGURATION
 * 
 * IMPORTANT: Items marked with [CLIENT INPUT REQUIRED] indicate placeholders that must be
 * updated with verified data from the business owners when provided.
 */

export const BUSINESS_CONFIG = {
  // Brand details
  name: "Kumar Cards & Lifafe", // [CLIENT INPUT REQUIRED: Confirm exact legal name: 'Kumar Cards' or 'Kumar Lifafe']
  shortName: "Kumar Cards",
  tagline: "Premier Wedding Stationery & Shagun Lifafe Showroom",
  subTagline: "Handcrafted Shagun Envelopes, Designer Lifafe & Bespoke Wedding Invitation Cards",
  
  // Contact details
  phone: "+91 98765 43210", // [CLIENT INPUT REQUIRED: Verified store contact number]
  phoneRaw: "+919876543210", // Used for direct tel: links
  whatsapp: "919876543210", // [CLIENT INPUT REQUIRED: WhatsApp Business number without '+' or spaces]
  email: "orders@kumarcards.example.com", // [CLIENT INPUT REQUIRED: Verified business email]
  
  // Store physical location
  address: {
    shopNo: "Shop No. 14, Ground Floor", // [CLIENT INPUT REQUIRED]
    building: "Radha Govind Market", // [CLIENT INPUT REQUIRED]
    street: "Nai Sarak / Chawri Bazar Road", // [CLIENT INPUT REQUIRED]
    area: "Central Market", // [CLIENT INPUT REQUIRED]
    city: "Delhi", // [CLIENT INPUT REQUIRED]
    state: "Delhi", // [CLIENT INPUT REQUIRED]
    pincode: "110006", // [CLIENT INPUT REQUIRED]
    country: "India",
    formatted: "Shop No. 14, Radha Govind Market, Nai Sarak, Central Market, Delhi - 110006 [CLIENT INPUT REQUIRED]"
  },
  
  // Operating hours
  hours: {
    weekdays: "10:30 AM – 8:30 PM",
    sunday: "Closed (By Appointment for Bulk Wedding Orders)",
    summary: "Mon – Sat: 10:30 AM – 8:30 PM"
  },
  
  // Navigation & Maps
  googleMapsUrl: "https://maps.google.com/?q=Kumar+Printers+Delhi", // [CLIENT INPUT REQUIRED: Verified Google Map CID or Place URL]
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.15858055005!2d77.2249!3d28.6507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd17c91db0ad%3A0x6a0a23277cb54c51!2sChawri%20Bazar%2C%20Chandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000",
  
  // Social profiles
  social: {
    instagram: "https://instagram.com/kumarcards", // [CLIENT INPUT REQUIRED]
    facebook: "https://facebook.com/kumarcards" // [CLIENT INPUT REQUIRED]
  },
  
  // QR Code permanent target
  qrTargetUrl: "/catalog", // Points to the permanent digital catalog URL
  
  // Helper for generating dynamic WhatsApp prefilled inquiry message
  createWhatsAppLink: (product) => {
    const text = product
      ? `Hello Kumar Cards, I found *${product.name}* (SKU: *${product.id}*) on your digital showroom. I would like to inquire about pricing, minimum quantity, and available color options.`
      : `Hello Kumar Cards, I scanned your in-store QR code and would like to inquire about your Shagun Lifafe and Wedding Card collections.`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  }
};

export default BUSINESS_CONFIG;
