import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function StickyMobileActionBar({ product }) {
  const whatsappUrl = BUSINESS_CONFIG.createWhatsAppLink(product);

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-cream-200/90 p-2.5 shadow-sticky-bar">
      <div className="max-w-lg mx-auto space-y-1.5">
        <div className="flex items-center justify-between text-[11px] px-1 text-ink-600 font-medium">
          <span>For detail enquiry contact:</span>
          <div className="flex items-center gap-2 font-bold text-crimson-900">
            <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="underline">
              {BUSINESS_CONFIG.primaryPhoneNum}
            </a>
            <span>,</span>
            <a href={`tel:${BUSINESS_CONFIG.phoneSecondaryRaw}`} className="underline">
              {BUSINESS_CONFIG.secondaryPhoneNum}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Direct Call Button */}
          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="flex-1 py-2.5 px-2 rounded-xl border border-cream-300 bg-cream-50 hover:bg-cream-100 text-ink-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
            aria-label="Call Store"
          >
            <Phone className="w-3.5 h-3.5 text-crimson-800" />
            <span>Call Shop</span>
          </a>

          {/* Primary WhatsApp Inquiry Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] py-2.5 px-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95"
            aria-label="Inquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
