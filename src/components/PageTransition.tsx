import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 },
}

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="px-4 sm:px-6 lg:px-8 py-14"
    >
      {children}
    </motion.section>
  )
}
