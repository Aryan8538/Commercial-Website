import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, QrCode, Printer, Check, Copy } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function ContactPage() {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const catalogUrl = typeof window !== 'undefined' ? `${window.location.origin}/catalog` : 'https://kumarcards.example.com/catalog';

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(catalogUrl)}&color=7A1B28&bgcolor=FDFBF7`;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(catalogUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-cream-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-crimson-800">
            Showroom Location & Contact
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink-900 mt-1">
            Visit Our Physical Store
          </h1>
          <p className="text-xs sm:text-sm text-ink-600 mt-2">
            Inspect physical wedding card samples, touch paper textures, or contact our team directly for bulk orders.
          </p>
        </div>

        {/* Contact & Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Address & Hours */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Store Information Cards */}
            <div className="bg-white rounded-2xl p-6 border border-cream-200/90 shadow-card space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0 border border-crimson-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-ink-900">
                    Physical Store Address
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 mt-1 leading-relaxed">
                    {BUSINESS_CONFIG.address.fullAddress}
                  </p>
                  <a
                    href={BUSINESS_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-crimson-800 hover:text-gold-700 mt-3"
                  >
                    <span>Open in Google Maps Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center shrink-0 border border-gold-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-ink-900">
                    Showroom Hours
                  </h3>
                  <div className="mt-1 space-y-1 text-xs sm:text-sm text-ink-600">
                    <p><span className="font-semibold text-ink-800">Monday – Saturday:</span> {BUSINESS_CONFIG.hours.weekdays}</p>
                    <p><span className="font-semibold text-ink-800">Sunday:</span> {BUSINESS_CONFIG.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-whatsapp flex items-center justify-center shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-serif font-bold text-base text-ink-900">
                    Direct Store Contact
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-ink-900 bg-cream-50 hover:bg-cream-100 border border-cream-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-crimson-800" />
                      <span>{BUSINESS_CONFIG.phone}</span>
                    </a>

                    <a
                      href={BUSINESS_CONFIG.createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-whatsapp hover:bg-whatsapp-hover transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps Embed Container */}
            <div className="bg-white rounded-2xl p-2 border border-cream-200/90 shadow-card overflow-hidden">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-cream-100">
                <iframe
                  title="Kumar Cards Showroom Map"
                  src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: In-Store Countertop Printable QR Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold-400/50 shadow-xl space-y-6 text-center relative overflow-hidden">
              
              {/* Corner Ribbon */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute transform rotate-45 bg-crimson-800 text-gold-200 font-bold text-[9px] py-1 right-[-35px] top-[18px] w-[120px] text-center shadow-sm uppercase tracking-wider">
                  Store QR
                </div>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl crimson-gradient-bg flex items-center justify-center mx-auto mb-3 border border-gold-300">
                  <span className="font-display font-bold text-xl text-gold-300">K</span>
                </div>
                <h2 className="font-serif font-bold text-xl text-crimson-900">
                  {BUSINESS_CONFIG.name}
                </h2>
                <p className="text-xs text-ink-500 mt-1 font-medium">
                  Scan To Browse Showroom Catalog
                </p>
              </div>

              {/* High-Resolution Countertop QR Image */}
              <div className="bg-cream-50 p-4 rounded-2xl border border-cream-200 inline-block shadow-inner">
                <img
                  src={qrImageUrl}
                  alt="Scan QR code to open Kumar Cards digital catalog"
                  className="w-48 h-48 sm:w-56 sm:h-56 mx-auto object-contain rounded-lg"
                />
              </div>

              <div className="space-y-2 text-xs text-ink-600">
                <p className="font-bold text-ink-900">Place this QR code at your shop counter!</p>
                <p className="text-[11px] text-ink-500">
                  Customers scan this with their phone camera to instantly open the catalog without downloading any app.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-crimson-800 hover:bg-crimson-900 shadow-sm transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Counter Card</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-ink-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-ink-600" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-[10px] text-ink-400 font-mono break-all">
                {catalogUrl}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
