import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function StickyMobileActionBar({ product }) {
  const whatsappUrl = BUSINESS_CONFIG.createWhatsAppLink(product);

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-cream-200/90 p-3 shadow-sticky-bar">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl border border-cream-300 bg-cream-50 hover:bg-cream-100 text-ink-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
          aria-label="Call Store"
        >
          <Phone className="w-4 h-4 text-crimson-800" />
          <span>Call Shop</span>
        </a>

        {/* Primary WhatsApp Inquiry Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95"
          aria-label="Inquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Enquire on WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
