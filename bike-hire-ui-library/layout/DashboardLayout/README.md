# DashboardLayout

Complete dashboard layout with collapsible sidebar, user profile, and responsive design.

## Features
✅ Collapsible sidebar navigation
✅ Active link highlighting
✅ User profile dropdown
✅ Avatar with initials fallback
✅ Responsive mobile support
✅ Sticky header
✅ Custom branding support
✅ Icon-based navigation

## Usage

```tsx
import { DashboardLayout } from '@siso/ui-library/bike-rental/layout/DashboardLayout';
import { Home, Calendar, Settings, Bike } from 'lucide-react';

<DashboardLayout
  brandName="Bike Rental Dashboard"
  sidebarItems={[
    { icon: Home, label: 'Overview', href: '/dashboard' },
    { icon: Bike, label: 'My Bikes', href: '/dashboard/bikes' },
    { icon: Calendar, label: 'Bookings', href: '/dashboard/bookings' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' }
  ]}
  user={currentUser}
  onSignOut={handleSignOut}
>
  <YourPageContent />
</DashboardLayout>
```

## Bike Rental Example

```tsx
import { Package, Calendar, Heart, Settings, CreditCard } from 'lucide-react';

function BikeRentalDashboard() {
  const { user, signOut } = useAuth();

  return (
    <DashboardLayout
      brandName="PedalPro"
      brandLogo={
        <div className="flex items-center">
          <Bike className="h-6 w-6 mr-2 text-accent" />
          <span>PedalPro</span>
        </div>
      }
      sidebarItems={[
        { icon: Package, label: 'My Rentals', href: '/dashboard' },
        { icon: Calendar, label: 'Upcoming Trips', href: '/dashboard/upcoming' },
        { icon: Heart, label: 'Favorites', href: '/dashboard/favorites' },
        { icon: CreditCard, label: 'Billing', href: '/dashboard/billing' },
        { icon: Settings, label: 'Settings', href: '/dashboard/settings' }
      ]}
      user={user}
      onSignOut={signOut}
      profileLink="/dashboard/profile"
    >
      <div className="p-6">
        <h1>My Bike Rentals</h1>
        {/* Your dashboard content */}
      </div>
    </DashboardLayout>
  );
}
```

## Admin Dashboard Example

```tsx
import { LayoutDashboard, Users, Bike, DollarSign, MessageSquare } from 'lucide-react';

<DashboardLayout
  brandName="Admin Panel"
  sidebarItems={[
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: Bike, label: 'Fleet Management', href: '/admin/fleet' },
    { icon: Users, label: 'Customers', href: '/admin/customers' },
    { icon: Calendar, label: 'Bookings', href: '/admin/bookings' },
    { icon: DollarSign, label: 'Revenue', href: '/admin/revenue' },
    { icon: MessageSquare, label: 'Messages', href: '/admin/messages' }
  ]}
  user={adminUser}
  onSignOut={signOut}
>
  <AdminContent />
</DashboardLayout>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Dashboard page content |
| sidebarItems | SidebarItem[] | required | Navigation menu items |
| brandName | string | 'Dashboard' | Brand name in sidebar |
| brandLogo | ReactNode | undefined | Custom logo component |
| user | UserObject | undefined | Current user object |
| onSignOut | () => void | undefined | Sign out handler |
| profileLink | string | '/dashboard/profile' | Profile page link |
| className | string | undefined | Additional CSS classes |

### SidebarItem Type
```typescript
{
  icon: React.ComponentType<any>;  // Lucide icon component
  label: string;                   // Menu item label
  href: string;                    // Link destination
}
```

### User Type
```typescript
{
  email?: string;   // User email
  avatar?: string;  // Avatar image URL
}
```

## Features

### Active Link Detection
Automatically highlights the current page in the sidebar.

### Collapsible Sidebar
Click the trigger button to collapse/expand the sidebar.

### Mobile Responsive
Sidebar becomes a drawer on mobile devices.

### User Dropdown
- Profile link
- Sign out option
- Custom menu items (can be extended)

## Dependencies
- shadcn/ui - Sidebar, Avatar, Dropdown components
- `react-router-dom` - Link, useLocation
- `lucide-react` - Icons
