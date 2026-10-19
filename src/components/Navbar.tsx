import React, { useState } from 'react';
import { Menu, X, PhoneCall, FileText } from 'lucide-react';
import { DISPLAY_PHONE } from '../data/products';

interface NavbarProps {
  onOpenWhatsAppModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 group">
            <span className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-neutral-950 font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              F
            </span>
            <span className="tracking-tighter">
              FERRE<span className="text-amber-500">TORQUE</span>
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#catalogo" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Catálogo
            </a>
            <a href="#cotizador" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Cotizador
            </a>
            <a href="#servicios" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Servicios B2B
            </a>
            <a href="#marcas" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Marcas
            </a>
            <a href="#contacto" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Contacto
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:+56987654321`}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span>{DISPLAY_PHONE}</span>
            </a>
            <a
              href="#cotizador"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Cotizar en Línea</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-5 space-y-2">
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Catálogo de Productos
          </a>
          <a
            href="#cotizador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Cotizador Rápido
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Servicios a Empresas & Obras
          </a>
          <a
            href="#marcas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Marcas Oficiales
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
          >
            Ubicación y Horarios
          </a>

          <div className="pt-3 border-t border-neutral-800">
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-neutral-950 bg-amber-500 rounded-md hover:bg-amber-400 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Solicitar Cotización</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
