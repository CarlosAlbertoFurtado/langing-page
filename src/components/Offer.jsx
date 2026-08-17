import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Offer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#1A0B10] flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-[#C9A84C]/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-3xl w-full relative z-10"
      >
        <div className="text-[#C9A84C] tracking-[0.3em] text-[10px] uppercase mb-8">O Convite</div>
        <h2 className="font-serif text-4xl md:text-6xl mb-16 text-[#F5EDE0] leading-tight">
          Decidi documentar o <span className="italic text-[#9E5A65]">mapa da fuga.</span>
        </h2>
        
        <div className="bg-[#080506] p-8 md:p-16 relative overflow-hidden group border border-white/5">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-[#C9A84C]/10" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-[#6B5F62] line-through text-lg">R$ 97,00</span>
              <span className="text-[10px] uppercase tracking-widest text-[#9E5A65] border border-[#9E5A65]/30 px-2 py-1 rounded-sm">Valor de Prateleira</span>
            </div>
            
            <div className="font-serif text-7xl md:text-9xl text-[#C9A84C] mb-12 text-glow-gold tracking-tighter">
              <span className="text-3xl md:text-5xl align-top block -mb-4 mt-2 tracking-normal opacity-70">R$</span>20
            </div>
            
            {/* Rationale / Social Engineering */}
            <div className="text-left bg-[#1A0B10] p-8 border-l-2 border-[#C9A84C] mb-12 max-w-xl mx-auto">
              <p className="text-sm text-[#F5EDE0]/80 leading-relaxed font-light">
                <strong className="text-[#C9A84C] block font-serif text-xl mb-3">Por que um valor tão simbólico?</strong>
                Eu não quero que o preço seja a sua desculpa. Vinte reais é menos que um café com bolo. Mas é o gatilho psicológico mínimo necessário para garantir que quem fizer o download, está realmente comprometida a ler e agir, e não apenas acumular mais um arquivo no celular.
              </p>
            </div>
            
            {/* Magnetic Button */}
            <a href="#" className="magnetic-btn w-full md:w-auto px-16 py-6 border border-[#C9A84C]/50 text-[#C9A84C] tracking-[0.3em] uppercase text-xs hover:border-transparent transition-colors duration-500">
              <span>Ler o livro digital agora</span>
            </a>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 text-xs text-[#6B5F62] tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Garantia Incondicional 7 Dias
              </span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Acesso Imediato no E-mail
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
