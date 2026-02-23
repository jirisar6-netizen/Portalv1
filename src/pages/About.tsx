import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link to="/" className="text-xs font-bold uppercase text-[#e95420] mb-8 inline-block hover:opacity-70 transition-opacity">
        ← Zpět na rozcestník
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* TENTO BLOK OBSAHUJE TVŮJ PŘÍBĚH */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Tvoříme to <span className="text-[#e95420]">společně.</span></h2>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-[32px] border border-white/10 relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#e95420]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <p className="opacity-90 leading-relaxed mb-6 text-lg relative z-10">
              Piktos nevyvíjí žádná velká korporace s obřím rozpočtem. Jsem 35letý táta samoživitel. 
              Mám ve své péči syna Jiříka a se svým druhým, tříměsíčním synem Štěpánkem, který žije s maminkou, se vídám dvakrát týdně. K tomu žiji se svým otcem, o kterého se musím starat.
            </p>
            
            <p className="opacity-80 leading-relaxed mb-6 relative z-10">
              Aplikaci Piktos tvořím v Synthesis studio po nocích, ve svém volném čase a s využitím bezplatných limitů ("free tierů") vývojářských nástrojů. 
              Mojí jedinou motivací je vytvořit nástroj, který nebude jen suchou tabulkou, ale živým systémem, který roste s dětmi a pomáhá jim komunikovat tam, kde slova nestačí.
            </p>
            
            <p className="opacity-100 leading-relaxed font-bold text-[#e95420] relative z-10">
              Každá vaše zpětná vazba, každé otestování s vašimi dětmi mi dává obrovskou sílu pokračovat a posouvat Piktos dál pro všechny, kteří to potřebují.
            </p>
            
            <div className="mt-8 flex gap-4 items-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#e95420] flex items-center justify-center font-black text-white">JŠ</div>
              <div>
                <p className="font-bold">Jiří Šár</p>
                <p className="text-[10px] opacity-50 uppercase tracking-widest font-bold">Zakladatel Synthesis studio</p>
              </div>
            </div>
          </div>
          
          {/* INFORMAČNÍ KARTY PRO PODPORU */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <h4 className="font-bold text-sm mb-2 text-[#e95420]">Sdílejte dál</h4>
              <p className="text-xs opacity-60">Řekněte o Piktos dalším rodičům a ve skupinách.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <h4 className="font-bold text-sm mb-2 text-[#e95420]">Podpora vývoje</h4>
              <p className="text-xs opacity-60">Již brzy: Možnost podpořit pokrytí nákladů na servery.</p>
            </div>
          </div>
        </div>

        {/* FORMULÁŘ PRO TESTERY */}
        <div>
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-white/10 sticky top-10">
            <h3 className="text-2xl font-bold mb-2">Zapojte se do testování</h3>
            <p className="text-sm opacity-60 mb-8">Napište mi vaše zkušenosti, nápady na nová slova pro piktogramy nebo jakoukoliv zprávu. Tvoříme to pro děti.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Děkuji za zprávu! Formulář brzy napojíme na databázi.'); }}>
              <div className="mb-5">
                <label className="block text-[10px] uppercase tracking-widest opacity-50 mb-2 font-bold ml-2">Vaše jméno / Přezdívka</label>
                <input type="text" placeholder="Jan Novák" className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 outline-none focus:border-[#e95420] focus:bg-[#e95420]/5 transition-all" required />
              </div>
              <div className="mb-5">
                <label className="block text-[10px] uppercase tracking-widest opacity-50 mb-2 font-bold ml-2">E-mail pro odpověď</label>
                <input type="email" placeholder="vas@email.cz" className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 outline-none focus:border-[#e95420] focus:bg-[#e95420]/5 transition-all" required />
              </div>
              <div className="mb-8">
                <label className="block text-[10px] uppercase tracking-widest opacity-50 mb-2 font-bold ml-2">Zpráva nebo nápady</label>
                <textarea rows={4} placeholder="Zkusil jsem to se synem a chtěli bychom přidat..." className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 outline-none focus:border-[#e95420] focus:bg-[#e95420]/5 transition-all" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#e95420] text-white font-black uppercase tracking-widest text-sm py-5 rounded-2xl hover:bg-[#ff6a3d] hover:shadow-[0_0_20px_rgba(233,84,32,0.4)] transition-all">
                Odeslat a zapojit se
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
