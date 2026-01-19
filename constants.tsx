
import React from 'react';
import { Property } from './types';

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Azure Sky Luxury Penthouse',
    location: 'Westlands, Nairobi',
    price: 'KSh 45,000,000',
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    beds: 4,
    baths: 4,
    sqft: '3,200',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Savannah Breeze Estate',
    location: 'Karen, Nairobi',
    price: 'KSh 120,000,000',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    beds: 6,
    baths: 7,
    sqft: '8,500',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Prime Kilifi Coastal Plot',
    location: 'Bofa Beach, Kilifi',
    price: 'KSh 15,500,000',
    type: 'Land',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    sqft: '0.5 Acres',
    isFeatured: true
  }
];

export const COLORS = {
  charcoal: '#121826',
  slate: '#334155',
  accent: '#3b82f6',
};
