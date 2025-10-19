# 🏢 SISO Core - Business Components

Business-focused UI components for internal tools, client portals, and partnership management systems.

## 📁 Structure

```
siso-core/
├── internal/       # Internal tools & dashboards
├── client/         # Client-facing portals
└── partnership/    # Partner management interfaces
```

## 🎯 Purpose

SISO Core contains **business and operational components** that are not domain-specific (restaurant/bike/tour) but are used across SISO business operations.

---

## 🔧 Internal

Components for internal SISO tools, admin dashboards, and employee-facing interfaces.

### Categories

#### Components
- **Dashboards**: Analytics, metrics, KPI displays
- **Admin Panels**: User management, content moderation, system settings
- **Data Tables**: Sortable, filterable tables for data management
- **Forms**: Employee onboarding, internal requests, surveys
- **Reports**: Financial reports, performance metrics, export tools
- **Notifications**: Internal alerts, task reminders, announcements

#### Utils
- Authentication helpers
- API clients
- Data formatters
- Validation functions

#### Hooks
- `useAuth` - Authentication state
- `usePermissions` - Role-based access control
- `useAnalytics` - Track internal metrics
- `useNotifications` - Internal notification system

### Example Usage

```jsx
// Copy from: siso-core/internal/components/Dashboard.jsx
import Dashboard from './components/Dashboard'

function AdminPanel() {
  return (
    <Dashboard
      metrics={[
        { label: 'Active Users', value: 1234 },
        { label: 'Revenue', value: '$45,678' }
      ]}
    />
  )
}
```

---

## 👥 Client

Components for client-facing portals, customer account management, and support interfaces.

### Categories

#### Components
- **Account Management**: Profile editing, subscription management, billing
- **Support**: Help center, ticket system, FAQ, chatbot
- **Portals**: Client dashboard, document access, project tracking
- **Communication**: Messaging, notifications, announcements
- **Billing**: Invoice viewing, payment history, subscription upgrades
- **Settings**: Preferences, integrations, team management

#### Utils
- Client data transformers
- Subscription helpers
- Billing calculators
- Document generators

#### Hooks
- `useClientAccount` - Client account data
- `useSubscription` - Subscription status and features
- `useSupport` - Support ticket management
- `useBilling` - Billing and payment data

### Example Usage

```jsx
// Copy from: siso-core/client/components/AccountSettings.jsx
import AccountSettings from './components/AccountSettings'

function ClientPortal() {
  return (
    <AccountSettings
      user={currentUser}
      onSave={handleSave}
    />
  )
}
```

---

## 🤝 Partnership

Components for partner onboarding, collaboration tools, and partnership management.

### Categories

#### Components
- **Onboarding**: Partner registration, verification, setup wizards
- **Collaboration**: Shared workspaces, document collaboration, messaging
- **Reporting**: Partnership metrics, revenue sharing, performance reports
- **Integration**: API keys, webhook management, developer tools
- **Contracts**: Agreement signing, terms display, compliance
- **Resources**: Partner resources, training materials, brand assets

#### Utils
- Partnership calculators
- Revenue sharing formulas
- Integration helpers
- Contract generators

#### Hooks
- `usePartnership` - Partnership status and data
- `useIntegrations` - API and integration management
- `useRevenue` - Revenue sharing calculations
- `useCompliance` - Partnership compliance status

### Example Usage

```jsx
// Copy from: siso-core/partnership/components/PartnerDashboard.jsx
import PartnerDashboard from './components/PartnerDashboard'

function PartnerPortal() {
  return (
    <PartnerDashboard
      partnerId={partnerId}
      metrics={partnerMetrics}
    />
  )
}
```

---

## 🎨 Common Components Across All Three

These component types exist in **internal**, **client**, and **partnership** folders with different styling/functionality:

- **Navigation**: Sidebars, top nav, breadcrumbs (styled for each audience)
- **Forms**: Input fields, selects, checkboxes (different validation rules)
- **Buttons**: Primary, secondary, danger (different color schemes)
- **Cards**: Info cards, stat cards (different data displayed)
- **Tables**: Data tables (different columns/actions)
- **Modals**: Dialogs, confirmations (different messaging tone)

---

## 🔄 When to Use Each

| Situation | Use |
|-----------|-----|
| Building admin dashboard for SISO employees | **Internal** |
| Creating client account management portal | **Client** |
| Developing partner collaboration platform | **Partnership** |
| Need business component but not sure | Start with **Internal**, adapt as needed |

---

## 🚀 Quick Start

1. **Identify your audience**: Internal team, clients, or partners?
2. **Browse the relevant folder**: `internal/`, `client/`, or `partnership/`
3. **Copy component**: Copy the component file to your project
4. **Customize**: Adjust colors, text, and functionality
5. **Use**: Import and use in your app

---

## 📦 Example Project Structure

```jsx
// Your project after copying components
your-project/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          // from siso-core/internal/
│   │   ├── AccountSettings.jsx    // from siso-core/client/
│   │   └── PartnerMetrics.jsx     // from siso-core/partnership/
│   └── utils/
│       └── auth.js                 // from siso-core/internal/utils/
```

---

## 💡 Best Practices

1. **Don't mix audiences**: Use internal components for internal tools, client components for client portals, etc.
2. **Consistent styling**: Maintain consistent styling within each audience type
3. **Adapt, don't duplicate**: Modify existing components rather than creating new ones
4. **Document customizations**: Note what you changed from the original component

---

## 🎯 Component Checklist

When adding new components to SISO Core:

- [ ] Determine audience (internal/client/partnership)
- [ ] Follow existing folder structure
- [ ] Include PropTypes or TypeScript types
- [ ] Add usage example
- [ ] Update this README
- [ ] Consider if component should exist in all three folders (with variations)

---

**Remember**: SISO Core is for **business operations**, not industry verticals (those go in restaurant/bike/tour libraries).
