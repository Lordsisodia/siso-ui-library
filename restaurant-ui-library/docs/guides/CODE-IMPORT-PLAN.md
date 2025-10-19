# Code Import Strategy from 21st.dev

**Goal**: Import actual component code (HTML/CSS/JS/React) with AI categorization

**Cost**: ~$0.03 for 200 components (using GPT-4o-mini)

---

## 🎯 Recommended: GPT-4o-mini (Codex)

### Why Not Haiku?
- ❌ **Might misclassify** - Less sophisticated reasoning
- ❌ **Cost difference negligible** - $0.05 vs $0.03 (2 cents!)
- ❌ **Slower** - Rate limits on Anthropic
- ❌ **Less code-trained** - Not specialized for code like GPT

### Why GPT-4o-mini?
- ✅ **$0.03 total cost** - Essentially free
- ✅ **Code-specialized** - Excellent at understanding components
- ✅ **Reliable categorization** - Better reasoning than Haiku
- ✅ **Fast** - No rate limits on your tier
- ✅ **You're already paying** - Part of Codex subscription

**Decision**: Use GPT-4o-mini. The $0.02 difference from Haiku is not worth the quality risk.

---

## 📋 Import Workflow

### Phase 1: Code Extraction (Playwright)
**Cost**: $0.00
**Time**: 10-15 minutes

```javascript
// Extract code directly from 21st.dev
// Most component libraries have code export buttons
// We'll automate clicking and saving
```

### Phase 2: AI Categorization (GPT-4o-mini)
**Cost**: $0.03
**Time**: 5-10 minutes

```javascript
// Batch process all code files
// Categorize into restaurant-specific folders
// Generate metadata
```

### Phase 3: Restaurant Adaptation (Optional - GPT-4o-mini)
**Cost**: $0.05-0.10
**Time**: 10-15 minutes

```javascript
// Modify variable names for restaurant context
// Add restaurant-specific examples
// Optimize for food service use cases
```

**Total Cost**: $0.03-0.13 (under 15 cents!)
**Total Time**: 30-40 minutes

---

## 🔧 Implementation Plan

### Step 1: Understand 21st.dev Structure

First, let's check how to export code from 21st.dev:
- Do they have a "Copy Code" button?
- Is code visible in DevTools?
- Do they have an API?
- Can we scrape the page source?

### Step 2: Build Extraction Script

```javascript
// Playwright script to:
// 1. Navigate to each component
// 2. Click "Copy Code" or extract from DOM
// 3. Save to raw-code/{category}/{component}.html
// 4. Include all variants (states, sizes, etc.)
```

### Step 3: Create Specialized Categorization Prompt

**Key**: Make the prompt restaurant-specific to get accurate categorization

```javascript
const categorizationPrompt = `
You are a specialized UI component categorizer for RESTAURANT applications.

Analyze this component code and determine:
1. Primary restaurant category
2. Specific component type
3. Restaurant use cases
4. Required adaptations

Categories:
- menu-display: Menu items, food cards, pricing, categories
- ordering-system: Cart, checkout, quantity, customization
- booking-reservations: Calendar, table selection, time picker
- navigation-layout: Headers, menus, navigation
- user-feedback: Alerts, loading, status updates
- user-account: Login, profile, order history
- social-proof: Reviews, ratings, testimonials
- interactive-features: Chat, maps, video
- marketing: Promotions, CTAs, banners

Return JSON:
{
  "category": "menu-display",
  "subcategory": "menu-item-cards",
  "restaurant_fit_score": 9,
  "use_cases": ["Display menu items", "Show pricing", "Food images"],
  "required_adaptations": ["Add dietary badges", "Optimize food image sizing"],
  "component_name": "Elegant Food Card",
  "complexity": "medium",
  "tech_stack": ["react", "tailwind"],
  "recommended_priority": "critical"
}
`;
```

### Step 4: Batch Processing

Process in batches of 20 components to minimize API calls:

```javascript
// Batch 1: components 1-20
// Single API call with 20 code snippets
// Parse response, organize files

// Batch 2: components 21-40
// ...

// Total API calls: 10 for 200 components
// Cost per call: $0.003
// Total: $0.03
```

---

## 💻 Code Import Script

