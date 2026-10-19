import React from 'react';
import { BRANDS } from '../data/products';

export const BrandsShowcase: React.FC = () => {
  return (
    <section id="marcas" className="py-16 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            Distribución & Alianzas Oficiales
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Marcas líderes con certificación y respaldo internacional
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400">
            Garantía directa de fábrica, repuestos originales y servicio de calibración técnica.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="p-4 bg-neutral-900 border border-neutral-800/80 rounded-md text-center flex flex-col justify-center items-center hover:border-neutral-700 transition-colors group"
            >
              <span className="font-extrabold text-sm sm:text-base text-neutral-200 group-hover:text-amber-400 transition-colors tracking-tight">
                {brand.name}
              </span>
              <span className="text-[11px] text-neutral-500 mt-0.5">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
