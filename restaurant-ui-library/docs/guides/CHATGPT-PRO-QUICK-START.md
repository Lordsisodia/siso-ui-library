# ChatGPT Pro Quick Start (10 Components at a Time)

**Cost**: $0 (using your existing £200/month ChatGPT Pro)
**Time**: 1-2 hours for 200 components

---

## 🚀 Simple 5-Step Process

### Step 1: Extract Code (5 minutes - ONE TIME)

```bash
cd restaurant-ui-library
npm install
npm run import:code
```

This saves all component code to `raw-code/` folder. You only do this once!

---

### Step 2: Setup ChatGPT Pro (2 minutes - ONE TIME)

1. Go to https://chatgpt.com
2. Start new chat
3. Copy this and paste it:

```
You are an expert UI component analyzer specializing in RESTAURANT applications.

When I paste component code, analyze it for restaurant use and return JSON.

CATEGORIES:
1. menu-display - menu items, food cards, pricing
2. ordering-system - cart, checkout, ordering
3. booking-reservations - reservations, calendar, tables
4. navigation-layout - headers, menus, navigation
5. user-feedback - alerts, loading, notifications
6. user-account - login, profile, history
7. social-proof - reviews, ratings
8. interactive-features - chat, video, maps
9. marketing - promotions, CTAs

SCORING:
- 9-10: Perfect for restaurants
- 7-8: Very good fit
- 5-6: Good with changes
- <6: Don't recommend

OUTPUT (JSON):
```json
{
  "components": [
    {
      "index": 1,
      "filename": "buttons-001.html",
      "original_category": "buttons",
      "restaurant_category": "ordering-system",
      "restaurant_subcategory": "add-to-cart-buttons",
      "restaurant_fit_score": 9,
      "reasoning": "Perfect for add-to-cart - clear CTA, mobile-friendly",
      "use_cases": ["Add to cart", "Quick order"],
      "required_adaptations": ["Change text to 'Add to Order'", "44px tap target"],
      "priority": "critical",
      "complexity": "low",
      "framework": "react"
    }
  ]
}
```

RULES:
- Only recommend score >= 6
- Be specific about restaurant adaptations
- Consider mobile-first (70% of orders)
- Think food/restaurant context
```

4. ChatGPT will confirm it's ready

---

### Step 3: Process Batches (10 at a time)

#### Open Your Code Files

Navigate to `raw-code/buttons/` and open the first 10 files.

#### Paste Into ChatGPT

```
Analyze these 10 components:

Component 1: buttons-001.html
```html
[copy entire contents of buttons-001.html and paste here]
```

Component 2: buttons-002.html
```html
[copy entire contents of buttons-002.html and paste here]
```

Component 3: buttons-003.html
```html
[copy entire contents]
```

... continue for all 10 components
```

#### Save ChatGPT Output

1. ChatGPT will return JSON
2. Copy the ENTIRE JSON output
3. Save to: `categorization-outputs/buttons-batch-1.json`

**Repeat for next 10 components** (buttons 11-20, 21-30, etc.)

---

### Step 4: Auto-Organize Files (10 seconds per batch)

After each batch (or save them all up):

```bash
npm run organize
```

This automatically moves files to the right folders based on ChatGPT's categorization!

---

### Step 5: Verify Results

Check the `components/` folder - everything is organized!

```
components/
├── 1-menu-display/
│   └── menu-item-cards/
│       ├── cards-042.html
│       └── cards-042.json
├── 2-ordering-system/
│   └── add-to-cart-buttons/
│       ├── buttons-001.html
│       └── buttons-001.json
└── ...
```

---

## ⚡ Time-Saving Tips

### Tip 1: Use Multiple Tabs

Open 4 ChatGPT tabs, process 4 batches in parallel:
- Tab 1: Buttons 1-10
- Tab 2: Buttons 11-20
- Tab 3: Cards 1-10
- Tab 4: Cards 11-20

**4x faster!**

### Tip 2: Use ChatGPT Canvas

For larger batches (20-30 components):
1. Enable Canvas mode
2. Paste all component code
3. Ask: "Categorize all for restaurant use"
4. Get results for 20-30 at once

### Tip 3: Save Templates

Create text files with your prompt templates so you can just fill in the code.

---

## 📋 Batch Processing Checklist

**Buttons** (130 total)
- [ ] Batch 1: buttons 1-10
- [ ] Batch 2: buttons 11-20
- [ ] Batch 3: buttons 21-30
- [ ] ...continue...

**Cards** (79 total)
- [ ] Batch 1: cards 1-10
- [ ] Batch 2: cards 11-20
- [ ] ...continue...

**Forms** (23 total)
- [ ] Batch 1: forms 1-10
- [ ] Batch 2: forms 11-20
- [ ] Batch 3: forms 21-23

---

## 🎯 Realistic Timeline

| Task | Time |
|------|------|
| Extract code (one time) | 5 min |
| Setup ChatGPT (one time) | 2 min |
| Process 10 components | 3-5 min |
| Save JSON output | 30 sec |
| Run organize script | 10 sec |
| **Per batch (10 components)** | **4-6 min** |

**For 200 components**: ~20 batches × 5 min = **1.5-2 hours**

With 4 parallel tabs: **30-45 minutes**

---

## 💡 Example Workflow Session

Let's do Buttons 1-10:

1. **Open files**: `raw-code/buttons/buttons-001.html` through `buttons-010.html`

2. **Paste into ChatGPT**:
```
Analyze these 10 components:

Component 1: buttons-001.html
```html
<button class="px-4 py-2 bg-blue-600 text-white">Click me</button>
```

Component 2: buttons-002.html
```html
<button class="rounded-full px-6 py-3">Order Now</button>
```

... [continue for 10]
```

3. **ChatGPT responds** with JSON

4. **Copy JSON**, save to `categorization-outputs/buttons-batch-1.json`

5. **Run**: `npm run organize`

6. **Done!** 10 components organized in ~5 minutes

---

## 🔄 Folder Structure

```
restaurant-ui-library/
├── raw-code/              ← Extracted code (Step 1)
│   ├── buttons/
│   ├── cards/
│   └── ...
│
├── categorization-outputs/ ← Save ChatGPT JSON here (Step 3)
│   ├── buttons-batch-1.json
│   ├── buttons-batch-2.json
│   ├── cards-batch-1.json
│   └── ...
│
└── components/            ← Final organized library (Step 4)
    ├── 1-menu-display/
    ├── 2-ordering-system/
    └── ...
```

---

## ❓ Troubleshooting

### "Organize script says no JSON files found"

Make sure you saved ChatGPT output to `categorization-outputs/` folder:
```bash
mkdir -p categorization-outputs
# Then save your JSON files there
```

### "Source file not found"

Make sure you ran `npm run import:code` first to extract code.

### ChatGPT isn't following format

Re-paste the system prompt. Sometimes it needs a reminder.

---

## 🎉 You're Ready!

1. Extract code: `npm run import:code`
2. Setup ChatGPT with system prompt
3. Process 10 at a time
4. Save JSON to `categorization-outputs/`
5. Run `npm run organize`

**Total cost: $0** (using your existing ChatGPT Pro)

---

*Simple, free, and effective!* 🚀
