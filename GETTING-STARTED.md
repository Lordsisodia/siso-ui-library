# 🚀 Getting Started with SISO UI Library

Quick guide to start using components from this library in your projects.

## 📦 Installation

### Option 1: Clone Repository
```bash
# Clone to your local machine
git clone <your-github-repo-url> SISO-UI-Library
cd SISO-UI-Library
```

### Option 2: Download ZIP
1. Go to GitHub repository
2. Click "Code" → "Download ZIP"
3. Extract to your preferred location

### Option 3: Git Submodule (Recommended)
```bash
# Add as submodule to your project
cd your-project
git submodule add <your-github-repo-url> SISO-UI-Library
git submodule update --init --recursive
```

---

## 🗂️ Library Structure

```
SISO-UI-Library/
├── siso-core/                 # Business components
│   ├── internal/              # Internal tools
│   ├── client/                # Client portals
│   └── partnership/           # Partner management
│
├── restaurant-ui-library/     # Restaurant components (100+)
├── bike-hire-ui-library/      # Bike rental components (45+)
├── tour-guide-ui-library/     # Tour booking components (58+)
└── shared-utils/              # Common utilities
```

---

## 🎯 Find What You Need

### Step 1: Identify Your Project Type
- Building internal tools? → `siso-core/internal/`
- Building client portal? → `siso-core/client/`
- Building partner platform? → `siso-core/partnership/`
- Building restaurant app? → `restaurant-ui-library/`
- Building bike rental? → `bike-hire-ui-library/`
- Building tour platform? → `tour-guide-ui-library/`

### Step 2: Browse Components
```bash
# List all components in a library
ls -la SISO-UI-Library/restaurant-ui-library/components/

# Browse by category
ls -la SISO-UI-Library/restaurant-ui-library/components/1-menu-display/
```

### Step 3: Read Documentation
Each library has a detailed README:
- [SISO Core README](./siso-core/README.md)
- [Restaurant README](./restaurant-ui-library/README.md)
- [Bike Hire README](./bike-hire-ui-library/README.md)
- [Tour Guide README](./tour-guide-ui-library/README.md)

---

## 📋 Using Components

### Example 1: Copy a Single Component

```bash
# Copy MenuCard from Restaurant library to your project
cp SISO-UI-Library/restaurant-ui-library/components/1-menu-display/MenuCard.jsx \
   your-project/src/components/MenuCard.jsx
```

Then use in your project:
```jsx
import MenuCard from './components/MenuCard'

function Menu() {
  return (
    <MenuCard
      title="Margherita Pizza"
      description="Classic tomato and mozzarella"
      price="$12.99"
      image="/images/pizza.jpg"
    />
  )
}
```

### Example 2: Copy Entire Category

```bash
# Copy all menu display components
cp -r SISO-UI-Library/restaurant-ui-library/components/1-menu-display/ \
      your-project/src/components/menu/
```

### Example 3: Copy Utilities

```bash
# Copy utility functions
cp SISO-UI-Library/restaurant-ui-library/utils/priceFormatter.js \
   your-project/src/utils/
```

### Example 4: Copy Custom Hooks

```bash
# Copy hooks
cp SISO-UI-Library/bike-hire-ui-library/hooks/useBooking.js \
   your-project/src/hooks/
```

---

## 🎨 Customization

All components are designed to be easily customized:

### 1. Modify Styles
```jsx
// Original component
<MenuCard title="Pizza" />

// Customized with your styles
<MenuCard
  title="Pizza"
  className="my-custom-styles"
  style={{ backgroundColor: '#your-color' }}
/>
```

### 2. Extend Functionality
```jsx
// Add your own props and logic
<MenuCard
  title="Pizza"
  onAddToCart={handleAddToCart}  // Your custom handler
  showNutritionalInfo={true}      // Your custom feature
/>
```

### 3. Adapt Structure
Feel free to modify the component file directly to fit your needs!

---

## 🔍 Finding Components

### Use the Component Index
Check [COMPONENT-INDEX.md](./COMPONENT-INDEX.md) for a complete list of all 293+ components.

### Search by Function

**Need booking?** → All libraries have booking components
**Need payments?** → Check booking folders
**Need reviews?** → Restaurant & Tour libraries
**Need maps?** → Bike Hire & Tour libraries
**Need admin tools?** → SISO Core (internal)

