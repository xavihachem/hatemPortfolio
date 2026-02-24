'use client'

import { memo, useState, useCallback } from 'react'
import { motion, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, MessageCircle, Clock, Globe, Sparkles, ArrowRight, CheckCircle, Github, Linkedin, Zap } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hachem02000@gmail.com',
    href: 'mailto:hachem02000@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Algiers, Algeria',
    href: '#',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Clock,
    label: 'Timezone',
    value: 'GMT+1 (CET)',
    href: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    label: 'Languages',
    value: 'English, French, Arabic',
    href: '#',
    color: 'from-purple-500 to-pink-500',
  },
] as const

const services = [
  { title: 'Web Development', description: 'Full-stack web applications with modern technologies', icon: '🌐' },
  { title: 'Mobile Apps', description: 'Cross-platform mobile applications', icon: '📱' },
  { title: 'AI Integration', description: 'Machine learning and AI-powered solutions', icon: '🤖' },
  { title: 'Consulting', description: 'Technical consulting and code reviews', icon: '💡' },
] as const

const socialLinks = [
  { icon: Github, href: 'https://github.com/xavihachem', label: 'GitHub', color: 'hover:bg-gray-700' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/hachem-djefafla-9069042ba/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: Mail, href: 'mailto:hachem02000@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
] as const

interface ServiceCardProps {
  service: typeof services[number]
  index: number
  isActive: boolean
  onHover: () => void
}

const ServiceCard = memo(function ServiceCard({ service, index, isActive, onHover }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={onHover}
      className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
        isActive
          ? 'bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 text-white shadow-xl'
          : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
      }`}
    >
      <span className="text-3xl mb-3 block">{service.icon}</span>
      <h4 className={`font-bold mb-1 ${isActive ? 'text-white' : 'text-gray-900'}`}>
        {service.title}
      </h4>
      <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
        {service.description}
      </p>
    </motion.div>
  )
})

interface ContactInfoItemProps {
  item: typeof contactInfo[number]
  index: number
}

const ContactInfoItem = memo(function ContactInfoItem({ item, index }: ContactInfoItemProps) {
  const Icon = item.icon

  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group hover:translate-x-1"
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-500">{item.label}</p>
        <p className="text-gray-900 font-medium text-sm">{item.value}</p>
      </div>
    </motion.a>
  )
})

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [activeService, setActiveService] = useState(0)

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => setFormStatus('sent'), 2000)
    setTimeout(() => setFormStatus('idle'), 5000)
  }, [])

  const handleServiceHover = useCallback((index: number) => {
    setActiveService(index)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
              Let's Connect
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's create something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900">
              What I Can Help You With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  isActive={activeService === index}
                  onHover={() => handleServiceHover(index)}
                />
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Let's Talk</h3>
                    <p className="text-sm text-gray-500">I usually respond within 24 hours</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <ContactInfoItem key={item.label} item={item} index={index} />
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-3">Connect with me</p>
                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-100 rounded-xl ${social.color} transition-all duration-300 group hover:scale-105 hover:-translate-y-1`}
                      >
                        <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px',
                  }} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">Quick Response</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-black text-primary-400">24h</p>
                      <p className="text-xs text-gray-400">Avg. Response</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-green-400">100%</p>
                      <p className="text-xs text-gray-400">Reply Rate</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Send a Message</h3>
                      <p className="text-sm text-gray-500">Fill out the form below</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-gray-50 hover:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-gray-50 hover:bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-gray-50 hover:bg-white"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Budget Range (Optional)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select a range</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none bg-gray-50 hover:bg-white"
                        placeholder="Tell me about your project, goals, and timeline..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formStatus !== 'idle'}
                      className="w-full bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-70 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <AnimatePresence mode="wait">
                        {formStatus === 'idle' && (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <span>Send Message</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        )}
                        {formStatus === 'sending' && (
                          <motion.div
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Sparkles className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                          </motion.div>
                        )}
                        {formStatus === 'sent' && (
                          <motion.div
                            key="sent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-5 h-5" />
                            <span>Message Sent!</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
