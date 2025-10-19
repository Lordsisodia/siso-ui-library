# Quick Start Guide

## 🚀 Adding Components

### Method 1: Using the Helper Script (Recommended)

```bash
node add-component.js "Menu Item Card" /path/to/image.png
```

This will automatically:
- ✅ Create component folder with proper structure
- ✅ Copy image to component folder and assets
- ✅ Generate metadata.json
- ✅ Create component README
- ✅ Update catalog.json

### Method 2: Manual Addition

1. **Create component folder**
   ```bash
   mkdir components/my-component-name
   ```

2. **Add image** to `components/my-component-name/`

3. **Create metadata.json** (see catalog.json for schema)

4. **Update catalog.json** with new component entry

## 📊 Running AI Analysis

*Coming soon: AI analysis script to evaluate all components*

## 🔍 Browsing Components

### View Catalog
```bash
cat catalog.json | jq '.components'
```

### List All Components
```bash
ls -la components/
```

### View Component Details
```bash
cat components/[component-id]/metadata.json
```

## 📦 Package Structure

```
restaurant-ui-library/
├── components/           # Individual component folders
│   └── [component-id]/
│       ├── image.png     # Component image
│       ├── metadata.json # Structured data
│       └── README.md     # Documentation
├── assets/              # All component images (backup)
├── metadata/            # Additional metadata files
├── catalog.json         # Central component registry
├── analysis-guide.md    # AI analysis instructions
├── add-component.js     # Helper script
└── README.md           # Main documentation
```

## 🎯 Component Categories

When adding components, categorize as:
- `navigation_layout` - Headers, menus, navigation
- `menu_food_display` - Menu items, food cards
- `ordering_booking` - Cart, checkout, reservations
- `user_account` - Login, profile, orders
- `interactive_elements` - Buttons, inputs, filters
- `feedback_status` - Loading, errors, notifications

## 🏷️ Tagging Best Practices

Use descriptive tags:
- Component type: `card`, `button`, `form`, `modal`
- Use case: `menu`, `checkout`, `profile`, `search`
- Style: `minimal`, `elegant`, `modern`, `colorful`
- Platform: `mobile`, `desktop`, `tablet`
- Interaction: `static`, `animated`, `interactive`

## 📈 AI Analysis Scores

Components are scored on:
1. **Visual Quality** (0-10) - Design aesthetics
2. **Usability** (0-10) - User experience
3. **Restaurant Fit** (0-10) - Industry appropriateness
4. **Reusability** (0-10) - Component modularity
5. **Technical** (0-10) - Implementation complexity

Overall Score = Average of all categories

## 🔄 Workflow

1. **Add components** with images
2. **Run AI analysis** to evaluate quality
3. **Review recommendations** from AI
4. **Implement improvements** on low-scoring components
5. **Re-analyze** to track improvements
6. **Use in projects** - Build with highest-rated components

## 📝 Git Workflow

```bash
# Add new components
git add .
git commit -m "Add [component-name] component"

# Push to GitHub
git push origin main
```

## 🎨 Design Guidelines

For best AI analysis scores:
- ✅ Clear visual hierarchy
- ✅ Adequate contrast ratios
- ✅ Touch-friendly sizing (44x44px minimum)
- ✅ Consistent spacing and alignment
- ✅ Readable typography
- ✅ Appropriate for restaurant context

---

*Ready to build your restaurant UI library!* 🍽️