### Search by Name

```bash
# Find all components with "booking" in the name
find SISO-UI-Library -name "*booking*" -o -name "*Booking*"

# Find all card components
find SISO-UI-Library -name "*Card*"
```

---

## 📚 Common Workflows

### Workflow 1: Restaurant App

```bash
# 1. Copy menu components
cp -r SISO-UI-Library/restaurant-ui-library/components/1-menu-display \
      your-restaurant-app/src/components/

# 2. Copy ordering components
cp -r SISO-UI-Library/restaurant-ui-library/components/2-ordering-system \
      your-restaurant-app/src/components/

# 3. Copy booking components
cp -r SISO-UI-Library/restaurant-ui-library/components/3-booking-reservations \
      your-restaurant-app/src/components/

# 4. Start building!
```

### Workflow 2: Bike Rental App

```bash
# 1. Copy bike inventory
cp -r SISO-UI-Library/bike-hire-ui-library/components/inventory \
      your-bike-app/src/components/

# 2. Copy booking flow
cp -r SISO-UI-Library/bike-hire-ui-library/components/booking \
      your-bike-app/src/components/

# 3. Copy map components
cp -r SISO-UI-Library/bike-hire-ui-library/components/maps \
      your-bike-app/src/components/

# 4. Start building!
```

### Workflow 3: Internal Dashboard

```bash
# Copy internal components
cp -r SISO-UI-Library/siso-core/internal/components \
      your-dashboard/src/components/

# Copy utilities
cp -r SISO-UI-Library/siso-core/internal/utils \
      your-dashboard/src/utils/
```

---

## 🎓 Best Practices

### ✅ DO:
- Browse the library before building from scratch
- Read component documentation
- Copy and customize to fit your needs
- Keep original library updated (git pull)
- Maintain consistent styling within your app

### ❌ DON'T:
- Modify files in the SISO-UI-Library directly (copy first!)
- Copy unnecessary components (keep your project lean)
- Forget to check for updates (components improve over time)

---

## 🔄 Keeping Updated

### If using Git Submodule:
```bash
# Update to latest components
cd SISO-UI-Library
git pull origin main
cd ..
git add SISO-UI-Library
git commit -m "Update SISO UI Library"
```

### If downloaded as ZIP:
```bash
# Download latest version
# Replace old folder with new one
# Copy any new components you need
```

---

## 💡 Tips & Tricks

### Tip 1: Start with Examples
Check existing restaurant/bike/tour projects that already use these components.

### Tip 2: Mix and Match
You can use components from multiple libraries in one project:
```jsx
// Mix restaurant and core components
import MenuCard from './components/restaurant/MenuCard'
import Dashboard from './components/core/Dashboard'
```

### Tip 3: Create Variants
Copy a component and create your own variants:
```bash
cp MenuCard.jsx MenuCardLarge.jsx
# Customize MenuCardLarge for special use case
```

### Tip 4: Document Your Customizations
Keep notes on what you changed from the original component.

### Tip 5: Share Improvements
If you create a great component variation, consider adding it back to this library!

---

## 📞 Need Help?

### Check Documentation
- [Main README](./README.md) - Overview
- [Component Index](./COMPONENT-INDEX.md) - All components
- Library-specific READMEs - Detailed component info

### Common Issues

**Can't find a component?**
→ Check [COMPONENT-INDEX.md](./COMPONENT-INDEX.md)

**Component not working?**
→ Check if you copied all dependencies (utils, hooks, etc.)

**Styling issues?**
→ Make sure you have required CSS/Tailwind

**Type errors?**
→ Check if you need to install PropTypes or TypeScript types

---

## 🎉 Quick Start Checklist

- [ ] Clone or download the library
- [ ] Browse the relevant library folder
- [ ] Read the library's README
- [ ] Find components you need
- [ ] Copy components to your project
- [ ] Customize as needed
- [ ] Start building!

---

## 🚀 You're Ready!

The entire SISO UI Library is now at your fingertips. Browse, copy, customize, and build amazing applications!

**Remember**: These are **starting points**, not rigid templates. Make them your own!

---

**Happy Building!** 🎨
