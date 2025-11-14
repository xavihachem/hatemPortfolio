# SEO & Social Media Setup Guide

## 🎯 Meta Tags & Social Sharing

Your portfolio now includes comprehensive meta tags for optimal social media sharing!

### ✅ What's Included

#### 1. **Open Graph Tags** (Facebook, LinkedIn, WhatsApp)
- Title: "Ciro Hachem | Full-Stack Developer & Freelancer"
- Description: Professional summary
- Image: Dynamic OG image with your branding
- Type: Website

#### 2. **Twitter Cards**
- Card Type: Large image summary
- Custom Twitter image
- Optimized for Twitter sharing

#### 3. **SEO Meta Tags**
- Keywords: Ciro Hachem, Full-Stack Developer, Algeria, etc.
- Author information
- Canonical URLs
- Robots directives

#### 4. **Favicons**
- Dynamic favicon with "C" letter
- Multiple sizes (16x16, 32x32, 180x180)
- Apple touch icon
- Android chrome icons
- Gradient background (blue → purple → pink)

### 📱 How It Looks When Shared

When you share your portfolio link on:

**Facebook/LinkedIn/WhatsApp:**
- Shows a beautiful card with gradient background
- Your name "Ciro Hachem"
- Title: "Full-Stack Developer & Freelancer"
- Location: "🇩🇿 Algiers, Algeria"
- Status: "💼 Available for Freelance"

**Twitter:**
- Large image card
- Same professional branding
- Optimized dimensions (1200x630)

**Browser Tab:**
- Letter "C" favicon with gradient
- Title: "Ciro Hachem | Full-Stack Developer & Freelancer"

### 🔧 Customization

#### Update Your Domain
In `app/layout.tsx`, line 14, change:
```typescript
metadataBase: new URL('https://cirohachem.com'),
```
to your actual domain when deployed.

#### Update Twitter Handle
In `app/layout.tsx`, line 39, update:
```typescript
creator: '@cirohachem',
```
to your actual Twitter/X handle.

#### Update Sitemap
In `app/sitemap.ts`, line 4, change:
```typescript
const baseUrl = 'https://cirohachem.com'
```
to your actual domain.

### 🧪 Testing Your Meta Tags

Use these tools to preview how your site will look when shared:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Preview**: https://www.opengraph.xyz/

### 📊 Files Created

```
app/
├── icon.tsx              # Dynamic favicon (32x32)
├── apple-icon.tsx        # Apple touch icon (180x180)
├── opengraph-image.tsx   # Open Graph image (1200x630)
├── twitter-image.tsx     # Twitter card image (1200x630)
├── sitemap.ts           # XML sitemap
└── layout.tsx           # Updated with meta tags

public/
├── site.webmanifest     # PWA manifest
├── robots.txt           # Search engine directives
├── favicon.svg          # SVG favicon
├── icon-192.svg         # Android icon
└── icon-512.svg         # Android icon (large)
```

### 🚀 Next Steps

1. **Deploy your site** to get a real domain
2. **Update the domain** in layout.tsx and sitemap.ts
3. **Test the meta tags** using the tools above
4. **Submit your sitemap** to Google Search Console
5. **Share your link** and watch the beautiful preview cards appear!

### 💡 Tips

- The OG images are generated dynamically by Next.js
- They update automatically if you change the text
- The gradient matches your portfolio's color scheme
- All images are optimized for fast loading

### 🎨 Favicon Colors

The favicon uses your portfolio's gradient:
- Primary Blue: `#0ea5e9`
- Purple: `#9333ea`
- Pink: `#ec4899`

---

Made with ❤️ by Ciro Hachem
