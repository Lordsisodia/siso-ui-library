# Mayorka (Mallorca Activities) - Component Inventory

> **Source:** `/mallocra-activities/components`
> **Destination:** `siso-ui-library/tour-guide-ui-library`
> **Total Components:** 95+

## 📊 Component Categories

### 🎯 Core Layout Components (7)
High-value reusable layout components

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Header | `header.tsx` | ⭐⭐⭐ | Full-featured header (23KB) |
| Simple Header | `header-simple.tsx` | ⭐⭐⭐ | Lightweight alternative |
| Footer | `footer.tsx` | ⭐⭐⭐ | Full footer (11KB) |
| Preferred Footer | `preferred-footer.tsx` | ⭐⭐⭐ | Alternative footer (11KB) |
| App Sidebar | `sidebar/app-sidebar.tsx` | ⭐⭐⭐ | Complete sidebar system |
| User Profile Manager | `user-profile-manager.tsx` | ⭐⭐ | User management component |

### 🏠 Landing Page Components (4)
Specialized landing page sections

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Hero Section | `landing/hero.tsx` | ⭐⭐⭐ | Main hero component |
| Hero Variants | `landing/hero-variants.tsx` | ⭐⭐ | Alternative hero styles |
| Features Section | `landing/features.tsx` | ⭐⭐⭐ | Feature showcase |
| Header Variants | `landing/header-variants.tsx` | ⭐⭐ | Header style variations |

### 🎨 UI Primitives (69)
shadcn/ui based components - highly reusable

**Essential UI Components:**
- `accordion.tsx` - Expandable content panels
- `alert.tsx` - Alert notifications
- `alert-dialog.tsx` - Modal confirmations
- `avatar.tsx` - User avatars
- `badge.tsx` - Status badges
- `button.tsx` - Button variants
- `card.tsx` - Card container
- `checkbox.tsx` - Form checkboxes
- `dialog.tsx` - Modal dialogs
- `dropdown-menu.tsx` - Dropdown menus
- `form.tsx` - Form components
- `input.tsx` - Text inputs
- `label.tsx` - Form labels
- `select.tsx` - Select dropdowns
- `separator.tsx` - Visual dividers
- `sheet.tsx` - Slide-over panels
- `skeleton.tsx` - Loading skeletons
- `switch.tsx` - Toggle switches
- `table.tsx` - Data tables
- `tabs.tsx` - Tabbed interfaces
- `textarea.tsx` - Multi-line inputs
- `toast.tsx` - Toast notifications
- `toaster.tsx` - Toast container
- `tooltip.tsx` - Tooltips
- `toggle.tsx` - Toggle buttons
- `toggle-group.tsx` - Toggle button groups

**Navigation Components:**
- `breadcrumb.tsx` - Breadcrumb navigation
- `admin-breadcrumb.tsx` - Admin-specific breadcrumbs
- `navigation-menu.tsx` - Navigation menus
- `menubar.tsx` - Menu bars
- `context-menu.tsx` - Right-click menus

**Data Display:**
- `calendar.tsx` - Date picker/calendar
- `carousel.tsx` - Image/content carousel
- `chart.tsx` - Chart components
- `collapsible.tsx` - Collapsible sections
- `command.tsx` - Command palette
- `hover-card.tsx` - Hover preview cards
- `pagination.tsx` - Page navigation
- `popover.tsx` - Popover menus
- `progress.tsx` - Progress bars
- `radio-group.tsx` - Radio buttons
- `scroll-area.tsx` - Scrollable areas
- `slider.tsx` - Range sliders
- `aspect-ratio.tsx` - Aspect ratio containers
- `drawer.tsx` - Bottom/side drawers
- `input-otp.tsx` - OTP input
- `resizable.tsx` - Resizable panels
- `sidebar.tsx` - Sidebar primitive
- `sonner.tsx` - Sonner toast integration

