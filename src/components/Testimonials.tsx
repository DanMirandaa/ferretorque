import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            Casos de Éxito & Respaldo en Terreno
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            La confianza de constructoras, maestranzas y faenas mineras
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Conoce cómo Ferretorque resuelve el abastecimiento crítico sin retrasos ni fallas de suministro en terreno.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-neutral-950 p-6 sm:p-7 rounded-lg border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
                
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                {/* Proof Metric */}
                <div className="text-xs font-mono font-bold text-emerald-400 mb-3 tabular-nums">
                  {t.metrics}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {t.role} · <span className="text-neutral-300 font-medium">{t.company}</span>
                  </p>
                  <span className="text-[11px] text-amber-400/80 font-mono mt-0.5 block">
                    {t.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
