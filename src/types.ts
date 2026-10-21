export interface WorkSlide {
  image?: string;
  title?: string;
  caption?: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  description: string;
  highlights: string[];
  metrics?: string;
  linkText?: string;
  image?: string;
  gallery?: WorkSlide[];
  status?: 'COMPLETED' | 'IN_PROGRESS' | 'COMING_SOON' | 'PRIVATE';
  span?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  pillar: string;
  skills: string[];
  description: string;
  details: string[];
}

export interface CityTime {
  city: string;
  timezone: string;
  code: string;
  isBase?: boolean;
}
