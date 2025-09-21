import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <PageTransition>
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="space-y-4"
          aria-describedby="contact-help"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input id="name" name="name" required className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
          </div>
          <div>
            <label htmlFor="msg" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="msg" name="msg" rows={4} required className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 rounded-xl bg-brand text-white hover:bg-brand-dark transition"
          >
            Send
          </motion.button>
          <p id="contact-help" className="text-xs text-neutral-500">We typically reply within 1–2 business days.</p>
        </form>

        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-xl border border-green-300/60 bg-green-50/50 dark:border-green-700/60 dark:bg-green-900/20"
            role="status"
            aria-live="polite"
          >
            Thanks! Your message has been sent (demo).
          </motion.div>
        )}
      </div>
    </PageTransition>
  )
}
