# NavBar

Responsive navigation bar with mobile menu, user dropdown, and authentication.

## Features
✅ Desktop & mobile responsive
✅ Hamburger mobile menu
✅ User profile dropdown
✅ Avatar with initials fallback
✅ Configurable navigation links
✅ Auth-required link filtering
✅ Custom branding support
✅ Sign in/out functionality

## Usage

```tsx
import { NavBar } from '@siso/ui-library/bike-rental/layout/NavBar';

<NavBar
  brandName="Bike Rental Co"
  navLinks={[
    { label: 'Home', href: '/' },
    { label: 'Bikes', href: '/bikes' },
    { label: 'About', href: '/about' },
    { label: 'My Bookings', href: '/bookings', authRequired: true }
  ]}
  user={currentUser}
  onSignOut={handleSignOut}
/>
```

## Bike Rental Example

```tsx
function App() {
  const { user, signOut } = useAuth();

  return (
    <NavBar
      brandName="PedalPro Rentals"
      navLinks={[
        { label: 'Home', href: '/' },
        { label: 'Browse Bikes', href: '/bikes' },
        { label: 'Locations', href: '/locations' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'My Rentals', href: '/bookings', authRequired: true }
      ]}
      user={user}
      onSignOut={signOut}
      onSignIn={() => navigate('/login')}
    />
  );
}
```

## With Custom Logo

```tsx
<NavBar
  brandLogo={
    <div className="flex items-center">
      <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
      <span className="font-bold">BikeShare</span>
    </div>
  }
  navLinks={links}
  user={user}
  onSignOut={signOut}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| brandName | string | 'Brand' | Brand name text |
| brandLogo | ReactNode | undefined | Custom logo component |
| navLinks | NavLink[] | [] | Navigation links |
| user | UserObject \| null | undefined | Current user object |
| onSignOut | () => void | undefined | Sign out handler |
| onSignIn | () => void | undefined | Sign in handler |
| showAuthButton | boolean | true | Show/hide auth button |
| className | string | undefined | Additional CSS classes |

### NavLink Type
```typescript
{
  label: string;           // Link text
  href: string;            // Link destination
  authRequired?: boolean;  // Only show if user is authenticated
}
```

### User Type
```typescript
{
  email?: string;   // User email
  avatar?: string;  // Avatar image URL
}
```

## Examples

### Without Authentication
```tsx
<NavBar
  brandName="Public Site"
  navLinks={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' }
  ]}
  showAuthButton={false}
/>
```

### Auth-Required Links
```tsx
<NavBar
  navLinks={[
    { label: 'Home', href: '/' },
    { label: 'Bikes', href: '/bikes' },
    { label: 'My Rentals', href: '/rentals', authRequired: true },
    { label: 'Favorites', href: '/favorites', authRequired: true }
  ]}
  user={user}
/>
```
// "My Rentals" and "Favorites" only visible when logged in

## Dependencies
- `react-router-dom` - Navigation
- `lucide-react` - Icons
- shadcn/ui - Button, Dropdown, Avatar
