import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import ZoomScroll from '../components/ZoomScroll'
import ScrollTransform3D from '../components/ScrollTransform3D'
import ScrollRotation from '../components/ScrollRotation'
import TextReveal from '../components/TextReveal'
import Parallax from '../components/Parallax'
import GlitchText from '../components/GlitchText'
import Marquee from '../components/Marquee'
import SEO from '../components/SEO'


const techMarquee = ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL', 'Python', 'Next.js', 'Solidity']

const sections = [
  {
    num: '01', title: 'Development & Tech', subtitle: 'The Engine Room of Innovation.',
    cards: [
      { icon: 'code', title: 'Web Development', desc: 'High-performance, scalable web ecosystems built with the latest stack.' },
      { icon: 'cloud_done', title: 'SaaS Solutions', desc: 'Custom architectural blueprints for modern software-as-a-service platforms.' },
      { icon: 'settings_input_component', title: 'Technical Systems Setup', desc: 'Complex deployments and dev-ops infrastructures for enterprise scale.', wide: true },
    ],
    bg: false, align: 'left',
  },
  {
    num: '02', title: 'Design & Creative', subtitle: 'Visual Alchemy.',
    cards: [
      { icon: '', title: 'UI/UX Design', desc: 'Immersive digital interfaces optimized for high-conversion and emotion.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhU4Y_kWZTcCaTDfDzEJGAkxIdyv0iTehrjlQgtfsCWpg7IDcI-dJQrD9j-ub2okAJvisK_SdHwVcndB1juEkwDkulmz84hcelQWVD1LpNpXuB1BZR5IIguZby-jbNjdszu3np5wvIOLQkTpQ3mvbqSkoG1dxZwgz5zhEA8y1UlWvHVKVx95S5LwIK486xiU19Cih1xL40w_bP1ZBgBVD03jI660o-fGd0Ma-hO3Qq9GuI7xyCFJXu-8qP3D-0lUr50ips8DhhLlTj' },
      { icon: '', title: 'Product Design', desc: 'End-to-end product development from conceptual sketches to prototype.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVwvLhaqnDpuVRvcHvmFfgVG6tZeh1xSZu3G-5i8Oav1E_vIoaCRV0JRSogk0O3te0pwWIJKQhQ5cspKtUrStj_Fn_CbRFzI1BEN-p2AHdQOJFPRpFokdLnGZtSR9vqTN3p_UMo6pwI7XrGkqj3nQXjA8-ec_R4jDwA5ezGHxsiAJXt86E-aaWR8SEVXn8MWgOpczPbFaAOM285mpJWO0gYtng8e5KFZbdUEreVVsBHRXkrWhg1_delBDMAbmRAGeILhdAKMtlJqj6' },
    ],
    bg: true, align: 'right',
  },
  {
    num: '03', title: 'Marketing & Growth', subtitle: 'Strategic Expansion.',
    cards: [
      { icon: 'trending_up', title: 'SEO Optimization', desc: '', wide: true },
      { icon: 'share', title: 'Social Media Management', desc: '', wide: true },
    ],
    bg: false, align: 'left',
  },
  {
    num: '04', title: 'Media & Production', subtitle: 'Content as Art.',
    cards: [
      { icon: 'movie_filter', title: 'Video Editing', desc: '', wide: true },
      { icon: 'camera_enhance', title: 'Photo Manipulation', desc: '', wide: true },
    ],
    bg: true, align: 'right',
  },
]

