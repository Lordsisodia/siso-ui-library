# Footer

Comprehensive footer with brand info, links, contact details, social media, and newsletter.

## Features
✅ 4-column responsive grid
✅ Brand section with social media
✅ Quick links section
✅ Contact information
✅ Newsletter signup
✅ Copyright notice
✅ Fully configurable

## Usage

```tsx
import { Footer } from '@siso/ui-library/bike-rental/layout/Footer';

<Footer
  brandName="Bike Rental Pro"
  brandDescription="Your trusted bike rental service"
  quickLinks={[
    { label: 'Home', href: '/' },
    { label: 'Bikes', href: '/bikes' },
    { label: 'About', href: '/about' }
  ]}
  contactInfo={{
    address: '123 Bike Lane, Portland, OR',
    phone: '+1 (555) 123-4567',
    email: 'info@bikerental.com'
  }}
  socialLinks={{
    facebook: 'https://facebook.com/bikerental',
    instagram: 'https://instagram.com/bikerental'
  }}
  onNewsletterSubmit={async (email) => {
    await subscribeToNewsletter(email);
  }}
/>
```

## Bike Rental Example

```tsx
<Footer
  brandName="PEDAL POWER"
  brandDescription="Experience freedom on two wheels with our premium bike rental service. Eco-friendly transport for every adventure."
  quickLinks={[
    { label: 'Home', href: '/' },
    { label: 'Our Fleet', href: '/bikes' },
    { label: 'Locations', href: '/locations' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' }
  ]}
  contactInfo={{
    address: '456 Green Street, Portland, OR 97201',
    phone: 'Main: +1 (555) 234-5678',
    email: 'hello@pedalpower.com'
  }}
  socialLinks={{
    facebook: 'https://facebook.com/pedalpower',
    instagram: 'https://instagram.com/pedalpower',
    twitter: 'https://twitter.com/pedalpower'
  }}
  showNewsletter={true}
  onNewsletterSubmit={(email) => {
    console.log('Newsletter signup:', email);
    toast.success('Subscribed successfully!');
  }}
/>
```

## Minimal Footer

```tsx
<Footer
  brandName="Simple Bikes"
  quickLinks={[
    { label: 'Home', href: '/' },
    { label: 'Bikes', href: '/bikes' }
  ]}
  showNewsletter={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| brandName | string | 'Brand' | Brand name |
| brandDescription | string | auto | Brand description text |
| quickLinks | QuickLink[] | [] | Navigation links |
| contactInfo | ContactInfo | undefined | Contact details |
| socialLinks | SocialLinks | undefined | Social media URLs |
| showNewsletter | boolean | true | Show newsletter section |
| onNewsletterSubmit | (email: string) => void | undefined | Newsletter handler |
| className | string | undefined | Additional CSS classes |

### Types

```typescript
interface QuickLink {
  label: string;
  href: string;
}

interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
}

interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}
```

## Dependencies
- `react-router-dom` - Link
- `lucide-react` - Icons (Facebook, Instagram, Twitter, Mail, MapPin, Phone)
