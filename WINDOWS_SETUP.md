# 🪟 Windows Setup Guide - ClearView Sales Website

## What You Need to Do

Follow these steps **IN ORDER** on your Windows computer.

---

## ✅ STEP 1: Install Node.js

1. Go to: **https://nodejs.org**
2. Click the big green button "**Download Node.js (LTS)**"
3. Run the downloaded file (`.msi`)
4. Click "Next" on everything (use all defaults)
5. **RESTART YOUR COMPUTER** when done

---

## ✅ STEP 2: Download Your Website Files

1. Go to your GitHub repository
2. Switch to branch: `claude/check-index-html-011CUsDYCNmCqgov8oDnRm7L`
3. Download the file: **`clearview-nextjs.zip`** (117KB)
4. Save it to your Desktop or Downloads folder

---

## ✅ STEP 3: Extract the Files

1. Find the `clearview-nextjs.zip` file you downloaded
2. **Right-click** on it
3. Choose "**Extract All...**"
4. Click "**Extract**"
5. You'll get a folder called `nextjs-rebuild`

---

## ✅ STEP 4: Open PowerShell in That Folder

### Method A: Easy Way
1. Open the `nextjs-rebuild` folder
2. Hold **Shift** and **Right-click** inside the folder (on empty space)
3. Choose "**Open PowerShell window here**" or "**Open in Terminal**"

### Method B: Manual Way
1. Press **Windows Key + R**
2. Type: `powershell`
3. Press Enter
4. Type: `cd Desktop\nextjs-rebuild` (or wherever you extracted it)
5. Press Enter

---

## ✅ STEP 5: Install Dependencies

In the PowerShell window, type this and press Enter:

```powershell
npm install
```

**Wait 1-2 minutes.** You'll see lots of text scrolling. That's normal!

---

## ✅ STEP 6: Start the Website

Once the install is done, type this and press Enter:

```powershell
npm run dev
```

You should see:
```
✓ Ready in 3s
- Local: http://localhost:3000
```

---

## ✅ STEP 7: View Your Website

1. Open **Chrome, Firefox, or Edge**
2. In the address bar, type: `localhost:3000`
3. Press Enter

**🎉 You should see your ClearView Sales website!**

---

## 🛑 To Stop the Server

In the PowerShell window, press: **Ctrl + C**

---

## 🔄 To Start It Again

1. Open PowerShell in the `nextjs-rebuild` folder (Step 4)
2. Type: `npm run dev`
3. Open browser to `localhost:3000`

---

## ❓ Troubleshooting

### "npm is not recognized"
→ You didn't install Node.js properly. Go back to Step 1.

### "Cannot find module"
→ Run `npm install` again (Step 5)

### "Port 3000 already in use"
→ Something else is running on port 3000. Either:
- Close other programs
- Or use a different port: `npm run dev -- -p 3001` (then use `localhost:3001`)

### Page shows an error
→ Press **Ctrl + Shift + R** to hard refresh your browser

### Still having issues?
→ Make sure you:
1. Installed Node.js
2. Restarted your computer
3. Ran `npm install` successfully (no red error messages)

---

## 📁 File Locations

**Your website files are in:**
```
nextjs-rebuild/
├── src/               ← Your website code
│   ├── components/    ← All the sections
│   └── app/          ← Main pages
├── public/           ← Images and logo
├── README.md         ← Full documentation
└── START_HERE.md     ← Overview
```

**To edit content:**
- Open files in `src/components/sections/` with Notepad or VS Code
- Save the file
- Browser auto-updates!

---

## 🚀 When You're Ready to Deploy

Read: `DEPLOYMENT_CHECKLIST.md` in the `nextjs-rebuild` folder

It has step-by-step instructions to put this live on the internet for free with Vercel.

---

## 📝 Summary

1. ✅ Install Node.js
2. ✅ Download zip file
3. ✅ Extract it
4. ✅ Open PowerShell in folder
5. ✅ Run `npm install`
6. ✅ Run `npm run dev`
7. ✅ Open `localhost:3000` in browser

**That's it!**

---

Built with ❤️ for ClearView Sales Co.
