'use client'

import { memo } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

const SectionDivider = memo(function SectionDivider() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative h-24 flex items-center justify-center overflow-hidden">
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </motion.div>
      </div>
    </LazyMotion>
  )
})

export default SectionDivider
