import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import ScrollTransform3D from '../components/ScrollTransform3D'
import Parallax from '../components/Parallax'
import GlitchText from '../components/GlitchText'
import Marquee from '../components/Marquee'
import StoryParallax from '../components/StoryParallax'


const techMarquee = ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL', 'Python', 'Next.js', 'Solidity']

const services = [
  {
    num: '01', title: 'Development & Tech', subtitle: 'The Engine Room of Innovation.',
    items: [
      { icon: 'code', title: 'Web Development', desc: 'High-performance, scalable web ecosystems built with the latest stack.' },
      { icon: 'cloud_done', title: 'SaaS Solutions', desc: 'Custom architectural blueprints for modern software-as-a-service platforms.' },
      { icon: 'settings_input_component', title: 'Technical Systems Setup', desc: 'Complex deployments and dev-ops infrastructures for enterprise scale.' },
    ],
    bg: false,
  },
  {
    num: '02', title: 'Design & Creative', subtitle: 'Visual Alchemy.',
    items: [
      { icon: 'palette', title: 'UI/UX Design', desc: 'Immersive digital interfaces optimized for high-conversion and emotion.' },
      { icon: 'design_services', title: 'Product Design', desc: 'End-to-end product development from conceptual sketches to prototype.' },
    ],
    bg: true,
  },
  {
    num: '03', title: 'Marketing & Growth', subtitle: 'Strategic Expansion.',
    items: [
      { icon: 'trending_up', title: 'SEO Optimization', desc: 'Data-driven strategies to dominate search rankings and drive organic growth.' },
      { icon: 'share', title: 'Social Media Management', desc: 'Strategic content distribution and community engagement across all platforms.' },
      { icon: 'analytics', title: 'Analytics & Reporting', desc: 'Comprehensive performance tracking with actionable insights and ROI measurement.' },
    ],
    bg: false,
  },
  {
    num: '04', title: 'Media & Production', subtitle: 'Content as Art.',
    items: [
      { icon: 'movie_filter', title: 'Video Editing', desc: 'Cinematic storytelling and post-production that elevates your brand narrative.' },
      { icon: 'camera_enhance', title: 'Photo Manipulation', desc: 'Professional retouching, compositing, and visual asset creation at scale.' },
    ],
    bg: true,
  },
]

export default function Services() {
  return (
    <>
      <div className="grain"></div>

      {/* Hero */}
      <StoryParallax>
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-0">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,10,21,0.12),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto -mt-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-col items-center"
          >
            <div className="bg-primary px-4 py-1 rounded-sm shadow-[0_0_20px_rgba(230,10,21,0.3)]">
              <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">SERVICES</span>
            </div>
            <div className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent mt-2 opacity-50"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase select-none tracking-tight leading-[0.95]"
          >
            DISCOVER OUR <br />
            <GlitchText text="CAPABILITIES" />
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-6 md:bottom-10 left-4 md:left-10 flex items-center gap-4 md:gap-6 z-20 flex-wrap"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">Systems Online [LIVE]</span>
          </div>
          <div className="h-[1px] w-10 md:w-16 bg-white/20 hidden sm:block"></div>
          <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em]">CORE-v3.0.1</span>
        </motion.div>

        <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 border-t border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 border-t border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 border-b border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 border-b border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
      </section>
      </StoryParallax>

      {services.map((s, i) => (
        <StoryParallax key={i}>
        <ScrollReveal>
          <section className={`py-24 md:py-32 ${s.bg ? 'bg-white/[0.02]' : 'border-y border-white/5'}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4 sticky top-32 self-start">
                  <span className="text-primary font-black text-5xl md:text-7xl italic tracking-tighter block mb-6">{s.num}</span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">{s.title}</h2>
                  <p className="text-slate-400 text-lg md:text-xl">{s.subtitle}</p>
                  <div className="h-px w-16 bg-primary/50 mt-8"></div>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {s.items.map((card, ci) => (
                    <ScrollTransform3D key={ci} rotateXRange={[4, 0]} scaleRange={[0.95, 1]} perspective={1000} offset={['0 0.9', '0.2 1']}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="group relative p-8 md:p-10 border border-white/10 bg-black rounded-none hover:border-primary/60 transition-all duration-500 flex items-start gap-6 md:gap-10"
                    >
                      <div className="hidden md:flex items-center justify-center w-16 h-16 shrink-0 bg-primary/5 border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary transition-all duration-500">
                        <span className="material-symbols-outlined text-3xl text-primary">{card.icon}</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-primary/30 font-mono text-xs tracking-widest">0{ci + 1}</span>
                          <div className="h-px flex-grow bg-white/5"></div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{card.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                      </div>
                      <div className="hidden xl:flex items-center justify-center w-12 h-12 shrink-0 border border-white/5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500 rounded-full">
                        <span className="material-symbols-outlined text-primary text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </div>
                    </motion.div>
                    </ScrollTransform3D>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        </StoryParallax>
      ))}

      <StoryParallax>
      <Parallax speed={0.15}>
        <Marquee items={techMarquee} className="!border-t-0" />
      </Parallax>
      </StoryParallax>

      {/* CTA */}
      <StoryParallax>
      <ScrollReveal>
        <Parallax speed={0.1}>
        <section className="py-24 md:py-32 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">READY TO MAKE YOUR VISION TRUE?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-10 md:px-12 py-5 rounded-lg text-lg font-bold hover:bg-black/80 transition-all shadow-2xl cursor-pointer"
              >
                Initialize Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-black/40 text-white px-10 md:px-12 py-5 rounded-lg font-bold transition-all hover:bg-black/20 cursor-pointer"
              >
                Download Stack
              </motion.button>
            </div>
          </div>
        </section>
        </Parallax>
      </ScrollReveal>
      </StoryParallax>

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
