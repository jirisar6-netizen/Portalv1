import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Symbol } from '../types';
import { PictogramCard } from './PictogramCard';
import { searchSymbols } from '../services/arasaac';
import { Clock, Sparkles } from 'lucide-react';

export const SmartBar: React.FC = () => {
  const [predictions, setPredictions] = useState<Symbol[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPredictions = async () => {
      const hour = new Date().getHours();
      let query = 'ahoj';
      
      if (hour >= 6 && hour < 10) query = 'snídaně';
      else if (hour >= 11 && hour < 14) query = 'oběd';
      else if (hour >= 18 && hour < 21) query = 'večeře';
      else if (hour >= 21 || hour < 6) query = 'spát';
      else query = 'hrát';

      const results = await searchSymbols(query);
      setPredictions(results.slice(0, 5));
      setLoading(false);
    };

    fetchPredictions();
  }, []);

  return (
    <div className="glass rounded-3xl p-4 mb-6">
      <div className="flex items-center gap-2 mb-3 text-slate-500 px-2">
        <Sparkles className="w-4 h-4 text-indigo-500" />
        <span className="text-xs font-bold uppercase tracking-widest">Smart Bar</span>
        <div className="ml-auto flex items-center gap-1 text-[10px]">
          <Clock className="w-3 h-3" />
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        <AnimatePresence mode="popLayout">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-24 h-24 rounded-2xl bg-slate-200 animate-pulse shrink-0" />
            ))
          ) : (
            predictions.map((symbol) => (
              <PictogramCard 
                key={symbol._id} 
                symbol={symbol} 
                size="sm" 
                className="shrink-0"
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
