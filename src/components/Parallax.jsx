import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax({
  children,
  className = '',
  speed = 0.3,
  offset = ['0 0', '1 0'],
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, willChange: 'transform' }}>{children}</motion.div>
    </div>
  )
}
