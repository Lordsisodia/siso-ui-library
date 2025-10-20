# 🎯 21st.dev Smart Scraper

Automated scraper for downloading components from 21st.dev with smart batching, resume capability, and safety features.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
npx playwright install chromium
```

### Run Top 50 (Today!)
```bash
npm run scrape:top50
```

### Run Full 1000 (Over Multiple Days)
```bash
# Day 1: Get first 100
npm run scrape -- --limit=100

# Day 2: Resume and get next 100
npm run resume

# Day 3: Resume again
npm run resume

# Continue until you hit 1000...
```

---

## 📋 Usage

### Available Commands

```bash
# Top 50 most popular (recommended first run)
npm run scrape:top50

# Top 200
npm run scrape:top200

# All 1000 (run in batches)
npm run scrape:all

# Resume from last checkpoint
npm run resume

# Test with 5 components
npm run test
```

### Custom Configuration

```bash
# Custom limit and batch size
npm run scrape -- --limit=100 --batch=25

# With specific delay (milliseconds)
npm run scrape -- --limit=50 --delay=5000
```

---

## 🎯 Multi-Day Strategy for 1000 Components

### **Recommended Approach** (Over 5-7 Days):

**Day 1**: Top 100 (30 mins)
```bash
npm run scrape -- --limit=100
```

**Day 2**: Next 100 (30 mins)
```bash
npm run resume
```

**Day 3**: Next 100 (30 mins)
```bash
npm run resume
```

**Continue until you reach 1000...**

### **Why Spread Over Days?**

1. ✅ **Respectful to 21st.dev servers**
2. ✅ **Avoid detection/blocking**
3. ✅ **Review components as you go**
4. ✅ **Stop anytime if issues arise**
5. ✅ **Can adjust strategy if needed**

---

## 🛡️ Safety Features

### Built-in Protections:

- ✅ **3-second delays** between requests (configurable)
- ✅ **Checkpoint system** (resume anytime)
- ✅ **Error recovery** (retries failed components)
- ✅ **Progress tracking** (see what's done)
- ✅ **Duplicate detection** (no re-downloads)
- ✅ **Timeout handling** (skips broken pages)
- ✅ **Organized output** (by author/category)

### Rate Limiting:

Default: **3 seconds between components**
- 50 components = ~2.5 minutes + download time
- 100 components = ~5 minutes + download time
- 1000 components = ~50 minutes + download time

---

## 📁 Output Structure

```
21st-dev-components/
├── by-author/
│   ├── shadcn/
│   │   ├── accordion.tsx
│   │   └── accordion.json (metadata)
│   ├── magicui/
│   │   ├── marquee.tsx
│   │   └── marquee.json
│   └── ...
├── by-category/
│   ├── animations/
│   ├── forms/
│   └── navigation/
├── catalog.json
└── README.md
```

### Files Created:

- **`{component}.tsx`** - Component source code
- **`{component}.json`** - Metadata (deps, author, description)
- **`catalog.json`** - Full catalog of all components
- **`README.md`** - Auto-generated documentation
- **`scraper-checkpoint.json`** - Progress tracking (auto-saved)

---

## 🎛️ Advanced Features

### Resume from Checkpoint

The scraper automatically saves progress every 10 components.

If interrupted:
```bash
npm run resume
```

It will:
- Load previous progress
- Skip already downloaded components
- Continue where it left off

### Checkpoint File

`scraper-checkpoint.json` contains:
```json
{
  "totalFound": 1000,
  "downloaded": 150,
  "failed": 5,
  "components": [...],
  "lastRunDate": "2025-10-20",
  "nextStartIndex": 150
}
```

---

## ⚙️ Configuration

Edit `scraper.ts` to customize:

```typescript
const config = {
  limit: 50,              // Max components to download
  batchSize: 50,         // Components per session
  delayMs: 3000,         // Delay between requests
  outputDir: './...',    // Output directory
  checkpointFile: '...', // Checkpoint file
  resumeMode: false      // Start fresh or resume
}
```

---

## 🚨 Troubleshooting

### Scraper Gets Blocked

**Solution**:
1. Increase delay: `--delay=5000` (5 seconds)
2. Reduce batch size: `--batch=25`
3. Wait a day and resume

### Missing Code

**Some components might fail** because:
- Different HTML structure
- Dynamic loading
- Protected content

**Solution**: Note failed components, download manually

### Dependencies Missing

Scraper extracts dependencies when possible, but:
- Manual verification recommended
- Check `.json` metadata files
- Use CLI for complex components

---

## 📊 Expected Results

### **Top 50** (Recommended First Run):
- Time: ~15-20 minutes
- Success Rate: ~90%
- Risk: Very Low
- **Result: 45+ components**

### **Top 200**:
- Time: ~60 minutes
- Success Rate: ~85%
- Risk: Low
- **Result: 170+ components**

### **Full 1000** (Over Multiple Days):
- Time: 3-5 hours total (spread over 5-10 days)
- Success Rate: ~80%
- Risk: Medium
- **Result: 800+ components**

---

## 🎯 Recommended Strategy

### **Week 1: Foundation**
- Day 1: Run top 50 ✅
- Day 2: Review + run next 50
- Day 3: Review + run next 50

### **Week 2: Expansion**
- Continue in 50-100 component batches
- Review quality as you go
- Stop when you have enough!

### **Reality Check**:
You probably don't need all 1000. The top 200 are likely the best quality. Focus on quality over quantity!

---

## 📝 Notes

- **Respectful Scraping**: 3-second delays are intentional
- **Legal**: Public website, educational use, personal project
- **Attribution**: Give credit to component authors
- **Not for Redistribution**: Personal use only

---

## 🆘 Support

Issues? The scraper will:
1. Save progress automatically
2. Log all errors
3. Create detailed checkpoint
4. Allow easy resume

Check `scraper-checkpoint.json` for detailed status.

---

**Ready to get the top 50 most popular components?** 🚀
