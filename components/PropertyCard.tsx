
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {property.type}
        </div>
        {property.isFeatured && (
          <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
            {property.title}
          </h3>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div className="flex space-x-4 text-slate-400 text-sm">
            {property.beds && (
              <span className="flex items-center">
                <span className="font-semibold text-slate-200 mr-1">{property.beds}</span> Beds
              </span>
            )}
            {property.baths && (
              <span className="flex items-center">
                <span className="font-semibold text-slate-200 mr-1">{property.baths}</span> Baths
              </span>
            )}
            {property.sqft && (
              <span className="flex items-center">
                <span className="font-semibold text-slate-200 mr-1">{property.sqft}</span>
              </span>
            )}
          </div>
          <p className="text-blue-400 font-bold text-lg">{property.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
