import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const items = [
  { title: 'UI Engineering', desc: 'Component-driven, typed, tested.' },
  { title: 'Design Systems', desc: 'Tokens, theming, and documentation.' },
  { title: 'Animations', desc: 'Micro-interactions, transitions, parallax.' },
  { title: 'Performance', desc: 'Lighthouse, Core Web Vitals, profiling.' },
]

export default function Services() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6, rotate: -0.5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 grid place-items-center mb-3">✨</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
