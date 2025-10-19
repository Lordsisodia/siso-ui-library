# SISO Ecosystem Monorepo Migration Plan

**Version:** 1.0
**Date:** October 20, 2025
**Status:** Draft

---

## Executive Summary

Transform the current SISO-UI-Library into a comprehensive monorepo that handles:
- ✅ Universal UI components (primitives + patterns)
- ✅ Domain-specific features (restaurants, tour-guides, bike-rental)
- ✅ Complete feature extraction from working apps (UI + logic + hooks + APIs + DB schemas)
- ✅ AI-optimized navigation and metadata

---

## 📊 Current State Analysis

### What We Have Now:

```
SISO-UI-Library/
├── restaurant-ui-library/        # Restaurant domain
├── tour-guide-ui-library/        # Tour guide domain (basic structure)
├── bike-hire-ui-library/         # Bike rental domain
├── siso-core/                    # Core utilities
├── shadcn-ui/                    # Component imports
├── magic-ui/                     # Component imports
├── [50+ other component libraries from imports]
```

### What's Working:
✅ Separate domain libraries (restaurants, tours, bikes)
✅ Imported components from 21st.dev and other sources
✅ docs/imports/ structure for staging components
✅ PR #1 shows successful feature extraction (248 assets from Mallorca Activities)

### What Needs Improvement:
❌ No clear separation between universal UI and domain features
❌ Duplicate component imports scattered across many folders
❌ No unified build system or package management
❌ Unclear boundaries between what's universal vs domain-specific

---

## 🎯 Target Architecture

### Final Structure:

