import React, { useState } from 'react';
import { MessageSquare, X, Send, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_PHONE, DISPLAY_PHONE } from '../data/products';

export const WhatsAppFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Hola, necesito cotizar pernos estructurales Grado 8 por mayor.',
    'Hola, deseo consultar disponibilidad de herramientas a batería.',
    'Hola, necesito coordinar un despacho a obra.'
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || customMsg.trim() || 'Hola Ferretorque, me gustaría solicitar una cotización.';
    const encoded = encodeURIComponent(finalMsg);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-[90vw] sm:w-88 bg-neutral-900 border border-neutral-700/80 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Compact Header */}
          <div className="bg-neutral-950 border-b border-neutral-800 p-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs">
                FT
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight text-white">Asistencia Ferretorque</h4>
                <p className="text-[10px] text-neutral-400 mt-0.5">
                  Respuesta directa en WhatsApp
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 bg-neutral-950 space-y-2.5 max-h-72 overflow-y-auto">
            <p className="text-xs text-neutral-300 leading-relaxed">
              ¿En qué herramientas o insumos podemos orientarte? Selecciona una consulta o escribe directamente:
            </p>

            {/* Quick suggestion buttons */}
            <div className="space-y-1.5 pt-1">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2 rounded bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate pr-2">{prompt}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 shrink-0 opacity-60 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-neutral-900 border-t border-neutral-800 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu consulta..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 text-xs bg-neutral-950 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={() => handleSend()}
                className="px-3 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-md transition-colors flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer"
                title="Abrir WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[10px] text-neutral-500 text-center">
              Atención comercial: Lunes a Viernes 08:00 a 18:30 hrs
            </div>
          </div>

        </div>
      )}

      {/* Discreet, non-invasive circular floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 sm:p-3.5 bg-neutral-900 hover:bg-neutral-800 text-emerald-400 hover:text-emerald-300 border border-neutral-700 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer focus:outline-none"
        title="Contacto WhatsApp"
        aria-label="Abrir asistente de WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-emerald-400/20" />
      </button>

    </div>
  );
};
