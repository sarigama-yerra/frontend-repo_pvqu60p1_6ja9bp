import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[radial-gradient(closest-side,rgba(255,0,64,0.1),transparent_60%),linear-gradient(to_bottom,#000,#03010a)] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Book a Private Drive Experience
        </motion.h3>
        <p className="mt-4 text-white/70">Enter a world of bespoke engineering. Availability is limited.</p>
        <form onSubmit={(e)=> e.preventDefault()} className="mt-10 grid sm:grid-cols-3 gap-3">
          <input required placeholder="Your name" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40" />
          <input required type="email" placeholder="Email" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40" />
          <button className="col-span-1 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-fuchsia-600 text-white font-semibold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-shadow">Request Invite</button>
        </form>
        <p className="mt-4 text-white/40 text-xs">We respect your time. No spam. Ever.</p>
      </div>
    </section>
  )
}