**Tour/Activity Specific:**
- `activity-card.tsx` ⭐⭐⭐ - Activity display cards
- `activities-map.tsx` ⭐⭐⭐ - Activities map view
- `currency-selector.tsx` ⭐⭐ - Multi-currency support
- `google-map.tsx` ⭐⭐ - Google Maps integration
- `leaflet-map.tsx` ⭐⭐ - Leaflet Maps integration

**Hero/Landing Enhancements:**
- `hero-section.tsx` ⭐⭐⭐ - Enhanced hero
- `enhanced-hero-section.tsx` ⭐⭐⭐ - Premium hero
- `enhanced-landing-sections.tsx` ⭐⭐⭐ - Landing sections
- `hero-carousel.tsx` ⭐⭐ - Hero with carousel
- `video-hero-carousel.tsx` ⭐⭐ - Video hero carousel
- `video-carousel.tsx` ⭐⭐ - Video carousel

**Media Components:**
- `media-upload.tsx` ⭐⭐⭐ - File upload system
- `media-import.tsx` ⭐⭐ - Media import
- `media-gallery.tsx` ⭐⭐⭐ - Gallery component
- `optimized-image.tsx` ⭐⭐⭐ - Optimized images
- `optimized-video.tsx` ⭐⭐ - Optimized videos

**Advanced UI:**
- `advanced-scroll-effects.tsx` ⭐⭐ - Scroll animations
- `magnetic-elements.tsx` ⭐ - Interactive magnetics

### 🧩 Sidebar Components (6)
Complete sidebar navigation system

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| App Sidebar | `sidebar/app-sidebar.tsx` | ⭐⭐⭐ | Main sidebar wrapper |
| Nav Main | `sidebar/nav-main.tsx` | ⭐⭐⭐ | Primary navigation |
| Nav Projects | `sidebar/nav-projects.tsx` | ⭐⭐ | Project navigation |
| Nav User | `sidebar/nav-user.tsx` | ⭐⭐⭐ | User navigation |
| Nav User Clerk | `sidebar/nav-user-clerk.tsx` | ⭐⭐ | Clerk.dev integration |
| Team Switcher | `sidebar/team-switcher.tsx` | ⭐⭐ | Multi-team switcher |

### 💳 Payment Components (1)

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Stripe Payment Element | `payments/stripe-payment-element.tsx` | ⭐⭐⭐ | Stripe integration |

### 🎫 QR Code Components (1)

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Booking QR Ticket | `qr/booking-qr-ticket.tsx` | ⭐⭐⭐ | QR code tickets |

### 🌤️ Weather Components (2)

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Weather Display | `weather/weather-display.tsx` | ⭐⭐ | Weather information |
| Weather Widget | `weather/weather-widget.tsx` | ⭐⭐ | Weather widget |

### ✨ MagicUI Components (2)
Premium animated components

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Hero Video Dialog | `magicui/hero-video-dialog.tsx` | ⭐⭐⭐ | Video modal for hero |
| Animated Gradient Text | `magicui/animated-gradient-text.tsx` | ⭐⭐ | Gradient animations |

### 🛠️ Utility Components (8)

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Providers | `utilities/providers.tsx` | ⭐⭐⭐ | App providers wrapper |
| Theme Switcher | `utilities/theme-switcher.tsx` | ⭐⭐⭐ | Dark/light mode |
| Tailwind Indicator | `utilities/tailwind-indicator.tsx` | ⭐⭐ | Dev tool |
| PostHog Provider | `utilities/posthog/posthog-provider.tsx` | ⭐⭐ | Analytics setup |
| PostHog PageView | `utilities/posthog/posthog-pageview.tsx` | ⭐⭐ | Page tracking |
| PostHog User Identity | `utilities/posthog/posthog-user-identity.tsx` | ⭐⭐ | User tracking |
| PostHog User Identity Clerk | `utilities/posthog/posthog-user-identity-clerk.tsx` | ⭐⭐ | Clerk integration |
| WhatsApp Button | `ui/whatsapp-button.tsx` | ⭐⭐⭐ | WhatsApp contact |

