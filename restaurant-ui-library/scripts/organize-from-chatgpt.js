#!/usr/bin/env node

/**
 * Organize Components from ChatGPT Pro Categorization
 *
 * Takes JSON output from ChatGPT and organizes files into restaurant categories
 * Usage: node scripts/organize-from-chatgpt.js categorization-outputs/*.json
 */

const fs = require('fs');
const path = require('path');

const config = {
  rawCodeDir: path.join(__dirname, '..', 'raw-code'),
  componentsDir: path.join(__dirname, '..', 'components'),
  categorizationDir: path.join(__dirname, '..', 'categorization-outputs'),

  categoryMap: {
    'menu-display': '1-menu-display',
    'ordering-system': '2-ordering-system',
    'booking-reservations': '3-booking-reservations',
    'navigation-layout': '4-navigation-layout',
    'user-feedback': '5-user-feedback',
    'user-account': '6-user-account',
    'social-proof': '7-social-proof',
    'interactive-features': '8-interactive-features',
    'marketing': '9-marketing'
  }
};

function organizeComponents() {
  console.log('📂 Organizing components from ChatGPT categorization...\n');

  // Create categorization-outputs directory if needed
  if (!fs.existsSync(config.categorizationDir)) {
    fs.mkdirSync(config.categorizationDir, { recursive: true });
    console.log('📁 Created categorization-outputs/ folder');
    console.log('   Save your ChatGPT JSON outputs here!\n');
  }

  // Get all JSON files from categorization-outputs
  const jsonFiles = fs.readdirSync(config.categorizationDir)
    .filter(f => f.endsWith('.json'))
    .map(f => path.join(config.categorizationDir, f));

  if (jsonFiles.length === 0) {
    console.log('❌ No JSON files found in categorization-outputs/');
    console.log('\nUsage:');
    console.log('1. Get categorization from ChatGPT Pro');
    console.log('2. Save JSON output to: categorization-outputs/batch-1.json');
    console.log('3. Run: node scripts/organize-from-chatgpt.js\n');
    return;
  }

  console.log(`Found ${jsonFiles.length} categorization files\n`);

  let totalOrganized = 0;
  let totalRejected = 0;
  const summary = {};

  // Process each JSON file
  for (const jsonFile of jsonFiles) {
    console.log(`Processing: ${path.basename(jsonFile)}`);

    try {
      const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
      const components = data.components || data;

      if (!Array.isArray(components)) {
        console.warn(`   ⚠️ Invalid format - expected array of components`);
        continue;
      }

      for (const component of components) {
        try {
          // Only organize if good restaurant fit
          if (component.restaurant_fit_score < 6) {
            console.log(`   🚫 Rejected: ${component.filename} (score: ${component.restaurant_fit_score})`);
            totalRejected++;
            continue;
          }

          // Find source file
          const sourceFile = findSourceFile(component.filename, component.original_category);
          if (!sourceFile) {
            console.warn(`   ⚠️ Source file not found: ${component.filename}`);
            continue;
          }

          // Determine destination
          const categoryFolder = config.categoryMap[component.restaurant_category];
          if (!categoryFolder) {
            console.warn(`   ⚠️ Unknown category: ${component.restaurant_category}`);
            continue;
          }

          const destDir = path.join(
            config.componentsDir,
            categoryFolder,
            component.restaurant_subcategory || 'uncategorized'
          );

          // Create destination directory
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }

          // Copy code file
          const destFile = path.join(destDir, component.filename);
          fs.copyFileSync(sourceFile, destFile);

          // Save metadata
          const metadata = {
            ...component,
            source_file: sourceFile,
            organized_date: new Date().toISOString()
          };

          fs.writeFileSync(
            destFile.replace(/\.(html|jsx|tsx|vue)$/, '.json'),
            JSON.stringify(metadata, null, 2)
          );

          // Track summary
          if (!summary[component.restaurant_category]) {
            summary[component.restaurant_category] = 0;
          }
          summary[component.restaurant_category]++;

          totalOrganized++;

          console.log(`   ✅ ${component.filename} → ${categoryFolder}/${component.restaurant_subcategory}/`);

        } catch (err) {
          console.error(`   ❌ Error organizing ${component.filename}: ${err.message}`);
        }
      }

    } catch (err) {
      console.error(`   ❌ Error reading ${path.basename(jsonFile)}: ${err.message}`);
    }

    console.log('');
  }

  // Print summary
  console.log('✅ Organization Complete!\n');
  console.log(`📊 Statistics:`);
  console.log(`   Organized: ${totalOrganized} components`);
  console.log(`   Rejected: ${totalRejected} components (low fit score)`);
  console.log('');
  console.log('📁 Breakdown by category:');

  Object.entries(summary)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      console.log(`   ${category}: ${count} components`);
    });

  console.log('');
}

function findSourceFile(filename, originalCategory) {
  // Try original category first
  if (originalCategory) {
    const tryPath = path.join(config.rawCodeDir, originalCategory, filename);
    if (fs.existsSync(tryPath)) {
      return tryPath;
    }
  }

  // Search all categories
  const categories = fs.readdirSync(config.rawCodeDir)
    .filter(f => fs.statSync(path.join(config.rawCodeDir, f)).isDirectory());

  for (const category of categories) {
    const tryPath = path.join(config.rawCodeDir, category, filename);
    if (fs.existsSync(tryPath)) {
      return tryPath;
    }
  }

  return null;
}

// Run if called directly
if (require.main === module) {
  organizeComponents();
}

module.exports = { organizeComponents };
