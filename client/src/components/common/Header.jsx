import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import MobileNav from './MobileNav';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Product Catalog', path: '/catalog' },
    { label: 'Categories', path: '/categories' },
    { label: 'Store & Location', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement & Detail Enquiry Bar */}
      <div className="bg-crimson-900 text-gold-200 text-xs py-1.5 px-4 border-b border-gold-500/20 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="text-[11px] sm:text-xs text-cream-100">
              For detail enquiry contact:{' '}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="font-bold text-gold-300 hover:text-white underline underline-offset-2 ml-1"
              >
                {BUSINESS_CONFIG.primaryPhoneNum}
              </a>
              ,{' '}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneSecondaryRaw}`}
                className="font-bold text-gold-300 hover:text-white underline underline-offset-2"
              >
                {BUSINESS_CONFIG.secondaryPhoneNum}
              </a>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-cream-300/80">
            <span>Kumar Printer's and Designers • Gole Market, Hapur</span>
            <span>|</span>
            <a
              href={BUSINESS_CONFIG.createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-white flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3 h-3 text-whatsapp fill-whatsapp" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200 py-2.5'
            : 'bg-cream-50 border-b border-cream-200/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo / Brand Name */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-lg crimson-gradient-bg border border-gold-400/40 flex items-center justify-center shadow-sm group-hover:border-gold-400 transition-colors">
                <span className="font-display font-bold text-xl text-gold-300">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-crimson-800 leading-none">
                  {BUSINESS_CONFIG.shortName}
                </span>
                <span className="text-[10px] sm:text-xs text-ink-500 font-medium tracking-wider uppercase mt-1">
                  Digital Showroom
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-crimson-800 text-gold-200 shadow-sm'
                        : 'text-ink-700 hover:text-crimson-800 hover:bg-cream-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* In-Store Actions (WhatsApp & Call) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Call Shop CTA */}
              <div className="hidden sm:flex items-center gap-1.5">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-ink-800 bg-cream-100 border border-cream-300 hover:bg-cream-200 transition-colors"
                  title="Call 9358206242"
                >
                  <Phone className="w-3.5 h-3.5 text-crimson-700" />
                  <span>{BUSINESS_CONFIG.primaryPhoneNum}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneSecondaryRaw}`}
                  className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-ink-800 bg-cream-100 border border-cream-300 hover:bg-cream-200 transition-colors"
                  title="Call 9259441370"
                >
                  <Phone className="w-3.5 h-3.5 text-crimson-700" />
                  <span>{BUSINESS_CONFIG.secondaryPhoneNum}</span>
                </a>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={BUSINESS_CONFIG.createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-whatsapp hover:bg-whatsapp-hover shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg text-ink-700 hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-crimson-700"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 text-crimson-800" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
