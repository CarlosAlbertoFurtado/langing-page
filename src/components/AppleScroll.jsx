import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AppleScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animations tied to scroll progress
  const scaleText = useTransform(scrollYProgress, [0, 0.4], [10, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.1, 0.4], [0, 1, 1]);
  const yText = useTransform(scrollYProgress, [0, 0.4], ["100vh", "0vh"]);
  
  const bgImageOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 0.6]);
  const bgImageScale = useTransform(scrollYProgress, [0.4, 1], [1.5, 1]);
  
  const contentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#080506]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Cinematic Background Image that appears mid-scroll */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: bgImageOpacity, scale: bgImageScale }}
        >
          <img src="/mulher_espelho_paz.jpg" className="w-full h-full object-cover filter grayscale contrast-125 brightness-50" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080506] via-transparent to-transparent" />
        </motion.div>

        {/* Massive Zoom-in Text (Apple Style) */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
          style={{ scale: scaleText, opacity: opacityText, y: yText }}
        >
          <h1 className="font-serif text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#F5EDE0] to-[#C9A84C] tracking-tighter">
            LIBERDADE
          </h1>
        </motion.div>

        {/* Content that fades in after text shrinks */}
        <motion.div 
          className="absolute z-20 top-[60%] left-0 w-full px-6 md:px-12 text-center"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <p className="font-sans text-xl md:text-3xl text-[#F5EDE0] font-light max-w-3xl mx-auto mb-6">
            O fim definitivo do ciclo de dietas.<br/>
            <span className="italic text-[#C9A84C]">Apoiado pela biologia. Ignorado pela indústria.</span>
          </p>
          <p className="font-hand text-[#9E5A65] text-3xl rotate-[-2deg]">
            Você não é fraca. Você foi sabotada.
          </p>
        </motion.div>
        
        {/* Scroll down hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="text-[9px] tracking-[0.4em] uppercase text-white mb-2">Continue</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              className="w-full h-full bg-[#C9A84C]"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
