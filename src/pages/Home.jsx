import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ZoomScroll from '../components/ZoomScroll'
import ScrollTransform3D from '../components/ScrollTransform3D'
import TextReveal from '../components/TextReveal'
import ScrollRotation from '../components/ScrollRotation'
import Parallax from '../components/Parallax'

import Marquee from '../components/Marquee'
import GlitchText from '../components/GlitchText'
import ZoomReveal from '../components/ZoomReveal'
import StoryParallax from '../components/StoryParallax'
import { API_URL } from '../apiUrl'

const techItems = [
  'Web Development', 'SaaS Solutions', 'Technical Systems Setup', 'Audio & Speaker Installation',
  'UI/UX Design', 'Product Design', 'Graphic Design', 'SEO Optimization',
  'Social Media Management', 'Video Editing', 'Photo Editing',
  'Event Hosting (Emcee)', 'Event Management', 'Event Technical Setup', 'Live Audio Production',
]

const phases = [
  {
    num: '01', title: 'Discovery', icon: 'search',
    desc: 'Deep-dive research into requirements, competitor landscape, and technical feasibility. We define the problem before solving it.',
    left: true,
  },
  {
    num: '02', title: 'Planning', icon: 'architecture',
    desc: 'System architecture design, UX blueprints, and milestone mapping for execution clarity.',
    left: false,
  },
  {
    num: '03', title: 'Execution', icon: 'code',
    desc: 'Agile sprint cycles, CI/CD deployment, and performance-driven engineering.',
    left: true,
  },
  {
    num: '04', title: 'Launch', icon: 'rocket_launch',
    desc: 'QA validation, deployment hardening, and continuous monitoring at scale.',
    left: false,
  },
]

function PhaseStep({ phase, index, sectionProgress }) {
  const phasesCount = 4
  const start = index / phasesCount
  const end = (index + 1) / phasesCount

  const scale = useTransform(sectionProgress, [start, end], [0.6, 1])
  const opacity = useTransform(sectionProgress, [start, end], [0.3, 1])
  const glow = useTransform(sectionProgress, [start, start + 0.04], [0, 1])
  const textOpacity = useTransform(sectionProgress, [start + 0.02, start + 0.1], [0, 1])

  const dotBorderColor = useTransform(
    glow, [0, 1],
    ['rgba(255,255,255,0.2)', 'rgba(230,10,21,1)']
  )
  const dotShadow = useTransform(
    glow, [0, 1],
    ['0 0 0px rgba(230,10,21,0)', '0 0 20px rgba(230,10,21,0.3)']
  )
  const iconColor = useTransform(
    glow, [0, 1],
    ['rgba(255,255,255,0.5)', 'rgba(230,10,21,1)']
  )

  const isLeft = index % 2 === 0

  return (
    <div className="relative flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 mb-16 md:mb-24 items-center group">
      {isLeft ? (
        <>
          <div className="text-right pr-12 hidden md:block">
            <motion.span style={{ opacity: glow, color: iconColor }} className="font-mono text-sm font-bold uppercase">Phase {phase.num}</motion.span>
            <motion.h3 style={{ opacity: glow }} className="text-2xl font-bold uppercase mt-1">{phase.title}</motion.h3>
          </div>
          <motion.div
            style={{ scale, borderColor: dotBorderColor, boxShadow: dotShadow }}
            className="relative md:absolute md:left-1/2 md:-translate-x-1/2 size-12 md:size-14 bg-neutral-900 border-2 rounded-full flex items-center justify-center z-10 mx-auto"
          >
            <motion.span style={{ color: iconColor }} className="material-symbols-outlined text-xl">{phase.icon}</motion.span>
          </motion.div>
          <motion.div style={{ opacity: textOpacity }} className="md:pl-12 md:text-left text-center px-2">
            <div className="md:hidden mb-2 text-center">
              <span className="font-mono text-primary text-xs font-bold uppercase block">Phase {phase.num}</span>
              <h4 className="text-xl font-bold uppercase">{phase.title}</h4>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">{phase.desc}</p>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div style={{ opacity: textOpacity }} className="md:text-right text-center md:pr-12 order-2 md:order-1 px-2">
            <div className="md:hidden mb-2 text-center">
              <span className="font-mono text-primary text-xs font-bold uppercase block">Phase {phase.num}</span>
              <h4 className="text-xl font-bold uppercase">{phase.title}</h4>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto md:ml-auto">{phase.desc}</p>
          </motion.div>
          <motion.div
            style={{ scale, borderColor: dotBorderColor, boxShadow: dotShadow }}
            className="relative md:absolute md:left-1/2 md:-translate-x-1/2 size-12 md:size-14 bg-neutral-900 border-2 rounded-full flex items-center justify-center z-10 mx-auto"
          >
            <motion.span style={{ color: iconColor }} className="material-symbols-outlined text-xl">{phase.icon}</motion.span>
          </motion.div>
          <div className="text-left pl-12 hidden md:block order-1 md:order-2">
            <motion.span style={{ opacity: glow }} className="font-mono text-sm font-bold uppercase">Phase {phase.num}</motion.span>
            <motion.h3 style={{ opacity: glow }} className="text-2xl font-bold uppercase mt-1">{phase.title}</motion.h3>
          </div>
        </>
      )}
    </div>
  )
}

