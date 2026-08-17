import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Narrative() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 md:px-12 bg-[#080506] relative">
      <div className="max-w-5xl mx-auto space-y-40">
        
        {/* Story Part 1 */}
        <div ref={ref1} className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-[#C9A84C] tracking-[0.3em] text-[10px] uppercase">O Ciclo da Dor</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDE0] leading-tight">Por que toda segunda-feira é <span className="italic text-[#9E5A65]">exatamente igual?</span></h2>
            
            <div className="space-y-4 text-[#6B5F62] text-lg leading-relaxed font-light">
              <p>Você acorda motivada. Corta o pão, ignora a fome, diz não para um convite incrível. Você sente que, se sofrer o suficiente, a recompensa virá.</p>
              <p>Mas a restrição extrema não te faz mais forte. Ela aterroriza o seu organismo.</p>
              <p>Seu metabolismo despenca para poupar energia, e seu cérebro grita por calorias para te manter viva. O corpo vence a mente, você "fura" a dieta e se pune moralmente.</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="font-hand text-2xl text-[#C9A84C]/80 rotate-[-2deg] inline-block">É o design perfeito para você falhar.</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView1 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-[#C9A84C]/10 -rotate-3 rounded-none transform origin-bottom-left blur-sm" />
            <div className="relative z-10 overflow-hidden">
              <motion.img 
                src="/mulher_espelho_paz.jpg" 
                alt="Reflexão" 
                className="w-full h-[500px] object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" 
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Story Part 2 */}
        <div ref={ref2} className="flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-[#C9A84C] tracking-[0.3em] text-[10px] uppercase">O Caminho da Paz</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDE0] leading-tight">A saída não é o sacrifício.<br/><span className="italic text-[#C9A84C]">É a reconexão.</span></h2>
            
            <div className="space-y-6 text-[#6B5F62] text-lg leading-relaxed font-light mt-8">
              <div className="flex gap-4 items-start">
                <span className="font-serif text-2xl text-[#9E5A65] pt-1">01.</span>
                <div>
                  <strong className="text-[#F5EDE0] block font-normal text-xl mb-1">Resgate Hormonal</strong>
                  Domar a Leptina e Grelina. Seu corpo volta a avisar quando está satisfeito, naturalmente.
                </div>
              </div>
              <hr className="border-white/5" />
              <div className="flex gap-4 items-start">
                <span className="font-serif text-2xl text-[#9E5A65] pt-1">02.</span>
                <div>
                  <strong className="text-[#F5EDE0] block font-normal text-xl mb-1">Silenciar a Sabotagem</strong>
                  Aprender a distinguir a fome fisiológica da fome emocional (aquela que surge quando você está apenas exausta ou triste).
                </div>
              </div>
              <hr className="border-white/5" />
              <div className="flex gap-4 items-start">
                <span className="font-serif text-2xl text-[#9E5A65] pt-1">03.</span>
                <div>
                  <strong className="text-[#F5EDE0] block font-normal text-xl mb-1">Intuição Alimentar</strong>
                  Comer o seu doce favorito sem que isso se transforme em um gatilho de compulsão. O fim do "já que estraguei tudo...".
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-[#9E5A65]/10 rotate-3 rounded-none transform origin-bottom-right blur-sm" />
            <div className="relative z-10 overflow-hidden">
              <motion.img 
                src="/comida_intuitiva.jpg" 
                alt="Comida Intuitiva" 
                className="w-full h-[600px] object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                whileHover={{ scale: 1.05 }} 
              />
            </div>
            <motion.div 
              className="absolute -bottom-10 -right-10 bg-[#1A0B10] p-6 glass border border-[#C9A84C]/20 z-20 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="font-hand text-2xl text-[#F5EDE0] mb-2">Sem culpa.</p>
              <p className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase">Pela primeira vez.</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
