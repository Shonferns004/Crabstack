import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollTransform3D({
  children,
  className = '',
  scaleRange = [0.8, 1],
  rotateXRange = [0, 0],
  rotateYRange = [0, 0],
  translateZRange = [0, 0],
  perspective = 1000,
  opacityRange,
  offset = ['0 0.85', '0.4 1'],
  style: customStyle = {},
  ...rest
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange)
  const rotateX = useTransform(scrollYProgress, [0, 1], rotateXRange)
  const rotateY = useTransform(scrollYProgress, [0, 1], rotateYRange)
  const translateZ = useTransform(scrollYProgress, [0, 1], translateZRange)
  const opacity = opacityRange
    ? useTransform(scrollYProgress, [0, 1], opacityRange)
    : undefined

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective,
        scale,
        rotateX,
        rotateY,
        translateZ,
        willChange: 'transform',
        ...(opacity !== undefined && { opacity }),
        ...customStyle,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
