'use client'

import { motion } from 'framer-motion'
import { Heart, Code2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-8 h-8 text-primary-400" />
            <span className="text-2xl font-bold">Portfolio</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Building digital experiences with passion and precision
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>by Computer Scientist</span>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
