# Manual Import Workflow (Zero Cost)

**Cost**: $0.00
**Time**: ~2-3 hours for 100+ components
**Best for**: Maximum cost savings

---

## 🎯 The Cheapest Approach

### Step 1: Bulk Screenshot (5 minutes)
**No AI needed - Pure browser automation**

1. Open 21st.dev in browser
2. Use browser DevTools console:

```javascript
// Paste this into Chrome DevTools Console on 21st.dev

let componentIndex = 0;

// Find all component previews
document.querySelectorAll('.component-preview, [data-component]').forEach((component, idx) => {
  // Add distinctive border for screenshotting
  component.style.border = '3px solid red';
  component.setAttribute('data-export-index', idx);

  // Add component name if visible
  const name = component.querySelector('h3, h4, .title')?.textContent || `component-${idx}`;
  console.log(`Component ${idx}: ${name}`);
});

console.log('✅ Components marked! Now screenshot them one by one.');
```

3. Use **ScreenToGif** (Windows) or **Kap** (Mac) to bulk capture
4. Or use browser extension like **GoFullPage** for scrolling screenshots

### Step 2: Quick Manual Sort (30-60 minutes)
**Human pattern recognition - No AI needed**

1. Download all screenshots to `raw-imports/` folder

2. Create these folders:
```bash
mkdir -p manual-sort/{buttons,cards,forms,menus,other}
```

3. Quick visual sort - drag & drop into folders by type:
   - **Buttons**: Any button-like components
   - **Cards**: Card layouts, item displays
   - **Forms**: Input fields, forms, selects
   - **Menus**: Navigation, tabs, categories
   - **Other**: Everything else

**Speed tip**: Don't overthink it - you'll refine later

### Step 3: Restaurant Categorization (60-90 minutes)
**Use simple pattern matching - No AI needed**

Use the helper script:

```bash
node scripts/manual-categorize.js
```

Or manually:
1. Open `components/` folder structure
2. For each component in `manual-sort/`, ask:
   - "Would this show menu items?" → `1-menu-display/`
   - "Would this help ordering?" → `2-ordering-system/`
   - "Is this for booking?" → `3-booking-reservations/`
   - etc.

3. Drag & drop into appropriate category subfolder

### Step 4: Add Metadata (Optional - 30 minutes)
**Quick JSON files for each component**

```bash
node scripts/generate-metadata.js
```

This creates basic metadata for each component based on filename and folder.

---

## 📊 Cost Comparison

### Option A: Fully Automated (Playwright + Codex)
- **Screenshots**: $0.00 (Playwright)
- **Categorization**: ~$2-5 (Codex for 200 components)
- **Total**: $2-5
- **Time**: 30 minutes setup, 1 hour processing

### Option B: Semi-Automated (Playwright + Manual)
- **Screenshots**: $0.00 (Playwright)
- **Categorization**: $0.00 (Manual)
- **Total**: $0.00
- **Time**: 30 minutes setup, 2 hours manual sorting

### Option C: Fully Manual
- **Screenshots**: $0.00 (Browser screenshots)
- **Categorization**: $0.00 (Manual)
- **Total**: $0.00
- **Time**: 3-4 hours

### Option D: Claude Haiku (Cheapest AI)
- **Screenshots**: $0.00 (Playwright)
- **Categorization**: ~$0.25 (Haiku for 200 components)
- **Total**: $0.25
- **Time**: 30 minutes setup, 30 minutes processing

---

## 🚀 Recommended Workflow

**For your situation** (avoiding Claude credit burn):

### Phase 1: Quick Start (Zero Cost)
1. **Manually screenshot** 20-30 highest priority components
   - Focus: Menu cards, order buttons, cart modals
2. **Manually categorize** - drag & drop to folders
3. **Test in project** - verify these work for restaurant use

**Time**: 1 hour
**Cost**: $0

### Phase 2: Scale Up (Minimal Cost)
1. **Run Playwright script** - auto-screenshot remaining components
2. **Use Haiku** for batch categorization (~$0.25)
3. **Manual review** - verify AI choices

**Time**: 2 hours
**Cost**: $0.25

### Phase 3: Optimize (Optional)
1. **Run AI analysis** on categorized components
2. **Generate documentation**
3. **Create sample pages**

**Time**: 1 hour
**Cost**: $1-2 (using Haiku)

---

## 💡 Pro Tips

### Avoiding Credit Burn

1. **Never use Sonnet for repetitive tasks** - Use Haiku or Codex
2. **Batch API calls** - 10-20 images per request
3. **Use "low detail" mode** for vision API - 50% cost reduction
4. **Cache results** - Don't re-analyze same component
5. **Manual first pass** - AI only for edge cases

### Maximizing Free Tools

1. **Browser DevTools** - Free component inspection
2. **Git** - Free version control
3. **VS Code** - Free organization and preview
4. **Local scripts** - Free automation

### Speed Hacks

1. **Multi-monitor setup** - Source on one screen, target on another
2. **Keyboard shortcuts** - Learn drag & drop hotkeys
3. **Batch processing** - Do all screenshots, then all categorization
4. **80/20 rule** - Focus on critical components first

---

## 📝 Quick Commands

```bash
# Install dependencies
npm install playwright openai

# Option 1: Full automation (Codex)
node scripts/import-from-21st-dev.js
node scripts/categorize-with-codex.js

# Option 2: Semi-automated (Manual categorization)
node scripts/import-from-21st-dev.js
# Then manually drag & drop to categorize

# Option 3: Manual screenshots + Codex
# Manually screenshot to raw-imports/
node scripts/categorize-with-codex.js

# Generate metadata after categorization
node scripts/generate-metadata.js
```

---

**Recommendation**: Start with **Option B (Semi-Automated)** - Free screenshots + manual categorization. Once you have 50-100 components, evaluate if AI categorization is worth $0.25-2.

*Zero-cost workflow ready!* 💰
