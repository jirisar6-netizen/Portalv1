import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Communication from './pages/Modules/Communication';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#e95420] selection:text-white">
      {/* Animované pozadí */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(233,84,32,0.05)_0%,transparent_60%)] pointer-events-none z-0"></div>

      {/* Globální Navigace */}
      <nav className="relative z-10 max-w-7xl mx-auto p-6 flex justify-between items-center border-b border-white/5">
        <Link to="/" className="group">
          <h1 className="text-2xl font-extrabold tracking-tighter uppercase">
            Piktos <span className="text-[#e95420] group-hover:text-white transition-colors">Portal</span>
          </h1>
          <p className="text-[9px] opacity-40 font-bold uppercase tracking-[0.3em]">Synthesis studio</p>
        </Link>
        <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest opacity-70">
          <Link to="/" className="hover:text-[#e95420] transition-colors">Dashboard</Link>
          <Link to="/about" className="hover:text-[#e95420] transition-colors">Příběh & Podpora</Link>
          <Link to="/modules/communication" className="hover:text-[#e95420] transition-colors">Tech Modul</Link>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
          B0.1.20
        </div>
      </nav>

      {/* Zde se mění podstránky */}
      <main className="relative z-10 max-w-7xl mx-auto p-6 md:p-10">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/modules/communication" element={<Communication />} />
          {/* Fallback */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>

      {/* Globální Patička */}
      <footer className="relative z-10 max-w-7xl mx-auto p-6 text-center opacity-20 text-[10px] font-bold uppercase tracking-[0.4em] border-t border-white/5 mt-20">
        Vyrobeno pro Daniela a Štěpánka | Synthesis studio © 2026
      </footer>
    </div>
  );
}

export default App;
