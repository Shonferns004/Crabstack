export default function GlitchText({ text, className = '' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="glitch-outline text-transparent">{text}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-transparent select-none pointer-events-none"
        style={{
          clipPath: 'polygon(0 15%, 100% 15%, 100% 20%, 0 20%)',
          transform: 'translateX(4px)',
          opacity: 0.5,
          WebkitTextStroke: '1px white',
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
        }}
      >
        {text}
      </span>
    </span>
  )
}
