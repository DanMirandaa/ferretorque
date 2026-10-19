export interface Product {
  id: string;
  name: string;
  category: 'power' | 'hand' | 'fasteners' | 'safety' | 'construction';
  categoryLabel: string;
  brand: string;
  model: string;
  priceEstimate?: string;
  image: string;
  specs: { [key: string]: string };
  badge?: string;
  description: string;
  stockStatus: 'En Stock Inmediato' | 'Stock en Bodega Central' | 'Despacho 24h';
}

export interface QuoteItem {
  id: string;
  name: string;
  quantity: number;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  metrics: string;
  industry: string;
}

export interface ServiceFeature {
  number: string;
  title: string;
  description: string;
  detail: string;
}
