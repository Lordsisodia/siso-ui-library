# Using OpenAI CLI for Component Categorization

If you have the OpenAI CLI installed, you can automate the categorization!

## 🚀 Quick Setup

### Install OpenAI CLI (if not installed)
```bash
pip install openai
# or
brew install openai
```

### Set API Key
```bash
export OPENAI_API_KEY="your-api-key"
```

---

## 💻 CLI Workflow

### Option 1: Interactive Mode

```bash
# Load system prompt
openai api chat.completions.create \
  -m gpt-4o-mini \
  --system "$(cat SYSTEM-PROMPT-COPY-PASTE.txt)" \
  -i
```

Then paste your components interactively.

### Option 2: Batch Processing Script

Create a script that processes all components:

```bash
#!/bin/bash
# process-batch.sh

SYSTEM_PROMPT=$(cat SYSTEM-PROMPT-COPY-PASTE.txt)

# Process components from raw-code/buttons/
for file in raw-code/buttons/buttons-{001..010}.html; do
  if [ -f "$file" ]; then
    echo "Processing $file..."

    CODE=$(cat "$file")

    PROMPT="Analyze this component for restaurant use:

Component: $(basename $file)
\`\`\`html
$CODE
\`\`\`"

    openai api chat.completions.create \
      -m gpt-4o-mini \
      --system "$SYSTEM_PROMPT" \
      --user "$PROMPT" \
      --temperature 0.3 \
      > "categorization-outputs/$(basename $file .html).json"
  fi
done
```

### Option 3: Use the Automated Script

I can create a full automation script that uses the OpenAI CLI:

```bash
npm run categorize:cli
```

This would:
1. Read all components from raw-code/
2. Send to OpenAI CLI in batches
3. Save categorizations
4. Auto-organize files

---

## 💰 Cost

Same as before: **$0.03 for 200 components** (using GPT-4o-mini)

---

## 🎯 Recommendation

If you have OpenAI CLI set up:
- **Use the CLI for automation** - Faster than manual
- **Still process 10 at a time** - To keep context manageable
- **Batch the API calls** - More efficient

If you prefer ChatGPT web interface:
- **Use the system prompt** in SYSTEM-PROMPT-COPY-PASTE.txt
- **Process 10 at a time** manually
- **Copy/paste results**

Both work great!

---

Want me to create the full CLI automation script?