function ServiceSection({ section }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0.8', '0.5 0.5'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  const Content = () => (
    <div ref={ref} className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 px-6 md:px-12">
      <div className={`lg:col-span-5 ${section.align === 'right' ? 'lg:order-2 lg:text-right' : ''} space-y-6`}>
        <span className="text-primary font-black text-3xl italic tracking-tighter block">{section.num} //</span>
        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">{section.title}</h3>
        <p className="text-slate-500 text-xl font-medium">{section.subtitle}</p>
      </div>
      <div className="lg:col-span-7">
        {section.cards.length <= 2 ? (
          <div className="space-y-4">
            {section.cards.map((card, i) => (
              <ScrollTransform3D key={i} rotateXRange={[6, 0]} scaleRange={[0.9, 1]} perspective={1000} offset={['0 0.9', '0.2 1']}>
              <div className="flex items-center justify-between p-8 md:p-12 glass-card hover:bg-primary/5 transition-colors group">
                <span className="text-2xl md:text-4xl font-bold tracking-tight uppercase">{card.title}</span>
                {card.icon && (
                  <span className="material-symbols-outlined text-primary text-4xl md:text-5xl group-hover:translate-x-4 transition-transform">{card.icon}</span>
                )}
              </div>
              </ScrollTransform3D>
            ))}
          </div>
        ) : section.cards[0]?.img ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {section.cards.map((card, i) => (
              <ScrollTransform3D key={i} rotateYRange={[8, 0]} scaleRange={[0.85, 1]} perspective={1200} offset={['0 0.9', '0.2 1']}>
              <div className="glass-card rounded-lg overflow-hidden group">
                <div className="h-48 md:h-64 bg-slate-900 relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                  <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src={card.img} alt={card.title} />
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{card.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
              </ScrollTransform3D>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {section.cards.map((card, i) => (
              <ScrollTransform3D key={i} rotateXRange={[5, 0]} scaleRange={[0.9, 1]} perspective={1000} offset={['0 0.9', '0.2 1']}>
              <div className={`glass-card rounded-lg p-5 md:p-6 group flex flex-col ${card.wide ? 'col-span-1 sm:col-span-2' : ''}`}>
                <span className="material-symbols-outlined text-4xl md:text-5xl text-primary mb-5 md:mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">{card.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 md:mb-6">{card.desc}</p>
                <div className="mt-auto flex items-center text-primary text-xs font-black uppercase tracking-widest gap-2">
                  Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
              </ScrollTransform3D>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section className={`min-h-screen flex flex-col justify-center relative border-t border-primary/10 ${section.bg ? 'bg-primary/5' : ''}`}>
      <ScrollRotation rotateRange={[-10, 10]} offset={['0 0.5', '0.5 0.5']}>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <span className="text-[40vw] font-black italic text-primary select-none leading-none">{section.num}</span>
      </div>
      </ScrollRotation>
      <Content />
    </section>
  )
}

export default function Services() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://crabstack.vercel.app'
  const servicesJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Crabstack Services',
      url: `${siteUrl}/services`,
      description: 'Explore services across web development, design, SEO, social media, and media production.',
      inLanguage: 'en',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Discover Our Capabilities"
        description="Explore Crabstack services across web development, UX design, social media management, and media production."
        path="/services"
        keywords="web development services, ui ux design, digital production, social media management"
        jsonLd={servicesJsonLd}
      />
      <div className="grain"></div>

      {/* Hero */}
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
          <p className="mt-6 text-white/60 text-xs sm:text-sm tracking-[0.15em] uppercase">
            Discover our capabilities across design, development, and production.
          </p>
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
      </section>

      {sections.map((s, i) => (
        <ScrollReveal key={i}>
          <ServiceSection section={s} />
        </ScrollReveal>
      ))}

      <Parallax speed={0.15}>
        <Marquee items={techMarquee} className="!border-t-0" />
      </Parallax>

      {/* CTA */}
      <ScrollReveal>
        <section className="min-h-screen flex flex-col items-center justify-center text-center relative border-t border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-50"></div>
          <div className="relative z-10 space-y-8 md:space-y-12 max-w-4xl px-6">
            <TextReveal
              as="h2"
              className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-tight"
              stagger={0.03}
            >
              READY TO MAKE YOUR VISION TRUE?
            </TextReveal>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-primary hover:bg-primary/80 text-white px-10 md:px-12 py-5 md:py-6 rounded-lg font-black uppercase tracking-[0.2em] transition-all text-xl md:text-2xl shadow-[0_0_40px_rgba(230,10,21,0.4)] cursor-pointer"
              >
                Initialize Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-primary/40 hover:bg-primary/10 text-primary px-10 md:px-12 py-5 md:py-6 rounded-lg font-black uppercase tracking-[0.2em] transition-all text-xl md:text-2xl cursor-pointer"
              >
                Download Stack
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
