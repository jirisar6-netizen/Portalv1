import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Cpu } from 'lucide-react';

const StoryView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-20 px-6">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="group mb-12 flex items-center gap-3 text-white/40 hover:text-accent transition-colors"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-bold uppercase tracking-widest">Návrat na Dashboard</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 bg-accent/20 rounded-3xl flex items-center justify-center text-accent">
            <Heart className="w-8 h-8 fill-accent" />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tight">Proč vznikl Piktos</h1>
        </div>

        <div className="glass-piktos p-10 space-y-6">
          <h2 className="text-xl font-bold text-accent uppercase tracking-widest">Osobní motivace</h2>
          <p className="text-xl text-white/80 leading-relaxed font-medium">
            Aplikace vznikla v <span className="text-white font-bold">Synthesis studio</span>. Je to nástroj vyvinutý s hlubokou osobní motivací pro mé syny, <span className="text-accent">Jiříka</span> a tříměsíčního <span className="text-accent">Štěpánka</span>, které mám ve výhradní péči.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            Cílem je poskytnout jim a všem dětem s PAS ten nejlepší komunikační nástroj, který jim umožní vyjádřit své potřeby a pocity bez frustrace.
          </p>
        </div>

        <div className="glass-piktos p-10 space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <Cpu className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-accent uppercase tracking-widest">Technická vize</h2>
          </div>
          <p className="text-lg text-white/80 leading-relaxed">
            Systém je stavěn na moderním stacku s optimalizací pro <span className="text-white font-bold">144Hz displeje (Xiaomi 13T Pro)</span>, aby byla odezva okamžitá a bez frustrace. Každý milisekundový lag může u dětí s PAS vyvolat neklid, proto je rychlost naší prioritou.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StoryView;
