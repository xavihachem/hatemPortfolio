'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-xl font-bold relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative z-10 p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
              whileHover={{ rotate: 180, backgroundColor: "rgba(255,255,255,0.2)" }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Code2 className="w-6 h-6 text-primary-600" />
            </motion.div>
            <span className="text-gradient font-extrabold tracking-tight">Ciro Hachem</span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 font-medium transition-colors duration-200 group overflow-hidden rounded-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
