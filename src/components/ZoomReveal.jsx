import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ZoomReveal({
  children,
  className = '',
  scaleRange = [0.5, 1],
  rotateRange = [-2, 0],
  offset = ['0 0.85', '0.4 1'],
  duration = 0.7,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange)
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ scale, rotate, opacity, willChange: 'transform' }}
      transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
