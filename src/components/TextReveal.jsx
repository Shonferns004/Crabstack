import { motion } from 'framer-motion'

export default function TextReveal({
  children,
  className = '',
  as: Tag = 'h2',
  stagger = 0.04,
  delay = 0,
  wordClassName = '',
}) {
  const text = typeof children === 'string' ? children : ''
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 30, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className={`inline-block ${wordClassName}`}
          style={{ marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
