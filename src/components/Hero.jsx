import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,0,64,0.25)]"
        >
          Apex Hyper Series
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 text-white/80 max-w-2xl"
        >
          A handcrafted celebration of speed, design, and emotion. Glide through an immersive 3D journey — feel the glow, the motion, the silence before the roar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#experiences" className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-fuchsia-600 text-white font-semibold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-shadow">Explore Motion</a>
          <a href="#models" className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors">View Models</a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase">Scroll</div>
    </section>
  )
}
