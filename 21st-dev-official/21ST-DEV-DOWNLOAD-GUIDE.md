# 🎯 21st.dev Component Download Guide

## 🔍 What I Discovered

### **Repository Found!**
- **Main Repo**: https://github.com/serafimcloud/21st
- **CLI Repo**: https://github.com/21st-dev/cli
- **Status**: Open source, community-driven

---

## 📦 How 21st.dev Works

### **Component Storage**:
1. **Website UI** (81 components) - Stored in GitHub repo ✅
2. **Community Components** (1000+) - Stored in Supabase database
3. **Files** - Stored in Cloudflare R2 storage

### **Installation Methods**:

#### Method 1: Individual Install (Official Way)
```bash
npx shadcn@latest add "https://21st.dev/r/username/component-slug"
```

#### Method 2: Use Their CLI
```bash
npm install -g @21st-dev/cli
21st install <component>
```

#### Method 3: Direct GitHub Clone (What We Did!)
```bash
git clone https://github.com/serafimcloud/21st.git
# Components in: apps/web/components/ui/
```

---

## ✅ What We Successfully Downloaded

### From GitHub Repo:
- **81 UI Components** from their website
- These are the components they use to build 21st.dev itself
- Production-ready, battle-tested

**Components Include**:
- accordion, alert, avatar, badge, button
- card, chart, checkbox, dialog, dropdown
- form, input, popover, select, tabs
- toast, tooltip, and 60+ more

---

## 🚨 The Challenge with Community Components

### **Community components are stored in**:
- Supabase database (not in GitHub)
- Cloudflare R2 storage (not public access)

### **To access them, you need**:
1. **API Key** from 21st.dev
2. **Use their CLI** with the API key
3. **Manual copy-paste** from website (what you're doing now)

---

## 🎯 SOLUTION: Best Ways to Get ALL Components

### **Option A: Use Their Official CLI** (Recommended)

1. **Get API Key**:
   - Visit https://21st.dev
   - Sign up/Login
   - Go to settings → API keys
   - Get free API key (5 free requests)

2. **Install CLI**:
```bash
npm install -g @21st-dev/cli
```

3. **Download Components**:
```bash
# Install individual components
npx shadcn@latest add "https://21st.dev/r/shadcn/accordion"
npx shadcn@latest add "https://21st.dev/r/magicui/marquee"
```

### **Option B: Browser Automation** (What I Can Build!)

Create a script that:
1. Opens 21st.dev in headless browser
2. Navigates through all component pages
3. Extracts component code automatically
4. Saves to your library

**I can build this using Playwright!**

### **Option C: Access Their Supabase** (Requires API Key)

If they have a public API, we could:
```bash
curl "https://21st.dev/api/components?limit=1000" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### **Option D: Manual Copy** (What You're Doing)
- Slow but works
- No API key needed
- Get exactly what you want

---

## 🚀 My Recommended Approach

### **Phase 1: Get Their Website Components** (DONE! ✅)
- Copied 81 components from GitHub repo
- These are production-ready
- No API key needed

### **Phase 2: Use Browser Automation** (I Can Build This!)
I'll create a Playwright script that:
```javascript
// Pseudo code
1. Visit 21st.dev/components
2. Get list of all components
3. For each component:
   - Open component page
   - Extract code
   - Save to file
4. Repeat for all components
```

**Time**: ~30 minutes to build, ~1 hour to run
**Result**: ALL 21st.dev components downloaded

### **Phase 3: Use Their CLI for Specific Ones**
For specific popular components:
```bash
npx shadcn@latest add "https://21st.dev/r/magicui/marquee"
```

---

## 💡 BEST SOLUTION: Let Me Build You a Scraper!

I can create a Playwright script that:
1. **Logs into 21st.dev** (with your account)
2. **Navigates all component pages**
3. **Extracts all code** automatically
4. **Saves to organized folders**
5. **Creates catalog** of what was downloaded

**Want me to build this?** It would take 30 minutes to code, then auto-download everything!

---

## 🎯 What We Have NOW

From GitHub repo: **81 21st.dev UI components** ✅

Components copied:
- All the components they use on their site
- Production-grade quality
- TypeScript, Tailwind, Radix UI based

---

## 🤔 What Do You Want?

**A)** Use the 81 components we got from GitHub (ready now!)  
**B)** Let me build a Playwright scraper to get ALL components automatically  
**C)** Manual copy-paste specific ones you want  
**D)** Get API key and use their CLI  

**My vote: Option B - I build the scraper and get EVERYTHING!** 🔥

Which one?
