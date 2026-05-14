import { motion } from 'framer-motion'

export default function Marquee({ items, className = '' }) {
  return (
    <section className={`marquee-section w-full py-12 md:py-16 border-t border-b border-white/5 bg-black overflow-hidden ${className}`}>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex items-center gap-8 md:gap-16 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-base md:text-xl font-bold uppercase text-white/20 hover:text-primary transition-colors duration-300 cursor-default whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
