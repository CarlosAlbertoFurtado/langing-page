import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contentPages = [
  {
    chapter: "Capítulo 01",
    title: "A Mentira de 250 Bilhões",
    text: "Existe uma razão pela qual você sempre volta a engordar, e ela não tem nada a ver com a sua força de vontade. A indústria das dietas movimenta bilhões de dólares anualmente. Se o método deles funcionasse definitivamente, eles perderiam você como cliente no mês seguinte."
  },
  {
    chapter: "Capítulo 03",
    title: "O Sequestro Metabólico",
    text: "Quando você restringe calorias de forma drástica, seu corpo não sabe que você quer entrar num vestido. Ele acha que você está passando por um período de fome severa. A resposta biológica? Diminuir o gasto energético e multiplicar os sinais neurais de compulsão por doces."
  },
  {
    chapter: "Capítulo 05",
    title: "Comida Intuitiva na Prática",
    text: "Aprenda a regra dos 15 minutos. Quando a vontade incontrolável por chocolate bater, não diga 'não'. Diga 'daqui a pouco'. Você aprenderá a comer o que ama sem acionar o mecanismo de culpa que destrói todo o seu progresso."
  }
];

export default function EbookPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#080506] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left: Interactive Content Display */}
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="text-[#C9A84C] tracking-[0.3em] text-[10px] uppercase mb-6">Degustação</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDE0] mb-8">
            Abra o livro <span className="italic text-[#9E5A65]">antes de comprar.</span>
          </h2>
          
          <div className="flex gap-4 mb-8">
            {contentPages.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-xs tracking-widest uppercase transition-colors ${activeTab === i ? 'text-[#C9A84C] border-b border-[#C9A84C]' : 'text-[#6B5F62] hover:text-[#F5EDE0]'}`}
              >
                Pág {i+1}
              </button>
            ))}
          </div>

          <div className="bg-[#1A0B10] p-8 md:p-12 border border-white/5 relative h-[380px] overflow-hidden">
            {/* Ambient light inside the "book" */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#9E5A65]/10 blur-[80px]" />
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="text-[10px] text-[#9E5A65] tracking-[0.2em] uppercase mb-4">
                {contentPages[activeTab].chapter}
              </div>
              <h3 className="font-serif text-2xl text-[#F5EDE0] mb-6">
                {contentPages[activeTab].title}
              </h3>
              <p className="font-sans font-light text-[#F5EDE0]/70 leading-relaxed text-lg text-justify">
                {contentPages[activeTab].text}
              </p>
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[#6B5F62] text-[9px] uppercase tracking-widest">
                <span>Corpo Livre</span>
                <span>{activeTab + 12}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Mockup/Visuals */}
        <motion.div 
          className="flex-1 w-full relative h-[600px] hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Cover floating */}
          <motion.img 
            src="/01_capa_mulher_premium.jpg" 
            className="absolute top-10 left-10 w-[280px] h-auto shadow-2xl shadow-black/80 z-20 border border-white/10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Inner page floating behind */}
          <motion.img 
            src="/03_mulher_escrevendo_diario.jpg" 
            className="absolute top-32 right-0 w-[250px] h-auto shadow-2xl z-10 opacity-60 grayscale filter contrast-125"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
