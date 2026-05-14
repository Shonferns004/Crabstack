import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollRotation({
  children,
  className = '',
  rotateRange = [0, 360],
  scaleRange,
  offset = ['0 0.5', '0.5 0.5'],
  style: customStyle = {},
  ...rest
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange)
  const scale = scaleRange
    ? useTransform(scrollYProgress, [0, 1], scaleRange)
    : undefined

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotate,
        willChange: 'transform',
        ...(scale && { scale }),
        ...customStyle,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
