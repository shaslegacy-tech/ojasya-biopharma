import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import HeroImage from '../components/HeroImage'
import { AboutStats } from '../components/pageComponent/AboutStats'
import Products from '../components/pageComponent/Products'
import Research from '../components/pageComponent/Research'
import Testimonials from '../components/pageComponent/Testimonials'
import Partners from '../components/pageComponent/Partner'
import CTA from '../components/pageComponent/CTA'
import Contact from '../components/pageComponent/Contact'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const stored = localStorage.getItem('theme') === 'dark'
    setIsDark(stored)

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Sync gradient + parallax loop
    controls.start({
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: { duration: 12, ease: 'easeInOut', repeat: Infinity }
    })
  }, [controls])

  return (
      <main className="bg-gradient-to-b from-cyan-50 via-emerald-50 to-white dark:from-gray-900 dark:via-teal-900 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
          <HeroImage />
          <AboutStats />
          <Products />
          {/* <Research /> */}
          <Testimonials />
          <Partners />
          <CTA />
          <Contact />
      </main>
  )
}