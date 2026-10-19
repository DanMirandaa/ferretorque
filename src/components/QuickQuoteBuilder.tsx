import React, { useState } from 'react';
import { MessageSquare, Plus, Trash2, Copy, Check, Send, ShoppingCart, Sparkles } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/products';

interface CustomQuoteItem {
  id: string;
  item: string;
  qty: string;
  category: string;
}

const COMMON_ITEMS = [
  { item: 'Pernos Grado 8 ASTM A325 (1/2" x 3")', category: 'Fijaciones' },
  { item: 'Rotomartillo Inalámbrico DeWalt SDS Plus 20V', category: 'Herramientas Eléctricas' },
  { item: 'Discos de Corte Metal 4-1/2" DeWalt / 3M (Caja 50u)', category: 'Abrasivos' },
  { item: 'Llave Dinamométrica 40-200 Nm Certificada', category: 'Manuales' },
  { item: 'Anclaje Químico Fischer FIS EM Plus 390ml', category: 'Fijaciones' },
  { item: 'Cascos de Seguridad Dieléctricos MSA ANSI Clase E', category: 'Seguridad EPP' },
  { item: 'Guantes de Cuero Badana para Soldador / Faena', category: 'Seguridad EPP' },
];

export const QuickQuoteBuilder: React.FC = () => {
  const [items, setItems] = useState<CustomQuoteItem[]>([
    { id: '1', item: 'Pernos Grado 8 ASTM A325 (1/2" x 3")', qty: '200 unidades', category: 'Fijaciones' },
    { id: '2', item: 'Rotomartillo Inalámbrico DeWalt SDS Plus 20V', qty: '2 unidades', category: 'Herramientas Eléctricas' },
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [projectType, setProjectType] = useState('Construcción & Montaje');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const handleAddItem = (nameToAdd?: string, catToAdd?: string) => {
    const finalName = nameToAdd || newItemName.trim();
    if (!finalName) return;

    const newItem: CustomQuoteItem = {
      id: Date.now().toString(),
      item: finalName,
      qty: newItemQty.trim() || '1 unidad',
      category: catToAdd || 'General',
    };

    setItems((prev) => [...prev, newItem]);
    setNewItemName('');
    setNewItemQty('');
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const generateWhatsAppMessage = () => {
    let msg = `*SOLICITUD DE COTIZACIÓN - FERRETORQUE*\n`;
    if (clientName) msg += `👤 *Contacto:* ${clientName}\n`;
    if (companyName) msg += `🏢 *Empresa / RUT:* ${companyName}\n`;
    msg += `🏗️ *Tipo de Proyecto:* ${projectType}\n`;
    if (deliveryLocation) msg += `📍 *Destino / Comuna:* ${deliveryLocation}\n`;
    msg += `\n*DETALLE DE MATERIALES & HERRAMIENTAS:*\n`;

    if (items.length === 0) {
      msg += `- Solicito asesoría general de stock.\n`;
    } else {
      items.forEach((it, idx) => {
        msg += `${idx + 1}. ${it.item} -> Cantidad: ${it.qty}\n`;
      });
    }

    if (notes) {
      msg += `\n*Observaciones / Requerimientos:* ${notes}\n`;
    }

    msg += `\n_Enviado desde el cotizador web de Ferretorque._`;
    return msg;
  };

  const handleSendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyText = async () => {
    const message = generateWhatsAppMessage();
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cotizador" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
            Cotizador Rápido de Materiales
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Arma tu lista de insumos y recibe tu cotización en minutos
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Agrega las herramientas, pernos o insumos que necesitas. Nuestro sistema compila tu requerimiento técnico para enviarlo directamente a un ejecutivo comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Item Builder (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-lg border border-neutral-800 space-y-6">
            
            {/* Project & Client Quick Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Tu Nombre o Encargado
                </label>
                <input
                  type="text"
                  placeholder="Ej: Marcelo Torres"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Empresa o Constructora (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: Constructora Del Valle SpA"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Lugar de Entrega / Comuna
                </label>
                <input
                  type="text"
                  placeholder="Ej: Quilicura / Rancagua / Retiro en tienda"
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Rubro / Proyecto
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-700 rounded-md text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                >
                  <option value="Construcción & Obras Civiles">Construcción & Obras Civiles</option>
                  <option value="Maestranza & Metalmecánica">Maestranza & Metalmecánica</option>
                  <option value="Taller Mecánico / Automotriz">Taller Mecánico / Automotriz</option>
                  <option value="Minería e Industria Pesada">Minería e Industria Pesada</option>
                  <option value="Instalaciones Eléctricas / Clima">Instalaciones Eléctricas / Clima</option>
                  <option value="Particular / Profesional Independiente">Particular / Profesional Independiente</option>
                </select>
              </div>
            </div>

            {/* Quick Add Frequent Items */}
            <div>
              <div className="text-xs font-medium text-neutral-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Agregar rápido insumos frecuentes:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {COMMON_ITEMS.map((ci, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleAddItem(ci.item, ci.category)}
                    className="text-xs px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 rounded transition-colors text-left"
                  >
                    + {ci.item.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Add Custom Product Input */}
            <div className="pt-2 border-t border-neutral-800">
              <label className="block text-xs font-medium text-neutral-300 mb-2">
                Escribir producto personalizado:
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Ej: Brocas de cobalto 10mm, Disco diamantado continuo..."
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
                  className="flex-1 px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Cant. (ej: 10 u)"
                  value={newItemQty}
                  onChange={(e) => setNewItemQty(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
                  className="w-full sm:w-32 px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="button"
                  onClick={() => handleAddItem()}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm rounded-md transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Añadir</span>
                </button>
              </div>
            </div>

            {/* Current Item List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-1 border-b border-neutral-800">
                <span>Materiales en la lista ({items.length})</span>
                {items.length > 0 && (
                  <button
                    onClick={() => setItems([])}
                    className="text-neutral-500 hover:text-red-400 transition-colors"
                  >
                    Limpiar lista
                  </button>
                )}
              </div>

              {items.length === 0 ? (
                <div className="p-6 text-center border border-dashed border-neutral-800 rounded-md text-neutral-500 text-xs">
                  Tu lista está vacía. Selecciona un insumo de arriba o escribe uno nuevo.
                </div>
              ) : (
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {items.map((it, idx) => (
                    <div
                      key={it.id}
                      className="flex items-center justify-between gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-md text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono text-amber-500 font-bold shrink-0">
                          {idx + 1}.
                        </span>
                        <div className="truncate">
                          <p className="font-medium text-white truncate">{it.item}</p>
                          <span className="text-neutral-400 text-xs">Cantidad: {it.qty}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(it.id)}
                        className="p-1.5 text-neutral-500 hover:text-red-400 hover:bg-neutral-800 rounded transition-colors shrink-0"
                        title="Eliminar de la lista"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Optional Notes */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Comentarios adicionales o especificaciones técnicas
              </label>
              <textarea
                rows={2}
                placeholder="Ej: Se requiere con certificado de ensayo 3.1 y despacho antes de las 14:00 hrs."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Right Column: Live WhatsApp Message Preview & Trigger (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-lg border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Vista previa de tu mensaje WhatsApp
                  </span>
                </div>
                <button
                  onClick={handleCopyText}
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              {/* Chat-bubble style preview */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 font-mono text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto selection:bg-emerald-500/30">
                {generateWhatsAppMessage()}
              </div>

              <div className="mt-4 p-3 bg-neutral-900/60 border border-neutral-800 rounded text-xs text-neutral-400 space-y-1">
                <p className="font-semibold text-neutral-200">¿Qué pasa al hacer clic?</p>
                <p>Se abrirá WhatsApp con el mensaje listo para enviar. Un ejecutivo comercial de Ferretorque te responderá con cotización formal, disponibilidad y opciones de pago.</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 space-y-3">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-4 px-6 text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-neutral-950" />
                <span>Enviar Cotización a WhatsApp</span>
              </button>

              <p className="text-center text-xs text-neutral-500">
                Atención rápida: Lunes a Viernes 08:00 a 18:30 hrs
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
