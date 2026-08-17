import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <header ref={ref} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image - Aggressive Scale down on load */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: yBg, scale }}
      >
        <motion.img
          src="/mulher_espelho_paz.jpg"
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 2, filter: "blur(30px) brightness(200%)" }}
          animate={{ scale: 1, filter: "blur(0px) brightness(40%)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 3.5 }} 
        />
      </motion.div>
      
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#080506] via-transparent to-[#080506]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080506]/90 via-transparent to-[#080506]/90" />

      {/* Content */}
      <motion.div 
        className="relative z-10 px-6 max-w-7xl w-full flex flex-col items-center text-center pt-12 md:pt-24"
        style={{ opacity: opacityContent }}
      >
        {/* Main headline - Massive Impact */}
        <div className="overflow-hidden mb-2">
          <motion.h1 
            className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase text-[#F5EDE0]"
            initial={{ y: "100%", opacity: 0, rotate: 5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 3.8, type: "spring", damping: 15, stiffness: 100 }}
          >
            10 Anos em
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1 
            className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase text-[#F5EDE0]"
            initial={{ y: "100%", opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 4.0, type: "spring", damping: 15, stiffness: 100 }}
          >
            Guerra com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#9E5A65]">Espelho.</span>
          </motion.h1>
        </div>

        {/* Sub text - Fades in sharply */}
        <motion.div
          className="max-w-2xl bg-[#080506]/50 backdrop-blur-md p-6 border-l-4 border-[#9E5A65]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 4.6, ease: "backOut" }}
        >
          <p className="text-lg md:text-2xl text-[#F5EDE0] leading-relaxed font-serif italic">
            Até o dia em que descobri que a culpa <strong className="text-[#C9A84C]">nunca</strong> foi minha. 
            A indústria de dietas não quer que você emagreça. Ela quer que você continue tentando.
          </p>
        </motion.div>
      </motion.div>

      {/* Action / Down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 5.2 }}
      >
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 mb-4 block">
          Aperte os cintos
        </span>
        <motion.div 
          className="w-[2px] h-16 bg-white/10 mx-auto relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-[#C9A84C]"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
}
