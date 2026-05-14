import { motion } from 'framer-motion'

const spring = {
  type: 'spring',
  stiffness: 150,
  damping: 8,
  mass: 0.7,
}

export default function BouncyScroll({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={child.key ?? i}
              initial={{ opacity: 0, scale: 0.6, rotate: -6, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: i * stagger }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
