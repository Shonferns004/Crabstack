import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { API_URL, slugify } from '../apiUrl'

function MobileFrame({ src, alt }) {
  return (
    <div className="mx-auto w-[280px] md:w-[320px]">
      <div className="relative bg-zinc-900 rounded-[3rem] border-4 border-zinc-800 shadow-2xl shadow-primary/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-b-xl z-10"></div>
        <div className="p-3 pt-8">
          <div className="bg-black rounded-[2rem] overflow-hidden">
            <img src={src} alt={alt} className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-800 rounded-full"></div>
      </div>
    </div>
  )
}

function BrowserFrame({ src, alt }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-zinc-900 rounded-t-lg border border-zinc-800 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 flex-1 bg-zinc-800 rounded px-3 py-1 text-[10px] text-zinc-400 font-mono truncate">
          {alt || 'crabstack.io'}
        </div>
      </div>
      <div className="bg-white rounded-b-lg overflow-hidden border-x border-b border-zinc-800">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
    </div>
  )
}

export default function ProjectDetail() {
  const { id: slug } = useParams()
  const [project, setProject] = useState(null)
  const [images, setImages] = useState([])
  const [otherProjects, setOtherProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`${API_URL}/projects`)
      .then(r => r.json())
      .then(all => {
        const list = Array.isArray(all) ? all : []
        const found = list.find(p => slugify(p.title) === slug)
        if (!found) {
          setProject(null)
          setLoading(false)
          return
        }
        setProject(found)
        setOtherProjects(list.filter(p => p.id !== found.id).slice(0, 3))
        return fetch(`${API_URL}/projects/${found.id}/images`).then(r => r.json())
      })
      .then(imgs => {
        setImages(Array.isArray(imgs) ? imgs : [])
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/60 text-sm animate-pulse">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        <div className="text-6xl font-black text-white/10">404</div>
        <p className="text-white/60">Project not found</p>
        <Link to="/work" className="text-primary text-sm font-bold uppercase tracking-widest hover:underline">Back to Work</Link>
      </div>
    )
  }

  const mobileImages = images.filter(i => i.device_type === 'mobile')
  const websiteImages = images.filter(i => i.device_type === 'website')

  return (
    <div className="min-h-screen bg-black">
      <div className="grain"></div>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 md:pb-24">
        <div className="absolute inset-0 -z-10">
          {project.image_url && (
            <img src={project.image_url} alt={project.title} className="w-full h-full object-cover opacity-30" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Link to="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-primary text-xs font-mono uppercase tracking-widest mb-6 transition-colors">
            <span>&larr;</span> Back to Work
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                {project.tags?.[0] || project.client_name || 'Project'}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
              {project.title}
            </h1>
            {project.client_name && (
              <p className="text-white/50 text-sm font-mono mt-4">
                Client: <span className="text-white/80">{project.client_name}</span>
              </p>
            )}
            <div className="flex gap-4 mt-8">
              {project.preview_link && project.tags?.some(t => t.toLowerCase() === 'website') && (
                <a href={project.preview_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition">
                  Visit Website &rarr;
                </a>
              )}
              {project.github_repo && project.tags?.some(t => t.toLowerCase() === 'app') && (
                <a href={project.github_repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider border border-zinc-700 transition">
                  View Source Code &rarr;
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thumbnail */}
      {project.image_url && (
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-xl overflow-hidden border border-white/5"
            >
              <img src={project.image_url} alt={project.title} className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </section>
      )}

      {/* Description */}
      {project.description && (
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed"
            >
              {project.description}
            </motion.p>
          </div>
        </section>
      )}

      {/* Website Screenshots */}
      {websiteImages.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-white/[0.01] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Desktop View</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mt-2">Website Screenshots</h2>
            </div>
            <div className="space-y-12">
              {websiteImages.map((img, i) => (
                <motion.div
                  key={img.id || i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <BrowserFrame src={img.image_url} alt={`${project.title} screenshot ${i + 1}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Screenshots */}
      {mobileImages.length > 0 && (
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Mobile View</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mt-2">Mobile Screenshots</h2>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
              {mobileImages.map((img, i) => (
                <motion.div
                  key={img.id || i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <MobileFrame src={img.image_url} alt={`${project.title} mobile ${i + 1}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold tracking-[0.2em] uppercase bg-zinc-900 border border-zinc-800 px-4 py-2 text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">More Work</span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white mt-2">Other Projects</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/work/${slugify(p.title)}`}
                  className="group relative h-[260px] overflow-hidden flex flex-col justify-end p-6 bg-[#111]"
                >
                  <img
                    src={p.image_url || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 transition duration-500 group-hover:opacity-60 group-hover:scale-105"
                  />
                  <div className="relative z-10">
                    <span className="text-primary text-[9px] font-bold tracking-[0.3em] uppercase block mb-1">
                      {p.tags?.[0] || p.client_name || 'Project'}
                    </span>
                    <h3 className="text-lg font-bold uppercase tracking-tighter text-white">{p.title}</h3>
                  </div>
                  <span className="absolute right-6 bottom-6 text-[10px] uppercase font-bold z-10 group-hover:text-primary transition-colors">
                    View &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Decorative */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>
    </div>
  )
}
