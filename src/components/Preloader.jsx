import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  // Fases: 0-4 (palavras rápidas), 5 (silêncio), 6 (Impacto final)

  useEffect(() => {
    const sequence = async () => {
      // Rapid fire words
      await new Promise(r => setTimeout(r, 400));
      setPhase(1); // CULPA
      await new Promise(r => setTimeout(r, 300));
      setPhase(2); // FOME
      await new Promise(r => setTimeout(r, 300));
      setPhase(3); // FRUSTRAÇÃO
      await new Promise(r => setTimeout(r, 300));
      setPhase(4); // EFEITO SANFONA
      
      // Silence / Hold
      await new Promise(r => setTimeout(r, 600));
      setPhase(5); // Blackout
      
      // The Reveal
      await new Promise(r => setTimeout(r, 400));
      setPhase(6); // CHEGA.
      
      // End Preloader
      await new Promise(r => setTimeout(r, 1500));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  const rapidFireVariants = {
    initial: { opacity: 0, scale: 2, filter: 'blur(20px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.1, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.1 } }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080506] overflow-hidden"
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <AnimatePresence mode="wait">
        {phase === 1 && (
          <motion.h1 key="1" variants={rapidFireVariants} initial="initial" animate="animate" exit="exit" className="font-sans font-black text-6xl md:text-9xl tracking-tighter text-white uppercase">
            Culpa.
          </motion.h1>
        )}
        {phase === 2 && (
          <motion.h1 key="2" variants={rapidFireVariants} initial="initial" animate="animate" exit="exit" className="font-sans font-black text-6xl md:text-9xl tracking-tighter text-white uppercase">
            Fome.
          </motion.h1>
        )}
        {phase === 3 && (
          <motion.h1 key="3" variants={rapidFireVariants} initial="initial" animate="animate" exit="exit" className="font-sans font-black text-6xl md:text-9xl tracking-tighter text-white uppercase">
            Frustração.
          </motion.h1>
        )}
        {phase === 4 && (
          <motion.h1 key="4" variants={rapidFireVariants} initial="initial" animate="animate" exit="exit" className="font-sans font-black text-6xl md:text-9xl tracking-tighter text-[#9E5A65] uppercase">
            Efeito Sanfona.
          </motion.h1>
        )}
        
        {phase === 6 && (
          <motion.div key="6" className="relative flex items-center justify-center w-full h-full">
            {/* Flashbang background effect */}
            <motion.div 
              className="absolute inset-0 bg-[#C9A84C]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* The final powerful word */}
            <motion.h1 
              className="font-serif text-[15vw] leading-none text-[#F5EDE0] relative z-10"
              initial={{ scale: 0.2, opacity: 0, letterSpacing: "-0.1em" }}
              animate={{ scale: 1, opacity: 1, letterSpacing: "0em" }}
              transition={{ 
                type: "spring", 
                damping: 12, 
                stiffness: 100, 
                mass: 0.5 
              }}
            >
              CHEGA.
            </motion.h1>
            
            {/* Distortion Rings */}
            <motion.div 
              className="absolute w-[100vw] h-[100vw] rounded-full border-[10px] border-[#C9A84C]/30"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
