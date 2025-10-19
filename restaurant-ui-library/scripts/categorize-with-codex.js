#!/usr/bin/env node

/**
 * Categorize Components Using OpenAI Codex
 *
 * Batch processes screenshots and categorizes them for restaurant use
 * Uses GPT-4o-mini for cost efficiency (~$0.15 per 1M tokens)
 *
 * Usage: node scripts/categorize-with-codex.js
 */

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const config = {
  rawImportsDir: path.join(__dirname, '..', 'raw-imports'),
  componentsDir: path.join(__dirname, '..', 'components'),
  model: 'gpt-4o-mini', // Cheapest option: ~$0.15/1M tokens
  batchSize: 10, // Process 10 images at once to minimize API calls

  // Restaurant-specific categories
  restaurantCategories: {
    'menu-display': ['menu', 'food', 'dish', 'price', 'card', 'category', 'tab'],
    'ordering-system': ['cart', 'checkout', 'order', 'button', 'input', 'form', 'quantity'],
    'booking-reservations': ['calendar', 'date', 'time', 'table', 'reservation'],
    'navigation-layout': ['nav', 'header', 'footer', 'hero', 'menu', 'sidebar'],
    'user-feedback': ['alert', 'notification', 'toast', 'spinner', 'tooltip'],
    'user-account': ['login', 'signup', 'profile', 'avatar', 'account'],
    'social-proof': ['review', 'rating', 'testimonial', 'star'],
    'interactive-features': ['chat', 'video', 'map', 'upload'],
    'marketing': ['banner', 'promo', 'cta', 'announcement', 'offer']
  }
};

/**
 * Convert image to base64 for vision API
 */
function imageToBase64(imagePath) {
  const imageBuffer = fs.readFileSync(imagePath);
  return imageBuffer.toString('base64');
}

/**
 * Batch categorize components using vision API
 */
async function categorizeComponents() {
  console.log('🤖 Starting AI Categorization with Codex');
  console.log(`💰 Model: ${config.model} (~$0.15 per 1M tokens)`);

  // Load import manifest
  const manifestPath = path.join(config.rawImportsDir, 'import-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('❌ No import manifest found. Run import-from-21st-dev.js first.');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(`📊 Processing ${manifest.total_components} components\n`);

  let totalCategorized = 0;
  let totalCost = 0;

  // Process each category from raw imports
  for (const category of manifest.categories) {
    console.log(`\n📂 Processing: ${category.name} (${category.count} components)`);

    const categoryPath = path.join(config.rawImportsDir, category.name);
    const imageFiles = fs.readdirSync(categoryPath)
      .filter(f => f.endsWith('.png'))
      .map(f => path.join(categoryPath, f));

    // Process in batches to minimize API calls
    for (let i = 0; i < imageFiles.length; i += config.batchSize) {
      const batch = imageFiles.slice(i, i + config.batchSize);

      console.log(`   Processing batch ${Math.floor(i / config.batchSize) + 1}/${Math.ceil(imageFiles.length / config.batchSize)}...`);

      try {
        // Prepare batch for vision API
        const imageContents = batch.map(imgPath => ({
          type: 'image_url',
          image_url: {
            url: `data:image/png;base64,${imageToBase64(imgPath)}`,
            detail: 'low' // Low detail = cheaper
          }
        }));

        // Single API call for entire batch
        const response = await openai.chat.completions.create({
          model: config.model,
          messages: [
            {
              role: 'system',
              content: `You are a UI component categorizer for restaurant applications.
Analyze components and categorize them into these restaurant-specific categories:
${Object.keys(config.restaurantCategories).join(', ')}

For each component, return JSON:
{
  "component_index": 0,
  "category": "menu-display",
  "subcategory": "menu-item-cards",
  "restaurant_fit": 8,
  "reasoning": "Card design perfect for displaying menu items with image and price"
}

Return array of categorizations for all components shown.`
            },
            {
              role: 'user',
              content: [
                { type: 'text', text: `Categorize these ${batch.length} UI components for restaurant use:` },
                ...imageContents
              ]
            }
          ],
          temperature: 0.3, // Lower = more consistent categorization
          max_tokens: 2000
        });

        const categorizations = JSON.parse(response.choices[0].message.content);

        // Move components to appropriate folders
        categorizations.forEach((cat, idx) => {
          if (cat.restaurant_fit >= 6) { // Only import if good fit
            const sourceFile = batch[idx];
            const destCategory = path.join(
              config.componentsDir,
              `${Object.keys(config.restaurantCategories).indexOf(cat.category) + 1}-${cat.category}`,
              cat.subcategory
            );

            // Create destination folder
            if (!fs.existsSync(destCategory)) {
              fs.mkdirSync(destCategory, { recursive: true });
            }

            // Copy file
            const filename = path.basename(sourceFile);
            fs.copyFileSync(sourceFile, path.join(destCategory, filename));

            // Save metadata
            const metadata = {
              original_category: category.name,
              restaurant_category: cat.category,
              subcategory: cat.subcategory,
              restaurant_fit_score: cat.restaurant_fit,
              reasoning: cat.reasoning,
              imported_date: new Date().toISOString()
            };

            fs.writeFileSync(
              path.join(destCategory, filename.replace('.png', '.json')),
              JSON.stringify(metadata, null, 2)
            );

            totalCategorized++;
          }
        });

        // Calculate cost (rough estimate)
        const tokensUsed = response.usage.total_tokens;
        const batchCost = (tokensUsed / 1000000) * 0.15;
        totalCost += batchCost;

        console.log(`   ✅ Batch complete. Tokens: ${tokensUsed}, Cost: $${batchCost.toFixed(4)}`);

      } catch (err) {
        console.error(`   ❌ Batch failed: ${err.message}`);
      }

      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`\n✅ Categorization Complete!`);
  console.log(`📊 Total categorized: ${totalCategorized} components`);
  console.log(`💰 Estimated cost: $${totalCost.toFixed(2)}`);
  console.log(`📁 Components organized in: ${config.componentsDir}\n`);
}

// Helper to wait
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Run if called directly
if (require.main === module) {
  categorizeComponents().catch(console.error);
}

module.exports = { categorizeComponents };