```
siso-ecosystem/                        # Monorepo root
│
├── packages/
│   │
│   ├── ui/                            # UNIVERSAL UI SYSTEM
│   │   ├── primitives/                # Button, Card, Input, Modal...
│   │   ├── patterns/                  # Hero, Auth, Dashboard, ContactForm...
│   │   ├── themes/                    # Design tokens & theme presets
│   │   ├── hooks/                     # Universal React hooks
│   │   ├── utils/                     # Universal utilities
│   │   └── package.json               # @siso/ui
│   │
│   ├── restaurants/                   # RESTAURANT FEATURES
│   │   ├── features/                  # Complete features (UI + logic)
│   │   │   ├── reservation-system/   # ReservationForm + useReservation + API + DB
│   │   │   ├── menu-management/      # MenuDisplay + useMenu + CRUD + DB
│   │   │   ├── order-tracking/       # OrderTracker + useOrders + state + DB
│   │   │   ├── payment-processing/   # Stripe integration + hooks
│   │   │   └── loyalty-program/      # Points system + rewards logic
│   │   │
│   │   ├── ui/                        # Restaurant-specific UI only
│   │   │   ├── dish-card/
│   │   │   ├── chef-profile/
│   │   │   └── dietary-badges/
│   │   │
│   │   ├── shared/                    # Shared across restaurant features
│   │   │   ├── hooks/                 # useRestaurant, useOpenHours
│   │   │   ├── utils/                 # Restaurant utilities
│   │   │   └── types/                 # TypeScript types
│   │   │
│   │   └── package.json               # @siso/restaurants
│   │
│   ├── tour-guides/                   # TOUR GUIDE FEATURES
│   │   ├── features/
│   │   │   ├── booking-system/       # Complete booking with UI + logic + API + DB
│   │   │   ├── itinerary-builder/    # Drag-drop UI + timeline logic + state
│   │   │   ├── route-planning/       # Maps integration + distance calculations
│   │   │   ├── payment-processing/   # Stripe + deposits logic
│   │   │   ├── review-system/        # Reviews UI + ratings logic + moderation
│   │   │   ├── admin-panel/          # 35 admin components + logic
│   │   │   ├── analytics/            # Dashboard + charts + metrics
│   │   │   ├── notifications/        # WhatsApp, SMS, Telegram, Email
│   │   │   ├── media-management/     # Cloudinary integration
│   │   │   ├── qr-tickets/           # QR code generation + validation
│   │   │   ├── weather-integration/  # Weather API + suitability logic
│   │   │   └── blog-cms/             # Blog system + content management
│   │   │
│   │   ├── ui/                        # Tour-specific UI components
│   │   │   ├── tour-card/
│   │   │   ├── guide-profile/
│   │   │   └── activity-card/
│   │   │
│   │   ├── shared/
│   │   │   ├── hooks/
│   │   │   ├── utils/
│   │   │   └── types/
│   │   │
│   │   └── package.json               # @siso/tour-guides
│   │
│   ├── bike-rental/                   # BIKE RENTAL FEATURES
│   │   ├── features/
│   │   │   ├── inventory-management/  # Real-time tracking + availability
│   │   │   ├── rental-booking/        # Date range picker + pricing logic
│   │   │   ├── maintenance-tracking/  # Service schedules + history
│   │   │   ├── location-management/   # Maps + pickup/dropoff logic
│   │   │   ├── damage-reporting/      # Photo upload + insurance logic
│   │   │   └── payment-processing/    # Stripe + deposits
│   │   │
│   │   ├── ui/
│   │   │   ├── bike-card/
│   │   │   ├── status-badge/
│   │   │   └── location-map/
│   │   │
│   │   ├── shared/
│   │   │   ├── hooks/
│   │   │   ├── utils/
│   │   │   └── types/
│   │   │
│   │   └── package.json               # @siso/bike-rental
│   │
│   └── shared/                        # CROSS-DOMAIN SHARED CODE
│       ├── database/                  # Shared DB utilities (if using same DB)
│       ├── auth/                      # Shared auth logic (Clerk, Supabase)
│       └── package.json               # @siso/shared
│
├── apps/                              # Demo/example apps (optional)
│   ├── restaurant-demo/
│   ├── tour-guide-demo/
│   └── bike-rental-demo/
│
├── docs/
│   ├── imports/                       # Your 21st.dev cherry-picks (keep as-is)
│   ├── architecture/                  # Architecture docs
│   ├── migration/                     # Migration guides
│   └── ai-metadata.json               # AI navigation index
│
├── tools/
│   ├── component-generator/           # CLI to scaffold components
│   ├── feature-extractor/             # CLI to extract features from apps
│   └── metadata-generator/            # Auto-generate AI metadata
│
├── pnpm-workspace.yaml                # Workspace configuration
├── package.json                       # Root package.json
├── tsconfig.json                      # Root TypeScript config
└── README.md                          # Main documentation
```

---

## 🔄 Migration Strategy

### Phase 1: Setup Monorepo Infrastructure (Week 1)

**Goal:** Create the monorepo structure without breaking existing work

**Tasks:**
1. ✅ Create new `siso-ecosystem/` directory (parallel to existing)
2. ✅ Set up pnpm workspaces
3. ✅ Create package structure (`packages/ui`, `packages/restaurants`, etc.)
4. ✅ Set up build system (Vite/Tsup for each package)
5. ✅ Configure TypeScript with project references
6. ✅ Set up testing infrastructure (Vitest)

**Deliverables:**
- Working monorepo with empty packages
- Build system functioning
- Can run `pnpm install` and `pnpm build` successfully

---

### Phase 2: Extract Universal UI (Week 2)

**Goal:** Consolidate all universal components into `@siso/ui`

**Tasks:**
1. ✅ Audit `docs/imports/` folder - identify universal vs domain-specific
2. ✅ Move universal primitives → `packages/ui/primitives/`
   - From: shadcn-ui, magic-ui, aceternity-ui, etc.
   - What: Button, Input, Card, Modal, Table, Tabs, etc.
3. ✅ Move universal patterns → `packages/ui/patterns/`
   - Hero sections, Auth forms, Contact forms, etc.
