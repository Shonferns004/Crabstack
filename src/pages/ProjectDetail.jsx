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
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [images, setImages] = useState([])
  const [otherProjects, setOtherProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`${API_URL}/projects/${projectId}`)
      .then(r => {
        if (!r.ok) throw new Error('not found')
        return r.json()
      })
      .then(found => {
        setProject(found)
        return Promise.all([
          fetch(`${API_URL}/projects/${found.id}/images`).then(r => r.json()),
          fetch(`${API_URL}/projects`).then(r => r.json()),
        ])
      })
      .then(([imgs, all]) => {
        setImages(Array.isArray(imgs) ? imgs : [])
        const list = Array.isArray(all) ? all : []
        setOtherProjects(list.filter(p => p.id !== projectId).slice(0, 3))
      })
      .catch(() => setProject(null))
      .finally(() => setLoading(false))
  }, [projectId])

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
  const posterImages = images.filter(i => i.device_type === 'poster')
  const eventImages = images.filter(i => i.device_type === 'event')

  return (
    <div className="min-h-screen bg-black">
      <div className="grain"></div>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 md:pb-32">
        <div className="absolute inset-0 -z-10">
          {project.image_url && (
            <>
              <img src={project.image_url} alt={project.title} className="w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </>
          )}
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Link to="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-primary text-xs font-mono uppercase tracking-widest mb-8 transition-colors">
            <span>←</span> Back to Work
          </Link>
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
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
                    Visit Website →
                  </a>
                )}
                {project.github_repo && project.tags?.some(t => t.toLowerCase() === 'app') && (
                  <a href={project.github_repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider border border-zinc-700 transition">
                    View Source Code →
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              {project.image_url && (
                <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                  <img src={project.image_url} alt={project.title} className="w-full h-auto object-cover" />
                </div>
              )}
              {project.description && (
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                  <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Images */}
      {websiteImages.length > 0 && (
        <section className="py-16 md:py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Website</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mt-2">Website Screenshots</h2>
            </motion.div>
            <div className="space-y-12">
              {websiteImages.map((img, i) => (
                <motion.div
                  key={img.id || i}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <BrowserFrame src={img.image_url} alt={`${project.title} website ${i + 1}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Images */}
      {mobileImages.length > 0 && (
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Mobile</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mt-2">Mobile Screenshots</h2>
            </motion.div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
              {mobileImages.map((img, i) => (
                <motion.div
                  key={img.id || i}
                  initial={{ opacity: 0, y: 50, rotateX: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                  className="break-inside-avoid mb-8"
                >
                  <MobileFrame src={img.image_url} alt={`${project.title} mobile ${i + 1}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Poster Images */}
      {posterImages.length > 0 && (
        <section className="py-16 md:py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Posters</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mt-2">Poster Gallery</h2>
            </motion.div>
            <div className="space-y-8 md:space-y-12">
              {posterImages.map((img, i) => {
                const isEven = i % 2 === 0
                return (
                  <motion.div
                    key={img.id || i}
                    initial={{ opacity: 0, x: isEven ? -60 : 60, rotate: isEven ? -2 : 2 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`rounded-xl overflow-hidden border border-white/5 shadow-lg hover:shadow-2xl transition-shadow duration-500 ${isEven ? 'md:ml-[5%]' : 'md:mr-[5%]'} md:w-[90%]`}
                  >
                    <img src={img.image_url} alt={`${project.title} poster ${i + 1}`} className="w-full h-auto object-cover" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Event Images */}
      {eventImages.length > 0 && (
        <section className="py-16 md:py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Event Gallery</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mt-2">Event Images</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {eventImages.map((img, i) => {
                const sizes = [
                  'md:col-span-2 md:row-span-2',
                  'md:col-span-1 md:row-span-1',
                  'md:col-span-1 md:row-span-2',
                  'md:col-span-2 md:row-span-1',
                  'md:col-span-1 md:row-span-1',
                  'md:col-span-1 md:row-span-1',
                ]
                const span = sizes[i % sizes.length]
                return (
                  <motion.div
                    key={img.id || i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: 'easeOut',
                    }}
                    className={`rounded-xl overflow-hidden border border-white/5 group relative ${span}`}
                  >
                    <img
                      src={img.image_url}
                      alt={`${project.title} event ${i + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white/80 text-xs font-mono">{project.title} — Event {i + 1}</span>
                    </div>
                  </motion.div>
                )
              })}
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
                  to={`/work/${p.id}/${slugify(p.title)}`}
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
                    View →
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
