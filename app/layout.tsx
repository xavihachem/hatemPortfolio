import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ciro Hachem | Full-Stack Developer & Freelancer',
  description: 'Full-stack developer and freelancer based in Algiers, Algeria. Master\'s in Computer Science specializing in web development, AI/ML, and creating exceptional digital experiences.',
  keywords: ['Ciro Hachem', 'Full-Stack Developer', 'Freelancer', 'Web Developer', 'Algeria', 'Algiers', 'React', 'Next.js', 'Node.js', 'Software Engineer', 'Computer Science'],
  authors: [{ name: 'Ciro Hachem', url: 'mailto:cirodev@gmail.com' }],
  creator: 'Ciro Hachem',
  publisher: 'Ciro Hachem',
  metadataBase: new URL('https://cirohachem.com'), // Update this with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Ciro Hachem | Full-Stack Developer & Freelancer',
    description: 'Full-stack developer and freelancer based in Algiers, Algeria. Master\'s in Computer Science specializing in web development, AI/ML, and creating exceptional digital experiences.',
    siteName: 'Ciro Hachem Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Ciro Hachem - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ciro Hachem | Full-Stack Developer & Freelancer',
    description: 'Full-stack developer and freelancer based in Algiers, Algeria. Specializing in web development, AI/ML, and creating exceptional digital experiences.',
    images: ['/profile.png'],
    creator: '@cirohachem', // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ciro Hachem',
    jobTitle: 'Full-Stack Developer',
    description: 'Full-stack developer and freelancer based in Algiers, Algeria. Master\'s in Computer Science specializing in web development, AI/ML, and creating exceptional digital experiences.',
    url: 'https://cirohachem.com',
    email: 'cirodev@gmail.com',
    telephone: '+213781226974',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Algiers',
      addressCountry: 'DZ',
    },
    sameAs: [
      // Add your social media profiles here
      // 'https://github.com/yourusername',
      // 'https://linkedin.com/in/yourusername',
      // 'https://twitter.com/yourusername',
    ],
    knowsAbout: [
      'Full-Stack Development',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Web Development',
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Master\'s in Computer Science',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
