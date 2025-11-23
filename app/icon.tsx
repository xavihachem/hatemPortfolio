import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 32,
  height: 32,
}
 
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '30%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Creative Background Gradient */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'conic-gradient(from 0deg at 50% 50%, #0ea5e9 0deg, #9333ea 120deg, #ec4899 240deg, #0ea5e9 360deg)',
            transform: 'rotate(45deg)',
          }}
        />
        
        {/* Inner Shape */}
        <div
          style={{
            width: '80%',
            height: '80%',
            background: 'black',
            borderRadius: '25%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Stylized 'C' */}
          <div
             style={{
               width: '60%',
               height: '60%',
               border: '4px solid transparent',
               background: 'linear-gradient(135deg, #0ea5e9 0%, #ec4899 100%) border-box',
               mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
               WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
               borderRadius: '50%',
               borderRight: 'none',
               transform: 'rotate(-45deg)',
             }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
