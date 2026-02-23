import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';
import { Category } from '../types';

interface CategoryNavProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide px-2">
      {CATEGORIES.map((cat) => {
        const Icon = (Icons as any)[cat.icon] || Icons.Circle;
        const isActive = activeCategory === cat.id;

        return (
          <motion.button
            key={cat.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(cat.id)}
            className={`
              flex items-center gap-3 px-6 py-4 rounded-3xl whitespace-nowrap transition-all border-2
              ${isActive 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-200' 
                : 'glass text-slate-600 border-transparent hover:border-indigo-100'}
            `}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-500'}`} />
            <span className="font-bold uppercase tracking-tight text-sm">{cat.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
};
