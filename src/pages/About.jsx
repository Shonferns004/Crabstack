import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import ZoomScroll from '../components/ZoomScroll'
import ScrollTransform3D from '../components/ScrollTransform3D'
import ScrollRotation from '../components/ScrollRotation'
import TextReveal from '../components/TextReveal'
import Parallax from '../components/Parallax'
import GlitchText from '../components/GlitchText'
import SEO from '../components/SEO'


const values = [
  { icon: 'lightbulb', title: 'Innovation', desc: 'Creative thinking that pushes boundaries. We don\'t just follow trends; we define the future of digital interaction.' },
  { icon: 'code', title: 'Precision', desc: 'Clean code and robust architecture. Every pixel and every line of code serves a specific, optimized purpose.' },
  { icon: 'speed', title: 'Performance', desc: 'Built for speed, scalability, and growth. We prioritize loading times and conversion metrics above all else.' },
]

const team = [
  { num: '01', tag: 'CORE', name: 'RAMON\nBAKURI', role: 'Founder & Managing Director', trait: 'Radicalism' },
  { num: '02', tag: 'EXPERIENCE', name: 'BENJAMIN\nAROKIARAJ', role: 'Co-Founder & Director of Creative Strategy', trait: 'Brutalist' },
  { num: '03', tag: 'MOMENTUM', name: 'CROSBY\nDIAS', role: 'Director of Growth & Marketing', trait: 'Precision' },
  { num: '04', tag: 'EXECUTION', name: 'SHAWN\nEDWARD', role: 'Director of Operations & Finance', trait: 'Impact' },
  { num: '05', tag: 'INFRASTRUCTURE', name: 'SHAWN\nFERNANDES', role: 'Director of Technical Architecture', trait: 'Velocity' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Crabstack Digital Agency"
        description="Learn about Crabstack's team, values, and process for building conversion-focused websites and scalable digital systems."
        path="/about"
        keywords="about crabstack, digital agency team, web design process"
      />
      <div className="grain"></div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,10,21,0.12),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto -mt-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-col items-center"
          >
            <div className="bg-primary px-4 py-1 rounded-sm shadow-[0_0_20px_rgba(230,10,21,0.3)]">
              <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">ABOUT_US</span>
            </div>
            <div className="h-14 w-[1px] bg-gradient-to-b from-primary to-transparent mt-2 opacity-50"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase select-none tracking-tighter leading-[0.95]"
          >
            WE ARE <br />
            <span className="relative inline-block text-primary drop-shadow-[0_0_15px_rgba(230,10,21,0.7)]">
              CRABSTACK
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group relative px-10 py-4 bg-neutral-900 border border-primary text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_25px_rgba(230,10,21,0.6)] overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Explore More</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </motion.button>
          </motion.div>
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
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">CORE-v3.0.1</span>
        </motion.div>

        <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 border-t border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 border-t border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 border-b border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 border-b border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
      </section>

      {/* Who We Are */}
      <ScrollReveal>
        <section className="py-24 md:py-32 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-5">
                <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Who We Are</h2>
                <p className="text-3xl md:text-4xl font-bold leading-tight">Performance-Driven <br />Digital Agency</p>
              </div>
              <div className="md:col-span-7 pt-4">
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                  <span className="text-primary font-medium">Crabstack</span> is a modern digital agency focused on building scalable, high-performance systems engineered for growth. We bridge the gap between aesthetic excellence and technical superiority.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Core Values - Fey-style 3D */}
      <ScrollReveal>
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-16 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <ScrollTransform3D key={i} rotateYRange={[10, 0]} scaleRange={[0.85, 1]} perspective={1000} offset={['0 0.9', '0.2 1']}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-xl border border-white/5 bg-white/[0.03] group hover:border-primary/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">{v.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{v.desc}</p>
                </motion.div>
                </ScrollTransform3D>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What Makes Us Different */}
      <ScrollReveal>
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">What Makes Us Different</h2>
              <p className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                Launch + Growth Model: We don't just build websites — we help launch, optimize, and scale them strategically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-6 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
                <div className="p-4 bg-primary/20 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3">Performance-First Builds</h4>
                  <p className="text-slate-400 leading-relaxed">Optimized from day one. Every asset is compressed, every script is audited, and every interaction is streamlined for peak efficiency.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
                <div className="p-4 bg-primary/20 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary">ads_click</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3">Conversion-Focused Design</h4>
                  <p className="text-slate-400 leading-relaxed">Designed to generate results. We use psychological triggers and intuitive UX patterns to guide users toward your primary goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Process - with ScrollRotation on circles */}
      <ScrollReveal>
        <section className="py-24 md:py-32 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-16 md:mb-20 text-center">Our Process</h2>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {['Strategy', 'Design', 'Develop', 'Launch', 'Scale'].map((step, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 text-center group"
                  >
                    <ScrollRotation rotateRange={[0, 360]} offset={['0 0.3', '0.7 0.5']}>
                    <div className="w-14 md:w-16 h-14 md:h-16 bg-background-dark border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(230,10,21,0.3)]">
                      <span className="text-lg md:text-xl font-bold">0{i + 1}</span>
                    </div>
                    </ScrollRotation>
                    <h5 className="text-lg md:text-xl font-bold mb-2">{step}</h5>
                    <p className="text-xs md:text-sm text-slate-400">{
                      ['Defining goals & roadmap', 'Visualizing the system', 'Engineering the solution', 'Deploying to production', 'Optimizing for growth'][i]
                    }</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team - Fey-style 3D */}
      <ScrollReveal>
        <section className="py-24 md:py-32 bg-[#000000] text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="mb-16 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-10 bg-[#E50914]"></div>
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#E50914] uppercase">The Personnel</span>
              </div>
              <div className="relative">
                <TextReveal as="h2" className="text-[60px] md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase mb-2" stagger={0.05}>
                  MEET THE ARCHITECTS
                </TextReveal>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 -space-x-px">
              {team.map((member, i) => (
                <ScrollTransform3D key={i} rotateXRange={[5, 0]} scaleRange={[0.85, 1]} perspective={1200} offset={['0 0.85', '0.2 1']}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 md:p-10 border border-white/10 bg-black flex flex-col min-h-[320px] md:min-h-[350px] hover:bg-[#E50914]/10 transition-all duration-500 cursor-pointer group"
                >
                  <div className="text-[10px] font-mono text-white/30 mb-8 tracking-widest">{member.num} / {member.tag}</div>
                  <div className="flex-grow">
                    <h3 className="text-4xl md:text-5xl font-bold leading-[0.9] mb-4 whitespace-pre-line">{member.name}</h3>
                    <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-8">{member.role}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-4 bg-[#E50914]"></div>
                      <span className="text-[10px] font-mono tracking-widest text-[#E50914] uppercase">{member.trait}</span>
                    </div>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/30 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.764 1.75-1.764s1.75.791 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.865 0-2.152 1.456-2.152 2.965v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.84-1.562 3.038 0 3.6 2 3.6 4.604v5.591z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
                </ScrollTransform3D>
              ))}
              <ScrollTransform3D rotateXRange={[5, 0]} scaleRange={[0.85, 1]} perspective={1200} offset={['0 0.85', '0.2 1']}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 md:p-10 border border-white/10 bg-black flex flex-col min-h-[320px] md:min-h-[350px] hover:bg-white/[0.02] transition-all duration-500 cursor-pointer group"
              >
                <div className="text-[10px] font-mono text-white/30 mb-8 tracking-widest">06 / CAREERS</div>
                <div className="flex-grow flex items-center">
                  <h3 className="text-3xl md:text-4xl font-bold leading-[0.9] mb-4 text-white/20 group-hover:text-white/40 transition-colors uppercase">Your<br />Role</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-4 bg-white/20 group-hover:bg-[#E50914] transition-colors"></div>
                  <span className="text-[10px] font-mono tracking-widest text-white/20 group-hover:text-[#E50914] transition-colors uppercase">Apply Now</span>
                </div>
              </motion.div>
              </ScrollTransform3D>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA with Parallax */}
      <ScrollReveal>
        <Parallax speed={0.1}>
        <section className="py-24 md:py-32 bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">Let's Build Something Powerful.</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white px-10 md:px-12 py-5 rounded-lg text-lg font-bold hover:bg-black/80 transition-all shadow-2xl cursor-pointer"
            >
              Start Your Project
            </motion.button>
          </div>
        </section>
        </Parallax>
      </ScrollReveal>

      {/* Decorative Grids */}
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
