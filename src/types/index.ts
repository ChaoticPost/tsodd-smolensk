// Базовые типы для приложения ЦОДД Смоленской области

export type NewsCategory = 'Перекрытия' | 'Аналитика' | 'Проекты';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  category: NewsCategory;
  image: string;
}

export interface RoadCondition {
  id: string;
  roadName: string;
  condition: 'free' | 'moderate' | 'heavy' | 'blocked';
  speed: number;
  description?: string;
}

export interface TrafficStats {
  accidents: number;
  evacuations: number;
  fines: number;
  period: string;
}

export interface QuickService {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
}

// Реэкспорт всех типов для удобства импорта
export type * from './index';