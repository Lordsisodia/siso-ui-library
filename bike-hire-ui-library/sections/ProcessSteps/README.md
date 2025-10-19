# ProcessSteps

Display a step-by-step process with icons, titles, and descriptions.

## Features
✅ Configurable number of steps
✅ Animated reveal
✅ Icon + title + description pattern
✅ Optional CTA button
✅ Responsive grid (1/2/3/4 columns)
✅ Stagger animation

## Usage

```tsx
import { ProcessSteps } from '@siso/ui-library/bike-rental/sections/ProcessSteps';
import { Bike, Calendar, Star } from 'lucide-react';

<ProcessSteps
  badge="Simple Process"
  heading="How It Works"
  description="Rent a bike in 3 easy steps"
  steps={[
    {
      icon: <Bike className="h-8 w-8 text-primary" />,
      title: 'Choose Your Bike',
      description: 'Browse our fleet and select the perfect bike'
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Book Your Dates',
      description: 'Select pickup and return dates'
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: 'Enjoy The Ride',
      description: 'Pick up and start your adventure'
    }
  ]}
  ctaButton={{
    label: 'Start Booking',
    href: '/bikes'
  }}
/>
```

## Bike Rental Example

```tsx
import { Search, CreditCard, Bike, MapPin } from 'lucide-react';

<ProcessSteps
  badge="Easy Booking"
  heading="Rent a Bike in Minutes"
  description="Our streamlined process makes bike rental quick and hassle-free"
  steps={[
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: 'Browse & Filter',
      description: 'Find the perfect bike for your adventure using our advanced filters'
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Select Dates',
      description: 'Choose your rental period and check real-time availability'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: 'Secure Payment',
      description: 'Complete your booking with our secure payment system'
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Pick Up & Ride',
      description: 'Collect your bike from our location and hit the road!'
    }
  ]}
  columns={4}
  ctaButton={{
    label: 'Browse Bikes',
    href: '/bikes'
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| steps | ProcessStep[] | required | Array of step objects |
| heading | string | required | Section heading |
| badge | string | undefined | Optional badge text |
| description | string | undefined | Optional description |
| ctaButton | CTAButton | undefined | Optional call-to-action button |
| columns | 2 \| 3 \| 4 | 3 | Number of columns |
| className | string | undefined | Additional CSS classes |

### ProcessStep Type
```typescript
{
  icon: ReactNode;      // Icon component (e.g., <Bike />)
  title: string;        // Step title
  description: string;  // Step description
}
```

### CTAButton Type
```typescript
{
  label: string;  // Button text
  href: string;   // Link destination
}
```

## Dependencies
- `framer-motion` - Animations
- `react-router-dom` - Link
- `lucide-react` - Icons
- shadcn/ui - Button
