# Component Extraction Strategy
## From Mayorka (Mallorca Activities) to SISO UI Library

### 📋 Overview
This document outlines the step-by-step process to extract 95+ components from the Mayorka project into the SISO UI Library for reuse across tour guide clients.

---

## 🗂️ Directory Structure

### Source
```
/mallocra-activities/components/
├── ui/                    # 69 shadcn/ui components
├── landing/               # 4 landing page components
├── sidebar/               # 6 sidebar navigation components
├── payments/              # 1 Stripe payment component
├── qr/                    # 1 QR ticket component
├── weather/               # 2 weather components
├── magicui/               # 2 animated components
├── utilities/             # 8 utility components
├── client-tools/          # 1 dev tool
├── header.tsx             # Main header
├── header-simple.tsx      # Simple header
├── footer.tsx             # Main footer
├── preferred-footer.tsx   # Alternative footer
└── user-profile-manager.tsx
```

### Destination
```
/siso-ui-library/tour-guide-ui-library/
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── tour/            # Tour-specific components
│   ├── layout/          # Headers, footers, sidebars
│   ├── landing/         # Landing page sections
│   ├── integrations/    # Third-party integrations
│   ├── media/           # Media handling
│   ├── utilities/       # Utilities & providers
│   └── magicui/         # Premium animated components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── styles/              # Global styles
```

---

## 🚀 Extraction Phases

### Phase 1: Setup & Preparation

#### 1.1 Check Existing Structure
```bash
cd /Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library
ls -la
```

#### 1.2 Create Directory Structure
```bash
cd tour-guide-ui-library
mkdir -p components/{ui,tour,layout,landing,integrations,media,utilities,magicui}
mkdir -p lib hooks styles
```

#### 1.3 Initialize package.json (if not exists)
```bash
# Check if package.json exists
if [ ! -f "package.json" ]; then
  npm init -y
  # Update with tour-guide-ui-library details
fi
```

---

### Phase 2: Extract UI Primitives (69 components)

**Priority:** ⭐⭐⭐ High
**Time Estimate:** 30 minutes
**Complexity:** Low (copy + paste)

#### 2.1 Copy All UI Components
```bash
# Source directory
SOURCE="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities/components/ui"

# Destination directory
DEST="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/ui"

# Copy all UI components
cp -r "$SOURCE"/* "$DEST"/
```

#### 2.2 Verify Copy
```bash
ls -1 "$DEST" | wc -l
# Should show 69 files
```

#### 2.3 Check for Dependencies
Look for imports in copied files:
- `@/lib/utils` - Need to copy utils
- `@/hooks/*` - Need to copy hooks
- Third-party packages - Note for package.json

---

### Phase 3: Extract Tour-Specific Components

**Priority:** ⭐⭐⭐ High
**Time Estimate:** 20 minutes
**Complexity:** Medium (may need config adjustments)

#### 3.1 Components to Extract
```bash
SOURCE_BASE="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities/components"
DEST_TOUR="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/tour"

# Activity Card
cp "$SOURCE_BASE/ui/activity-card.tsx" "$DEST_TOUR/"

# Maps
cp "$SOURCE_BASE/ui/activities-map.tsx" "$DEST_TOUR/"
cp "$SOURCE_BASE/ui/google-map.tsx" "$DEST_TOUR/"
cp "$SOURCE_BASE/ui/leaflet-map.tsx" "$DEST_TOUR/"

# Currency
cp "$SOURCE_BASE/ui/currency-selector.tsx" "$DEST_TOUR/"

# QR Code
cp "$SOURCE_BASE/qr/booking-qr-ticket.tsx" "$DEST_TOUR/"
```

#### 3.2 Dependencies to Check
- Google Maps API key handling
- Leaflet CSS imports
- QR code library
- Currency conversion logic

---

### Phase 4: Extract Layout Components

**Priority:** ⭐⭐⭐ High
**Time Estimate:** 30 minutes
**Complexity:** Medium (large files, many imports)

#### 4.1 Headers & Footers
```bash
SOURCE_BASE="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities/components"
DEST_LAYOUT="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/layout"

# Headers
cp "$SOURCE_BASE/header.tsx" "$DEST_LAYOUT/"
cp "$SOURCE_BASE/header-simple.tsx" "$DEST_LAYOUT/"

# Footers
cp "$SOURCE_BASE/footer.tsx" "$DEST_LAYOUT/"
cp "$SOURCE_BASE/preferred-footer.tsx" "$DEST_LAYOUT/"

# User Profile
cp "$SOURCE_BASE/user-profile-manager.tsx" "$DEST_LAYOUT/"
```

