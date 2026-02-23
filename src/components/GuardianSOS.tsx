import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Phone, X, User, Heart } from 'lucide-react';

export const GuardianSOS: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-red-500 text-white rounded-full shadow-2xl shadow-red-200 flex items-center justify-center z-50 border-4 border-white"
      >
        <AlertCircle className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative glass-dark w-full max-w-md rounded-[40px] p-8 text-white overflow-hidden"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 animate-pulse">
                  <AlertCircle className="w-12 h-12" />
                </div>

                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Guardian SOS</h2>
                  <p className="text-white/60 text-sm">Potřebuji okamžitou pomoc nebo jsem se ztratil.</p>
                </div>

                <div className="w-full space-y-4 mt-4">
                  <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4 border border-white/10">
                    <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-indigo-300 tracking-widest">Kontakt</p>
                      <p className="text-xl font-bold">Jiří Šára</p>
                    </div>
                  </div>

                  <a 
                    href="tel:+420123456789"
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-3xl p-6 flex items-center justify-center gap-4 transition-all shadow-xl shadow-green-500/20 group"
                  >
                    <Phone className="w-6 h-6 group-hover:animate-bounce" />
                    <span className="text-2xl font-black uppercase">Zavolat</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-4">
                  <Heart className="w-3 h-3 fill-current" />
                  <span>Synthesis Studio Safety</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
