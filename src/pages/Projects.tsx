import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const projects = [
  { title: 'Landing Page', tag: 'Marketing', desc: 'High-converting responsive site.' },
  { title: 'Dashboard', tag: 'SaaS', desc: 'Data visualizations with smooth transitions.' },
  { title: 'Mobile Web App', tag: 'PWA', desc: 'Offline-ready with sleek motion.' },
  { title: 'Docs Site', tag: 'Docs', desc: 'Fast search, beautiful code blocks.' },
]

export default function Projects() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Products and Brands</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07 }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <div className="text-xs text-brand font-semibold mb-1">{p.tag}</div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              <motion.div
                className="mt-3 h-32 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{ backgroundImage: 'linear-gradient(120deg, #111827, #6d5dfc, #22d3ee, #111827)', backgroundSize: '200% 200%' }}
                />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
