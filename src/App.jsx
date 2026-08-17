import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Authority from './components/Authority'
import EbookPreview from './components/EbookPreview'
import Narrative from './components/Narrative'
import Offer from './components/Offer'
import CustomCursor from './components/CustomCursor'
import AppleScroll from './components/AppleScroll'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="noise"></div>
      <CustomCursor />
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <main className="bg-[#080506] text-[#F5EDE0] font-sans antialiased selection:bg-[#9E5A65] selection:text-white">
        <Hero />
        <AppleScroll />
        <Authority />
        <EbookPreview />
        <Narrative />
        <Offer />
        
        <footer className="py-12 text-center border-t border-white/5 text-xs text-white/30 tracking-[0.2em] uppercase">
          &copy; 2026 Corpo Livre. Este site não tem vínculo institucional com plataformas de anúncios.<br/>
          <span className="font-hand text-[#C9A84C] text-lg mt-4 inline-block lowercase tracking-normal">feito com carinho</span>
        </footer>
      </main>
    </>
  )
}

export default App