function Counter({ target, suffix = '+' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '0.8 1'] })
  const count = useTransform(scrollYProgress, [0, 1], [0, target])

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-black text-primary italic leading-none">
      <motion.span>{count}</motion.span>{suffix}
    </div>
  )
}

export default function Home() {
  const [projects, setProjects] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [hoveredTestimonials, setHoveredTestimonials] = useState(false)
  const strategyRef = useRef(null)
  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(Array.isArray(data) ? data : []))
      .catch(() => setProjects([]))
    fetch(`${API_URL}/testimonials`)
      .then(res => res.json())
      .then(data => setTestimonials(Array.isArray(data) ? data : []))
      .catch(() => setProjects([]))
  }, [])

  const { scrollYProgress: strategyProgress } = useScroll({
    target: strategyRef,
    offset: ['0 0.7', '1 0.3'],
  })
  const lineGradient = useTransform(
    strategyProgress,
    [0, 1],
    [
      'linear-gradient(to bottom, rgba(230,10,21,0.3), rgba(230,10,21,0.05))',
      'linear-gradient(to bottom, rgba(230,10,21,1), rgba(230,10,21,0.3))',
    ]
  )

  return (
    <>
      {/* ===== HERO ===== */}
      <StoryParallax>
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center px-4">
        <div className="grain"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1200px', overflow: 'hidden', zIndex: -1 }}>
          <div
            className="w-[200vw] h-[200vh] opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              transform: 'rotateX(60deg) translateY(-20%)',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            }}
          />
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="relative z-20 mb-8 flex flex-col items-center">
            <div className="bg-primary px-4 py-1 rounded-sm shadow-[0_0_20px_rgba(230,10,21,0.3)]">
              <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">WE'RE CRABSTACK</span>
            </div>
            <div className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent mt-2 opacity-50"></div>
          </div>

          <div className="relative z-10 text-center max-w-7xl mx-auto">
              <h1 className="text-huge font-bold uppercase select-none tracking-tighter">
                WE BUILD <br /><GlitchText text="DIGITAL EDGES" />
              </h1>
            <p className="mt-8 text-white/60 text-[10px] sm:text-xs tracking-[0.5em] font-light uppercase max-w-lg mx-auto leading-relaxed border-t border-white/5 pt-8">
              Engineering your future with high-end digital architecture
            </p>
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
          <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em]">CORE-v3.0.1</span>
        </div>

        <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 border-t border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 border-t border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 border-b border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 border-b border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
      </section>
      </StoryParallax>

      <div className="bg-black">

      {/* Identity - Fey-style 3D scroll */}
      <StoryParallax>
      <ZoomReveal>
      <section className="sticky top-0 min-h-screen px-6 md:px-20 py-24 md:py-40 bg-black scroll-snap-child" id="identity">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal direction="left" className="relative order-2 md:order-1">
            <ScrollTransform3D
              rotateYRange={[12, 0]}
              rotateXRange={[6, 0]}
              scaleRange={[0.7, 1]}
              perspective={1200}
              offset={['0 0.8', '0.3 1']}
            >
            <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img
                className="w-full h-full object-cover transition-all duration-700 opacity-60"
                src="/new.png"
                alt="Crabstack"
              />
            </div>
            <div className="absolute -top-10 -right-10 hidden lg:block w-48 h-48 border-2 border-primary/20 rounded-full flex items-center justify-center p-4">
              <div className="w-full h-full border border-primary/40 rounded-full animate-pulse"></div>
            </div>
            </ScrollTransform3D>
          </ScrollReveal>
          <ScrollReveal direction="right" className="flex flex-col gap-8 order-1 md:order-2">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase font-bold">The Identity</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              STRENGTH THROUGH <span className="text-primary italic">INNOVATION</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Reliability, strength, and innovation at our core. We create high-impact digital products with an asymmetric, brutalist approach. We don't just build websites; we engineer market dominance.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 border-l-2 border-primary bg-primary/5">
                <div className="text-4xl font-bold text-white">{projects.filter(p => !p.tags?.some(t => t.toLowerCase().includes('event'))).length}+</div>
                <div className="text-xs font-mono uppercase text-slate-500 mt-2">Projects Delivered</div>
              </div>
              <div className="p-6 border-l-2 border-primary bg-primary/5">
                <div className="text-4xl font-bold text-white">{projects.filter(p => p.tags?.some(t => t.toLowerCase().includes('event'))).length}+</div>
                <div className="text-xs font-mono uppercase text-slate-500 mt-2">Major Events Hosted</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </ZoomReveal>
      </StoryParallax>

      {/* Services */}
      <StoryParallax>
      <ZoomReveal>
        <section id="services" className="sticky top-0 min-h-screen py-24 md:py-32 px-6 bg-black text-white scroll-snap-child">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
              <div className="md:col-span-4">
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Capability_Matrix</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none">SERVICES WE <br />PROVIDE</h2>
              </div>
              <div className="md:col-span-8 flex items-end">
                <p className="text-white/60 text-sm tracking-[0.1em] max-w-lg font-light leading-relaxed">
                  We operate at the intersection of high-end aesthetics and extreme engineering. Our services are tailored for entities requiring absolute digital dominance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'code', title: 'Development & Technology', desc: 'End-to-end digital solutions including web development, SaaS platforms, and technical systems setup for scalable, high-performance operations.' },
                { icon: 'palette', title: 'Design & Creative', desc: 'Visually compelling and user-focused design services covering UI/UX, product design, and brand-driven graphic experiences.' },
                { icon: 'trending_up', title: 'Marketing & Growth', desc: 'Data-driven marketing strategies including SEO optimization and social media management to accelerate brand reach and engagement.' },
                { icon: 'campaign', title: 'Media & Events Production', desc: 'Full-scale media creation and event execution — from video production and editing to live hosting, technical setup, and entertainment experiences.' },
              ].map((s, i) => (
                <ScrollRotation key={i} rotateRange={[-3, 3]} offset={['0 0.9', '0.3 1']}>
                <div className="service-card group">
                  <div>
                    <span className="material-symbols-outlined service-icon">{s.icon}</span>
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.desc}</p>
                </div>
                </ScrollRotation>
              ))}
            </div>
            <div className="flex justify-center mt-16">
              <Link to="/services" className="group relative px-10 py-4 bg-neutral-900 border border-primary text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(230,10,21,0.4)] overflow-hidden hover:scale-105">
                <span className="relative z-10">Explore More</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </Link>
            </div>
          </div>
        </section>
      </ZoomReveal>
      </StoryParallax>

      {/* Marquee */}
      <Parallax speed={0.15}>
        <Marquee items={techItems} />
      </Parallax>

      {/* Strategy Lab */}
      <StoryParallax>
      <ZoomReveal>
      <section ref={strategyRef} className="sticky top-0 min-h-screen py-24 md:py-32 px-6 border-y border-white/5 bg-[#050505] relative overflow-hidden text-white scroll-snap-child">
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">LABS-v0.1</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Strategy Lab</h2>
            </div>
          </ScrollReveal>
          <div className="pt-12 border-t border-white/5">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-white/60 font-mono text-xs uppercase tracking-widest">Execution Pipeline _ Phase Sequence</p>
              </div>
            </ScrollReveal>
            <div className="relative">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] hidden md:block"
                style={{ background: lineGradient }}
              />
              {phases.map((phase, i) => (
                <PhaseStep key={i} phase={phase} index={i} sectionProgress={strategyProgress} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      </section>
      </ZoomReveal>
      </StoryParallax>

      {/* Portfolio - Asymmetric Gallery */}
      <StoryParallax>
      <ZoomReveal>
        <section id="work" className="sticky top-0 min-h-screen py-24 md:py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto mb-16">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Proven_Output</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Case Files</h2>
              </div>
              <Link to="/work" className="text-[10px] font-bold tracking-[0.3em] text-white/60 hover:text-white transition-colors">VIEW_ALL_RECORDS</Link>
            </div>
          </div>

          <div className="max-w-7xl mx-auto columns-1 md:columns-2 gap-4 space-y-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id || i}
                initial={{ opacity: 0, y: 80, rotateX: i % 2 === 0 ? 5 : -5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`break-inside-avoid overflow-hidden rounded-xl border border-white/5 bg-zinc-900/30 group relative ${i === 0 || i === 3 || i === 5 ? 'md:aspect-[3/4]' : 'md:aspect-[4/3]'}`}
              >
                <img
                  src={project.image_url || '/MHB.png'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-6 bg-primary"></span>
                    <span className="text-primary text-[9px] font-bold tracking-[0.3em] uppercase">{project.tags?.[0] || project.client_name || 'Project'}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tighter text-white">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white/60 text-[10px] font-mono tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link to="/work" className="group relative px-10 py-4 bg-neutral-900 border border-primary text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(230,10,21,0.4)] overflow-hidden hover:scale-105">
              <span className="relative z-10">Explore More</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>
        </section>
      </ZoomReveal>
      </StoryParallax>

      {/* Testimonials */}
      <StoryParallax>
      <ZoomReveal>
      <section className="sticky top-0 min-h-screen bg-black overflow-hidden py-24 md:py-32 w-full scroll-snap-child">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto mb-16 px-6">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">SYSTEM_FEEDBACK</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">CLIENT TESTIMONIALS</h2>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <Parallax speed={0.2}>
        <div className="relative w-full" onMouseEnter={() => setHoveredTestimonials(true)} onMouseLeave={() => setHoveredTestimonials(false)} onTouchStart={() => setHoveredTestimonials(true)} onTouchEnd={() => setHoveredTestimonials(false)}>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-10 w-max px-6"
              style={{ animation: 'marqueeScroll 40s linear infinite', animationPlayState: hoveredTestimonials ? 'paused' : 'running' }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="w-[340px] md:w-[420px] min-h-[240px] flex-shrink-0 flex flex-col justify-between gap-4 border-l-2 border-primary/20 pl-6 bg-zinc-900/20 p-5 md:p-6 rounded">
                  <span className="material-symbols-outlined text-primary text-3xl opacity-40">format_quote</span>
                  <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tighter text-white leading-tight">{t.quote}</h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-white uppercase">{t.name}</span>
                    <span className="text-[10px] md:text-[12px] font-mono text-primary uppercase">{t.role}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        </Parallax>
      </section>
      </ZoomReveal>
      </StoryParallax>

      </div>
    </>
  )
}




