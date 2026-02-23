import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Send, Share2, Coffee, MessageCircle } from 'lucide-react';

const SupportView: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
    alert('Děkujeme za váš zájem! Ozveme se vám co nejdříve.');
  };

  return (
    <div className="max-w-5xl mx-auto pt-32 pb-20 px-6">
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
        {/* Hero Section */}
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-accent/20 rounded-3xl flex items-center justify-center text-accent">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tight">Tvoříme to společně</h1>
        </div>

        {/* Personal Story Card */}
        <div className="glass-piktos p-10 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              Piktos nevyvíjí velká korporace. Jsem otec samoživitel, který má ve své péči syna Jiříka a zároveň se stará o svého tatínka. Aplikaci tvořím po nocích, ve svém volném čase a s využitím bezplatných limitů vývojářských nástrojů. Každá vaše zpětná vazba, otestování s vašimi dětmi nebo jakákoliv jiná podpora mi dává sílu pokračovat a posouvat Piktos dál pro všechny, kteří to potřebují.
            </p>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
        </div>

        {/* Beta Program Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Zapojte se do Beta programu</h2>
            <p className="text-white/60 leading-relaxed">
              Hledáme rodiče, pečovatele a odborníky, kteří nám pomohou Piktos vyladit k dokonalosti. Vaše zkušenosti jsou pro nás tím nejcennějším zdrojem informací.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <MessageCircle className="w-6 h-6 text-accent" />
              <span className="text-sm font-bold uppercase tracking-widest text-white/80">Přímá linka k vývojáři</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-piktos p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Jméno / Přezdívka</label>
              <input 
                type="text" 
                required
                placeholder="Jak vám máme říkat?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">E-mail pro zpětnou vazbu</label>
              <input 
                type="email" 
                required
                placeholder="vas@email.cz"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Vaše zkušenosti a nápady</label>
              <textarea 
                required
                rows={5}
                placeholder="Napište nám o svých zkušenostech, nápadech na piktogramy nebo o zájmu o testování..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-accent hover:bg-accent/80 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-3 group"
            >
              <span>Odeslat a zapojit se</span>
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>

        {/* How you can help section */}
        <div className="space-y-8 pt-12">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center">Jak můžete pomoci</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-piktos p-8 space-y-4 text-center group">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-black uppercase tracking-tight">Staňte se testerem</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Pomozte nám hledat chyby a navrhovat nová slova pro vaše děti.
              </p>
            </div>
            <div className="glass-piktos p-8 space-y-4 text-center group">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto group-hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="font-black uppercase tracking-tight">Sdílejte dál</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Řekněte o Piktos dalším rodičům, ve skupinách a speciálním pedagogům.
              </p>
            </div>
            <div className="glass-piktos p-8 space-y-4 text-center group">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-black uppercase tracking-tight">Podpora vývoje</h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Brzy: Možnost podpořit provoz serverů a další rozvoj projektu.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SupportView;
