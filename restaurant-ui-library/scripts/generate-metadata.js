#!/usr/bin/env node

/**
 * Generate Metadata for Manually Imported Components
 *
 * Scans component folders and creates basic metadata.json files
 * Based on folder structure and filenames
 *
 * Usage: node scripts/generate-metadata.js
 */

const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'components');

const categoryMap = {
  '1-menu-display': 'menu_display',
  '2-ordering-system': 'ordering_system',
  '3-booking-reservations': 'booking_reservations',
  '4-navigation-layout': 'navigation_layout',
  '5-user-feedback': 'user_feedback',
  '6-user-account': 'user_account',
  '7-social-proof': 'social_proof',
  '8-interactive-features': 'interactive_features',
  '9-marketing': 'marketing'
};

function generateMetadata() {
  console.log('📝 Generating metadata for components...\n');

  let totalGenerated = 0;

  // Scan all category folders
  const categories = fs.readdirSync(componentsDir)
    .filter(f => fs.statSync(path.join(componentsDir, f)).isDirectory());

  for (const category of categories) {
    const categoryPath = path.join(componentsDir, category);

    // Scan all component type folders
    const types = fs.readdirSync(categoryPath)
      .filter(f => {
        const fullPath = path.join(categoryPath, f);
        return fs.statSync(fullPath).isDirectory() && f !== '.git';
      });

    for (const type of types) {
      const typePath = path.join(categoryPath, type);

      // Find all image files
      const images = fs.readdirSync(typePath)
        .filter(f => /\.(png|jpg|jpeg|gif|svg)$/i.test(f));

      for (const image of images) {
        const metadataFile = path.join(typePath, image.replace(/\.[^.]+$/, '.json'));

        // Skip if metadata already exists
        if (fs.existsSync(metadataFile)) {
          continue;
        }

        // Generate basic metadata
        const metadata = {
          id: `${categoryMap[category]}-${type}-${path.parse(image).name}`,
          name: formatName(image),
          description: `${formatName(type)} component for restaurant applications`,
          category: categoryMap[category] || 'uncategorized',
          subcategory: type,
          image_path: path.join(category, type, image),
          tags: inferTags(type, image),
          created_date: new Date().toISOString(),
          metadata: {
            complexity: inferComplexity(type),
            responsive: true,
            interactive: inferInteractivity(type),
            restaurant_types: ['all'],
            use_cases: inferUseCases(type)
          },
          ai_analysis: {
            scores: {
              visual_quality: 0,
              usability: 0,
              restaurant_fit: 0,
              reusability: 0,
              technical: 0
            },
            overall_score: 0,
            rating: "Not Analyzed",
            strengths: [],
            weaknesses: [],
            recommendations: [],
            analyzed_date: null
          }
        };

        fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
        totalGenerated++;

        if (totalGenerated % 10 === 0) {
          console.log(`   ✅ Generated ${totalGenerated} metadata files...`);
        }
      }
    }
  }

  console.log(`\n✅ Metadata generation complete!`);
  console.log(`📊 Generated ${totalGenerated} new metadata files\n`);
}

// Helper functions
function formatName(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\.[^.]+$/, '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function inferTags(type, filename) {
  const tags = [type];
  const lower = (type + filename).toLowerCase();

  if (lower.includes('card')) tags.push('card');
  if (lower.includes('button')) tags.push('button', 'cta');
  if (lower.includes('form')) tags.push('form', 'input');
  if (lower.includes('menu')) tags.push('menu', 'navigation');
  if (lower.includes('modal')) tags.push('modal', 'overlay');
  if (lower.includes('mobile')) tags.push('mobile');

  return [...new Set(tags)];
}

function inferComplexity(type) {
  const simple = ['button', 'icon', 'badge', 'toggle'];
  const complex = ['form', 'modal', 'calendar', 'carousel', 'chatbot'];

  if (simple.some(s => type.includes(s))) return 'low';
  if (complex.some(c => type.includes(c))) return 'high';
  return 'medium';
}

function inferInteractivity(type) {
  const interactive = ['button', 'form', 'input', 'select', 'toggle',
                       'slider', 'calendar', 'modal', 'chat'];
  return interactive.some(i => type.includes(i));
}

function inferUseCases(type) {
  const useCaseMap = {
    'menu-item-cards': ['Browse menu', 'Display dishes', 'Show pricing'],
    'buttons': ['User actions', 'Submit forms', 'Add to cart'],
    'forms': ['User input', 'Data collection', 'Checkout'],
    'calendar': ['Reservations', 'Booking', 'Date selection'],
    'cart': ['Shopping cart', 'Order review', 'Checkout'],
  };

  return useCaseMap[type] || ['General UI'];
}

// Run if called directly
if (require.main === module) {
  generateMetadata();
}

module.exports = { generateMetadata };
