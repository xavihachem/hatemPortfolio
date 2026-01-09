'use client'

import { motion } from 'framer-motion'
import { Heart, Code2, Github, Linkedin, Mail, ArrowUp, Sparkles, MapPin, Coffee, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/xavihachem', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hachem-djefafla-9069042ba/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Mail, href: 'mailto:cirodev@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative p-3 bg-gradient-to-tr from-primary-500 via-purple-500 to-pink-500 rounded-2xl text-white shadow-lg overflow-hidden"
                whileHover={{ rotate: 12 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-primary-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <Code2 className="w-7 h-7 relative z-10" />
              </motion.div>
              <div>
                <span className="text-2xl font-bold text-white">Ciro Hachem</span>
                <p className="text-xs text-primary-400 font-medium tracking-wider uppercase">Full-Stack Developer</p>
              </div>
            </motion.div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technology. 
              Passionate about turning ideas into reality through clean code and creative solutions.
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>Algiers, Algeria 🇩🇿</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-white/5 border border-white/10 rounded-xl ${social.color} transition-all duration-300 group`}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 transition-colors" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Status & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-400" />
              Let's Connect
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm text-gray-300">Available for freelance</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Coffee className="w-4 h-4" />
                <span>Open to new opportunities</span>
              </div>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-gray-800 border border-white/10 rounded-full hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 group"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <Coffee className="w-4 h-4 text-amber-500" />
            <span>by Ciro Hachem</span>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} Ciro Hachem. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
