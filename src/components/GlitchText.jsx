export default function GlitchText({ text, className = '' }) {
  const outerClass = className.replace(/\btext-\S+/g, '').trim()
  const colorClass = className.match(/\btext-\S+/g)?.[0] || 'text-transparent'
  return (
    <span className={`relative inline-block ${outerClass}`}>
      <span className={`glitch-outline ${colorClass}`}>{text}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-transparent select-none pointer-events-none"
        style={{
          clipPath: 'polygon(0 15%, 100% 15%, 100% 20%, 0 20%)',
          transform: 'translateX(4px)',
          opacity: 0.5,
          WebkitTextStroke: '1px white',
          animation: 'glitch1 3s infinite ease-in-out',
        }}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-transparent select-none pointer-events-none"
        style={{
          clipPath: 'polygon(0 60%, 100% 60%, 100% 62%, 0 62%)',
          transform: 'translateX(-6px)',
          opacity: 0.4,
          WebkitTextStroke: '1px white',
          animation: 'glitch2 4s infinite ease-in-out',
        }}
      >
        {text}
      </span>
    </span>
  )
}
