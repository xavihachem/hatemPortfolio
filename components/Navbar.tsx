'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2, Home, User, Briefcase, Wrench, MessageCircle, Sparkles } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95])
  const navBlur = useTransform(scrollY, [0, 100], [8, 16])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Wrench },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ]

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <motion.div 
          className={`
            flex items-center justify-between 
            px-4 sm:px-6 py-2.5 rounded-2xl 
            border shadow-2xl
            transition-all duration-500 ease-out
            ${scrolled 
              ? 'bg-gray-900/90 border-white/10 w-[92%] max-w-4xl' 
              : 'bg-gray-900/70 border-white/5 w-[95%] max-w-5xl'}
          `}
          style={{ 
            backdropFilter: `blur(${navBlur}px)`,
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2.5 text-xl font-bold relative group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="relative p-2 bg-gradient-to-tr from-primary-500 via-purple-500 to-pink-500 rounded-xl text-white shadow-lg overflow-hidden"
              whileHover={{ rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-primary-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <Code2 className="w-5 h-5 relative z-10" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-lg leading-none">
                Ciro
              </span>
              <span className="text-[10px] text-primary-400 font-medium tracking-widest uppercase">
                Developer
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-xl border border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600/80 via-purple-600/80 to-pink-600/80 rounded-lg"
                      layoutId="navbar-active"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* CTA Button - Desktop */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Hire Me</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/10"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="fixed top-20 left-4 right-4 z-50 bg-gray-900/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/10 md:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary-600/80 via-purple-600/80 to-pink-600/80 text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto w-2 h-2 rounded-full bg-white"
                          layoutId="mobile-active"
                        />
                      )}
                    </motion.a>
                  )
                })}
              </div>
              
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="w-5 h-5" />
                <span>Let's Work Together</span>
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

