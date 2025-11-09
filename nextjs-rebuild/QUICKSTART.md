# 🚀 Quick Start Guide

Get your new ClearView Sales website running in 5 minutes.

## Step 1: Install Node.js

**Don't have Node.js?**
1. Go to [nodejs.org](https://nodejs.org)
2. Download LTS version (20.x)
3. Install it
4. Open terminal/command prompt and verify:
```bash
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

## Step 2: Open Terminal in Project Folder

### On Mac:
1. Open Finder
2. Navigate to `nextjs-rebuild` folder
3. Right-click → "New Terminal at Folder"

### On Windows:
1. Open File Explorer
2. Navigate to `nextjs-rebuild` folder
3. Type `cmd` in address bar, press Enter

### On Linux:
```bash
cd /path/to/nextjs-rebuild
```

## Step 3: Install Dependencies

Copy and paste this into terminal:

```bash
npm install
```

Wait 1-2 minutes. You'll see lots of text scroll by. That's normal!

## Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Ready in 2.1s
```

## Step 5: View Your Site

1. Open your browser
2. Go to: **http://localhost:3000**
3. You should see your new website! 🎉

## Making Changes

### Change Text
1. Open `src/components/sections/` folder
2. Find the section you want to edit (e.g., `Mission.tsx`)
3. Edit the text
4. **Save the file**
5. Browser automatically updates! (No refresh needed)

### Change Logo
1. Replace `public/mikelogo.png` with your logo
2. Keep same filename OR update path in `src/components/layout/Header.tsx`

### Change Colors
1. Open `tailwind.config.ts`
2. Find `colors` section
3. Change hex codes
4. Save
5. See changes instantly!

## Deploy to Internet

### Option A: Vercel (Recommended - FREE)

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Install GitHub Desktop** (easier than command line)
   - Download from [desktop.github.com](https://desktop.github.com)
   - Install and sign in

3. **Create Repository**
   - Open GitHub Desktop
   - File → Add Local Repository
   - Choose your `nextjs-rebuild` folder
   - Click "Publish repository"

4. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (free)
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"
   - Wait 2-3 minutes
   - **Done!** Your site is live at `https://your-site.vercel.app`

### Option B: Manual Deploy

If you prefer not to use GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your `nextjs-rebuild` folder
3. Wait for deploy
4. Done!

## Troubleshooting

### "Command not found: npm"
→ Node.js not installed. Go back to Step 1.

### "Port 3000 is already in use"
→ Another app is using port 3000.
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### "Module not found" errors
→ Dependencies not installed correctly.
```bash
rm -rf node_modules package-lock.json
npm install
```

### Page is blank / Nothing showing
→ Check browser console (F12) for errors
→ Make sure `npm run dev` is still running
→ Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Changes not showing
→ Save the file first!
→ Check terminal for errors
→ Try stopping (Ctrl+C) and restarting `npm run dev`

## Common Tasks

### Stop Development Server
Press `Ctrl + C` in terminal

### Restart Development Server
```bash
npm run dev
```

### Build for Production (test before deploy)
```bash
npm run build
npm start
```

### Check for Errors
```bash
npm run lint
```

## Next Steps

1. ✅ Site running locally
2. ✅ Make your content changes
3. ✅ Test on your phone (same WiFi network)
4. ✅ Deploy to Vercel
5. ✅ Add custom domain (optional)
6. ✅ Set up Google Analytics (optional)

## Need Help?

**Check these files:**
- `README.md` - Full documentation
- `DEPLOYMENT_CHECKLIST.md` - Pre-launch checklist
- `IMPROVEMENTS.md` - What's better vs old site

**Still stuck?**
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

**You got this! 💪**

The hard part (building the site) is done. Now just customize and deploy!
