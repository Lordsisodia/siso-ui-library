# Feature Extraction Template & Guidelines

**Purpose:** Standardize how we extract complete features from working apps into domain packages

---

## 🎯 What is a "Feature"?

A **feature** is a complete, self-contained piece of functionality that includes:

✅ UI Components (React components)
✅ Business Logic (functions, calculations, validations)
✅ State Management (hooks, context, stores)
✅ API Integration (routes, endpoints, server actions)
✅ Database Schema (if applicable)
✅ Types/Interfaces (TypeScript definitions)

**Examples:**
- ✅ Reservation System = ReservationForm + useReservation + API routes + DB schema
- ✅ Payment Processing = PaymentForm + usePayment + Stripe webhooks + payment records
- ✅ Review System = ReviewList + ReviewForm + useReviews + API + DB schema
- ❌ Just a Card component = NOT a feature (it's a UI component)

---

## 📋 Feature Extraction Checklist

When extracting a feature from a working app, follow this process:

### Step 1: Identify & Document

- [ ] What is the feature name? (e.g., "reservation-system", "payment-processing")
- [ ] Which domain does it belong to? (restaurants, tour-guides, bike-rental)
- [ ] What problem does it solve?
- [ ] What are the main user flows?
- [ ] Dependencies on other features?

### Step 2: Inventory Assets

Create a list of all files that make up the feature:

**UI Components:**
- [ ] List all React components (Forms, Displays, Modals, etc.)
- [ ] Identify which are feature-specific vs reusable primitives

**Logic Layer:**
- [ ] Custom hooks (use* functions)
- [ ] Utility functions (calculations, validations, formatters)
- [ ] Business logic (pricing, availability, scheduling)

**Data Layer:**
- [ ] API routes (`app/api/**/route.ts`)
- [ ] Server actions (`actions/*.ts`)
- [ ] Database schemas (`db/schema/*.ts`)

**Supporting Files:**
- [ ] TypeScript types/interfaces
- [ ] Constants/configuration
- [ ] Test files

### Step 3: Map Dependencies

**Internal Dependencies:**
- [ ] Which primitives from `@siso/ui` does it use? (Button, Card, Input, etc.)
- [ ] Which patterns from `@siso/ui` does it use? (forms, modals, etc.)
- [ ] Which shared hooks/utils does it use?

**External Dependencies:**
- [ ] Third-party packages (Stripe, Cloudinary, etc.)
- [ ] APIs (Weather, Maps, Notifications, etc.)
- [ ] Services (Auth, Database, Storage, etc.)

### Step 4: Extract to Proper Structure

Create the feature folder with this structure:

```
packages/{domain}/features/{feature-name}/
├── components/              # UI components for this feature
│   ├── {feature-name}-form.tsx
│   ├── {feature-name}-list.tsx
│   ├── {feature-name}-modal.tsx
│   └── index.ts
│
├── hooks/                   # Feature-specific hooks
│   ├── use-{feature-name}.ts
│   ├── use-{feature-name}-state.ts
│   └── index.ts
│
├── utils/                   # Feature-specific utilities
│   ├── {feature-name}-helpers.ts
│   ├── validators.ts
│   ├── formatters.ts
│   └── index.ts
│
├── api/                     # API routes (Next.js convention)
│   ├── route.ts             # GET, POST, PUT, DELETE handlers
│   └── [...params]/route.ts # Dynamic routes
│
├── actions/                 # Server actions (Next.js)
│   ├── {feature-name}-actions.ts
│   └── index.ts
│
├── db/                      # Database schemas
│   ├── schema.ts            # Drizzle/Prisma schema
│   └── migrations/          # DB migrations
│
├── types/                   # TypeScript definitions
│   ├── {feature-name}.types.ts
│   └── index.ts
│
├── constants.ts             # Feature constants
├── config.ts                # Feature configuration
├── README.md                # Feature documentation
└── index.ts                 # Main export
```

### Step 5: Update Dependencies

**Update `package.json`:**

```json
{
  "dependencies": {
    "@siso/ui": "workspace:*",
    "stripe": "^14.0.0",      // If using Stripe
    "cloudinary": "^1.40.0",   // If using Cloudinary
    // ... other external dependencies
  }
}
```

### Step 6: Create Documentation

**Create `README.md` for the feature:**

```markdown
# {Feature Name}

## Overview
Brief description of what this feature does.

## Components

### {FeatureName}Form
Description, props, usage example

### {FeatureName}List
Description, props, usage example

## Hooks

### use{FeatureName}()
Description, return value, usage example

## API Routes

### POST /api/{feature}
Description, request body, response

## Database Schema

Tables/collections used by this feature

## Usage Example

```tsx
import { FeatureNameForm } from '@siso/restaurants/features/feature-name'
import { useFeatureName } from '@siso/restaurants/features/feature-name/hooks'

function MyComponent() {
  const { data, create, update } = useFeatureName()

  return <FeatureNameForm onSubmit={create} />
}
```

## Dependencies

- External: Stripe, Cloudinary, etc.
- Internal: @siso/ui primitives, patterns

## Configuration

Environment variables needed, API keys, etc.
```

### Step 7: Test Extraction

- [ ] Feature builds without errors
- [ ] All TypeScript types resolve
- [ ] Can import feature in demo app
- [ ] Feature works in isolation
- [ ] All dependencies are declared
- [ ] No absolute imports (should be relative within feature)

---

## 📝 Feature Extraction Example

### Example: Extracting "Reservation System" from Restaurant App

**Step 1: Identify & Document**

```markdown
**Feature:** reservation-system
**Domain:** restaurants
**Problem:** Customers need to book tables at restaurants
**User Flows:**
  1. Customer selects date/time/party size
  2. Customer selects table preference
  3. Customer provides contact info
  4. System checks availability
  5. System confirms or suggests alternatives
  6. Confirmation email sent
**Dependencies:**
  - payment-processing (for deposits)
  - email-notifications
```

**Step 2: Inventory Assets**

```
UI Components:
├── ReservationForm.tsx          (main form)
├── TableSelector.tsx            (table layout picker)
├── DateTimePicker.tsx           (date/time selection)
├── PartySize Selector.tsx       (number of guests)
├── ConfirmationModal.tsx        (booking confirmation)

Logic:
├── hooks/useReservation.ts      (main hook)
├── hooks/useTableAvailability.ts
├── utils/availability-checker.ts
├── utils/time-slot-generator.ts
├── utils/pricing-calculator.ts

Data:
├── api/reservations/route.ts    (CRUD endpoints)
├── actions/reservation-actions.ts
├── db/schema/reservations.ts
├── db/schema/tables.ts

Supporting:
├── types/reservation.types.ts
├── constants/time-slots.ts
├── config/reservation-config.ts
```

**Step 3: Map Dependencies**

```
Internal (@siso/ui):
- Button, Input, Select, Modal, Calendar primitives
- Form pattern
- ContactForm pattern

External:
- date-fns for date manipulation
- zod for validation
- react-hook-form for forms

Services:
- Database (Postgres via Drizzle)
- Email (Resend)
- Notifications (optional)
```

**Step 4: Extract Structure**

```bash
# Create feature directory
mkdir -p packages/restaurants/features/reservation-system/{components,hooks,utils,api,actions,db,types}

# Copy files to appropriate locations
# components/ - all UI components
# hooks/ - useReservation, useTableAvailability
# utils/ - business logic
# api/ - API routes
# actions/ - server actions
# db/ - database schemas
# types/ - TypeScript types
```

**Step 5: Create Entry Points**

**`index.ts` (main export):**

```typescript
// Export main components
export { ReservationForm } from './components/reservation-form'
export { TableSelector } from './components/table-selector'
export { ConfirmationModal } from './components/confirmation-modal'

// Export hooks
export { useReservation } from './hooks/use-reservation'
export { useTableAvailability } from './hooks/use-table-availability'

// Export types
export type {
  Reservation,
  ReservationInput,
  TablePreference,
  TimeSlot
} from './types'

// Export actions (for server components)
export {
  createReservation,
  updateReservation,
  cancelReservation,
  checkAvailability
} from './actions'
```

**Step 6: Documentation**

Create comprehensive `README.md` with usage examples, API reference, configuration guide.

**Step 7: Test**

```tsx
// Create demo app to test extraction
import { ReservationForm, useReservation } from '@siso/restaurants/features/reservation-system'

function TestPage() {
  const { create, isLoading } = useReservation()

  return (
    <ReservationForm
      onSubmit={create}
      loading={isLoading}
    />
  )
}
```

---

## 🎯 Quality Checklist

Before marking a feature extraction as complete:

### Code Quality
- [ ] All TypeScript types defined
- [ ] No `any` types (unless truly necessary)
- [ ] Proper error handling
- [ ] Loading states handled
- [ ] Edge cases considered

### Structure
- [ ] Follows standard feature structure
- [ ] Clear separation of concerns (UI, logic, data)
- [ ] Proper exports in index files
- [ ] No circular dependencies

### Documentation
- [ ] README.md exists
- [ ] Usage examples provided
- [ ] Props/params documented
- [ ] Environment variables documented
- [ ] Dependencies listed

### Testing
- [ ] Feature builds successfully
- [ ] Works in isolation
- [ ] All imports resolve
- [ ] Can be used in demo app

### Integration
- [ ] Added to domain package exports
- [ ] Dependencies declared in package.json
- [ ] Peer dependencies correct
- [ ] Works with @siso/ui components

---

## 🚫 Common Pitfalls to Avoid

### ❌ DON'T:
1. **Mix features together** - Each feature should be independent
2. **Include app-specific logic** - Keep features generic and reusable
3. **Hardcode values** - Use configuration/constants
4. **Skip documentation** - Always document usage
5. **Forget dependencies** - Declare all external deps
6. **Use absolute imports** - Use relative imports within feature
7. **Include test data** - Don't commit API keys, test data, etc.

### ✅ DO:
1. **Keep features focused** - One feature, one responsibility
2. **Make features configurable** - Allow customization via props/config
3. **Provide good defaults** - Features should work out of the box
4. **Document thoroughly** - Explain how to use the feature
5. **Test in isolation** - Make sure feature works standalone
6. **Use TypeScript** - Fully typed APIs
7. **Handle errors gracefully** - Don't crash, provide feedback

---

## 📊 Feature Extraction Template Files

### 1. Feature README Template

```markdown
# {Feature Name}

## Overview
{What does this feature do?}

## Components

### {ComponentName}
**Description:** {Brief description}

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | ... |

**Usage:**
```tsx
import { ComponentName } from '@siso/{domain}/features/{feature}'

<ComponentName prop1="value" />
```

## Hooks

### use{FeatureName}()
**Description:** {What does this hook do?}

**Returns:**
| Property | Type | Description |
|----------|------|-------------|
| data | Type | ... |
| create | (input) => Promise | ... |

**Usage:**
```tsx
const { data, create } = useFeatureName()
```

## API Routes

### POST /api/{feature}
**Request Body:**
```json
{
  "field": "value"
}
```

**Response:**
```json
{
  "id": "123",
  "status": "success"
}
```

## Database Schema

```typescript
export const featureTable = pgTable('feature', {
  id: serial('id').primaryKey(),
  // ...
})
```

## Configuration

**Environment Variables:**
```env
FEATURE_API_KEY=xxx
FEATURE_ENABLED=true
```

## Dependencies

**External:**
- package-name ^1.0.0

**Internal:**
- @siso/ui/primitives
- @siso/ui/patterns

## Examples

{Complete working example}
```

### 2. Feature Config Template

```typescript
// config.ts
export const featureConfig = {
  enabled: process.env.FEATURE_ENABLED === 'true',
  apiEndpoint: process.env.FEATURE_API_ENDPOINT || '/api/feature',
  defaultOptions: {
    // ...
  },
  limits: {
    maxItems: 100,
    // ...
  }
}
```

### 3. Feature Types Template

```typescript
// types/index.ts
export interface FeatureInput {
  // Input fields
}

export interface FeatureOutput {
  // Output fields
}

export interface FeatureState {
  // State fields
}

export interface FeatureConfig {
  // Configuration
}

export type FeatureStatus = 'idle' | 'loading' | 'success' | 'error'
```

---

## 🚀 Quick Start: Extract Your First Feature

1. **Identify feature** in working app
2. **Create folder** in domain package
3. **Copy files** into proper structure
4. **Update imports** to be relative
5. **Create exports** in index.ts
6. **Add dependencies** to package.json
7. **Write README**
8. **Test** in isolation
9. **Commit** with clear message

**Time estimate:** 2-4 hours per feature (depending on complexity)

---

**Next:** Use this template to extract features from your working apps into domain packages!