#### 4.2 Sidebar System
```bash
# Copy entire sidebar directory
cp -r "$SOURCE_BASE/sidebar" "$DEST_LAYOUT/"
```

#### 4.3 Review & Adjust
- Check navigation links (may be project-specific)
- Review logo/branding references
- Check auth integration (Clerk vs custom)

---

### Phase 5: Extract Landing Components

**Priority:** ⭐⭐⭐ High
**Time Estimate:** 25 minutes
**Complexity:** Medium (hero sections with media)

#### 5.1 Landing Directory
```bash
SOURCE_BASE="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities/components"
DEST_LANDING="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/landing"

# Copy landing directory
cp -r "$SOURCE_BASE/landing"/* "$DEST_LANDING/"

# Hero variations from ui/
cp "$SOURCE_BASE/ui/hero-section.tsx" "$DEST_LANDING/"
cp "$SOURCE_BASE/ui/enhanced-hero-section.tsx" "$DEST_LANDING/"
cp "$SOURCE_BASE/ui/enhanced-landing-sections.tsx" "$DEST_LANDING/"
cp "$SOURCE_BASE/ui/hero-carousel.tsx" "$DEST_LANDING/"
cp "$SOURCE_BASE/ui/video-hero-carousel.tsx" "$DEST_LANDING/"
```

#### 5.2 MagicUI Components
```bash
DEST_MAGICUI="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/magicui"

cp -r "$SOURCE_BASE/magicui"/* "$DEST_MAGICUI/"
```

---

### Phase 6: Extract Integration Components

**Priority:** ⭐⭐ Medium
**Time Estimate:** 20 minutes
**Complexity:** High (requires API keys & setup)

#### 6.1 Payment Integration
```bash
DEST_INT="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/integrations"

# Stripe
cp "$SOURCE_BASE/payments/stripe-payment-element.tsx" "$DEST_INT/"
```

#### 6.2 Analytics (PostHog)
```bash
# Copy all PostHog components
cp -r "$SOURCE_BASE/utilities/posthog" "$DEST_INT/"
```

#### 6.3 Communication
```bash
# WhatsApp
cp "$SOURCE_BASE/ui/whatsapp-button.tsx" "$DEST_INT/"
```

#### 6.4 Weather
```bash
# Copy weather components
cp -r "$SOURCE_BASE/weather" "$DEST_INT/"
```

---

### Phase 7: Extract Media Components

**Priority:** ⭐⭐⭐ High
**Time Estimate:** 15 minutes
**Complexity:** Medium (optimization logic)

#### 7.1 Media Handlers
```bash
DEST_MEDIA="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/media"

# Upload & Gallery
cp "$SOURCE_BASE/ui/media-upload.tsx" "$DEST_MEDIA/"
cp "$SOURCE_BASE/ui/media-import.tsx" "$DEST_MEDIA/"
cp "$SOURCE_BASE/ui/media-gallery.tsx" "$DEST_MEDIA/"

# Optimized Components
cp "$SOURCE_BASE/ui/optimized-image.tsx" "$DEST_MEDIA/"
cp "$SOURCE_BASE/ui/optimized-video.tsx" "$DEST_MEDIA/"

# Carousels
cp "$SOURCE_BASE/ui/video-carousel.tsx" "$DEST_MEDIA/"
```

---

### Phase 8: Extract Utilities

**Priority:** ⭐⭐⭐ High
**Time Estimate:** 10 minutes
**Complexity:** Low

#### 8.1 Utility Components
```bash
DEST_UTIL="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/utilities"

# Core utilities
cp "$SOURCE_BASE/utilities/providers.tsx" "$DEST_UTIL/"
cp "$SOURCE_BASE/utilities/theme-switcher.tsx" "$DEST_UTIL/"
cp "$SOURCE_BASE/utilities/tailwind-indicator.tsx" "$DEST_UTIL/"
```

#### 8.2 Client Tools (Dev Only)
```bash
DEST_TOOLS="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components/client-tools"

mkdir -p "$DEST_TOOLS"
cp -r "$SOURCE_BASE/client-tools"/* "$DEST_TOOLS/"
```

---

