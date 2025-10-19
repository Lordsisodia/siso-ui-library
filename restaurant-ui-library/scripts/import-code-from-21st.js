#!/usr/bin/env node

/**
 * Code Importer from 21st.dev
 *
 * Extracts actual component code (HTML/CSS/JS/React)
 * Uses Playwright to automate code extraction
 *
 * Cost: $0.00 (Pure automation)
 * Usage: node scripts/import-code-from-21st.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const config = {
  baseUrl: 'https://21st.dev',
  categories: [
    // CRITICAL - Do these first
    { name: 'buttons', path: '/components/buttons', count: 130, priority: 'critical' },
    { name: 'cards', path: '/components/cards', count: 79, priority: 'critical' },
    { name: 'forms', path: '/components/forms', count: 23, priority: 'critical' },
    { name: 'inputs', path: '/components/inputs', count: 102, priority: 'critical' },

    // HIGH - Do these second
    { name: 'modals', path: '/components/modals', count: 37, priority: 'high' },
    { name: 'calendars', path: '/components/calendars', count: 34, priority: 'high' },
    { name: 'tabs', path: '/components/tabs', count: 38, priority: 'high' },
    { name: 'badges', path: '/components/badges', count: 25, priority: 'high' },
    { name: 'alerts', path: '/components/alerts', count: 23, priority: 'high' },

    // MEDIUM - Optional
    { name: 'avatars', path: '/components/avatars', count: 17, priority: 'medium' },
    { name: 'carousels', path: '/components/carousels', count: 16, priority: 'medium' },
    { name: 'accordions', path: '/components/accordions', count: 40, priority: 'medium' },
  ],
  outputDir: path.join(__dirname, '..', 'raw-code'),

  // Selectors for 21st.dev (adjust based on actual site structure)
  selectors: {
    codeButton: 'button[aria-label="View code"], button:has-text("Code"), .code-button',
    codeBlock: 'pre code, .code-block, [data-code]',
    componentCard: '.component-card, [data-component], .preview-card',
    copyButton: 'button:has-text("Copy")',
  }
};

async function extractComponentCode(page, componentIndex) {
  try {
    // Try to find and click "View Code" button
    const codeButton = await page.$(config.selectors.codeButton);
    if (codeButton) {
      await codeButton.click();
      await page.waitForTimeout(500);
    }

    // Extract code from code block
    const codeElement = await page.$(config.selectors.codeBlock);
    if (codeElement) {
      const code = await codeElement.textContent();
      return code;
    }

    // Fallback: Extract from component DOM
    const componentHtml = await page.evaluate((idx) => {
      const component = document.querySelectorAll('.component-preview, [data-component]')[idx];
      return component ? component.outerHTML : null;
    }, componentIndex);

    return componentHtml;

  } catch (err) {
    console.warn(`   ⚠️ Failed to extract code: ${err.message}`);
    return null;
  }
}

async function importCode() {
  console.log('🚀 Starting Code Import from 21st.dev');
  console.log('💰 Cost: $0.00 (Pure automation)\n');

  // Create output directory
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }

  const browser = await chromium.launch({
    headless: false, // Show browser to see what's happening
    slowMo: 100
  });

  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
  });

  const page = await context.newPage();

  const manifest = {
    import_date: new Date().toISOString(),
    source: '21st.dev',
    categories: [],
    total_components: 0
  };

  // Filter by priority if needed
  const categoriesToImport = config.categories.filter(c =>
    ['critical', 'high'].includes(c.priority) // Only import critical + high
  );

  for (const category of categoriesToImport) {
    console.log(`\n📂 Processing: ${category.name} (Priority: ${category.priority})`);

    const categoryDir = path.join(config.outputDir, category.name);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    try {
      await page.goto(`${config.baseUrl}${category.path}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      await page.waitForTimeout(2000);

      // Get component count
      const componentCount = await page.$$eval(
        config.selectors.componentCard,
        elements => elements.length
      );

      console.log(`   Found ${componentCount} components`);

      const categoryData = {
        name: category.name,
        priority: category.priority,
        components: []
      };

      // Extract code for each component
      for (let i = 0; i < Math.min(componentCount, category.count); i++) {
        try {
          // Navigate to individual component if needed
          const componentCards = await page.$$(config.selectors.componentCard);
          if (componentCards[i]) {
            // Try to click into component detail view
            await componentCards[i].click();
            await page.waitForTimeout(1000);
          }

          const code = await extractComponentCode(page, i);

          if (code) {
            const filename = `${category.name}-${String(i + 1).padStart(3, '0')}.html`;
            const filepath = path.join(categoryDir, filename);

            // Save code
            fs.writeFileSync(filepath, code);

            // Extract component metadata
            const metadata = {
              index: i + 1,
              filename,
              category: category.name,
              extracted_date: new Date().toISOString(),
              code_length: code.length,
              has_css: code.includes('style') || code.includes('class'),
              has_js: code.includes('script') || code.includes('onClick'),
              framework: detectFramework(code)
            };

            fs.writeFileSync(
              filepath.replace('.html', '.meta.json'),
              JSON.stringify(metadata, null, 2)
            );

            categoryData.components.push(metadata);

            if ((i + 1) % 10 === 0) {
              console.log(`   ✅ Extracted ${i + 1}/${componentCount} components`);
            }
          }

          // Go back if we navigated away
          if (componentCards[i]) {
            await page.goBack();
            await page.waitForTimeout(500);
          }

        } catch (err) {
          console.warn(`   ⚠️ Failed component ${i + 1}: ${err.message}`);
        }
      }

      manifest.categories.push(categoryData);
      manifest.total_components += categoryData.components.length;

      console.log(`   ✅ Completed ${category.name}: ${categoryData.components.length} components`);

    } catch (err) {
      console.error(`   ❌ Error processing ${category.name}: ${err.message}`);
    }
  }

  await browser.close();

  // Save manifest
  fs.writeFileSync(
    path.join(config.outputDir, 'import-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\n✅ Code Import Complete!`);
  console.log(`📊 Total components: ${manifest.total_components}`);
  console.log(`📁 Saved to: ${config.outputDir}`);
  console.log(`💰 Total cost: $0.00\n`);
  console.log('📝 Next step: node scripts/categorize-code-with-gpt4.js');
}

function detectFramework(code) {
  if (code.includes('React') || code.includes('jsx') || code.includes('className')) {
    return 'react';
  }
  if (code.includes('Vue') || code.includes('v-')) {
    return 'vue';
  }
  if (code.includes('@angular') || code.includes('*ng')) {
    return 'angular';
  }
  if (code.includes('class:') || code.includes('svelte')) {
    return 'svelte';
  }
  return 'vanilla';
}

// Run if called directly
if (require.main === module) {
  importCode().catch(console.error);
}

module.exports = { importCode };
