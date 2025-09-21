import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useAnimationSync } from '../hooks/useAnimationSync'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/our-services', label: 'Services' },
  {
    label: 'Other Services',
    dropdown: [
      { label: 'Pharmaceutical Supplies', to: '/services/pharma-supplies' },
      { label: 'Injections & Devices', to: '/services/injections' },
      { label: 'Hospital Delivery', to: '/services/delivery' },
    ],
  },
  { to: '/our-partners', label: 'Partners' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  useAnimationSync(12000)
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme') === 'dark'
    setDark(stored)
    document.documentElement.classList.toggle('dark', stored)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-sm transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img
            src={dark ? '/ojasya-biopharma-light-logo.png' : '/ojasya-biopharma-dark-logo.png'}
            alt="Ojasya Biopharma"
            width="150"
            height="32"
            className="transition-transform duration-500 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 relative">
          {links.map((l) =>
            l.dropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(l.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <span className="hover:text-brand cursor-pointer transition-colors font-medium">
                  {l.label}
                </span>
                <AnimatePresence>
                  {dropdownOpen === l.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl overflow-hidden border border-white/20 dark:border-white/10 z-50"
                      style={{
                        background: dark
                          ? 'linear-gradient(145deg, #065f46, #047857)'
                          : 'linear-gradient(145deg, #34d399, #10b981)',
                      }}
                    >
                      {l.dropdown.map((d) => (
                        <motion.li
                          key={d.to}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <NavLink
                            to={d.to}
                            className={({ isActive }) =>
                              clsx(
                                'block px-4 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-white',
                                isActive && 'font-bold underline decoration-white/50'
                              )
                            }
                          >
                            {d.label}
                          </NavLink>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} className="relative group">
                {({ isActive }) => (
                  <>
                    <span
                      className={clsx(
                        'hover:text-brand transition-colors font-medium',
                        isActive && 'text-brand font-semibold'
                      )}
                    >
                      {l.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition transform hover:rotate-6"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition transform hover:rotate-6"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700"
          >
            <span className="sr-only">Open Menu</span>
            <div className="w-5 space-y-1.5">
              <div className="h-0.5 bg-current"></div>
              <div className="h-0.5 bg-current"></div>
              <div className="h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-white/20 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl"
          >
            <ul className="px-4 py-3 flex flex-col gap-2">
              {links.map((l) =>
                l.dropdown ? (
                  <li key={l.label}>
                    <span className="block px-3 py-2 font-medium">{l.label}</span>
                    <ul className="pl-4">
                      {l.dropdown.map((d) => (
                        <li key={d.to}>
                          <NavLink
                            to={d.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              clsx(
                                'block px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition',
                                isActive && 'text-brand font-semibold'
                              )
                            }
                          >
                            {d.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        clsx(
                          'block rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition',
                          isActive && 'text-brand font-semibold'
                        )
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