4. ✅ Create theme system → `packages/ui/themes/`
   - Extract design tokens from Tailwind configs
   - Create theme presets (elegant, modern, playful, etc.)
5. ✅ Move universal hooks → `packages/ui/hooks/`
   - useMediaQuery, useDebounce, useLocalStorage, etc.
6. ✅ Move universal utils → `packages/ui/utils/`
   - cn (className merger), formatters, validators
7. ✅ Create exports in `packages/ui/package.json`

**Deliverables:**
- `@siso/ui` package with ~50 primitives + ~30 patterns
- Can `npm install @siso/ui` in any project
- All components have TypeScript types
- Storybook for component showcase (optional but recommended)

---

### Phase 3: Migrate Restaurant Features (Week 3)

**Goal:** Extract restaurant features into `@siso/restaurants`

**Tasks:**
1. ✅ Identify working restaurant features from existing projects
2. ✅ Extract to `packages/restaurants/features/`:
   - reservation-system/
   - menu-management/
   - order-tracking/
   - payment-processing/
   - loyalty-program/
3. ✅ Each feature contains:
   - components/ (UI)
   - hooks/ (React hooks)
   - utils/ (business logic)
   - api/ (API integration code)
   - types/ (TypeScript definitions)
   - db/ (database schemas if applicable)
4. ✅ Move restaurant-specific UI → `packages/restaurants/ui/`
5. ✅ Create shared restaurant utilities → `packages/restaurants/shared/`
6. ✅ Set up dependencies on `@siso/ui`

**Deliverables:**
- `@siso/restaurants` package with complete features
- Each feature is self-contained and reusable
- Documentation for each feature
- Example usage in demo project

---

### Phase 4: Migrate Tour Guide Features (Week 4)

**Goal:** Integrate PR #1 content into `@siso/tour-guides`

