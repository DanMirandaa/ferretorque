import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { DISPLAY_PHONE, STORE_EMAIL, STORE_ADDRESS } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-black text-white tracking-tight">
              <span className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-neutral-950 font-black text-sm">
                F
              </span>
              <span>
                FERRE<span className="text-amber-500">TORQUE</span>
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-xs">
              Suministro industrial, herramientas profesionales de alto torque, fijaciones estructurales y seguridad para la industria, minería y construcción.
            </p>
            <div className="pt-1 text-xs text-neutral-400">
              <span className="text-neutral-300 font-medium">Línea directa:</span> {DISPLAY_PHONE}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#catalogo" className="hover:text-amber-400 transition-colors">
                  Catálogo de Productos
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-amber-400 transition-colors">
                  Cotizador Rápido
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  Servicios & Convenios B2B
                </a>
              </li>
              <li>
                <a href="#marcas" className="hover:text-amber-400 transition-colors">
                  Marcas Autorizadas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-400 transition-colors">
                  Ubicación & Horarios
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Líneas Principales
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="hover:text-neutral-200">Herramientas Eléctricas & Batería</span>
              </li>
              <li>
                <span className="hover:text-neutral-200">Torque, Dinamometría & Llaves</span>
              </li>
              <li>
                <span className="hover:text-neutral-200">Pernos Estructurales ASTM & G8</span>
              </li>
              <li>
                <span className="hover:text-neutral-200">Anclajes Químicos & Expansivos</span>
              </li>
              <li>
                <span className="hover:text-neutral-200">Equipos de Protección Personal EPP</span>
              </li>
              <li>
                <span className="hover:text-neutral-200">Discos de Corte & Abrasivos</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contacto Central
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300 leading-tight">{STORE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-neutral-300 font-mono">{DISPLAY_PHONE}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-neutral-300 font-mono">{STORE_EMAIL}</span>
              </li>
              <li className="text-[11px] text-neutral-500 pt-1">
                Atención continuada: Lunes a Viernes 08:00 - 18:30 hrs
              </li>
            </ul>
          </div>

        </div>

        {/* Legal bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© {new Date().getFullYear()} Ferretorque SpA. Todos los derechos reservados. Suministro Técnico Industrial.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400">Políticas de Garantía</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400">Términos de Facturación</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400">Certificados de Calidad</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
