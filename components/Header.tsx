
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Own<span className="text-blue-500">Kenya</span></span>
        </div>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest text-slate-300">
          <a href="#" className="hover:text-blue-500 transition-colors">Buy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Rent</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Sell</a>
          <a href="#" className="hover:text-blue-500 transition-colors border-b-2 border-transparent hover:border-blue-500 pb-1">Contact</a>
        </nav>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
          List Property
        </button>
      </div>
    </header>
  );
};

export default Header;
