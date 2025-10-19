# 🎨 SISO UI Library

A comprehensive, organized collection of UI components for all SISO projects. Simply clone this repo and copy the components you need into your projects.

## 📁 Structure

```
SISO-UI-Library/
├── 🏢 siso-core/              # Business-focused components (internal/client/partnership)
│   ├── internal/              # Internal tools & dashboards
│   ├── client/                # Client-facing portals
│   └── partnership/           # Partner management interfaces
│
├── 🍽️ restaurant-ui-library/  # Restaurant & food service components
├── 🚲 bike-hire-ui-library/   # Bike rental & outdoor activity components
├── 🗺️ tour-guide-ui-library/  # Tour & travel guide components
└── 🔧 shared-utils/           # Common utilities used across all libraries
```

## 🚀 How to Use

### Method 1: Clone the entire repo
```bash
git clone <repo-url> SISO-UI-Library
cd SISO-UI-Library
```

### Method 2: Download as ZIP
1. Click "Code" → "Download ZIP"
2. Extract to your project folder
3. Browse and copy components you need

### Method 3: Git Submodule (Recommended for ongoing projects)
```bash
cd your-project
git submodule add <repo-url> SISO-UI-Library
git submodule update --init --recursive
```

## 📋 Component Usage

Each library contains ready-to-use components organized by category:

```jsx
// Example: Copy a component to your project
// From: SISO-UI-Library/restaurant-ui-library/components/1-menu-display/MenuCard.jsx
// To: your-project/src/components/MenuCard.jsx

import MenuCard from './components/MenuCard'

function App() {
  return <MenuCard title="Pasta" price="$12.99" />
}
```

## 🏢 SISO Core

Business-focused components for internal tools, client portals, and partnership management.

**Internal** - Dashboards, admin panels, analytics
**Client** - Customer portals, account management, support
**Partnership** - Partner onboarding, collaboration tools, reporting

[View SISO Core Details →](./siso-core/README.md)

## 🍽️ Restaurant UI Library

Complete component set for restaurant, café, and food service applications.

Categories: Menu Display, Ordering, Reservations, Navigation, Feedback, User Accounts, Social Proof, Interactive Features, Marketing

[View Restaurant Components →](./restaurant-ui-library/README.md)

## 🚲 Bike Hire UI Library

Components for bike rental, outdoor equipment hire, and activity booking.

Categories: Booking, Inventory, Pricing, Maps, User Profiles

[View Bike Hire Components →](./bike-hire-ui-library/README.md)

## 🗺️ Tour Guide UI Library

Components for tour booking, travel guides, and experience platforms.

Categories: Tour Catalog, Booking, Itineraries, Reviews, Guide Profiles

[View Tour Guide Components →](./tour-guide-ui-library/README.md)

## 🔧 Shared Utils

Common utilities, helpers, and hooks used across all libraries.

## 📦 What's Included

Each component includes:
- ✅ React component (.jsx/.tsx)
- ✅ Styling (CSS/Tailwind)
- ✅ PropTypes/TypeScript types (where applicable)
- ✅ Example usage
- ✅ Metadata (category, tags, description)

## 🎨 Customization

All components are designed to be easily customizable:

1. **Copy** the component to your project
2. **Modify** colors, styles, and behavior
3. **Adapt** to your specific use case

No build process required - just copy and customize!

## 📚 Documentation

Each library has its own README with:
- Component catalog
- Category descriptions
- Usage examples
- Best practices

## 🤝 Contributing

This is a curated component library. To add components:

1. Determine which library it belongs to
2. Follow the existing folder structure
3. Add metadata and examples
4. Update the relevant README

## 📄 License

MIT - Free to use in all SISO projects

---

**Quick Start**: Browse → Copy → Customize → Build 🚀
