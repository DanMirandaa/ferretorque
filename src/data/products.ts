import { Product, Testimonial, ServiceFeature } from '../types';
import heroImage from '../assets/images/hero_ferretorque_warehouse_1792371744392.jpg';
import powerToolsImage from '../assets/images/cat_power_tools_1792371746087.jpg';
import handToolsImage from '../assets/images/cat_hand_tools_1792371746195.jpg';
import fastenersImage from '../assets/images/cat_fasteners_1792371746540.jpg';
import safetyGearImage from '../assets/images/cat_safety_gear_1792371746771.jpg';

export const WHATSAPP_PHONE = '56987654321';
export const DISPLAY_PHONE = '+56 9 8765 4321';
export const STORE_EMAIL = 'ventas@ferretorque.com';
export const STORE_ADDRESS = 'Av. Industrial 4580, Sector Parque Industrial, Santiago';

export const HERO_IMAGE = heroImage;
export const POWER_TOOLS_IMAGE = powerToolsImage;
export const HAND_TOOLS_IMAGE = handToolsImage;
export const FASTENERS_IMAGE = fastenersImage;
export const SAFETY_GEAR_IMAGE = safetyGearImage;

export const CATEGORIES = [
  { id: 'all', label: 'Todo el Catálogo' },
  { id: 'power', label: 'Herramientas Eléctricas' },
  { id: 'hand', label: 'Manuales & Dinamometría' },
  { id: 'fasteners', label: 'Fijaciones & Pernos G8' },
  { id: 'safety', label: 'Seguridad & EPP' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Rotomartillo Inalámbrico SDS-Plus 20V Max Brushless',
    category: 'power',
    categoryLabel: 'Herramientas Eléctricas',
    brand: 'DeWalt Industrial',
    model: 'DCH273B 2.1 Joules',
    priceEstimate: '$249.990 CLP + IVA',
    image: POWER_TOOLS_IMAGE,
    specs: {
      'Energía de Impacto': '2.1 Joules',
      'Velocidad sin Carga': '0 - 1.100 RPM',
      'Motor': 'Sin escobillas (Brushless)',
      'Mandril': 'SDS-Plus 1 pulgada',
      'Sistema Antivibración': 'SHOCKS Active Vibration Control'
    },
    description: 'Rendimiento superior para anclajes en hormigón armado, mampostería pesada y perforación continua en obra gruesa.',
    stockStatus: 'En Stock Inmediato'
  },
  {
    id: 'prod-2',
    name: 'Esmeril Angular 4-1/2" a 5" 20V Max XR Brushless',
    category: 'power',
    categoryLabel: 'Herramientas Eléctricas',
    brand: 'DeWalt Industrial',
    model: 'DCG413B Kickback Brake',
    priceEstimate: '$189.990 CLP + IVA',
    image: POWER_TOOLS_IMAGE,
    specs: {
      'Diámetro de Disco': '115mm - 125mm',
      'Freno de Seguridad': 'Detención en <2 seg (Kickback Brake)',
      'Velocidad': '9.000 RPM',
      'Gatillo': 'Paleta con seguro de bloqueo'
    },
    description: 'Corte y desbaste en metales pesados con sensor electrónico de parada inmediata ante atascamientos.',
    stockStatus: 'En Stock Inmediato'
  },
  {
    id: 'prod-3',
    name: 'Llave Dinamometría Industrial Manoskop 40-200 Nm',
    category: 'hand',
    categoryLabel: 'Manuales & Dinamometría',
    brand: 'Stahlwille Pro',
    model: '730N/20 Quick Release',
    priceEstimate: '$319.990 CLP + IVA',
    image: HAND_TOOLS_IMAGE,
    specs: {
      'Rango de Medición': '40 - 200 N·m (30 - 150 ft·lb)',
      'Tolerancia': '± 3% de precisión certificada',
      'Encastre': 'Cuadrante de 1/2 pulgada intercambiable',
      'Certificado': 'Trazabilidad DAkkS / ISO 6789'
    },
    description: 'Llave de torque alemana de disparo mecánico sin necesidad de reajustar a cero luego de su uso. Ideal para montajes mecánicos críticos.',
    stockStatus: 'En Stock Inmediato'
  },
  {
    id: 'prod-4',
    name: 'Juego de Dados y Chicharras Cromo-Vanadio 94 Piezas',
    category: 'hand',
    categoryLabel: 'Manuales & Dinamometría',
    brand: 'Hazet Industrial',
    model: 'HP-Master 94P CrV',
    priceEstimate: '$149.990 CLP + IVA',
    image: HAND_TOOLS_IMAGE,
    specs: {
      'Material': 'Acero Cromo-Vanadio templado al vacío',
      'Cuadrantes': '1/4" y 1/2" con trinquete de 72 dientes',
      'Incluye': 'Tubos milimétricos, dados largos de impacto y extensiones',
      'Maleta': 'Polímero reforzado a prueba de caídas'
    },
    description: 'Set maestro de apriete para maestranzas, talleres de maquinaria pesada y líneas de producción continua.',
    stockStatus: 'En Stock Inmediato'
  },
  {
    id: 'prod-5',
    name: 'Perno Hexagonal Estructural Grado 8 Alta Resistencia',
    category: 'fasteners',
    categoryLabel: 'Fijaciones & Pernos G8',
    brand: 'TorqueFast Fasteners',
    model: 'ASTM A325 / SAE J429 G8',
    priceEstimate: 'Venta por caja (100 u.) / Millares',
    image: FASTENERS_IMAGE,
    specs: {
      'Tracción': '150.000 PSI mínimo',
      'Rango Diámetros': '3/8" hasta 1-1/2"',
      'Acabado': 'Pavonado negro térmico o galvanizado en caliente',
      'Certificado': '3.1 Ensayos mecánicos de tracción y cizalle'
    },
    description: 'Fijaciones estructurales para uniones de vigas de acero, anclajes de maquinaria pesada y chasis de camiones.',
    stockStatus: 'Stock en Bodega Central'
  },
  {
    id: 'prod-6',
    name: 'Anclaje Químico Epóxico de Alto Rendimiento',
    category: 'fasteners',
    categoryLabel: 'Fijaciones & Pernos G8',
    brand: 'Fischer / Sika',
    model: 'FIS EM Plus 390ml',
    priceEstimate: '$34.500 CLP c/u + IVA',
    image: FASTENERS_IMAGE,
    specs: {
      'Aprobación': 'Sísmica C1 y C2 ETA-Option 1',
      'Base': 'Resina epoxi pura de fraguado controlado',
      'Aplicación': 'Hormigón fisurado, roca y taladros diamantados',
      'Rango Térmico': '-40°C a +72°C'
    },
    description: 'Máxima adherencia para barras roscadas y fierros de refuerzo en ampliaciones estructurales y postes industriales.',
    stockStatus: 'En Stock Inmediato'
  },
  {
    id: 'prod-7',
    name: 'Casco de Seguridad Dieléctrico con Arnés de 6 Puntos',
    category: 'safety',
    categoryLabel: 'Seguridad & EPP',
    brand: 'MSA Safety Pro',
    model: 'V-Gard H1 Tri-Vent Class E',
    priceEstimate: '$42.990 CLP + IVA',
    image: SAFETY_GEAR_IMAGE,
    specs: {
      'Normativa': 'ANSI/ISEA Z89.1-2014 Tipo 1 Clase E',
      'Aislamiento': 'Dieléctrico hasta 20.000 Voltios',
      'Ajuste': 'Rueda Fas-Trac III pivotante',
      'Slots': 'Montaje para protectores auditivos y visor'
    },
    description: 'Casco ergonómico de perfil bajo para trabajos en altura, plantas eléctricas y faenas mineras.',
    stockStatus: 'En Stock Inmediato'
  },
  {
    id: 'prod-8',
    name: 'Antiparras Balísticas con Tratamiento Antiempañante Z87+',
    category: 'safety',
    categoryLabel: 'Seguridad & EPP',
    brand: '3M Industrial',
    model: 'GoggleGear 500 Scotchgard',
    priceEstimate: '$19.990 CLP + IVA',
    image: SAFETY_GEAR_IMAGE,
    specs: {
      'Protección UV': '99.9% radiación UV-A y UV-B',
      'Recubrimiento': 'Scotchgard Anti-Fog de larga duración',
      'Banda': 'Neopreno lavable resistente a químicos',
      'Certificación': 'ANSI Z87.1 y EN 166'
    },
    description: 'Visibilidad cristalina en ambientes de alta humedad, desbaste metálico y contacto con virutas de acero.',
    stockStatus: 'En Stock Inmediato'
  }
];

