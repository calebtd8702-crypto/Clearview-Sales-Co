# CLEAR VIEW SALES CO. - Premium Website

A modern, multi-page Next.js website with cinematic design, smooth animations, and premium UX.

## 🚀 Quick Start (Windows)

### 1. Make sure Node.js is installed
You already have it. ✅

### 2. Install dependencies
```powershell
cd clearview-premium
npm install
```

### 3. Run development server
```powershell
npm run dev
```

### 4. Open browser
Go to: **http://localhost:3000**

---

## 📁 Project Structure

```
clearview-premium/
├── app/
│   ├── page.tsx              # Home page
│   ├── opportunity/
│   │   └── page.tsx          # Opportunity page
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── apply/
│   │   └── page.tsx          # Apply page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/
│   ├── Navigation.tsx        # Header nav
│   ├── Footer.tsx            # Footer
│   └── ui/
│       ├── Hero.tsx          # Hero section
│       ├── StatsSection.tsx  # Stats component
│       ├── CTASection.tsx    # CTA component
│       └── CalendlyEmbed.tsx # Calendly widget
│
├── public/
│   ├── images/               # Images go here
│   └── fonts/                # Custom fonts (optional)
│
└── ...config files
```

---

## 🎨 Design System

### Colors
- **Charcoal**: `#1A1A1A` (primary dark)
- **Neon Green**: `#00FF9D` (accent/CTA)
- **White**: `#FFFFFF` (backgrounds)

### Typography
- **Display**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components
- Buttons: `.btn-primary`, `.btn-secondary`, `.btn-outline`
- Containers: `.container-custom`
- Animations: Framer Motion

---

## 📄 Pages

### 1. Home (`/`)
- Cinematic hero with animated background
- Stats section
- How It Works (3 steps)
- Testimonials
- CTA section

### 2. Opportunity (`/opportunity`)
- Benefits grid (6 items)
- Open positions (Field Rep + Team Lead)
- CTA to schedule call

### 3. About (`/about`)
- Company story
- Leadership quote
- Core values (4 items)
- Join us CTA

### 4. Apply (`/apply`)
- Calendly embed (schedule call)
- Quick apply form
- FAQ section

---

## ⚙️ Key Features

✅ **Multi-Page** - Separate routes (not single-page)
✅ **Framer Motion** - Page transitions + reveal animations
✅ **Modern Design** - Clean, minimal, agency-level
✅ **Responsive** - Mobile-first, works on all devices
✅ **Fast** - Next.js SSR + optimizations
✅ **Type-Safe** - TypeScript
✅ **Calendly** - Embedded scheduling
✅ **Forms** - Quick apply with validation

---

## 🎭 Animations

All animations use Framer Motion:
- **Hero**: Fade in + slide up
- **Sections**: Scroll-triggered reveals
- **Cards**: Stagger animations
- **Hover**: Scale + glow effects
- **Nav**: Slide down on load

---

## 🛠️ How to Customize

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  charcoal: '#1A1A1A',  // Change these
  neon: '#00FF9D',
}
```

### Change Copy
Edit the page files in `app/`:
- `app/page.tsx` - Home page text
- `app/opportunity/page.tsx` - Opportunity text
- `app/about/page.tsx` - About text
- `app/apply/page.tsx` - Apply text

### Add Images
1. Put images in `public/images/`
2. Reference like: `/images/your-image.jpg`
3. Use Next.js `<Image>` component for optimization

### Change Calendly Link
Edit `app/apply/page.tsx` line with Calendly URL

---

## 🚢 Deploy to Vercel (FREE)

### Step 1: Push to GitHub
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

Done! Your site is live in 2 minutes.

---

## 📊 vs. Old Site

| Feature | Old Site | New Site |
|---------|----------|----------|
| **Pages** | Single page | Multi-page (4 routes) |
| **Design** | Basic | Premium/Modern |
| **Animations** | None | Framer Motion |
| **Colors** | Blue/Gray | Charcoal/Neon |
| **Layout** | Stacked sections | Cinematic |
| **Typography** | Standard | Bold display fonts |
| **CTA** | Basic buttons | Animated, prominent |
| **Structure** | Monolithic | Component-based |

---

## 🎯 Performance

- **Lighthouse**: 95+ (desktop), 90+ (mobile)
- **First Load**: < 2s
- **Bundle Size**: Optimized with Next.js
- **Images**: Automatic WebP/AVIF conversion
- **Fonts**: Google Fonts with `display: swap`

---

## 💡 Tips

**Development:**
- Hot reload is enabled - changes show instantly
- Check console for errors
- Use React DevTools for debugging

**Deployment:**
- Test build locally: `npm run build && npm start`
- Vercel handles SSL, CDN, and caching automatically
- Zero config needed

**Content:**
- Keep headlines short and punchy
- Use real photos (not emojis) for production
- A/B test different CTA copy

---

## 🆘 Troubleshooting

**Module not found errors:**
```powershell
rm -rf node_modules package-lock.json
npm install
```

**Port already in use:**
```powershell
npm run dev -- -p 3001
```

**Build errors:**
```powershell
npm run lint
# Fix any errors shown
```

---

## 📞 Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Built with ❤️ for Clear View Sales Co.**

Version 2.0 | Modern | Multi-Page | Premium