### 🔧 Client Tools (1)

| Component | File | Priority | Notes |
|-----------|------|----------|-------|
| Variant Selector | `client-tools/variant-selector.tsx` | ⭐ | Component variant picker |

---

## 🎯 Extraction Priority Levels

### ⭐⭐⭐ High Priority (Must Extract)
**Core Value Components** - Essential for tour guide apps

1. **Layout System:**
   - header.tsx, header-simple.tsx
   - footer.tsx, preferred-footer.tsx
   - sidebar/app-sidebar.tsx + all nav components

2. **Landing Page:**
   - landing/hero.tsx, landing/features.tsx
   - hero-section.tsx, enhanced-hero-section.tsx
   - enhanced-landing-sections.tsx

3. **Tour-Specific:**
   - activity-card.tsx
   - activities-map.tsx
   - booking-qr-ticket.tsx
   - stripe-payment-element.tsx

4. **Media:**
   - media-upload.tsx
   - media-gallery.tsx
   - optimized-image.tsx

5. **Utilities:**
   - providers.tsx
   - theme-switcher.tsx
   - whatsapp-button.tsx

### ⭐⭐ Medium Priority (Good to Have)
**Enhanced Features** - Adds value but not critical

- All carousel components
- Weather components
- Currency selector
- Map components (google-map.tsx, leaflet-map.tsx)
- PostHog analytics components
- MagicUI components

### ⭐ Low Priority (Optional)
**Dev Tools & Extras**

- variant-selector.tsx
- tailwind-indicator.tsx
- magnetic-elements.tsx

---

## 📦 Extraction Strategy

### Phase 1: Core UI Primitives
Extract all shadcn/ui components to `siso-ui-library/tour-guide-ui-library/components/ui/`
- These are the foundation
- 69 components
- Minimal modification needed

### Phase 2: Tour-Specific Components
Extract tour/activity specialized components to `siso-ui-library/tour-guide-ui-library/components/tour/`
- activity-card.tsx
- activities-map.tsx
- booking-qr-ticket.tsx
- currency-selector.tsx
- google-map.tsx
- leaflet-map.tsx

### Phase 3: Layout System
Extract to `siso-ui-library/tour-guide-ui-library/components/layout/`
- header.tsx, header-simple.tsx
- footer.tsx, preferred-footer.tsx
- All sidebar components

### Phase 4: Landing Components
Extract to `siso-ui-library/tour-guide-ui-library/components/landing/`
- All landing/* components
- All hero variants
- Features section

### Phase 5: Integration Components
Extract to `siso-ui-library/tour-guide-ui-library/components/integrations/`
- Stripe payment
- PostHog analytics
- WhatsApp button
- Weather components

### Phase 6: Media & Utilities
Extract to respective directories:
- Media components → `components/media/`
- Utilities → `components/utilities/`
- MagicUI → `components/magicui/`

---

## 🔍 Dependencies to Check

Before extraction, verify these dependencies:
- shadcn/ui setup
- Tailwind CSS config
- React/Next.js version
- Clerk.dev (for clerk-specific components)
- Stripe SDK
- Google Maps API
- Leaflet
- PostHog
- QR code libraries

---

## 📝 Next Steps

1. ✅ Clone siso-ui-library repo
2. ✅ Create this inventory
3. ⏳ Set up tour-guide-ui-library structure
4. ⏳ Extract Phase 1 (UI Primitives)
5. ⏳ Extract Phase 2 (Tour-Specific)
6. ⏳ Extract Phase 3 (Layout)
7. ⏳ Extract Phase 4 (Landing)
8. ⏳ Extract Phase 5 (Integrations)
9. ⏳ Extract Phase 6 (Media & Utilities)
10. ⏳ Document usage examples
11. ⏳ Create Storybook stories (optional)

---

**Generated:** October 19, 2025
**Source Project:** mallocra-activities
**Destination:** siso-ui-library/tour-guide-ui-library
