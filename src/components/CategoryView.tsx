import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Zap, Code, ShieldAlert, Volume2, Calendar, CheckCircle2, Clock } from 'lucide-react';

interface CategoryData {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

const CATEGORIES: Record<string, CategoryData> = {
  'osobni-pribeh': {
    title: 'Osobní Příběh',
    subtitle: 'Srdce projektu Piktos',
    icon: Heart,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bento-card p-10 md:col-span-2">
          <h3 className="text-2xl font-black uppercase mb-6">Mise Synthesis Studio</h3>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            Piktos vznikl jako osobní nástroj pro rodinu, který dává hlas těm, co ho hledají. 
            Naším cílem je překonávat bariéry v komunikaci pomocí moderních technologií.
          </p>
          <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl italic text-white font-bold">
            "Pro Daniela, pro Štěpánka, pro každého, kdo potřebuje být slyšen."
          </div>
        </div>
        <div className="bento-card p-8">
          <h4 className="font-black uppercase text-sm mb-4 text-accent">Daniel & Štěpánek</h4>
          <p className="text-white/60 text-sm">
            Inspirace a první uživatelé. Každá funkce je testována v reálném prostředí domova.
          </p>
        </div>
        <div className="bento-card p-8">
          <h4 className="font-black uppercase text-sm mb-4 text-accent">Kateřina</h4>
          <p className="text-white/60 text-sm">
            Klíčová podpora a koordinace péče, která definuje praktické potřeby aplikace.
          </p>
        </div>
      </div>
    )
  },
  'technologie': {
    title: 'Technologie',
    subtitle: 'Výkon bez kompromisů',
    icon: Code,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bento-card p-8 md:col-span-2">
          <h3 className="text-xl font-black uppercase mb-4">Optimalizace 144Hz</h3>
          <p className="text-white/70 mb-6">
            Speciálně laděno pro Xiaomi 13T Pro. Plynulost rozhraní je klíčová pro uživatele se specifickými motorickými potřebami.
          </p>
          <div className="flex gap-4">
            {['React 19', 'Vite 6', 'Tailwind 4', 'Motion'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="bento-card p-8">
          <h3 className="text-xl font-black uppercase mb-4">Changelog</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white/40">v0.1.30</span>
              <span className="text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded">LATEST</span>
            </div>
            <p className="text-xs text-white/60">Implementace multi-page architektury a SSM kategorií.</p>
          </div>
        </div>
      </div>
    )
  },
  'komunikace': {
    title: 'Komunikace',
    subtitle: 'Vizuální a hlasová odezva',
    icon: Volume2,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bento-card p-8">
          <h3 className="text-xl font-black uppercase mb-4">ARASAAC Standard</h3>
          <p className="text-white/70 text-sm">
            Využíváme mezinárodně uznávanou knihovnu piktogramů pro maximální srozumitelnost.
          </p>
        </div>
        <div className="bento-card p-8">
          <h3 className="text-xl font-black uppercase mb-4">Smart Prediction</h3>
          <p className="text-white/70 text-sm">
            Algoritmus předpovídá další piktogramy na základě kontextu a denní doby.
          </p>
        </div>
      </div>
    )
  },
  'roadmapa': {
    title: 'Roadmapa',
    subtitle: 'Plán vývoje 2025',
    icon: Calendar,
    content: (
      <div className="space-y-6">
        {[
          { label: 'Dnes', task: 'Multi-page Architektura', status: 'done', icon: CheckCircle2, color: 'text-green-500' },
          { label: 'Zítra', task: 'Google Sheets Real-time Sync', status: 'pending', icon: Clock, color: 'text-accent' },
          { label: 'Březen', task: 'Beta Testing pro rodiny', status: 'upcoming', icon: Zap, color: 'text-blue-400' }
        ].map((item, i) => (
          <div key={i} className="bento-card p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <item.icon className={`w-6 h-6 ${item.color}`} />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                <p className="font-bold">{item.task}</p>
              </div>
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${item.status === 'done' ? 'text-green-500' : 'text-white/20'}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    )
  }
};

export default function CategoryView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const category = id ? CATEGORIES[id] : null;

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-black uppercase mb-4">Kategorie nenalezena</h2>
        <button onClick={() => navigate('/')} className="text-accent font-bold uppercase tracking-widest flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Zpět na Dashboard
        </button>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="group mb-12 flex items-center gap-3 text-white/40 hover:text-white transition-colors"
      >
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="text-xs font-black uppercase tracking-widest">Zpět na Dashboard</span>
      </motion.button>

      <div className="mb-16">
        <div className="flex items-center gap-6 mb-4">
          <div className="w-16 h-16 bg-accent/20 rounded-[24px] flex items-center justify-center text-accent">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tight">{category.title}</h1>
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs mt-2">{category.subtitle}</p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {category.content}
      </motion.div>
    </div>
  );
}
