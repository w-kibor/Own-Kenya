
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="w-full max-w-5xl bg-slate-900/60 backdrop-blur-2xl p-2 rounded-2xl border border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="flex flex-col px-4 py-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 group-hover:text-blue-400">Location</span>
          <input 
            type="text" 
            placeholder="Nairobi, Kenya"
            className="bg-transparent text-white font-medium focus:outline-none placeholder:text-slate-500 w-full"
          />
        </div>
        
        <div className="hidden md:flex flex-col px-4 py-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border-l border-white/10 group">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 group-hover:text-blue-400">Property Type</span>
          <select className="bg-transparent text-white font-medium focus:outline-none appearance-none cursor-pointer">
            <option className="bg-slate-900">Apartments</option>
            <option className="bg-slate-900">Villas</option>
            <option className="bg-slate-900">Land/Plots</option>
            <option className="bg-slate-900">Commercial</option>
          </select>
        </div>

        <div className="hidden md:flex flex-col px-4 py-2 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border-l border-white/10 group">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 group-hover:text-blue-400">Budget Range</span>
          <select className="bg-transparent text-white font-medium focus:outline-none appearance-none cursor-pointer">
            <option className="bg-slate-900">Any Budget</option>
            <option className="bg-slate-900">KSh 10M - 30M</option>
            <option className="bg-slate-900">KSh 30M - 100M</option>
            <option className="bg-slate-900">KSh 100M+</option>
          </select>
        </div>

        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 active:scale-95">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Search Properties</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
