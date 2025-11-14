import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Ciro Hachem - Full-Stack Developer & Freelancer'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #9333ea 50%, #ec4899 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Ciro Hachem
          </div>
          <div
            style={{
              fontSize: 40,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 30,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            Full-Stack Developer & Freelancer
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              gap: 20,
            }}
          >
            <span>🇩🇿 Algiers, Algeria</span>
            <span>•</span>
            <span>💼 Available for Freelance</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
