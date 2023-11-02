export type weather = 'Soleado' | 'Nublado' | 'Lluvioso';
export type visibility = 'buena' | 'mala' | 'ok' | 'excelente';

export interface DiariesEntry {
  id: number;
  date: string;
  weather: weather;
  visibility: visibility;
  comment: string;
}
