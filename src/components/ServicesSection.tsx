import React from 'react';
import { Truck, Calculator, CreditCard, Award, ArrowUpRight } from 'lucide-react';
import { SERVICES, WHATSAPP_PHONE } from '../data/products';

export const ServicesSection: React.FC = () => {
  const icons = [Truck, Calculator, CreditCard, Award];

  const handleCorporateInquiry = () => {
    const text = encodeURIComponent(
      'Hola Ferretorque, me interesa abrir una cuenta corriente comercial / convenio B2B para nuestra empresa.'
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicios" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            Servicios Industriales & Corporativos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Logística ágil y respaldo técnico para faenas de alta exigencia
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Diseñamos soluciones de abastecimiento continuo para constructoras, mineras y talleres industriales. Reducimos sus tiempos muertos con stock garantizado y condiciones comerciales a la medida.
          </p>
        </div>

        {/* 4 Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={srv.number}
                className="bg-neutral-950 p-8 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-amber-500">
                      {srv.number}.
                    </span>
                    <div className="w-10 h-10 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 text-xs text-neutral-400 flex items-center justify-between">
                  <span>{srv.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* B2B Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-lg border border-neutral-700/70 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Convenios Corporativos y Constructoras
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              ¿Gestionas compras recurrentes para una empresa o proyecto de envergadura?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Solicita un ejecutivo comercial asignado, lista de precios mayorista y apertura de línea de crédito a 30 días.
            </p>
          </div>

          <button
            onClick={handleCorporateInquiry}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Solicitar Convenio Corporativo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
