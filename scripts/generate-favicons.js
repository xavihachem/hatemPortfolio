// Simple script to generate favicon files
// Run this with: node scripts/generate-favicons.js

const fs = require('fs');
const path = require('path');

// SVG content for the favicon
const generateSVG = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#9333ea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.6}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">C</text>
</svg>
`;

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate SVG files for different sizes
const sizes = [
  { name: 'favicon.svg', size: 64 },
  { name: 'icon-192.svg', size: 192 },
  { name: 'icon-512.svg', size: 512 },
];

sizes.forEach(({ name, size }) => {
  const svgContent = generateSVG(size);
  fs.writeFileSync(path.join(publicDir, name), svgContent.trim());
  console.log(`✓ Generated ${name}`);
});

// Create a simple ICO file (base64 encoded 16x16 favicon)
const icoContent = generateSVG(32);
fs.writeFileSync(path.join(publicDir, 'favicon-temp.svg'), icoContent.trim());
console.log('✓ Generated favicon-temp.svg (rename to .ico if needed)');

console.log('\n✅ Favicon generation complete!');
console.log('\nNote: For best results, use an online tool like https://realfavicongenerator.net/');
console.log('to convert the SVG files to PNG and ICO formats for maximum compatibility.');
