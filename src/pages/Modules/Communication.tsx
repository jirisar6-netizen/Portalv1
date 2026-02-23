import { Link } from 'react-router-dom';

export default function Communication() {
  const playSound = (word: string) => {
    alert(`Systém Piktos přehraje hlasovou odezvu: ${word}`);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link to="/" className="text-xs font-bold uppercase text-[#e95420] mb-8 inline-block hover:opacity-70 transition-opacity">
        ← Zpět na rozcestník
      </Link>
      
      <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[32px] border border-white/10">
        <h2 className="text-4xl font-extrabold mb-4">Srdce <span className="text-[#e95420]">Komunikace</span></h2>
        <p className="opacity-70 mb-12 max-w-3xl text-lg leading-relaxed">
          Piktos nepoužívá jen statické obrázky. Využíváme mezinárodně standardizovanou knihovnu piktogramů ARASAAC, 
          kterou pohání naše vlastní technologie vyvíjené v Synthesis studio. Cílem je nulová frustrace z prodlevy.
        </p>
        
        {/* FUNKCE SYSTÉMU */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#050505]/50 p-6 rounded-3xl border border-white/5">
            <div className="text-3xl mb-3 text-[#e95420]">🧠</div>
            <h3 className="font-bold text-lg mb-2">Smart Bar</h3>
            <p className="opacity-60 text-sm">Inteligentní predikce karet. Systém se učí zvyklosti dítěte a nabízí piktogramy podle aktuální denní doby.</p>
          </div>
          <div className="bg-[#050505]/50 p-6 rounded-3xl border border-white/5">
            <div className="text-3xl mb-3 text-[#e95420]">🔊</div>
            <h3 className="font-bold text-lg mb-2">Custom Voice</h3>
            <p className="opacity-60 text-sm">Hlasová odezva v reálném čase. Možnost nahrát vlastní hlas rodiče, aby dítě slyšelo někoho, koho zná a komu důvěřuje.</p>
          </div>
          <div className="bg-[#050505]/50 p-6 rounded-3xl border border-white/5 border-b-4 border-b-red-500/50">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-lg mb-2 text-red-400">Guardian SOS</h3>
            <p className="opacity-60 text-sm">Integrovaný bezpečnostní modul pro okamžitý přístup k nouzovým kontaktům v situacích plných stresu.</p>
          </div>
        </div>

        {/* ŽIVÁ UKÁZKA PIKTOGRAMŮ */}
        <h3 className="font-bold uppercase text-xs opacity-50 mb-6 tracking-widest">Interaktivní test odezvy (Klikněte na kartu)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#050505] p-8 rounded-3xl border border-white/5 text-center hover:border-[#e95420] hover:shadow-[0_0_30px_rgba(233,84,32,0.2)] transition-all cursor-pointer group" onClick={() => playSound('JÍDLO')}>
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍎</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-[#e95420] transition-colors">Jídlo</div>
          </div>
          <div className="bg-[#050505] p-8 rounded-3xl border border-white/5 text-center hover:border-[#e95420] hover:shadow-[0_0_30px_rgba(233,84,32,0.2)] transition-all cursor-pointer group" onClick={() => playSound('PITÍ')}>
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💧</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-[#e95420] transition-colors">Pití</div>
          </div>
          <div className="bg-[#050505] p-8 rounded-3xl border border-white/5 text-center hover:border-[#e95420] hover:shadow-[0_0_30px_rgba(233,84,32,0.2)] transition-all cursor-pointer group" onClick={() => playSound('POMOC')}>
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🆘</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-[#e95420] transition-colors">Pomoc</div>
          </div>
          <div className="bg-[#050505] p-8 rounded-3xl border border-white/5 text-center hover:border-[#e95420] hover:shadow-[0_0_30px_rgba(233,84,32,0.2)] transition-all cursor-pointer group" onClick={() => playSound('STOP')}>
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✋</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-[#e95420] transition-colors">Stop</div>
          </div>
        </div>

        {/* TECH STACK A ROADMAPA */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-2">Technologický Stack</h4>
            <div className="flex gap-3 text-sm font-bold opacity-80">
              <span className="bg-white/10 px-3 py-1 rounded-full">React 18</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Vite</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Vercel</span>
            </div>
          </div>
          <div className="text-left md:text-right">
            <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-2">Plánovaná aktualizace</h4>
            <div className="flex items-center gap-2 md:justify-end">
              <div className="w-2 h-2 rounded-full bg-[#e95420] animate-pulse"></div>
              <span className="text-sm font-bold">Zítra 09:00 - Integrace Google Sheets & Cloud Sync</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
