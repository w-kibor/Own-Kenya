
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import AISearchAssistant from './components/AISearchAssistant';
import { FEATURED_PROPERTIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=90" 
            alt="Luxury Villa Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Legacy Homes <br />
              <span className="text-blue-500 italic">Built</span> in Kenya.
            </h1>
            <p className="text-lg md:text-xl text-slate-200/80 mb-8 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              Discover the most exclusive collection of high-end villas, apartments, and prime land plots across the beautiful landscape of Kenya.
            </p>
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <SearchBar />
          </div>
        </div>

        {/* Decorative Scroll Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-2">Explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">Our Collection</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight">Featured Listings</h3>
            </div>
            <button className="hidden md:flex items-center text-slate-400 hover:text-white transition-colors group mt-4 md:mt-0">
              <span>View all 250+ properties</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <button className="md:hidden w-full mt-8 border border-slate-800 py-4 rounded-xl text-slate-400 font-bold hover:bg-slate-900 transition-colors">
            View All Properties
          </button>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <AISearchAssistant />
        </div>
      </section>

      {/* Stats/Credibility Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Properties Sold', value: '1.2K+' },
            { label: 'Happy Clients', value: '850+' },
            { label: 'Awards Won', value: '12' },
            { label: 'Premium Agents', value: '45' }
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <p className="text-4xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">{stat.value}</p>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Own<span className="text-blue-500">Kenya</span></span>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                Redefining luxury real estate in East Africa. We connect sophisticated buyers with Kenya's most prestigious residences.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Search Houses</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Prime Land Plots</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Commercial Space</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sell Your Home</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Locations</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Nairobi Westlands</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Karen & Runda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mombasa Coast</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Nanyuki & Laikipia</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <p className="text-slate-500 mb-4">The Exchange Building, 5th Floor<br />Westlands, Nairobi</p>
              <p className="text-slate-500 mb-4">+254 700 000 000</p>
              <p className="text-blue-500 font-bold">concierge@ownkenya.com</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 text-slate-600 text-xs font-medium">
            <p>© 2024 Own Kenya Premium Real Estate. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
