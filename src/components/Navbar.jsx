import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#experiences', label: 'Experiences' },
    { href: '#models', label: 'Models' },
    { href: '#craft', label: 'Craft' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-fuchsia-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity"
              layoutId="brand-glow"
            />
            <Sparkles className="relative text-white" />
          </div>
          <span className="font-semibold tracking-widest text-white/90 group-hover:text-white transition-colors uppercase text-sm">Apex Motors</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="#book" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm border border-white/10 transition-colors">
            Book a Drive
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-black/60"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a href="#book" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm border border-white/10 transition-colors">
                Book a Drive
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
