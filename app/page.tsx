import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CustomCursor from '@/components/CustomCursor'

// Lazy load components that are below the fold
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false })
const SectionDivider = dynamic(() => import('@/components/SectionDivider'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CustomCursor />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