## 🔧 Post-Extraction Tasks

### 1. Extract Shared Utilities
```bash
# Copy lib/utils.ts
SOURCE_LIB="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities/lib"
DEST_LIB="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/lib"

cp "$SOURCE_LIB/utils.ts" "$DEST_LIB/" 2>/dev/null || echo "utils.ts not found"
```

### 2. Extract Custom Hooks
```bash
# Copy all hooks
SOURCE_HOOKS="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities/hooks"
DEST_HOOKS="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/hooks"

if [ -d "$SOURCE_HOOKS" ]; then
  cp -r "$SOURCE_HOOKS"/* "$DEST_HOOKS/"
fi
```

### 3. Copy Tailwind Config
```bash
# Reference config
SOURCE_CONFIG="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities"
DEST_CONFIG="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library"

# Copy for reference (don't overwrite)
cp "$SOURCE_CONFIG/tailwind.config.ts" "$DEST_CONFIG/tailwind.config.reference.ts" 2>/dev/null
cp "$SOURCE_CONFIG/tailwind.config.js" "$DEST_CONFIG/tailwind.config.reference.js" 2>/dev/null
```

### 4. Extract Dependencies
```bash
# Extract dependencies from package.json
cd /Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities

# Key dependencies to note:
# - @stripe/stripe-js
# - @stripe/react-stripe-js
# - @clerk/nextjs (if used)
# - leaflet
# - react-leaflet
# - qrcode.react or similar
# - posthog-js
# - All shadcn/ui dependencies (radix-ui, etc.)

cat package.json | jq '.dependencies' > ../siso-ui-library/tour-guide-ui-library/dependencies-reference.json
```

### 5. Create Index Files
For each component directory, create an index.ts:

```typescript
// Example: components/ui/index.ts
export * from './button'
export * from './card'
export * from './dialog'
// ... etc
```

### 6. Update Import Paths
Global find & replace:
- `@/components/` → Relative imports or new alias
- `@/lib/` → Relative imports or new alias
- `@/hooks/` → Relative imports or new alias

### 7. Documentation
Create README.md for each category:
- `components/ui/README.md` - UI primitives usage
- `components/tour/README.md` - Tour-specific components
- `components/layout/README.md` - Layout system
- etc.

---

## 📦 Package.json Setup

Create/update package.json for tour-guide-ui-library:

```json
{
  "name": "@siso/tour-guide-ui-library",
  "version": "1.0.0",
  "description": "Reusable UI components for tour guide applications",
  "main": "index.ts",
  "types": "index.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "keywords": [
    "react",
    "components",
    "tour-guide",
    "ui-library",
    "shadcn"
  ],
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "next": "^14.0.0"
  },
  "dependencies": {
    "@radix-ui/react-*": "^1.0.0",
    "@stripe/stripe-js": "^2.0.0",
    "@stripe/react-stripe-js": "^2.0.0",
    "leaflet": "^1.9.0",
    "react-leaflet": "^4.0.0",
    "posthog-js": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

---

## ✅ Verification Checklist

After extraction, verify:

- [ ] All 95+ components copied
- [ ] Directory structure matches plan
- [ ] No broken imports (search for red squiggles)
- [ ] lib/utils.ts exists
- [ ] hooks/ directory populated
- [ ] tailwind.config reference saved
- [ ] dependencies-reference.json created
- [ ] Index files created for major directories
- [ ] README.md files created
- [ ] package.json updated
- [ ] TypeScript compiles without errors
- [ ] Sample usage documented

---

## 🔄 Quick Extraction Script

Run all phases at once:

```bash
#!/bin/bash
# quick-extract.sh

SOURCE_BASE="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/mallocra-activities/components"
DEST_BASE="/Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/tour-guides-template/siso-ui-library/tour-guide-ui-library/components"

echo "🚀 Starting component extraction..."

# Create structure
mkdir -p "$DEST_BASE"/{ui,tour,layout,landing,integrations,media,utilities,magicui,client-tools}

