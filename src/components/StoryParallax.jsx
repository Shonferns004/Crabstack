import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function StoryParallax({ children, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.85', '0.4 0.3'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1])
  const bgGlow = useTransform(scrollYProgress, [0, 1], [0, 0.6])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: bgGlow }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-primary/5 blur-[100px] rounded-full" />
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="will-change-transform relative"
      >
        {children}
      </motion.div>
    </div>
  )
}
