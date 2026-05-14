import { motion } from 'framer-motion'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const hidden = {
    opacity: 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
  }
  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