**Tasks:**
1. ✅ Checkout PR branch: `feature/tour-guide-extraction-mallorca`
2. ✅ Extract 248 assets into proper structure:

   **From PR:**
   - 177 components → split into features/ vs ui/
   - 26 server actions → features/*/actions/
   - 14 API routes → features/*/api/
   - 9 DB schemas → features/*/db/
   - 20 utilities & hooks → shared/utils/ and shared/hooks/

   **Organized into features:**
   ```
   packages/tour-guides/features/
   ├── booking-system/
   │   ├── components/      # Booking UI
   │   ├── hooks/           # useTourBooking, useAvailability
   │   ├── api/             # Booking API routes
   │   ├── actions/         # Server actions
   │   └── types/
   │
   ├── admin-panel/
   │   ├── components/      # 35 admin components
   │   ├── hooks/           # Dashboard hooks
   │   ├── api/             # Admin API
   │   └── actions/         # Admin actions
   │
   ├── payment-processing/
   │   ├── components/      # Stripe UI
   │   ├── hooks/           # usePayment
   │   ├── api/             # Stripe webhooks
   │   └── actions/         # Payment actions
   │
   ├── notifications/
   │   ├── components/      # Notification settings UI
   │   ├── actions/         # WhatsApp, SMS, Telegram, Email
   │   └── types/
   │
   ├── media-management/
   │   ├── components/      # Media UI
   │   ├── api/             # Cloudinary routes
   │   └── actions/         # Media actions
   │
   ├── qr-tickets/
   │   ├── components/      # QR display
   │   └── actions/         # QR generation
   │
   ├── weather-integration/
   │   ├── components/      # Weather widgets
   │   └── api/             # Weather API
   │
   ├── analytics/
   │   ├── components/      # Charts, metrics
   │   ├── actions/         # Analytics actions
   │   └── types/
   │
   ├── review-system/
   │   ├── components/      # Review UI
   │   ├── actions/         # Review CRUD
   │   └── types/
   │
   └── blog-cms/
       ├── components/      # Blog UI
       ├── actions/         # Blog CRUD
       └── types/
   ```

3. ✅ Move UI primitives (69 components) → check if universal or tour-specific
   - Universal → move to `@siso/ui`
   - Tour-specific → keep in `packages/tour-guides/ui/`

4. ✅ Extract database schemas → `packages/tour-guides/db/` or shared if universal

5. ✅ Set up dependencies:
   ```json
   {
     "dependencies": {
       "@siso/ui": "workspace:*",
       "next": "^14.0.0",
       "stripe": "^14.0.0",
       "cloudinary": "^1.40.0",
       // etc...
     }
   }
   ```

**Deliverables:**
- `@siso/tour-guides` with 12+ complete features
- All 248 assets properly organized
- Documentation for each feature
- Migration of Mallorca Activities code complete

---

### Phase 5: Migrate Bike Rental Features (Week 5)

**Goal:** Extract bike rental features into `@siso/bike-rental`

**Tasks:**
1. ✅ Identify working bike rental features
2. ✅ Extract to `packages/bike-rental/features/`:
   - inventory-management/
   - rental-booking/
   - maintenance-tracking/
   - location-management/
   - damage-reporting/
   - payment-processing/
3. ✅ Structure each feature with components, hooks, utils, API, types
4. ✅ Move bike-specific UI → `packages/bike-rental/ui/`
5. ✅ Create shared utilities → `packages/bike-rental/shared/`

**Deliverables:**
- `@siso/bike-rental` package with complete features
- Documentation and examples

---

### Phase 6: Cross-Domain Patterns (Week 6)

**Goal:** Identify and extract patterns used across multiple domains

**Tasks:**
1. ✅ Analyze features across all domains
2. ✅ Extract common patterns:
   - **Booking systems** (all 3 domains use it)
     → Extract core to `@siso/ui/patterns/booking-system/`
     → Keep domain-specific parts in domain packages

   - **Payment processing** (all 3 use Stripe)
     → Extract core to `@siso/ui/patterns/payment/`

   - **Review systems** (restaurants + tours use it)
     → Extract to `@siso/ui/patterns/reviews/`

   - **Analytics dashboards** (multiple domains)
     → Extract to `@siso/ui/patterns/analytics/`

3. ✅ Update domain packages to use shared patterns
4. ✅ Remove duplication

**Deliverables:**
- `@siso/ui/patterns/` expanded with cross-domain patterns
- Reduced code duplication
- Clear documentation on when to use shared vs domain-specific

---

### Phase 7: Tooling & Automation (Week 7)

**Goal:** Build developer tools to streamline workflow

**Tasks:**
1. ✅ **Component Generator CLI**
   ```bash
   pnpm create:component --package ui --name Button --type primitive
   pnpm create:component --package restaurants --name MenuDisplay --type ui
   pnpm create:feature --package tour-guides --name booking-system
   ```

2. ✅ **Feature Extractor CLI**
   ```bash
   pnpm extract:feature --from /path/to/app --to tour-guides/features/new-feature
   # Automatically detects components, hooks, actions, API routes, DB schemas
   ```

3. ✅ **Metadata Generator**
   ```bash
   pnpm generate:metadata
   # Auto-generates docs/ai-metadata.json from all packages
   ```

4. ✅ **Version Manager**
   ```bash
   pnpm version:bump minor
   # Bumps all packages in lockstep
   ```

**Deliverables:**
- CLI tools in `tools/` directory
- Documentation for each tool
- Automation scripts for common tasks

---

### Phase 8: Documentation & AI Metadata (Week 8)

**Goal:** Create comprehensive documentation and AI-optimized metadata

**Tasks:**
1. ✅ Generate AI metadata for all packages:
   ```json
   {
     "packages": {
       "ui": {
         "primitives": { /* ... */ },
         "patterns": { /* ... */ }
       },
       "restaurants": {
         "features": { /* ... */ },
         "ui": { /* ... */ }
       },
       "tour-guides": { /* ... */ },
       "bike-rental": { /* ... */ }
     },
     "search_index": {
       "by_pattern": { /* ... */ },
       "by_feature": { /* ... */ },
       "by_domain": { /* ... */ }
     },
     "relationships": {
       "cross_domain_features": { /* ... */ },
       "shared_dependencies": { /* ... */ }
     }
   }
   ```

2. ✅ Create documentation:
   - Architecture overview
   - Getting started guide
   - Feature documentation (one per feature)
   - API reference (auto-generated from TypeScript)
   - Migration guides

3. ✅ Set up Storybook for component showcase

**Deliverables:**
- Complete `docs/` folder
- `ai-metadata.json` for AI navigation
- Storybook deployed
- README for each package

---

### Phase 9: Testing & Validation (Week 9)

**Goal:** Ensure everything works correctly

**Tasks:**
1. ✅ Write tests for universal UI components
2. ✅ Write tests for each feature
3. ✅ Integration tests for cross-package dependencies
4. ✅ Build 3 demo projects to validate:
   - Restaurant demo using `@siso/ui` + `@siso/restaurants`
   - Tour guide demo using `@siso/ui` + `@siso/tour-guides`
   - Bike rental demo using `@siso/ui` + `@siso/bike-rental`
5. ✅ Performance testing (bundle size, load time)
6. ✅ TypeScript type checking across all packages

**Deliverables:**
- Test coverage >80%
- 3 working demo apps
- Performance benchmarks
- All packages building successfully

---

### Phase 10: Migration Cutover (Week 10)

**Goal:** Switch from old structure to new monorepo

**Tasks:**
1. ✅ Archive old `SISO-UI-Library/` as `SISO-UI-Library-OLD/`
2. ✅ Rename `siso-ecosystem/` → `SISO-UI-Library/`
3. ✅ Update all project imports:
   ```tsx
   // Old
   import { Button } from '../components/ui/button'

   // New
   import { Button } from '@siso/ui/primitives'
   import { ReservationSystem } from '@siso/restaurants/features/reservation-system'
   ```
4. ✅ Update documentation URLs
5. ✅ Create migration guide for existing projects
6. ✅ Notify team/stakeholders

**Deliverables:**
- Fully migrated monorepo
- All projects using new package structure
- Migration complete

---

## 📦 Package Dependencies

### Dependency Graph:

```
@siso/ui (no dependencies)
    ↑
    ├── @siso/restaurants (depends on @siso/ui)
    ├── @siso/tour-guides (depends on @siso/ui)
    ├── @siso/bike-rental (depends on @siso/ui)
    └── @siso/shared (depends on @siso/ui)
