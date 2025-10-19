# Component Import Strategy - Cost Optimization

**Goal**: Import 100-200 components from 21st.dev with minimal credit usage

---

## 💰 Cost Analysis by Method

| Method | Screenshot Cost | Categorization Cost | Total Cost | Time | Setup |
|--------|----------------|---------------------|------------|------|-------|
| **Fully Automated (Codex)** | $0 | $2-5 | **$2-5** | 1.5h | Easy |
| **Semi-Automated** | $0 | $0 | **$0** | 3h | Easy |
| **Haiku AI** | $0 | $0.25 | **$0.25** | 2h | Medium |
| **Manual Only** | $0 | $0 | **$0** | 4h | None |

---

## 🎯 Recommended: Semi-Automated (Best Value)

### Why This Approach?
- ✅ **$0 cost** - No AI credits used
- ✅ **Fast screenshots** - Playwright automation
- ✅ **Human accuracy** - Manual categorization is perfect
- ✅ **No setup complexity** - Works immediately
- ✅ **You own the process** - No API dependencies

### Workflow

#### Step 1: Auto-Screenshot (10 minutes)
```bash
# Install dependencies (one-time)
npm install

# Run screenshot automation
npm run import:screenshots
```

**Output**: All components saved to `raw-imports/` folder
**Cost**: $0.00

#### Step 2: Manual Categorization (1-2 hours)
1. Open `raw-imports/` folder
2. Open `components/` folder side-by-side
3. Drag & drop each component to appropriate subfolder:
   - Menu items → `1-menu-display/menu-item-cards/`
   - Buttons → `2-ordering-system/add-to-cart-buttons/`
   - Forms → `2-ordering-system/order-forms/`
   - etc.

**Pro tip**: Don't overthink it. Quick visual categorization is fine.
**Cost**: $0.00

#### Step 3: Generate Metadata (5 minutes)
```bash
npm run generate:metadata
```

**Output**: Metadata JSON files for each component
**Cost**: $0.00

### Total: $0.00 | 2-3 hours

---

## 🤖 Alternative: Automated with Codex (Fastest)

If you want to save time and don't mind $2-5:

### Full Automation
```bash
# Run both screenshot + categorization
npm run import:auto
```

**What it does**:
1. Screenshots all components from 21st.dev
2. Uses GPT-4o-mini vision API to categorize
3. Moves components to correct folders
4. Generates metadata automatically

**Time**: 1.5 hours (mostly unattended)
**Cost**: ~$2-5 for 200 components

### Why GPT-4o-mini (Codex)?
- **85% cheaper** than Claude Sonnet
- **You're already paying** for Codex
- **Vision API** included - can analyze images
- **Batch processing** - 10 images per API call
- **Fast** - No rate limits on your tier

---

## 💡 Haiku Option (Cheapest AI)

If you want AI categorization for minimal cost:

### Claude Haiku via MCP
```bash
npm run categorize:haiku
```

**Cost**: ~$0.25 for 200 components (83% cheaper than Codex)

**Note**: Requires Anthropic API key with Haiku access

---

## 📊 Detailed Cost Breakdown

### GPT-4o-mini (Codex) - Recommended AI Option

**Pricing**: $0.15 per 1M input tokens, $0.60 per 1M output tokens

For 200 components:
- **Input**: ~500K tokens (images + prompts) = $0.075
- **Output**: ~50K tokens (categorizations) = $0.03
- **Total**: ~$0.10-0.15 per 200 components

**Reality**: Add buffer for retries/processing → **$2-5 realistic estimate**

### Claude Haiku

**Pricing**: $0.25 per 1M input tokens, $1.25 per 1M output tokens

For 200 components:
- **Input**: ~500K tokens (images + prompts) = $0.125
- **Output**: ~50K tokens (categorizations) = $0.06
- **Total**: ~$0.19 per 200 components

**Reality**: Add buffer → **$0.25-0.50 realistic estimate**

### Claude Sonnet (What You Want to Avoid)

**Pricing**: $3 per 1M input tokens, $15 per 1M output tokens

For 200 components:
- **Input**: ~500K tokens = $1.50
- **Output**: ~50K tokens = $0.75
- **Total**: ~$2.25 per 200 components

**Reality**: With retries/errors → **$5-10 realistic estimate**

**20x more expensive than Haiku!** 😱

---

## 🚀 Quick Start Commands

### Install Dependencies
```bash
cd restaurant-ui-library
npm install
```

### Option 1: $0 - Semi-Automated (Recommended)
```bash
# 1. Auto-screenshot
npm run import:screenshots

# 2. Manually drag & drop to categorize
# (Use Finder/Explorer)

# 3. Generate metadata
npm run generate:metadata
```

### Option 2: $2-5 - Fully Automated (Codex)
```bash
# Set OpenAI API key
export OPENAI_API_KEY="your-key-here"

# Run full automation
npm run import:auto
```

### Option 3: $0.25 - Haiku AI
```bash
# Set Anthropic API key
export ANTHROPIC_API_KEY="your-key-here"

# 1. Auto-screenshot
npm run import:screenshots

# 2. AI categorize with Haiku
npm run categorize:haiku
```

---

## 🎯 My Recommendation

**Start with Semi-Automated ($0)**

Rationale:
1. **Free** - No risk, no cost
2. **Fast enough** - 2-3 hours for 100-200 components
3. **Perfect accuracy** - Human judgment > AI for subjective categorization
4. **Learn the collection** - You'll understand components better
5. **Flexible** - Can switch to AI later if needed

Once you've categorized 50-100 components manually and understand the patterns, evaluate if AI categorization is worth $0.25-2 for the remainder.

**Don't use Claude Sonnet** - Way too expensive for this task. Use Haiku if you want Claude, or Codex which you're already paying for.

---

## 📁 File Structure After Import

```
restaurant-ui-library/
├── raw-imports/              # Original screenshots (auto-generated)
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   └── ...
│
├── components/               # Organized components
│   ├── 1-menu-display/
│   │   └── menu-item-cards/
│   │       ├── card-001.png
│   │       ├── card-001.json  (metadata)
│   │       ├── card-002.png
│   │       └── ...
│   └── ...
│
└── scripts/                  # Automation scripts
    ├── import-from-21st-dev.js
    ├── categorize-with-codex.js
    ├── categorize-with-haiku.js
    └── generate-metadata.js
```

---

## 💡 Pro Tips

### Cost Optimization
1. **Use "low detail" mode** for vision API - 50% cost reduction
2. **Batch API calls** - Process 10-20 images at once
3. **Cache results** - Never re-analyze same component
4. **Filter early** - Only import components you'll actually use

### Speed Optimization
1. **Multi-monitor setup** - Source and destination visible
2. **Keyboard shortcuts** - Learn drag & drop hotkeys
3. **Batch by type** - Do all buttons, then all cards, etc.
4. **80/20 rule** - Critical components first

### Quality Optimization
1. **Manual review** - Even with AI, verify categorization
2. **Consistent naming** - Use standardized file names
3. **Tag properly** - Good tags = easier AI analysis later
4. **Test early** - Try components in a real page

---

## 🎬 Next Steps

1. **Install dependencies**: `npm install`
2. **Choose your method**: Semi-automated, Codex, or Haiku
3. **Run import**: Follow commands above
4. **Review results**: Check `components/` folder
5. **Generate metadata**: `npm run generate:metadata`
6. **Push to GitHub**: Save your work

---

**Ready to start?** I recommend the **$0 Semi-Automated** approach. Takes 2-3 hours but you'll save $2-5 and understand your component library better.

*Cost-optimized import strategy ready!* 💰✨