export const SERVICES: ServiceFeature[] = [
  {
    number: '01',
    title: 'Despacho Directo a Obra y Planta',
    description: 'Flota propia de camiones y camionetas para entregas el mismo día o en 24 horas directamente en su frente de trabajo.',
    detail: 'Cobertura en toda la Región Metropolitana y envíos coordinados a faenas en regiones con seguimiento en tiempo real.'
  },
  {
    number: '02',
    title: 'Asesoría Técnica y Torque Calculado',
    description: 'Nuestro equipo de técnicos mecánicos e industriales le orienta en el dimensionamiento exacto de pernos, torque y herramientas.',
    detail: 'Tablas de apriete, compatibilidad electroquímica y selección de consumibles según especificaciones de ingeniería.'
  },
  {
    number: '03',
    title: 'Línea de Crédito & Convenios B2B',
    description: 'Planes de facturación mensual y crédito comercial a 30 y 60 días para constructoras, maestranzas e industrias.',
    detail: 'Asignación de ejecutivo de cuenta dedicado para compras recurrentes con descuentos por volumen y cotizaciones exprés.'
  },
  {
    number: '04',
    title: 'Certificados de Calidad y Ensayos 3.1',
    description: 'Entregamos trazabilidad total en pernos estructurales, anclajes químicos y herramientas de medición con reporte de calibración.',
    detail: 'Cumplimiento estricto de normas chilenas e internacionales (NCh, ASTM, ISO, DIN).'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rodrigo Valenzuela',
    role: 'Jefe de Terreno & Estructuras',
    company: 'Constructora Terranorte S.A.',
    industry: 'Construcción Civil',
    metrics: '+45 Obras abastecidas sin retrasos',
    quote: 'Ferretorque resolvió nuestro cuello de botella en pernos estructurales A325 y brocas SDS Max. Cuando una grúa o cuadrilla se detiene, cada hora cuesta millones. Su respuesta por WhatsApp y entrega en obra en menos de 4 horas es insuperable.'
  },
  {
    id: 't-2',
    name: 'Ing. Marcelo Tapia',
    role: 'Gerente de Mantenimiento',
    company: 'Maestranza & Montajes del Maipo',
    industry: 'Fabricación Metalmecánica',
    metrics: '99.4% disponibilidad de insumos críticos',
    quote: 'La calidad de las llaves dinamométricas y dados de impacto que nos suministran es de nivel industrial real. Además, nos facilitan las fichas técnicas y certificados de calidad que nos exigen nuestros mandantes mineros.'
  },
  {
    id: 't-3',
    name: 'Claudia Henríquez',
    role: 'Jefa de Adquisiciones',
    company: 'Logística & Montajes Industriales',
    industry: 'Servicios Mineros e Industriales',
    metrics: '-30% tiempo en gestión de compras',
    quote: 'El cotizador y la atención directa por WhatsApp cambiaron nuestro flujo de compras. Escribo la lista de insumos de faena en la mañana y en 15 minutos tengo la cotización con disponibilidad y plazo de entrega.'
  }
];

