import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsShowcase } from './components/BrandsShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { QuickQuoteBuilder } from './components/QuickQuoteBuilder';
import { ServicesSection } from './components/ServicesSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { StoreInfo } from './components/StoreInfo';
import { Footer } from './components/Footer';
import { WhatsAppFloatingWidget } from './components/WhatsAppFloatingWidget';
import { WHATSAPP_PHONE } from './data/products';

export default function App() {
  const handleOpenWhatsAppDirect = () => {
    const text = encodeURIComponent('Hola Ferretorque, me gustaría solicitar una cotización de herramientas y materiales.');
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Bar Navigation */}
      <Navbar onOpenWhatsAppModal={handleOpenWhatsAppDirect} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with high-res warehouse photo & stats */}
        <Hero />

        {/* 2. Official Brand Partners Strip */}
        <BrandsShowcase />

        {/* 3. Interactive Product Catalog with category filtering & WhatsApp inquiries */}
        <ProductCatalog />

        {/* 4. Interactive Quick Quote Builder with live WhatsApp message format */}
        <QuickQuoteBuilder />

        {/* 5. Industrial Capabilities & B2B Services */}
        <ServicesSection />

        {/* 6. Quantified Social Proof & Attributable Testimonials */}
        <Testimonials />

        {/* 7. Clear Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Store Location, Logistics Center & Hours */}
        <StoreInfo />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Widget */}
      <WhatsAppFloatingWidget />
    </div>
  );
}