```

### Version Strategy:

**Lockstep Versioning:**
- All packages share same version number
- Bump all together: `pnpm version minor` → all go to 1.1.0
- Simpler for internal use
- No complex dependency resolution

```json
// All packages
{
  "version": "1.0.0"
}
```

---

## 🚀 Usage Examples

### Installing in a New Restaurant Project:

```bash
npm install @siso/ui @siso/restaurants
```

```tsx
// App.tsx
import { Button, Card } from '@siso/ui/primitives'
import { Hero, ContactForm } from '@siso/ui/patterns'
import {
  ReservationSystem,
  MenuManagement,
  OrderTracking
} from '@siso/restaurants/features'
import { useReservation, useMenu } from '@siso/restaurants/shared/hooks'

function RestaurantApp() {
  const { bookTable } = useReservation()
  const { menu, addItem } = useMenu()

  return (
    <>
      <Hero />
      <ReservationSystem onBook={bookTable} />
      <MenuManagement menu={menu} />
      <OrderTracking />
      <ContactForm />
    </>
  )
}
```

### Installing in a New Tour Guide Project:

```bash
npm install @siso/ui @siso/tour-guides
```

```tsx
import { Button, Card } from '@siso/ui/primitives'
import { Hero } from '@siso/ui/patterns'
import {
  BookingSystem,
  ItineraryBuilder,
  PaymentProcessing,
  ReviewSystem,
  AdminPanel
} from '@siso/tour-guides/features'