export const FAQS = [
  {
    question: '¿Cómo funciona la cotización y compra por WhatsApp?',
    answer: 'Es el canal más rápido. Puedes usar nuestro botón de WhatsApp o el cotizador interactivo en la web para enviar el listado de lo que necesitas (código, medidas, cantidad). Un asesor comercial especializado te responderá en menos de 10 minutos con disponibilidad de stock, precio neto y coordinará la entrega o retiro inmediato.'
  },
  {
    question: '¿Tienen precios por mayor para constructoras y empresas?',
    answer: 'Sí. Contamos con listas de precios preferenciales para clientes corporativos, talleres y constructoras por compras en volumen de fijaciones, consumibles de corte y herramientas. Además, habilitamos líneas de crédito a 30 y 60 días tras evaluación comercial.'
  },
  {
    question: '¿Realizan despachos a faenas fuera de Santiago?',
    answer: 'Absolutamente. Para la Región Metropolitana despachamos con flota propia en 24 horas o el mismo día según urgencia. Para regiones, coordinamos despachos diarios a través de Starken, Pullman Cargo, Varmontt o el transporte de confianza del cliente con número de seguimiento inmediato.'
  },
  {
    question: '¿Las herramientas cuentan con garantía oficial y servicio técnico?',
    answer: 'Todos nuestros productos son 100% originales de marcas autorizadas (DeWalt, Bosch, Stahlwille, 3M, Fischer, etc.) con garantía del fabricante de 1 a 3 años según la marca. También gestionamos revisiones y calibración certificada de llaves de torque.'
  },
  {
    question: '¿Emiten Factura Electrónica y órdenes de compra con RUT?',
    answer: 'Sí, emitimos Factura Electrónica inmediata para empresas y Boleta Electrónica para personas naturales. Procesamos órdenes de compra con requerimientos específicos de HES o centros de costo.'
  }
];

export const BRANDS = [
  { name: 'DeWalt Industrial', category: 'Herramientas Eléctricas' },
  { name: 'Bosch Professional', category: 'Herramientas Eléctricas' },
  { name: 'Makita Power Tools', category: 'Sistemas a Batería' },
  { name: 'Stahlwille Germany', category: 'Dinamometría & Llaves' },
  { name: 'Milwaukee Tool', category: 'Heavy Duty' },
  { name: 'Fischer Fixings', category: 'Anclajes Químicos' },
  { name: '3M Safety & Abrasives', category: 'EPP & Discos' },
  { name: 'Sika Construction', category: 'Químicos & Sellantes' },
  { name: 'Stanley FatMax', category: 'Herramientas Manuales' },
  { name: 'Truper Expert', category: 'Ferretería General' },
];