# Phase 1: UI Primitives
echo "📦 Phase 1: UI Primitives..."
cp -r "$SOURCE_BASE/ui"/* "$DEST_BASE/ui/"

# Phase 2: Tour-Specific
echo "📦 Phase 2: Tour-Specific..."
cp "$SOURCE_BASE/ui/activity-card.tsx" "$DEST_BASE/tour/"
cp "$SOURCE_BASE/ui/activities-map.tsx" "$DEST_BASE/tour/"
cp "$SOURCE_BASE/ui/google-map.tsx" "$DEST_BASE/tour/"
cp "$SOURCE_BASE/ui/leaflet-map.tsx" "$DEST_BASE/tour/"
cp "$SOURCE_BASE/ui/currency-selector.tsx" "$DEST_BASE/tour/"
cp "$SOURCE_BASE/qr/booking-qr-ticket.tsx" "$DEST_BASE/tour/"

# Phase 3: Layout
echo "📦 Phase 3: Layout..."
cp "$SOURCE_BASE/header.tsx" "$DEST_BASE/layout/"
cp "$SOURCE_BASE/header-simple.tsx" "$DEST_BASE/layout/"
cp "$SOURCE_BASE/footer.tsx" "$DEST_BASE/layout/"
cp "$SOURCE_BASE/preferred-footer.tsx" "$DEST_BASE/layout/"
cp "$SOURCE_BASE/user-profile-manager.tsx" "$DEST_BASE/layout/"
cp -r "$SOURCE_BASE/sidebar" "$DEST_BASE/layout/"

# Phase 4: Landing
echo "📦 Phase 4: Landing..."
cp -r "$SOURCE_BASE/landing"/* "$DEST_BASE/landing/"
cp "$SOURCE_BASE/ui/hero-section.tsx" "$DEST_BASE/landing/"
cp "$SOURCE_BASE/ui/enhanced-hero-section.tsx" "$DEST_BASE/landing/"
cp "$SOURCE_BASE/ui/enhanced-landing-sections.tsx" "$DEST_BASE/landing/"
cp "$SOURCE_BASE/ui/hero-carousel.tsx" "$DEST_BASE/landing/"
cp "$SOURCE_BASE/ui/video-hero-carousel.tsx" "$DEST_BASE/landing/"

# Phase 5: Integrations
echo "📦 Phase 5: Integrations..."
cp "$SOURCE_BASE/payments/stripe-payment-element.tsx" "$DEST_BASE/integrations/"
cp -r "$SOURCE_BASE/utilities/posthog" "$DEST_BASE/integrations/"
cp "$SOURCE_BASE/ui/whatsapp-button.tsx" "$DEST_BASE/integrations/"
cp -r "$SOURCE_BASE/weather" "$DEST_BASE/integrations/"

# Phase 6: Media
echo "📦 Phase 6: Media..."
cp "$SOURCE_BASE/ui/media-upload.tsx" "$DEST_BASE/media/"
cp "$SOURCE_BASE/ui/media-import.tsx" "$DEST_BASE/media/"
cp "$SOURCE_BASE/ui/media-gallery.tsx" "$DEST_BASE/media/"
cp "$SOURCE_BASE/ui/optimized-image.tsx" "$DEST_BASE/media/"
cp "$SOURCE_BASE/ui/optimized-video.tsx" "$DEST_BASE/media/"
cp "$SOURCE_BASE/ui/video-carousel.tsx" "$DEST_BASE/media/"

# Phase 7: Utilities
echo "📦 Phase 7: Utilities..."
cp "$SOURCE_BASE/utilities/providers.tsx" "$DEST_BASE/utilities/"
cp "$SOURCE_BASE/utilities/theme-switcher.tsx" "$DEST_BASE/utilities/"
cp "$SOURCE_BASE/utilities/tailwind-indicator.tsx" "$DEST_BASE/utilities/"

# Phase 8: MagicUI
echo "📦 Phase 8: MagicUI..."
cp -r "$SOURCE_BASE/magicui"/* "$DEST_BASE/magicui/"

# Phase 9: Client Tools
echo "📦 Phase 9: Client Tools..."
cp -r "$SOURCE_BASE/client-tools"/* "$DEST_BASE/client-tools/"

echo "✅ Extraction complete!"
echo "📊 Summary:"
find "$DEST_BASE" -name "*.tsx" | wc -l
echo "components extracted"
```

---

## 📚 Next Steps After Extraction

1. **Test each component** - Create a demo page
2. **Document usage** - Add examples to README
3. **Set up Storybook** (optional) - Visual component catalog
4. **Publish to npm** (optional) - Private or public package
5. **Use in next project** - Import and customize

---

**Total Extraction Time:** ~2-3 hours
**Difficulty:** Medium
**Maintenance:** Low (mostly copy & paste with minor adjustments)
