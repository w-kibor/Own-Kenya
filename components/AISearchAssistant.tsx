
import React, { useState } from 'react';
import { getPropertyAdvice } from '../geminiService';

const AISearchAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const advice = await getPropertyAdvice(input);
    setResponse(advice || null);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
      
      <div className="relative z-10 text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20 mb-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">AI Property Consultant</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Not sure where to start?</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Describe your dream lifestyle or investment goals, and our AI will suggest the best locations and property types in Kenya.</p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col md:flex-row gap-4 mb-6">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., 'I want a quiet 4-bedroom home near international schools in Nairobi'"
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
        />
        <button 
          disabled={loading}
          type="submit"
          className="bg-white hover:bg-slate-200 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-50"
        >
          {loading ? 'Consulting...' : 'Get AI Advice'}
        </button>
      </form>

      {response && (
        <div className="relative z-10 bg-slate-950/50 border border-slate-800/50 rounded-xl p-6 text-slate-300 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="prose prose-invert max-w-none">
            {response.split('\n').map((line, i) => (
              <p key={i} className="mb-2 last:mb-0 leading-relaxed">{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AISearchAssistant;
