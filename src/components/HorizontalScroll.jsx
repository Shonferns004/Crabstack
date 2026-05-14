import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HorizontalScroll({
  children,
  className = '',
  containerClassName = '',
  offset = ['0 1', '1 0'],
  xRange = ['0%', '-50%'],
  scrollHeight,
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const x = useTransform(scrollYProgress, [0, 1], xRange)

  return (
    <section
      ref={ref}
      className={`relative ${containerClassName}`}
      style={scrollHeight ? { height: scrollHeight } : undefined}
    >
      <div className="sticky top-0 overflow-hidden" style={{ height: '100vh' }}>
        <motion.div
          style={{ x, willChange: 'transform' }}
          className={`h-full flex items-center ${className}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
