import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        path="/404"
        noIndex
      />
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4">Error 404</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-5">Page Not Found</h1>
          <p className="text-white/60 text-sm md:text-base mb-10">
            The URL may be outdated or typed incorrectly. Use one of the links below to continue browsing.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="px-5 py-3 border border-primary text-primary uppercase text-xs tracking-[0.2em] hover:bg-primary hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/services" className="px-5 py-3 border border-white/20 text-white/80 uppercase text-xs tracking-[0.2em] hover:border-primary hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/work" className="px-5 py-3 border border-white/20 text-white/80 uppercase text-xs tracking-[0.2em] hover:border-primary hover:text-primary transition-colors">
              Work
            </Link>
            <Link to="/contact" className="px-5 py-3 border border-white/20 text-white/80 uppercase text-xs tracking-[0.2em] hover:border-primary hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

