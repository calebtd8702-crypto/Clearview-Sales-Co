# 🚀 Premium Site - Windows Setup

## THIS IS YOUR NEW SITE

This is a **COMPLETELY NEW** website. Not a recreation of your old site.

### What's Different:
✅ **Multi-page** (Home, Opportunity, About, Apply)
✅ **Modern design** (Charcoal + Neon Green color scheme)
✅ **Cinematic layout** (inspired by synergynwrep.com and bluxstudio.com)
✅ **Framer Motion animations** (smooth page transitions)
✅ **Bold typography** (Space Grotesk + Inter fonts)
✅ **Premium components** (Hero, Stats, CTA, etc.)

---

## 📥 How to Run It (Windows)

### STEP 1: Download the Files

Go to your GitHub repo, branch `claude/check-index-html-011CUsDYCNmCqgov8oDnRm7L`

Download: **`clearview-premium.zip`** (23KB)

---

### STEP 2: Extract the Zip

1. Right-click on `clearview-premium.zip`
2. Choose "Extract All..."
3. Extract to your Desktop or Downloads

You'll get a folder called: `clearview-premium`

---

### STEP 3: Open PowerShell

1. Open the `clearview-premium` folder
2. Hold **Shift** + **Right-click** inside the folder
3. Choose "Open PowerShell window here"

---

### STEP 4: Install Dependencies

In PowerShell, type:
```powershell
npm install
```

Press **Enter**. Wait 1-2 minutes.

---

### STEP 5: Start the Site

Type:
```powershell
npm run dev
```

Press **Enter**.

You'll see:
```
✓ Ready in 3s
- Local: http://localhost:3000
```

---

### STEP 6: Open in Browser

1. Open Chrome, Firefox, or Edge
2. Go to: **`localhost:3000`**
3. **BOOM!** You'll see your NEW premium website

---

## 🎨 What You'll See

### Home Page (`/`)
- **Massive hero headline**: "Earn based on how hard you work."
- Animated background blobs
- Stats bar (earnings, commission, etc.)
- How It Works (3 steps)
- Testimonials section
- CTA to schedule call

### Opportunity Page (`/opportunity`)
- Benefits grid (6 cards)
- Open positions (Field Rep + Team Lead)
- Detailed job info

### About Page (`/about`)
- Company story
- Leadership quote
- Core values

### Apply Page (`/apply`)
- Calendly embed (schedule intro call)
- Quick apply form
- FAQ section

---

## 🎯 Pages to Visit

- **Home**: `localhost:3000`
- **Opportunity**: `localhost:3000/opportunity`
- **About**: `localhost:3000/about`
- **Apply**: `localhost:3000/apply`

Click the navigation at the top to move between pages!

---

## 🛠️ How to Customize

### Change Text
1. Open `clearview-premium` folder in Notepad or VS Code
2. Edit files in `app/`:
   - `app/page.tsx` - Home page
   - `app/opportunity/page.tsx` - Opportunity page
   - `app/about/page.tsx` - About page
   - `app/apply/page.tsx` - Apply page
3. Save the file
4. Browser auto-updates!

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  charcoal: '#1A1A1A',  // Change to your color
  neon: '#00FF9D',       // Change to your accent color
}
```

### Add Images
1. Put images in `public/images/`
2. Reference in code like: `/images/your-photo.jpg`

---

## ❓ Troubleshooting

**"npm is not recognized"**
→ Node.js not installed. Go install it from nodejs.org

**"Module not found"**
→ Run `npm install` again

**Site looks broken**
→ Hard refresh: **Ctrl + Shift + R**

**Port 3000 in use**
→ Run: `npm run dev -- -p 3001` (use port 3001 instead)

---

## 🚀 When You're Ready to Deploy

Read the `README.md` file in the `clearview-premium` folder.

It has full deployment instructions for Vercel (free hosting).

---

## 📊 What This Site Has

✅ 4 separate pages (multi-page, not single-page)
✅ Smooth animations (Framer Motion)
✅ Modern design (inspired by your reference sites)
✅ New color scheme (Charcoal + Neon Green)
✅ Bold typography (Space Grotesk for headings)
✅ Component-based (easy to maintain)
✅ Mobile responsive (works on phones)
✅ Fast (Next.js SSR)
✅ Production-ready

---

## 💡 Next Steps

1. ✅ Run the site (follow steps above)
2. ✅ Click through all 4 pages
3. ✅ Test on your phone (same WiFi network)
4. ✅ Customize text/images
5. ✅ Deploy to Vercel when ready

---

**This is your NEW premium website. Enjoy!** 🎉
