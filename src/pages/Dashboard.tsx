import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Karta: Osobní příběh (Odkaz na /about) */}
        <Link to="/about" className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-10 hover:border-[#e95420] hover:bg-[#e95420]/5 transition-all duration-300 group cursor-pointer flex flex-col justify-center">
          <h3 className="text-[#e95420] font-bold uppercase text-xs mb-4 tracking-widest">Mise studia</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Dáváme hlas těm,<br/>kteří ho hledají.</h2>
          <p className="opacity-60 max-w-lg mb-8">Přečtěte si příběh o vývoji Piktos, podpořte mě jako sólo vývojáře a zapojte se do testování s vašimi dětmi.</p>
          <span className="text-xs font-bold uppercase text-[#e95420] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
            Přečíst osobní příběh a zapojit se <span className="text-lg">→</span>
          </span>
        </Link>

        {/* Karta: CTA Spustit App */}
        <a href="https://synthesis-os.vercel.app/" target="_blank" rel="noreferrer" className="bg-[#e95420] rounded-[32px] p-10 hover:bg-[#ff6a3d] transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-2xl shadow-[#e95420]/20 cursor-pointer border-none">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
          <h2 className="text-2xl font-black uppercase mb-1">Spustit App</h2>
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 group-hover:tracking-[0.3em] transition-all">Vstoupit do Piktos</p>
        </a>

        {/* Karta: Modul Komunikace (Odkaz na /modules/communication) */}
        <Link to="/modules/communication" className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:border-[#e95420] transition-all duration-300 cursor-pointer">
          <h3 className="opacity-40 font-bold uppercase text-[10px] mb-4 tracking-widest">Technologie</h3>
          <div className="text-4xl mb-4">🧠</div>
          <h2 className="text-xl font-bold mb-2">Chytré Piktogramy</h2>
          <p className="opacity-60 text-sm mb-4">Smart Bar a napojení na mezinárodní databázi ARASAAC.</p>
          <span className="text-[10px] text-[#e95420] font-bold uppercase">Jak to funguje →</span>
        </Link>

        {/* Karta: Hardware */}
        <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
          <h3 className="opacity-40 font-bold uppercase text-[10px] mb-4 tracking-widest">Hardware & Engine</h3>
          <div className="flex justify-between items-end">
              <div>
                  <p className="text-sm opacity-80 mb-1">Optimalizováno pro plynulý běh <strong className="text-[#e95420]">144Hz</strong> (Xiaomi 13T Pro).</p>
                  <p className="text-sm opacity-80">Rychlá odezva i na starších zařízeních díky React & Vite.</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}
