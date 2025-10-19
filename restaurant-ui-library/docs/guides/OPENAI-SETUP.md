# OpenAI Setup for Code Import

## 🔑 Your OpenAI Account

You're paying **£200/month** for OpenAI, which gives you access to:

- ✅ GPT-4o (most powerful)
- ✅ GPT-4o-mini (cheapest, fastest, great for code) ← **RECOMMENDED**
- ✅ GPT-4 Turbo
- ✅ GPT-3.5 Turbo

**There is no separate "Codex"** - it was deprecated in 2023. GPT-4o-mini is the successor.

---

## 🚀 Quick Setup

### Step 1: Get Your API Key

1. Go to: https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (starts with `sk-proj-` or `sk-`)

### Step 2: Set Environment Variable

```bash
# Mac/Linux
export OPENAI_API_KEY="sk-proj-your-key-here"

# Windows CMD
set OPENAI_API_KEY=sk-proj-your-key-here

# Windows PowerShell
$env:OPENAI_API_KEY="sk-proj-your-key-here"
```

### Step 3: Run Import

```bash
npm install
npm run import:full
```

**Done!** The script uses your OpenAI account automatically.

---

## 💰 Cost Breakdown (With Your Account)

| Model | Input Cost | Output Cost | 200 Components | When to Use |
|-------|-----------|-------------|----------------|-------------|
| **GPT-4o-mini** | $0.15/1M | $0.60/1M | **$0.03** | ✅ Code import (RECOMMENDED) |
| **GPT-4o** | $2.50/1M | $10.00/1M | **$0.50** | Complex reasoning |
| **GPT-4 Turbo** | $10.00/1M | $30.00/1M | **$2.00** | Legacy, avoid |

**Recommendation**: Use GPT-4o-mini. It's $0.03 vs $0.50 - not worth paying 17x more.

---

## 🔧 Changing Models (Optional)

If you want to use a different model, edit the config:

### Current Setting (GPT-4o-mini)
```javascript
// scripts/categorize-code-with-gpt4.js
const config = {
  model: 'gpt-4o-mini',  // ← Cheapest, recommended
  // ...
};
```

### Alternative Models
```javascript
// Use GPT-4o (more powerful, 17x more expensive)
model: 'gpt-4o'

// Use GPT-4 Turbo (legacy, expensive)
model: 'gpt-4-turbo'
```

**But honestly**: GPT-4o-mini is perfect for this task. Don't overthink it.

---

## 📊 Your Usage Dashboard

Monitor your spending:
- https://platform.openai.com/usage

You can see:
- Total tokens used
- Cost per API call
- Monthly spend

For this import: Expect ~100K tokens = **$0.03**

---

## 🎯 Summary

1. **"Codex" = Your OpenAI account** (includes GPT-4o-mini)
2. **Get API key**: https://platform.openai.com/api-keys
3. **Set environment variable**: `export OPENAI_API_KEY="sk-..."`
4. **Run import**: `npm run import:full`
5. **Cost**: $0.03 for 200 components

**You already have everything you need!** Just grab your API key and run the script.

---

*No separate Codex setup needed - it's all one OpenAI account* 🚀
