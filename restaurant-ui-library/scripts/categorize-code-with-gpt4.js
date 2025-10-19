#!/usr/bin/env node

/**
 * Categorize Component Code Using GPT-4o-mini
 *
 * Batch processes code and categorizes for restaurant use
 * Uses specialized prompt for accurate restaurant categorization
 *
 * Cost: ~$0.03 for 200 components
 * Usage: node scripts/categorize-code-with-gpt4.js
 */

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const config = {
  model: 'gpt-4o-mini', // Cheapest + Best for code
  rawCodeDir: path.join(__dirname, '..', 'raw-code'),
  componentsDir: path.join(__dirname, '..', 'components'),
  batchSize: 20, // Process 20 components per API call

  // Restaurant-specific category mapping
  restaurantCategories: {
    'menu-display': {
      keywords: ['menu', 'food', 'dish', 'price', 'card', 'item', 'product', 'category'],
      subcategories: [
        'menu-item-cards',
        'dish-images',
        'pricing-displays',
        'category-tabs',
        'dietary-badges',
        'featured-carousels',
        'menu-accordions',
        'icons'
      ]
    },
    'ordering-system': {
      keywords: ['cart', 'checkout', 'order', 'quantity', 'add', 'buy', 'purchase'],
      subcategories: [
        'add-to-cart-buttons',
        'quantity-selectors',
        'customization-options',
        'order-forms',
        'cart-modals',
        'checkout-buttons',
        'input-fields',
        'dropdowns-selects',
        'sliders',
        'toggles'
      ]
    },
    'booking-reservations': {
      keywords: ['calendar', 'date', 'time', 'reservation', 'book', 'table', 'party'],
      subcategories: [
        'date-pickers',
        'time-selectors',
        'party-size-selectors',
        'table-displays',
        'reservation-forms',
        'special-requests'
      ]
    },
    'navigation-layout': {
      keywords: ['nav', 'header', 'footer', 'menu', 'sidebar', 'hero', 'layout'],
      subcategories: [
        'header-navigation',
        'mobile-menus',
        'sidebars',
        'hero-sections',
        'footers',
        'breadcrumbs',
        'backgrounds'
      ]
    },
    'user-feedback': {
      keywords: ['alert', 'notification', 'toast', 'spinner', 'loading', 'tooltip', 'status'],
      subcategories: [
        'alerts-notifications',
        'toasts',
        'loading-spinners',
        'tooltips',
        'popovers',
        'status-indicators'
      ]
    },
    'user-account': {
      keywords: ['login', 'signup', 'profile', 'avatar', 'account', 'user', 'auth'],
      subcategories: [
        'login-forms',
        'signup-forms',
        'profile-avatars',
        'order-history',
        'loyalty-displays',
        'saved-addresses'
      ]
    },
    'social-proof': {
      keywords: ['review', 'rating', 'star', 'testimonial', 'feedback', 'comment'],
      subcategories: [
        'review-cards',
        'rating-displays',
        'testimonial-layouts',
        'customer-quotes'
      ]
    }
  }
};

const CATEGORIZATION_PROMPT = `You are an expert UI component analyzer specializing in RESTAURANT applications.

Your task: Analyze component code and categorize it for restaurant use cases.

Restaurant Categories:
1. menu-display - Menu items, food cards, pricing, category navigation
2. ordering-system - Shopping cart, checkout, quantity selection, customization
3. booking-reservations - Table booking, date/time selection, party size
4. navigation-layout - Site navigation, headers, footers, hero sections
5. user-feedback - Alerts, notifications, loading states, tooltips
6. user-account - Login, profile, order history, saved info
7. social-proof - Reviews, ratings, testimonials

For EACH component, analyze:
- What UI pattern does it follow?
- What restaurant use case fits best?
- How well does it suit restaurant applications? (1-10)
- What adaptations are needed for food service?

Return JSON array with this structure for each component:
{
  "component_index": 1,
  "original_category": "buttons",
  "restaurant_category": "ordering-system",
  "restaurant_subcategory": "add-to-cart-buttons",
  "restaurant_fit_score": 9,
  "reasoning": "Perfect for 'Add to Cart' - clear CTA, good sizing for mobile ordering",
  "use_cases": ["Add menu item to cart", "Quick order button", "One-click reorder"],
  "required_adaptations": [
    "Adjust copy to food context ('Add to Order')",
    "Ensure 44px minimum touch target for mobile",
    "Add quantity indicator badge"
  ],
  "complexity": "low",
  "priority": "critical",
  "framework": "react"
}

Important:
- restaurant_fit_score: 8-10 = excellent fit, 5-7 = good with modifications, 1-4 = poor fit
- Only recommend components with score >= 6
- Be specific about restaurant adaptations needed
- Prioritize mobile-friendly components (most orders are mobile)
- Consider speed (customers want to order quickly)
- Think about food context (menu browsing, ordering, reservations)`;

