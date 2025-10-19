# 🎯 21st.dev - COMPLETE Download Solution

## ✅ What I Found

### **21st.dev has TWO types of components**:

1. **Website UI Components** (81) - In GitHub repo ✅ **DOWNLOADED!**
2. **Community Components** (1000+) - In Supabase database

---

## 📦 ALREADY DOWNLOADED: 81 Components!

**Location**: `/21st-dev-ui-components/`

I successfully cloned their GitHub repo and extracted all their website UI components!

**Sample Components**:
- accordion, alert-dialog, alert, avatar, badge, banner
- button, card, chart, checkbox, command, dialog
- dropdown-menu, form, input, popover, select, tabs
- toast, tooltip, and 60+ more!

---

## 🚀 THREE Ways to Get Community Components

### **Option 1: Playwright Scraper** (AUTOMATED!) ⭐⭐⭐⭐⭐

**I can build you a script that**:
1. Opens 21st.dev in browser
2. Navigates all component pages
3. Clicks "View Code" for each
4. Extracts and saves all code
5. Downloads ALL community components automatically

**Script I'll create**:
```typescript
// 21st-dev-scraper.ts
import { chromium } from 'playwright'

async function downloadAll21stDevComponents() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // 1. Go to 21st.dev
  await page.goto('https://21st.dev')

  // 2. Get all component URLs
  const componentUrls = await page.$$eval(
    '[href*="/r/"]',
    links => links.map(l => l.href)
  )

  // 3. For each component
  for (const url of componentUrls) {
    await page.goto(url)

    // Extract code
    const code = await page.evaluate(() => {
      return document.querySelector('[data-code]')?.textContent
    })

    // Save to file
    const slug = url.split('/').pop()
    fs.writeFileSync(`./components/${slug}.tsx`, code)
  }

  await browser.close()
}
```

**Time to build**: 30 mins
**Time to run**: 1-2 hours (automated)
**Result**: ALL components downloaded!

---

### **Option 2: Use Their CLI** (OFFICIAL WAY) ⭐⭐⭐⭐

**Steps**:

1. **Sign up on 21st.dev**:
   - Visit https://21st.dev
   - Create account (free)

2. **Get API Key**:
   - Go to Settings → API Keys
   - Create new API key
   - Copy the key

3. **Install Components**:
```bash
# One by one (their official method)
npx shadcn@latest add "https://21st.dev/r/magicui/marquee"
npx shadcn@latest add "https://21st.dev/r/shadcn/accordion"

# Or use their CLI
npm install -g @21st-dev/cli
21st install <component-name>
```

**Pros**: Official, supported
**Cons**: One at a time, needs API key

---

### **Option 3: Access Their Public API** (IF AVAILABLE) ⭐⭐⭐

Their README mentions an API. Let me check if we can:

```bash
curl "https://21st.dev/api/components" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

If this works, I can write a script to bulk download!

---

## 💡 MY RECOMMENDATION

### **Phase 1: Use What We Have** (DONE!)
✅ **81 components from GitHub**
✅ Production-quality
✅ No API key needed

### **Phase 2: Build Playwright Scraper** (30 mins work)
✅ Get ALL 1000+ community components
✅ Fully automated
✅ No manual copy-paste
✅ One-time setup

### **Phase 3: Use CLI for Updates**
✅ Get new components as they're released
✅ Official supported method

---

## 🎯 BEST SOLUTION: Let Me Build The Scraper!

I'll create `21st-dev-scraper.ts` that:

1. **Navigates 21st.dev**
2. **Finds all components** (from homepage, search, categories)
3. **Extracts code** for each component
4. **Downloads dependencies** info
5. **Saves everything** organized by category
6. **Creates catalog** with previews

**Features**:
- ✅ Retry logic for failures
- ✅ Progress tracking
- ✅ Organized output
- ✅ Duplicate detection
- ✅ Error handling

**Output Structure**:
```
21st-dev-components/
├── animations/
│   ├── marquee/
│   │   ├── component.tsx
│   │   ├── demo.tsx
│   │   └── deps.json
│   └── ...
├── forms/
├── navigation/
└── catalog.json
```

---

## 🤔 What Do You Want Me To Do?

**A)** Build the Playwright scraper (automated, gets everything!)
**B)** Use their CLI manually (you need API key first)
**C)** Just use the 81 we have from GitHub
**D)** All of the above (scraper + CLI + what we have)

**My vote: Option A or D!**

The scraper will save you HOURS of manual copy-pasting!

**Want me to build it now?** 🔥
