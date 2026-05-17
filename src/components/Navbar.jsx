import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { path: '/', label: 'HOME' },
  { path: '/services', label: 'SERVICES' },
  { path: '/about', label: 'ABOUT-US' },
  { path: '/work', label: 'WORK' },
  { path: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-auto"
        aria-label="Primary"
      >
        {/* Desktop pill nav */}
        <div className="hidden md:flex pill-nav rounded-full px-8 py-3 items-center gap-10 backdrop-blur-md bg-black/40 border border-white/10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] tracking-[0.2em] font-bold transition-colors duration-300 ${
                pathname === link.path
                  ? 'text-primary'
                  : 'text-white/60 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="pill-nav rounded-full px-4 py-2.5 backdrop-blur-md bg-black/40 border border-white/10 text-white/80 hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-xl">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[99] w-[90%] max-w-xs md:hidden"
          >
            <div className="pill-nav rounded-2xl px-6 py-4 flex flex-col gap-3 backdrop-blur-xl bg-black/80 border border-white/10">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-[12px] tracking-[0.2em] font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${
                    pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-white/60 hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