async function categorizeCode() {
  console.log('🤖 Starting Code Categorization with GPT-4o-mini');
  console.log('💰 Model: gpt-4o-mini (~$0.03 for 200 components)\n');

  // Load manifest
  const manifestPath = path.join(config.rawCodeDir, 'import-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('❌ No import manifest found. Run import-code-from-21st.js first.');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(`📊 Processing ${manifest.total_components} components\n`);

  let totalCategorized = 0;
  let totalCost = 0;
  const results = {
    categorized: [],
    rejected: [],
    by_category: {},
    total_cost: 0
  };

  for (const category of manifest.categories) {
    console.log(`\n📂 Processing: ${category.name} (${category.components.length} components)`);

    const categoryPath = path.join(config.rawCodeDir, category.name);

    // Load all component codes
    const components = category.components.map(comp => {
      const codePath = path.join(categoryPath, comp.filename);
      const code = fs.readFileSync(codePath, 'utf8');
      return {
        ...comp,
        code: code
      };
    });

    // Process in batches
    for (let i = 0; i < components.length; i += config.batchSize) {
      const batch = components.slice(i, i + config.batchSize);
      console.log(`   Batch ${Math.floor(i / config.batchSize) + 1}/${Math.ceil(components.length / config.batchSize)}...`);

      try {
        // Prepare batch for API
        const batchPrompt = `Analyze these ${batch.length} UI components and categorize for restaurant use:\n\n` +
          batch.map((comp, idx) => `
Component ${idx + 1}:
Filename: ${comp.filename}
Original Category: ${comp.category}
Framework: ${comp.framework}
Code:
\`\`\`html
${comp.code.substring(0, 2000)} ${comp.code.length > 2000 ? '...(truncated)' : ''}
\`\`\`
`).join('\n---\n');

        const response = await openai.chat.completions.create({
          model: config.model,
          messages: [
            {
              role: 'system',
              content: CATEGORIZATION_PROMPT
            },
            {
              role: 'user',
              content: batchPrompt
            }
          ],
          temperature: 0.3, // Low temperature for consistent categorization
          max_tokens: 3000,
          response_format: { type: "json_object" }
        });

        const categorizations = JSON.parse(response.choices[0].message.content);
        const componentsArray = categorizations.components || Object.values(categorizations);

        // Process each categorization
        componentsArray.forEach((cat, idx) => {
          const sourceComponent = batch[idx];

          if (cat.restaurant_fit_score >= 6) {
            // Good fit - move to restaurant category
            const destCategory = `${Object.keys(config.restaurantCategories).indexOf(cat.restaurant_category) + 1}-${cat.restaurant_category}`;
            const destSubcategory = cat.restaurant_subcategory || 'uncategorized';
            const destDir = path.join(config.componentsDir, destCategory, destSubcategory);

            if (!fs.existsSync(destDir)) {
              fs.mkdirSync(destDir, { recursive: true });
            }

            // Copy code file
            const sourceFile = path.join(categoryPath, sourceComponent.filename);
            const destFile = path.join(destDir, sourceComponent.filename);
            fs.copyFileSync(sourceFile, destFile);

            // Save enhanced metadata
            const metadata = {
              ...sourceComponent,
              restaurant_category: cat.restaurant_category,
              restaurant_subcategory: cat.restaurant_subcategory,
              restaurant_fit_score: cat.restaurant_fit_score,
              reasoning: cat.reasoning,
              use_cases: cat.use_cases,
              required_adaptations: cat.required_adaptations,
              complexity: cat.complexity,
              priority: cat.priority,
              categorized_date: new Date().toISOString()
            };

            fs.writeFileSync(
              destFile.replace('.html', '.json'),
              JSON.stringify(metadata, null, 2)
            );

            results.categorized.push(metadata);
            totalCategorized++;

            // Track by category
            if (!results.by_category[cat.restaurant_category]) {
              results.by_category[cat.restaurant_category] = [];
            }
            results.by_category[cat.restaurant_category].push(metadata);

          } else {
            // Poor fit - skip
            results.rejected.push({
              ...sourceComponent,
              reason: `Low restaurant fit score: ${cat.restaurant_fit_score}`,
              reasoning: cat.reasoning
            });
          }
        });

        // Calculate cost
        const tokensUsed = response.usage.total_tokens;
        const batchCost = (tokensUsed / 1000000) * (0.15 + 0.60); // Input + output
        totalCost += batchCost;

        console.log(`   ✅ Tokens: ${tokensUsed}, Cost: $${batchCost.toFixed(4)}`);

      } catch (err) {
        console.error(`   ❌ Batch failed: ${err.message}`);
      }

      await wait(1000); // Rate limit courtesy
    }
  }

  results.total_cost = totalCost;

  // Save results summary
  fs.writeFileSync(
    path.join(config.componentsDir, 'categorization-results.json'),
    JSON.stringify(results, null, 2)
  );

  console.log(`\n✅ Categorization Complete!`);
  console.log(`📊 Categorized: ${totalCategorized} components`);
  console.log(`🚫 Rejected: ${results.rejected.length} components (poor restaurant fit)`);
  console.log(`💰 Total cost: $${totalCost.toFixed(4)}`);
  console.log(`\n📁 Breakdown by category:`);

  Object.entries(results.by_category).forEach(([cat, comps]) => {
    console.log(`   ${cat}: ${comps.length} components`);
  });

  console.log(`\n📄 Full results: components/categorization-results.json\n`);
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Run if called directly
if (require.main === module) {
  categorizeCode().catch(console.error);
}

module.exports = { categorizeCode };
