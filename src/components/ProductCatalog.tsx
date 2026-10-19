import React, { useState } from 'react';
import { Search, Info, X, MessageSquare, ArrowRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES, WHATSAPP_PHONE } from '../data/products';
import { Product } from '../types';

export const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppProductInquiry = (product: Product) => {
    const text = encodeURIComponent(
      `Hola Ferretorque, estoy interesado en el producto:\n*${product.name}*\nMarca: ${product.brand} (${product.model})\n¿Tienen stock disponible y cuál es el precio por volumen?`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalogo" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              Líneas de Suministro Destacadas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Catálogo de Herramientas & Fijaciones de Alto Rendimiento
            </h2>
            <p className="mt-3 text-base text-neutral-400">
              Equipamiento industrial probado para soportar jornadas intensivas en faenas mineras, maestranzas y construcción pesada.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por marca, modelo o tipo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto mb-10 max-w-full">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-neutral-900 rounded-lg border border-neutral-800">
            <p className="text-neutral-300 font-medium">No se encontraron productos para "{searchQuery}"</p>
            <p className="text-neutral-500 text-xs mt-1">Intenta con otro término o consulta disponibilidad directamente.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs text-amber-400 hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group"
              >
                <div>
                  {/* Product Visual Container */}
                  <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Product Content Body */}
                  <div className="p-5">
                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span className="font-semibold text-amber-400">{product.brand}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.model}</span>
                    </div>

                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="text-base font-bold text-white tracking-tight leading-snug line-clamp-2 mb-2 cursor-pointer hover:text-amber-400 transition-colors"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Stock & Availability */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium pb-4 border-b border-neutral-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                      <span>{product.stockStatus}</span>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="pt-3 space-y-1.5 text-xs text-neutral-300">
                      {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                        <div key={key} className="flex justify-between gap-2">
                          <span className="text-neutral-500 truncate">{key}:</span>
                          <span className="font-medium text-neutral-200 text-right truncate">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Single Clean Card Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-750 border border-neutral-700/80 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer group-hover:border-amber-500/50"
                  >
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver Ficha Técnica & Opciones</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Specs Modal (where the customer can choose to inquire if interested) */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 text-neutral-400 hover:text-white p-2 rounded-md hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs text-amber-400 font-semibold mb-1">
                Ficha Técnica Oficial · {selectedProduct.brand}
              </div>
              <h3 className="text-xl font-extrabold text-white mb-1">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Modelo: {selectedProduct.model} · {selectedProduct.categoryLabel}
              </p>

              <div className="aspect-[16/9] rounded-md overflow-hidden bg-neutral-950 mb-6 border border-neutral-800">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Descripción del Insumo / Equipo
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Especificaciones Técnicas
                  </h4>
                  <div className="border border-neutral-800 rounded-md divide-y divide-neutral-800 text-xs">
                    {Object.entries(selectedProduct.specs).map(([specKey, specVal]) => (
                      <div key={specKey} className="flex justify-between p-2.5 bg-neutral-950/40">
                        <span className="text-neutral-400">{specKey}</span>
                        <span className="font-semibold text-white text-right">{specVal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const prod = selectedProduct;
                      setSelectedProduct(null);
                      handleWhatsAppProductInquiry(prod);
                    }}
                    className="flex-1 py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-neutral-950" />
                    <span>Consultar Disponibilidad & Precio</span>
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-md transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
