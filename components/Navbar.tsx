'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
            className={`
                flex items-center justify-between 
                px-6 py-3 rounded-full 
                backdrop-blur-md border border-white/20 shadow-lg
                transition-all duration-500 ease-out
                ${scrolled ? 'bg-white/80 w-[90%] max-w-5xl' : 'bg-white/50 w-[95%] max-w-6xl'}
            `}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-xl font-bold relative group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative p-2 bg-gradient-to-tr from-primary-500 to-purple-600 rounded-xl text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-gray-800 font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 transition-all">
                Ciro
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-white/20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className={`relative z-10 transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-600'}`}>
                  {item.name}
                </span>
                
                <AnimatePresence>
                    {hoveredIndex === index && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full shadow-md"
                        layoutId="navbar-pill"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                    )}
                </AnimatePresence>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-600 rounded-xl transition-all font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

