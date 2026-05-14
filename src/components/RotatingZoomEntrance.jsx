import { useRef } from 'react'
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export default function RotatingZoomEntrance({
  children,
  className = '',
  offset = ['0 0.9', '0.45 1'],
  scaleRange = [0.5, 1],
  rotateZRange = [-16, 0],
  rotateXRange = [20, 0],
  opacityRange = [0, 1],
  blurRange = [10, 0],
  style: customStyle = {},
  ...rest
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset })

  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : scaleRange)
  const rotateZ = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : rotateZRange)
  const rotateX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : rotateXRange)
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange)
  const blur = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : blurRange)
  const filter = useMotionTemplate`blur(${blur}px)`

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        scale,
        rotateZ,
        rotateX,
        opacity,
        filter,
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 60%',
        willChange: 'transform, filter, opacity',
        ...customStyle,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