function TourGuideApp() {
  return (
    <>
      <Hero />
      <BookingSystem />
      <ItineraryBuilder />
      <ReviewSystem />
    </>
  )
}
```

---

## 🎯 Success Criteria

### The migration is successful when:

✅ All packages build without errors
✅ All tests pass
✅ Can build 3 demo projects successfully
✅ Zero duplication between packages
✅ Clear documentation for all features
✅ AI metadata covers all components
✅ Developer tooling works smoothly
✅ Bundle sizes are optimal (tree-shaking works)
✅ TypeScript types are complete
✅ Migration from old structure is smooth

---

## ⚠️ Risks & Mitigation

### Risk 1: Breaking Changes
**Mitigation:** Build in parallel, don't touch old structure until new is validated

### Risk 2: Complex Dependencies
**Mitigation:** Keep dependency graph simple, use lockstep versioning

### Risk 3: Feature Extraction Too Complex
**Mitigation:** Start with simple features, learn patterns, then tackle complex ones

### Risk 4: Time Overruns
**Mitigation:** Prioritize packages (ui → restaurants → tour-guides → bike-rental)

### Risk 5: Lost Work During Migration
**Mitigation:** Keep old structure intact, migrate in new location, test thoroughly

---

## 📅 Timeline Summary

| Week | Phase | Deliverable |
|------|-------|-------------|
| 1 | Setup | Monorepo infrastructure |
| 2 | UI | @siso/ui package |
| 3 | Restaurants | @siso/restaurants package |
| 4 | Tour Guides | @siso/tour-guides package + PR #1 merge |
| 5 | Bike Rental | @siso/bike-rental package |
| 6 | Patterns | Cross-domain extraction |
| 7 | Tooling | CLI tools & automation |
| 8 | Docs | Documentation & metadata |
| 9 | Testing | Tests & demo apps |
| 10 | Cutover | Migration complete |

**Total: 10 weeks (2.5 months)**

---

## 🔧 Technical Stack

### Monorepo:
- **Package Manager:** pnpm (workspaces)
- **Build Tool:** Vite + Tsup
- **Language:** TypeScript
- **Testing:** Vitest
- **Documentation:** Storybook (optional)

### Domain Packages:
- **Framework:** React (Next.js compatible)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui as base
- **State:** Zustand / React Context
- **Forms:** React Hook Form
- **Validation:** Zod

### Infrastructure:
- **Database:** Drizzle ORM (compatible with Postgres/MySQL/SQLite)
- **Auth:** Clerk / Supabase Auth
- **Payments:** Stripe
- **Media:** Cloudinary
- **Notifications:** Twilio (SMS), WhatsApp Business API, Telegram Bot API
- **Email:** Resend / SendGrid

---

## 📝 Next Steps

1. **Review this plan** with stakeholders
2. **Approve architecture** and timeline
3. **Start Phase 1** - setup monorepo infrastructure
4. **Begin feature inventory** - list all features from working apps
5. **Create extraction templates** - standardize how we extract features

---

## 🤝 Decision Points

**Before starting migration, decide:**

1. ☐ Approve monorepo structure
2. ☐ Confirm package naming (`@siso/*` vs different org)
3. ☐ Choose build tools (Vite, Tsup, Turbo?)
4. ☐ Decide on testing strategy
5. ☐ Approve timeline (10 weeks realistic?)
6. ☐ Identify which app features to extract first
7. ☐ Define feature extraction criteria (what makes a "complete feature"?)

---

**Status:** ✅ Plan Complete - Awaiting Review & Approval

**Next Action:** Review with team, get buy-in, start Phase 1
