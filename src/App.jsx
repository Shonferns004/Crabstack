import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import AdminRoutes from './admin/AdminRoutes'
import SEO from './components/SEO'
import Analytics from './components/Analytics'

const pageVariants = {
  out: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
}

export default function App() {
  const location = useLocation()
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [100, 500], [0, 1])
  const isHome = location.pathname === '/'
  const isAdmin = location.pathname.startsWith('/admin')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  if (isAdmin) {
    return (
      <>
        <SEO title="Admin" description="Crabstack admin portal." path={location.pathname} noIndex />
        <AdminRoutes />
      </>
    )
  }

  return (
    <div className="bg-black min-h-screen">
      <Analytics />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[120] focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <motion.div style={{ opacity: isHome ? navOpacity : 1 }}>
        <Navbar />
      </motion.div>
      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="out"
            animate="in"
            exit="out"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
