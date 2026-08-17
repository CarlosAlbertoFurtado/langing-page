import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const books = [
  { 
    title: "O Peso das Dietas", 
    author: "Sophie Deram, PhD", 
    area: "Neurociência da Fome",
    quote: "Dietas restritivas provocam alterações metabólicas que predispõem ao ganho de peso."
  },
  { 
    title: "Pense Magro por Toda a Vida", 
    author: "Judith S. Beck, PhD", 
    area: "Terapia Cognitiva",
    quote: "Para emagrecer definitivamente, é preciso mudar a forma como você pensa sobre comida."
  },
  { 
    title: "Fazendo as Pazes com o Corpo", 
    author: "Daiana Garbin", 
    area: "Autoimagem & Liberdade",
    quote: "A relação com o espelho define a relação com a vida."
  }
];

function AnimatedCounter({ target, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      className="font-serif text-5xl md:text-7xl text-[#C9A84C] text-glow-gold"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {isInView ? target : 0}{suffix}
    </motion.span>
  );
}

export default function Authority() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#080506] via-[#1A0B10] to-[#080506]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#9E5A65]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Stats row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div>
            <AnimatedCounter target="1.247" />
            <p className="text-[#6B5F62] text-sm mt-3 tracking-wider uppercase">Páginas pesquisadas</p>
          </div>
          <div>
            <AnimatedCounter target="3" />
            <p className="text-[#6B5F62] text-sm mt-3 tracking-wider uppercase">Best-sellers combinados</p>
          </div>
          <div>
            <AnimatedCounter target="1" />
            <p className="text-[#6B5F62] text-sm mt-3 tracking-wider uppercase">Guia direto ao ponto</p>
          </div>
        </motion.div>

        {/* Section intro */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Você não precisa ler <span className="italic text-[#9E5A65]">mil páginas.</span>
          </h2>
          <p className="text-[#6B5F62] text-lg max-w-2xl mx-auto leading-relaxed">
            Eu fiz isso por você. Mergulhei nos 3 maiores best-sellers sobre comportamento alimentar e extraí o que realmente funciona. O resultado está em um único guia prático.
          </p>
        </motion.div>
        
        {/* Book cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              className="group relative interactive"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + idx * 0.2 }}
            >
              <div className="glass p-8 h-full rounded-none border-t border-t-[#C9A84C]/30 hover:bg-white/[0.06] transition-all duration-500">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-6">{book.area}</div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">{book.title}</h3>
                <p className="text-xs text-[#6B5F62] mb-6">{book.author}</p>
                <hr className="hr-animated opacity-20 mb-6" />
                <p className="text-sm text-[#F5EDE0]/40 italic leading-relaxed">"{book.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow pointing down */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="text-xl text-[#C9A84C]/40" style={{ fontFamily: "'Caveat', cursive" }}>
            ↓ esses três livros, destilados em um só ↓
          </span>
        </motion.div>
      </div>
    </section>
  );
}
