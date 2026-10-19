import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { STORE_ADDRESS, DISPLAY_PHONE, STORE_EMAIL } from '../data/products';

export const StoreInfo: React.FC = () => {
  const handleOpenMap = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            Sala de Ventas & Centro de Distribución
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ven a conocernos o coordina tu retiro en bodega
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Contamos con más de 2.500 m² de inventario en almacenamiento industrial con estacionamiento para camiones y retiro expedito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-amber-400 rounded-md shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Dirección Central</h4>
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  {STORE_ADDRESS}
                </p>
                <button
                  onClick={handleOpenMap}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Cómo llegar en Google Maps</span>
                </button>
              </div>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-amber-400 rounded-md shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Horario de Atención Continuada</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  <span className="font-semibold text-white">Lunes a Viernes:</span> 08:00 a 18:30 hrs
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  <span className="font-semibold text-white">Sábados:</span> 08:30 a 14:00 hrs
                </p>
                <p className="text-xs text-neutral-500 mt-1">Domingos y festivos cerrado para despacho a faena programado.</p>
              </div>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg flex items-start gap-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-amber-400 rounded-md shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Canales Directos</h4>
                <p className="text-xs text-neutral-300 font-mono">
                  Teléfono Central: {DISPLAY_PHONE}
                </p>
                <p className="text-xs text-neutral-300 font-mono mt-0.5">
                  Correo Adquisiciones: {STORE_EMAIL}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Visual Map & Facility Representation (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Logística & Despacho Terrestre
                </span>
                <span className="text-xs text-amber-400 font-mono">
                  Bodega Activa
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Zona de Carga y Despacho Automatizado
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Contamos con 4 andenes de carga rápida para camiones tres cuartos y ramplas. Despachamos órdenes consolidadas con embalaje termosellado y rotulado con centro de costos para cada contratista.
              </p>

              {/* Facility features grid */}
              <div className="grid grid-cols-2 gap-4 text-xs text-neutral-300 mb-6">
                <div className="p-3.5 bg-neutral-900 border border-neutral-800 rounded">
                  <p className="font-bold text-white mb-1">Retiro Express 30 Min</p>
                  <p className="text-neutral-400 text-[11px]">Pedidos confirmados se preparan de inmediato para retiro sin esperas en bodega.</p>
                </div>
                <div className="p-3.5 bg-neutral-900 border border-neutral-800 rounded">
                  <p className="font-bold text-white mb-1">Embalaje para Faena</p>
                  <p className="text-neutral-400 text-[11px]">Paletizado flejado resistente a intemperie para recepción en obras o campamentos.</p>
                </div>
              </div>
            </div>

            {/* Quick Action bar */}
            <div className="relative z-10 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span>¿Necesitas una ruta especial fuera del radio urbano?</span>
              <span className="text-neutral-300 font-medium">Coordinación directa con despacho central</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
