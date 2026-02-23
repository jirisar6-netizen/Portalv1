import React from 'react';
import { motion } from 'motion/react';
import { SOCIAL_SCRIPTS } from '../constants';
import { BookOpen, ChevronRight } from 'lucide-react';

export const SocialScripts: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6 px-2">
        <BookOpen className="w-5 h-5 text-indigo-500" />
        <h2 className="text-xl font-black uppercase tracking-tight">Sociální scénáře</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SOCIAL_SCRIPTS.map((script) => (
          <motion.div
            key={script.id}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-[32px] p-6 flex items-center justify-between group cursor-pointer hover:border-indigo-200 transition-all"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-black uppercase tracking-tight text-lg">{script.title}</h3>
              <p className="text-xs text-slate-400 font-medium">{script.description}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <ChevronRight className="w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
