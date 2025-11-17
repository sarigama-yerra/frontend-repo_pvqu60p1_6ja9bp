import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxShowcase from './components/ParallaxShowcase'
import ModelsGallery from './components/ModelsGallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-red-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <ParallaxShowcase />
      <ModelsGallery />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-10 text-white/50 text-sm flex items-center justify-between">
          <p>Apex Motors © {new Date().getFullYear()}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
