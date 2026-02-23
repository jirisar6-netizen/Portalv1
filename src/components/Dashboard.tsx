import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  ShieldAlert, 
  Cpu, 
  Heart, 
  ChevronRight 
} from 'lucide-react';

const MENU_ITEMS = [
  { 
    id: 'komunikace', 
    title: 'Modul Komunikace', 
    desc: 'Chytré piktogramy a ARASAAC', 
    icon: '🍎', 
    path: '/ssm/komunikace',
    span: 'md:col-span-2'
  },
  { 
    id: 'guardian', 
    title: 'Guardian SOS', 
    desc: 'Nouzový modul a bezpečnost', 
    icon: '🆘', 
    path: '/ssm/guardian',
    span: 'md:col-span-1'
  },
  { 
    id: 'stack', 
    title: 'Technický Stack', 
    desc: '144Hz optimalizace a React', 
    icon: '⚡', 
    path: '/ssm/stack',
    span: 'md:col-span-1'
  },
  { 
    id: 'vize', 
    title: 'Příběh a Vize', 
    desc: 'Proč vznikl Piktos', 
    icon: '🧡', 
    path: '/ssm/vize',
    span: 'md:col-span-2'
  },
  { 
    id: 'podpora', 
    title: 'Podpora a Komunita', 
    desc: 'Zapojte se do vývoje', 
    icon: '🤝', 
    path: '/podpora',
    span: 'md:col-span-1'
  }
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="max-w-7xl mx-auto pt-32 pb-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {MENU_ITEMS.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(item.path)}
          className={`glass-piktos p-8 flex flex-col justify-between cursor-pointer group h-[240px] ${item.span}`}
        >
          <div className="flex items-center justify-between">
            <div className="text-4xl">{item.icon}</div>
            <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-accent transition-all" />
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{item.title}</h3>
            <p className="text-sm font-medium text-white/40 uppercase tracking-widest">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </main>
  );
};

export default Dashboard;
