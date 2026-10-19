import React from 'react';
import { ArrowRight, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-neutral-950 overflow-hidden border-b border-neutral-800">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Showroom y almacén industrial de Ferretorque con herramientas de alta resistencia"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          {/* Editorial Category Kicker (clean unboxed text, no pills) */}
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4 flex items-center gap-2">
            <span>Suministro Industrial & Ferretería Técnica</span>
            <span aria-hidden="true">·</span>
            <span>Atención Especializada</span>
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            Herramientas de alto torque, fijaciones y maquinaria para obras de verdad.
          </h1>

          {/* Value proposition paragraph */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Abastecemos a constructoras, maestranzas y profesionales con las marcas más exigentes del mundo. Cotizaciones ágiles con asesoría técnica especializada y despacho a faena en 24 horas.
          </p>

          {/* CTA Buttons - Elegant and balanced */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#cotizador"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Solicitar Cotización</span>
            </a>

            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors whitespace-nowrap"
            >
              <span>Ver Catálogo Destacado</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Trust points list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atención técnica directa y respuesta promedio en menos de 15 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Factura electrónica inmediata & crédito a 30 días para empresas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Rigor Strip (below hero split) */}
      <div className="relative z-10 border-t border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight font-mono tabular-nums">
                +15.000
              </span>
              <span className="text-sm font-medium text-neutral-200 mt-1">
                Códigos en Stock Inmediato
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">
                Pernos, brocas, discos y herramientas
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                24 hrs
              </span>
              <span className="text-sm font-medium text-neutral-200 mt-1">
                Despacho Exprés a Faena
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">
                Flota propia en RM y envíos a todo Chile
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                100%
              </span>
              <span className="text-sm font-medium text-neutral-200 mt-1">
                Garantía y Marcas Oficiales
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">
                DeWalt, Bosch, Stahlwille, 3M, Fischer
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                +850
              </span>
              <span className="text-sm font-medium text-neutral-200 mt-1">
                Empresas & Contratistas
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">
                Convenios activos con facturación mensual
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
