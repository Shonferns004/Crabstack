import { useState, useEffect } from 'react'
import GlitchText from '../components/GlitchText'
import StoryParallax from '../components/StoryParallax'
import { API_URL } from '../apiUrl'

export default function Work() {
  const [projects, setProjects] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(Array.isArray(data) ? data : []))
      .catch(() => setProjects([]))
  }, [])

  const filters = [
    { key: 'all', label: 'All' },
    ...new Set(
      projects.flatMap(p => (p.tags || []).map(t => t.toLowerCase()))
    ).values(),
  ].map(t => {
    const key = typeof t === 'string' ? t : t.key
    const label = key === 'all' ? 'All' : key.charAt(0).toUpperCase() + key.slice(1)
    return { key, label }
  })

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => {
        const tags = (p.tags || []).map(t => t.toLowerCase())
        return tags.includes(activeFilter)
      })

  return (
    <>
      <div className="grain"></div>

      {/* Hero */}
      <StoryParallax>
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,10,21,0.12),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto -mt-16 px-4">
          <div className="mb-6 flex flex-col items-center">
            <div className="bg-primary px-4 py-1 rounded-sm shadow-[0_0_20px_rgba(230,10,21,0.3)]">
              <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">PORTFOLIO</span>
            </div>
            <div className="h-14 w-[1px] bg-gradient-to-b from-primary to-transparent mt-2 opacity-50"></div>
          </div>

          <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase select-none tracking-tight leading-[0.95]">
            SEE OUR WORK <br />
            <GlitchText text="IN ACTION" />
          </h1>

          <div className="mt-12">
            <button className="group relative px-10 py-4 bg-neutral-900 border border-primary text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_25px_rgba(230,10,21,0.6)] overflow-hidden cursor-pointer">
              <span className="relative z-10">Explore More</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-4 md:left-10 flex items-center gap-4 md:gap-6 z-20 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">Systems Online [LIVE]</span>
          </div>
          <div className="h-[1px] w-10 md:w-16 bg-white/20 hidden sm:block"></div>
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">CORE-v3.0.1</span>
        </div>
        </section>
      </StoryParallax>

      {/* Stats */}
      <StoryParallax>
      <section className="py-16 md:py-20 px-6 md:px-[10%] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border-t border-white/5 border-b border-white/5">
        {[
          { num: '10+', label: 'Major Events' },
          { num: `${projects.length}+`, label: 'Projects' },
          { num: '100%', label: 'Success' },
          { num: '99.9%', label: 'Reliability' },
        ].map((stat, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-[10px] h-[10px] bg-primary mt-2 shrink-0"></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black">{stat.num}</h2>
              <p className="text-[10px] text-white/40 uppercase tracking-[2px]">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>
      </StoryParallax>

      {/* Portfolio Grid */}
      <StoryParallax>
      <section className="py-16 md:py-24 px-4 md:px-[5%]">
        <div className="flex justify-between items-end mb-12 md:mb-16 flex-col md:flex-row gap-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase border-b-4 border-primary inline-block pb-2">
            Deployed_Operations
          </h2>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3 md:px-4 py-2 text-[10px] font-bold uppercase transition cursor-pointer ${
                  activeFilter === f.key
                    ? 'bg-primary text-white border border-primary'
                    : 'border border-white/10 text-white/40 hover:border-primary hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-white/30 py-20 text-sm uppercase tracking-widest">
              No projects in this category yet
            </div>
          )}
          {filtered.map((project, i) => (
            <div
              key={project.id || project.title}
              className="relative bg-[#111] h-[320px] md:h-[400px] overflow-hidden flex flex-col justify-end p-6 md:p-8 group transition-all duration-300 cursor-pointer"
            >
              <img
                src={project.image_url || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 transition duration-500 group-hover:opacity-60 group-hover:scale-105"
              />
              <div className="relative z-10">
                <span className="text-primary text-[10px] font-black uppercase">{project.tags?.[0] || project.client_name || 'Project'}</span>
                <h3 className="text-xl md:text-2xl uppercase font-bold">{project.title}</h3>
              </div>
              <a href="#" className="absolute right-6 md:right-8 bottom-6 md:bottom-8 text-[10px] uppercase font-bold z-10 hover:text-primary transition-colors">
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
      </StoryParallax>

      {/* Decorative */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>
    </>
  )
}
