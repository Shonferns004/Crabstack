import { useState, useEffect } from 'react'
import { API_URL } from '../apiUrl'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/settings`)
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          setSettings(data)
        }
      })
      .catch(() => {})
  }, [])

  const s = settings || {}
  const year = new Date().getFullYear()

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch(`${API_URL}/subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus(''), 4000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus(''), 4000)
    }
  }

  return (
    <footer className="py-24 md:py-32 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-12">
              {(s.site_title ? `${s.site_title}`.split(' ')[0] : 'INITIATE')} <br /><span className="text-primary">CONTACT</span>
            </h2>
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-white/50 text-[9px] font-bold tracking-[0.4em] uppercase mb-4 block">
                  COMMS
                </span>
                <p className="text-sm md:text-base font-bold">{s.site_email || 'connect@crabstack.io'}</p>
                {s.site_phone && (
                  <p className="text-sm md:text-base font-bold mt-2">
                    {s.site_phone.split(',').map((n, i) => <span key={i}>{n.trim()}<br /></span>)}
                  </p>
                )}
              </div>
              <div>
                <span className="text-white/50 text-[9px] font-bold tracking-[0.4em] uppercase mb-4 block">
                  LOCATION
                </span>
                {s.site_address ? (
                  s.site_address.split(',').map((line, i) => (
                    <p key={i} className="text-sm md:text-base font-bold">{line.trim()}</p>
                  ))
                ) : (
                  <>
                    <p className="text-sm md:text-base font-bold">Andheri East</p>
                    <p className="text-sm md:text-base font-bold">Mumbai, Maharashtra</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="max-w-md">
              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-12">
                {s.footer_text || 'Join the vanguard of digital engineering. Now accepting high-priority digital missions.'}
              </p>
              <form className="relative" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="TRANSMISSION@CLIENT.COM"
                  className="w-full bg-transparent border-b border-white/20 py-4 pr-24 focus:outline-none focus:border-primary text-sm tracking-widest uppercase transition-colors"
                  required
                />
                <button className="absolute right-0 bottom-2 text-red-400 font-bold text-[10px] tracking-widest cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center">
                  {status === 'sending' ? 'SENDING...' : status === 'success' ? 'SENT' : 'CONNECT'}
                </button>
              </form>
              {status === 'success' && (
                <p className="text-green-400 text-[10px] tracking-widest uppercase mt-2">Subscribed successfully</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-[10px] tracking-widest uppercase mt-2">Failed — try again</p>
              )}
            </div>

            <div className="flex items-center gap-6 md:gap-12 mt-16 md:mt-24 flex-wrap">
              <span className="text-[10px] text-white/50 font-bold tracking-[0.5em]">
                {'\u00A9' + year + ' CRABSTACK. ALL RIGHTS RESERVED.'}
              </span>
              <div className="h-[1px] flex-grow bg-white/5 min-w-[40px]"></div>
              <div className="flex gap-6 md:gap-8">
                {(s.social_twitter || s.social_instagram || s.social_linkedin) ? (
                  <>
                    {s.social_twitter && <a href={s.social_twitter} target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/60 hover:text-primary transition-colors font-bold tracking-widest min-w-[28px] min-h-[28px] flex items-center justify-center">TW</a>}
                    {s.social_instagram && <a href={s.social_instagram} target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/60 hover:text-primary transition-colors font-bold tracking-widest min-w-[28px] min-h-[28px] flex items-center justify-center">IG</a>}
                    {s.social_linkedin && <a href={s.social_linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/60 hover:text-primary transition-colors font-bold tracking-widest min-w-[28px] min-h-[28px] flex items-center justify-center">LI</a>}
                  </>
                ) : (
                  <>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest">TW</span>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest">IG</span>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest">LI</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
