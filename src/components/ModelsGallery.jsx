import { motion } from 'framer-motion'

const cars = [
  { name: 'Apex X1', img: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Apex RS', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Apex GT', img: 'https://images.unsplash.com/photo-1511396275270-f8b52e2660a5?q=80&w=1600&auto=format&fit=crop' },
]

export default function ModelsGallery() {
  return (
    <section id="models" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Signature Models</h2>
          <p className="text-white/60 max-w-md">A curated selection designed around aerodynamic purity, with reflective skins and carbon fiber hearts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={c.img} alt={c.name} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4 w-full flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{c.name}</h3>
                  <p className="text-white/60 text-xs">Carbon + Neon Edition</p>
                </div>
                <a href="#book" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm border border-white/10">Configure</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
