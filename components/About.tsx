'use client'

import { memo, useState, useCallback } from 'react'
import { motion, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Target, Rocket, Code2, Globe } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: "Master's Degree",
    description: 'Advanced Computer Science education with focus on software engineering and algorithms',
    stat: '5+ Years',
    statLabel: 'of Learning',
  },
  {
    icon: Briefcase,
    title: 'Freelance Expert',
    description: 'Successfully delivered numerous projects for clients worldwide',
    stat: '50+',
    statLabel: 'Projects',
  },
  {
    icon: Award,
    title: 'Quality Focused',
    description: 'Committed to writing clean, maintainable, and scalable code',
    stat: '100%',
    statLabel: 'Satisfaction',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Passionate about tackling complex challenges with innovative solutions',
    stat: '24/7',
    statLabel: 'Dedication',
  },
] as const

const timeline = [
  {
    year: '2025',
    title: 'Mobile App Developer',
    company: 'Freelance',
    description: 'Building cross-platform mobile applications with Flutter, specializing in AI integration and beautiful UI/UX design.',
    icon: Rocket,
    color: 'from-primary-500 to-purple-500',
  },
  {
    year: '2024',
    title: "Site Developer",
    company: 'Freelance',
    description: 'Developing responsive websites and web applications using modern frameworks and best practices.',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2024',
    title: "Computer Science Master's",
    company: 'University',
    description: 'Completed advanced studies in algorithms, system design, and software engineering.',
    icon: GraduationCap,
    color: 'from-rose-500 to-orange-500',
  },
  {
    year: '2023',
    title: 'Flutter Developer',
    company: 'Freelance',
    description: 'Developed multiple Flutter applications for clients, implementing state management, Firebase integration, and REST APIs.',
    icon: Code2,
    color: 'from-pink-500 to-rose-500',
  },
  {
    year: '2023',
    title: 'Junior Developer',
    company: 'Freelance',
    description: 'Started professional journey building mobile apps and websites, learning best practices and software architecture.',
    icon: Briefcase,
    color: 'from-orange-500 to-amber-500',
  },
] as const

const tabs = [
  { id: 0, label: 'Journey', icon: Rocket },
  { id: 1, label: 'Experience', icon: Briefcase },
  { id: 2, label: 'Philosophy', icon: Target },
] as const

const tabContent = [
  {
    title: 'My Journey',
    content: `With a Master's degree in Computer Science, I've focused my career on mobile app development with Flutter. Based in Algiers, Algeria, I specialize in building beautiful, performant cross-platform applications that deliver exceptional user experiences. My passion lies in creating innovative solutions using Flutter's powerful framework.`,
  },
  {
    title: 'Professional Experience',
    content: `I have hands-on experience building diverse Flutter applications ranging from e-commerce platforms to AI-powered job search tools. My freelancing journey has taught me the importance of clean architecture, responsive design, and delivering high-quality mobile experiences that users love.`,
  },
  {
    title: 'My Philosophy',
    content: `I'm constantly learning and staying updated with the latest Flutter ecosystem updates and best practices. My goal is to create mobile applications that not only work flawlessly but also provide delightful user experiences that make a real difference in people's daily lives.`,
  },
] as const

interface HighlightCardProps {
  item: typeof highlights[number]
  index: number
}

const HighlightCard = memo(function HighlightCard({ item, index }: HighlightCardProps) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 h-full">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary-600" />
        </div>

        <div className="mb-3">
          <span className="text-3xl font-black text-gradient">{item.stat}</span>
          <p className="text-xs text-gray-500 font-medium">{item.statLabel}</p>
        </div>

        <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  )
})

interface TimelineItemProps {
  item: typeof timeline[number]
  index: number
}

const TimelineItem = memo(function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative flex flex-col lg:flex-row items-center ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } lg:mb-12`}
    >
      <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-bold rounded-full`}>
              {item.year}
            </span>
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
          <p className="text-primary-600 font-medium text-sm mb-2">{item.company}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      <div className="hidden lg:flex w-2/12 justify-center">
        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} shadow-lg ring-4 ring-white hover:scale-125 transition-transform duration-300`} />
      </div>

      <div className="hidden lg:block w-5/12" />
    </motion.div>
  )
})

const TabButton = memo(function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: typeof tabs[number]
  isActive: boolean
  onClick: () => void
}) {
  const Icon = tab.icon

  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold transition-all duration-300 hover:scale-[1.02] ${
        isActive
          ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600'
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden sm:inline">{tab.label}</span>
    </button>
  )
})

export default function About() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = useCallback((tabId: number) => {
    setActiveTab(tabId)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl opacity-50" />
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
              Get to Know Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A passionate Flutter developer dedicated to building beautiful cross-platform mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {highlights.map((item, index) => (
              <HighlightCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Career <span className="text-gradient">Timeline</span>
            </h3>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-purple-200 to-pink-200 rounded-full hidden lg:block" />

              <div className="space-y-8 lg:space-y-0">
                {timeline.map((item, index) => (
                  <TimelineItem key={item.year} item={item} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto"
          >
            <div className="flex border-b border-gray-100">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabChange(tab.id)}
                />
              ))}
            </div>

            <div className="p-8 relative overflow-hidden min-h-[200px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {tabContent[activeTab].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      activeTab === tab.id ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  )
}
