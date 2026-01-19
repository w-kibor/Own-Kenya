
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Apartment' | 'Land' | 'Villa';
  image: string;
  beds?: number;
  baths?: number;
  sqft?: string;
  isFeatured?: boolean;
}

export interface SearchParams {
  location: string;
  type: string;
  budget: string;
}
