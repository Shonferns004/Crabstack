import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ZoomScroll({
  children,
  className = '',
  scaleRange = [0.6, 1],
  opacityRange = [0, 1],
  rotateRange,
  perspective: perspectiveVal,
  offset = ['0 1', '0.5 1'],
  style: customStyle = {},
  ...rest
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange)
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange)
  const rotate = rotateRange
    ? useTransform(scrollYProgress, [0, 1], rotateRange)
    : undefined

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        scale,
        opacity,
        willChange: 'transform',
        ...(rotate && { rotate }),
        ...(perspectiveVal && { perspective: perspectiveVal }),
        ...customStyle,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
