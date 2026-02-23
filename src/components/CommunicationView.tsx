import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Volume2, Sparkles } from 'lucide-react';

const PIKTOGRAMS = [
  { id: 'food', label: 'Jídlo', icon: '🍎' },
  { id: 'drink', label: 'Pití', icon: '💧' },
  { id: 'help', label: 'Pomoc', icon: '🆘' },
];

const CommunicationView: React.FC = () => {
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
        className="space-y-12"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-accent/20 rounded-3xl flex items-center justify-center text-accent">
            <Volume2 className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tight">Chytré Piktogramy a ARASAAC</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PIKTOGRAMS.map((piktos) => (
            <motion.div
              key={piktos.id}
              whileHover={{ scale: 1.05 }}
              className="glass-piktos p-8 flex flex-col items-center justify-center gap-4 cursor-pointer group hover:border-accent"
            >
              <div className="text-6xl transition-transform group-hover:scale-110">{piktos.icon}</div>
              <span className="font-black uppercase tracking-widest text-sm group-hover:text-accent transition-colors">
                {piktos.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="glass-piktos p-10 space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-accent uppercase tracking-widest">Smart Bar & Predikce</h2>
          </div>
          <p className="text-lg text-white/80 leading-relaxed">
            Implementujeme inteligentní <span className="text-white font-bold">Smart Bar</span>, který využívá predikci piktogramů podle denní doby a naučených vzorců chování. Pokud je ráno, systém automaticky nabídne piktogramy pro snídani a hygienu.
          </p>
          <p className="text-white/60 leading-relaxed">
            Využíváme mezinárodní standard <span className="text-white">ARASAAC</span>, který zajišťuje srozumitelnost a konzistenci napříč celým systémem.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunicationView;
