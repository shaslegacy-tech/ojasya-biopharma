import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold">About Us</motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-neutral-700 dark:text-neutral-300">
          We are a small team focused on performance, accessibility, and beautiful motion.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ['Performance-first', 'Vite + code-splitting for fast loads.'],
            ['Accessible', 'Keyboard-friendly and ARIA where it matters.'],
            ['Theming', 'Dark/light with graceful persistence.'],
            ['Typed', 'TypeScript for confidence and DX.'],
            ['Animated', 'Framer Motion everywhere it helps UX.'],
            ['Responsive', 'Looks great on any screen.'],
          ].map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
