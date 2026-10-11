import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, MessageCircle, MapPin, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function MobileNav({ isOpen, onClose, navLinks }) {
  const location = useLocation();

  // Close nav on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-cream-50 shadow-2xl flex flex-col z-10 border-l border-cream-200">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-cream-200 flex items-center justify-between bg-cream-100/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md crimson-gradient-bg flex items-center justify-center border border-gold-400/40">
              <span className="font-display font-bold text-sm text-gold-300">K</span>
            </div>
            <span className="font-serif font-bold text-crimson-900 text-base">
              {BUSINESS_CONFIG.shortName}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-ink-500 hover:text-ink-800 hover:bg-cream-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 px-3 py-1">
            Menu
          </p>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-crimson-800 text-gold-200 shadow-sm'
                    : 'text-ink-800 hover:bg-cream-100 hover:text-crimson-800'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <Sparkles className="w-4 h-4 text-gold-300" />}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-cream-200/80 my-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400 px-3 pb-2">
              In-Store Information
            </p>
            
            <div className="space-y-3 px-3 text-xs text-ink-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-crimson-700 shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_CONFIG.address.formatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{BUSINESS_CONFIG.hours.summary}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-cream-200 bg-cream-100/60 space-y-2.5">
          <a
            href={BUSINESS_CONFIG.createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-whatsapp hover:bg-whatsapp-hover shadow-sm transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-ink-800 bg-white border border-cream-300 hover:bg-cream-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-crimson-700" />
            <span>Call Shop ({BUSINESS_CONFIG.phone})</span>
          </a>
        </div>

      </div>
    </div>
  );
}
