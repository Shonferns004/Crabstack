import { Link } from 'react-router-dom'
import GlitchText from '../components/GlitchText'
import StoryParallax from '../components/StoryParallax'

export default function NotFound() {
  return (
    <>
      <div className="grain"></div>
      <StoryParallax>
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,10,21,0.12),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto -mt-16">
          <span className="text-[180px] md:text-[280px] font-black text-primary/10 leading-none select-none -mb-16">404</span>
          <div className="mb-6 flex flex-col items-center">
            <div className="bg-primary px-4 py-1 rounded-sm shadow-[0_0_20px_rgba(230,10,21,0.3)]">
              <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">ERROR</span>
            </div>
            <div className="h-14 w-[1px] bg-gradient-to-b from-primary to-transparent mt-2 opacity-50"></div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold uppercase select-none tracking-tight leading-[0.95] mb-6">
            PAGE NOT <br />
            <GlitchText text="FOUND" />
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-12">
            This route doesn't exist in our system. It may have been moved, deleted, or never deployed.
          </p>

          <Link
            to="/"
            className="group relative px-10 py-4 bg-neutral-900 border border-primary text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_25px_rgba(230,10,21,0.6)] overflow-hidden"
          >
            <span className="relative z-10">Return to Base</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-4 md:left-10 flex items-center gap-4 md:gap-6 z-20 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">System Offline [ERR]</span>
          </div>
          <div className="h-[1px] w-10 md:w-16 bg-white/20 hidden sm:block"></div>
          <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em]">404-v1.0.0</span>
        </div>

        <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 border-t border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 border-t border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 border-b border-l border-white/10 m-6 md:m-12 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 border-b border-r border-white/10 m-6 md:m-12 pointer-events-none"></div>
      </section>
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
