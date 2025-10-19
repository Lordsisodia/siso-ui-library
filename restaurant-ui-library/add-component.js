#!/usr/bin/env node

/**
 * Restaurant UI Library - Component Addition Helper
 *
 * This script helps add new components to the library with proper structure
 * Usage: node add-component.js <component-name> <image-path>
 */

const fs = require('fs');
const path = require('path');

// Get command line arguments
const componentName = process.argv[2];
const imagePath = process.argv[3];

if (!componentName) {
  console.error('❌ Error: Component name required');
  console.log('Usage: node add-component.js <component-name> <image-path>');
  process.exit(1);
}

// Generate component ID (kebab-case)
const componentId = componentName
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

// Create component folder
const componentDir = path.join(__dirname, 'components', componentId);
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
  console.log(`✅ Created component folder: ${componentDir}`);
}

// Copy image if provided
let imageFileName = null;
if (imagePath && fs.existsSync(imagePath)) {
  const ext = path.extname(imagePath);
  imageFileName = `${componentId}${ext}`;
  const destPath = path.join(componentDir, imageFileName);
  fs.copyFileSync(imagePath, destPath);

  // Also copy to assets
  const assetsPath = path.join(__dirname, 'assets', imageFileName);
  fs.copyFileSync(imagePath, assetsPath);

  console.log(`✅ Copied image: ${imageFileName}`);
}

// Create component metadata
const metadata = {
  id: componentId,
  name: componentName,
  description: `${componentName} component for restaurant applications`,
  category: "uncategorized",
  tags: [],
  image_path: imageFileName ? `components/${componentId}/${imageFileName}` : null,
  created_date: new Date().toISOString(),
  metadata: {
    complexity: "medium",
    responsive: true,
    interactive: false,
    restaurant_types: [],
    use_cases: []
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

// Save component metadata
const metadataPath = path.join(componentDir, 'metadata.json');
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log(`✅ Created metadata: ${metadataPath}`);

// Update catalog
const catalogPath = path.join(__dirname, 'catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
catalog.components.push(metadata);
catalog.total_components = catalog.components.length;
catalog.last_updated = new Date().toISOString().split('T')[0];
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
console.log(`✅ Updated catalog.json`);

// Create README for component
const readmePath = path.join(componentDir, 'README.md');
const readmeContent = `# ${componentName}

## Overview

${componentName} component for restaurant applications.

## Visual Reference

![${componentName}](${imageFileName || 'No image provided'})

## Metadata

- **ID**: ${componentId}
- **Category**: Uncategorized (update in metadata.json)
- **Complexity**: Medium
- **Responsive**: Yes
- **Interactive**: No

## Usage Context

*Describe where and how this component should be used*

## Implementation Notes

*Add technical notes about implementing this component*

## Variations

*Document different states or variations of this component*

## AI Analysis

Status: Not yet analyzed

Run AI analysis to get:
- Quality scores
- Usage recommendations
- Improvement suggestions
- Similar components

---

*Component added: ${new Date().toISOString().split('T')[0]}*
`;

fs.writeFileSync(readmePath, readmeContent);
console.log(`✅ Created README: ${readmePath}`);

console.log(`\n🎉 Component "${componentName}" added successfully!`);
console.log(`\n📝 Next steps:`);
console.log(`1. Edit ${metadataPath} to update category and tags`);
console.log(`2. Update ${readmePath} with usage details`);
console.log(`3. Run AI analysis to generate quality scores`);
console.log(`4. Commit changes to git\n`);
