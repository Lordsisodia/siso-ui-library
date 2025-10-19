#!/usr/bin/env node

/**
 * Component Importer from 21st.dev
 *
 * Uses Playwright to automatically screenshot components
 * NO AI credits needed for extraction - 100% FREE
 *
 * Usage: node scripts/import-from-21st-dev.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const config = {
  baseUrl: 'https://21st.dev',
  // Component categories from 21st.dev
  categories: [
    { name: 'buttons', path: '/components/buttons', count: 130 },
    { name: 'cards', path: '/components/cards', count: 79 },
    { name: 'forms', path: '/components/forms', count: 23 },
    { name: 'inputs', path: '/components/inputs', count: 102 },
    { name: 'modals', path: '/components/modals', count: 37 },
    { name: 'calendars', path: '/components/calendars', count: 34 },
    { name: 'tabs', path: '/components/tabs', count: 38 },
    { name: 'badges', path: '/components/badges', count: 25 },
    // Add more as needed
  ],
  outputDir: path.join(__dirname, '..', 'raw-imports'),
  screenshotDelay: 500, // ms between screenshots
};

async function importComponents() {
  console.log('🚀 Starting Component Import from 21st.dev');
  console.log('💰 Cost: $0 (Pure automation - no AI)');

  // Create output directory
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }

  const browser = await chromium.launch({
    headless: true,
    // Use slower viewport for better rendering
    slowMo: 100
  });

  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 },
    deviceScaleFactor: 2, // Retina quality screenshots
  });

  const page = await context.newPage();

  let totalScreenshots = 0;

  for (const category of config.categories) {
    console.log(`\n📂 Processing category: ${category.name} (${category.count} components)`);

    // Create category folder
    const categoryDir = path.join(config.outputDir, category.name);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    try {
      // Navigate to category page
      await page.goto(`${config.baseUrl}${category.path}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      // Wait for components to load
      await page.waitForTimeout(2000);

      // Find all component preview containers
      // Adjust selector based on 21st.dev's actual structure
      const componentSelectors = await page.$$eval('.component-preview, [data-component], .preview-card',
        (elements) => elements.map((el, idx) => ({ index: idx, visible: el.offsetParent !== null }))
      );

      console.log(`   Found ${componentSelectors.length} components`);

      // Screenshot each component
      for (let i = 0; i < Math.min(componentSelectors.length, category.count); i++) {
        try {
          const selector = `.component-preview:nth-of-type(${i + 1}), [data-component]:nth-of-type(${i + 1})`;
          const element = await page.$(selector);

          if (element) {
            const filename = `${category.name}-${String(i + 1).padStart(3, '0')}.png`;
            const filepath = path.join(categoryDir, filename);

            // Screenshot individual component
            await element.screenshot({
              path: filepath,
              type: 'png',
              animations: 'disabled',
            });

            totalScreenshots++;

            if (i % 10 === 0) {
              console.log(`   ✅ Captured ${i + 1}/${componentSelectors.length} components`);
            }

            // Small delay to avoid overwhelming the site
            await page.waitForTimeout(config.screenshotDelay);
          }
        } catch (err) {
          console.warn(`   ⚠️ Failed to capture component ${i + 1}: ${err.message}`);
        }
      }

      console.log(`   ✅ Completed ${category.name}: ${componentSelectors.length} components saved`);

    } catch (err) {
      console.error(`   ❌ Error processing ${category.name}: ${err.message}`);
    }
  }

  await browser.close();

  console.log(`\n✅ Import Complete!`);
  console.log(`📊 Total screenshots: ${totalScreenshots}`);
  console.log(`📁 Saved to: ${config.outputDir}`);
  console.log(`💰 Total cost: $0.00\n`);

  // Generate manifest
  const manifest = {
    import_date: new Date().toISOString(),
    total_components: totalScreenshots,
    categories: config.categories.map(cat => ({
      name: cat.name,
      count: fs.readdirSync(path.join(config.outputDir, cat.name)).length
    })),
    next_step: 'Run categorize-with-codex.js to organize into restaurant categories'
  };

  fs.writeFileSync(
    path.join(config.outputDir, 'import-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('📝 Next step: node scripts/categorize-with-codex.js');
}

// Run if called directly
if (require.main === module) {
  importComponents().catch(console.error);
}

module.exports = { importComponents };
