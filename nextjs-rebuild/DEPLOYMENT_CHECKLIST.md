# 🚀 Deployment Checklist

Use this checklist before going live with your new ClearView Sales website.

## Pre-Deployment

### ✅ Content Review
- [ ] Logo image added to `/public/mikelogo.png`
- [ ] Favicon added to `/public/favicon.ico`
- [ ] Hero background image optimized and working
- [ ] Testimonial photo (Ben E.) displaying correctly
- [ ] All contact information correct (phone, email, address)
- [ ] Calendly link working and pointing to correct schedule
- [ ] All section headings and copy reviewed for typos
- [ ] Job role pay amounts accurate ($2,000 and $3,000/week)

### ✅ Functionality Test
- [ ] Navigation links scroll to correct sections
- [ ] Mobile menu opens and closes properly
- [ ] All "Book a Call" CTAs link to #apply section
- [ ] Calendly widget loads and is interactive
- [ ] Forms submit correctly (if added)
- [ ] Header stays fixed on scroll
- [ ] Footer displays all contact info

### ✅ Responsive Design
Test on these screen sizes:
- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile (414px - iPhone Pro Max)
- [ ] Tablet (768px - iPad)
- [ ] Desktop (1024px)
- [ ] Large Desktop (1920px)

Check:
- [ ] Hero text hides on mobile < 768px
- [ ] CTAs remain visible on all sizes
- [ ] Cards stack properly on mobile
- [ ] Images don't overflow containers
- [ ] Text is readable (not too small)
- [ ] Touch targets are 44px+ on mobile

### ✅ Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest) - especially mobile Safari
- [ ] Edge (latest)

### ✅ Performance
Run Lighthouse audit in Chrome DevTools:
- [ ] Performance score > 90 (mobile)
- [ ] Performance score > 95 (desktop)
- [ ] Accessibility score = 100
- [ ] Best Practices score > 95
- [ ] SEO score = 100

Fix any critical issues before deploying.

### ✅ SEO Setup
- [ ] Page title set correctly
- [ ] Meta description compelling and under 160 chars
- [ ] OpenGraph tags configured
- [ ] Twitter Card tags configured
- [ ] All images have alt text
- [ ] Heading hierarchy correct (one H1, proper H2/H3)
- [ ] robots.txt allows crawling (if using)
- [ ] sitemap.xml generated (if using)

### ✅ Analytics
- [ ] Google Analytics ID added (if using)
- [ ] Meta Pixel ID verified (1925224911677372)
- [ ] Test Meta Pixel with Facebook Pixel Helper
- [ ] CTA click events firing correctly
- [ ] PageView events tracking

## Deployment Steps

### 1. Push to GitHub
```bash
# Initialize repo (if not already)
git init
git add .
git commit -m "Initial deployment"
git branch -M main

# Add your GitHub repo
git remote add origin https://github.com/YOUR-USERNAME/clearview-sales.git
git push -u origin main
```

### 2. Deploy to Vercel
- [ ] Sign up at [vercel.com](https://vercel.com) with GitHub
- [ ] Click "Add New Project"
- [ ] Import your repository
- [ ] Configure settings:
  - Framework Preset: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
- [ ] Add environment variables (if any)
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)

### 3. Verify Deployment
- [ ] Site loads at Vercel URL (xxx.vercel.app)
- [ ] No console errors
- [ ] All images load
- [ ] Calendly works
- [ ] Mobile responsive
- [ ] Meta Pixel firing (check Facebook Events Manager)

### 4. Custom Domain (Optional)
- [ ] Go to Project Settings → Domains in Vercel
- [ ] Add your domain (e.g., clearviewsalesco.com)
- [ ] Update DNS records at your registrar:
  ```
  Type: A
  Name: @
  Value: 76.76.21.21

  Type: CNAME
  Name: www
  Value: cname.vercel-dns.com
  ```
- [ ] Wait for DNS propagation (5min - 48hrs)
- [ ] Verify SSL certificate issued automatically
- [ ] Test site at your custom domain

## Post-Deployment

### ✅ Final Checks
- [ ] Test booking a call through Calendly
- [ ] Verify Meta Pixel events in Events Manager
- [ ] Check Google Analytics (if configured)
- [ ] Test all CTAs from mobile device
- [ ] Send test link to 3 friends for feedback
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap to Google (if using)

### ✅ Marketing
- [ ] Update website link on social media
- [ ] Update email signature
- [ ] Update Google Business Profile
- [ ] Update LinkedIn company page
- [ ] Share launch announcement

### ✅ Monitoring (First Week)
- [ ] Monitor Vercel Analytics for errors
- [ ] Check conversion rate (Calendly bookings)
- [ ] Monitor Lighthouse scores
- [ ] Collect user feedback
- [ ] Fix any reported issues

## Performance Budget

Monitor these weekly:

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse (Mobile) | 90+ | ___ |
| Lighthouse (Desktop) | 95+ | ___ |
| Page Load Time | < 3s | ___ |
| Total Page Size | < 1MB | ___ |
| CTA Click Rate | 5%+ | ___ |
| Calendly Conversion | 2%+ | ___ |

## Rollback Plan

If something breaks:

1. **Vercel Dashboard** → Your Project → Deployments
2. Find last working deployment
3. Click "..." menu → "Promote to Production"
4. Fix issue in code
5. Redeploy

## Support Contacts

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Calendly Support**: [help.calendly.com](https://help.calendly.com)

---

## Quick Deployment (TL;DR)

```bash
# 1. Install
npm install

# 2. Test locally
npm run dev

# 3. Push to GitHub
git init && git add . && git commit -m "Deploy"
git remote add origin YOUR_REPO_URL
git push -u origin main

# 4. Deploy on Vercel
# Go to vercel.com → Import → Deploy

# Done! 🎉
```

---

**Last Updated**: November 2025
**Next Review**: After first deployment
