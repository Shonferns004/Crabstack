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
import AdminRoutes from './admin/AdminRoutes'

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

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data?.site_title) document.title = data.site_title
      })
      .catch(() => {})
  }, [])

  if (isAdmin) {
    return <AdminRoutes />
  }

  return (
    <div className="bg-black min-h-screen">
      <motion.div style={{ opacity: isHome ? navOpacity : 1 }}>
        <Navbar />
      </motion.div>
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
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
