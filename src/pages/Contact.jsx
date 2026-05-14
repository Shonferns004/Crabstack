import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import GlitchText from '../components/GlitchText'
import { API_URL } from '../apiUrl'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)
    const fullMessage = [
      form.message,
      form.type && `Project Type: ${form.type}`,
      form.budget && `Budget: ${form.budget}`,
    ].filter(Boolean).join('\n\n---\n')
    try {
      const res = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: fullMessage }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setSent(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
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
              <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">CONTACT_US</span>
            </div>
            <div className="h-14 w-[1px] bg-gradient-to-b from-primary to-transparent mt-2 opacity-50"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(2.5rem,10vw,8rem)] font-bold uppercase tracking-tight leading-[0.95]"
          >
            LET'S BUILD<br />
            <GlitchText text="TOGETHER" />
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
      </section>

      {/* Form */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-6 bg-black border-t border-white/5" id="inquiry-form">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
              <div className="md:col-span-4">
                <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Inquiry_Protocol</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none">START_YOUR_PROJECT</h2>
              </div>
            </div>

            {sent ? (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">check_circle</span>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">Transmission Received</h3>
                <p className="text-white/40 mt-2 text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded">{error}</div>
                )}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <label className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-1 block">FULL_NAME</label>
                    <input
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary text-sm tracking-widest uppercase transition-all duration-300 placeholder:text-white/30"
                      placeholder="ENTER YOUR NAME"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-1 block">EMAIL_ADDRESS</label>
                    <input
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary text-sm tracking-widest uppercase transition-all duration-300 placeholder:text-white/30"
                      placeholder="EMAIL@DOMAIN.COM"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <label className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-1 block">PROJECT_TYPE</label>
                    <select
                      value={form.type}
                      onChange={e => setForm({...form, type: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary text-sm tracking-widest uppercase transition-all duration-300 appearance-none text-white"
                    >
                      <option value="" className="bg-black">SELECT PROJECT TYPE</option>
                      <option value="web" className="bg-black">WEB DEVELOPMENT</option>
                      <option value="design" className="bg-black">UI/UX & DESIGN</option>
                      <option value="marketing" className="bg-black">MARKETING & GROWTH</option>
                      <option value="events" className="bg-black">EVENTS & PRODUCTION</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-1 block">ESTIMATED_BUDGET</label>
                    <input
                      value={form.budget}
                      onChange={e => setForm({...form, budget: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary text-sm tracking-widest uppercase transition-all duration-300 placeholder:text-white/30"
                      placeholder="ESTIMATED BUDGET"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-1 block">DETAILED_PROJECT_BRIEF</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary text-sm tracking-widest uppercase transition-all duration-300 placeholder:text-white/30 resize-none"
                    placeholder="TELL US ABOUT YOUR WILD VISION..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="pt-8 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="group relative px-10 md:px-12 py-5 bg-neutral-900 border border-primary text-primary font-bold uppercase tracking-[0.3em] text-xs transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_30px_rgba(230,10,21,0.4)] overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10">EXECUTE_TRANSMISSION</span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </section>
      </ScrollReveal>

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
