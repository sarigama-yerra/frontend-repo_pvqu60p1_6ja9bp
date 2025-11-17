import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <section id="experiences" ref={ref} className="relative bg-black py-24 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-red-500/20 to-fuchsia-600/0 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Motion. Sculpted.</h2>
            <p className="mt-4 text-white/70">Physics-tuned transitions bring automotive forms to life. Every curve, every glow reacts to your movement.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-white/80">
              {['0-100 km/h: 2.5s','Downforce AI','Neon Flux'].map((t) => (
                <div key={t} className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm">{t}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div style={{ y: y2 }} className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,64,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(108,0,255,0.25),transparent_60%)]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                <source src="https://cdn.coverr.co/videos/coverr-lights-of-the-night-4977/1080p.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
