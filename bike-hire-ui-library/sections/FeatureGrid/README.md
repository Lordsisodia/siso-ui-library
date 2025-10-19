# FeatureGrid

Display product or service features in an animated grid layout.

## Features
✅ Configurable columns (2/3/4)
✅ Icon + title + description pattern
✅ Stagger animation
✅ Optional badge and description
✅ Multiple background options
✅ Card-based feature display

## Usage

```tsx
import { FeatureGrid } from '@siso/ui-library/bike-rental/sections/FeatureGrid';
import { Shield, Clock, Award } from 'lucide-react';

<FeatureGrid
  badge="Why Choose Us"
  heading="Premium Bike Rental Service"
  description="Experience the best in bike rentals"
  features={[
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: 'Fully Insured',
      description: 'All bikes are fully insured for your peace of mind'
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: '24/7 Support',
      description: 'Our team is always available to assist you'
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: 'Premium Quality',
      description: 'Top-tier bikes maintained to perfection'
    }
  ]}
/>
```

## Bike Rental Example

```tsx
import { Bike, Wrench, MapPin, DollarSign, Shield, Users } from 'lucide-react';

<FeatureGrid
  badge="Why Ride With Us"
  heading="The Best Bike Rental Experience"
  description="We're committed to providing exceptional service and quality bikes"
  features={[
    {
      icon: <Bike className="h-6 w-6 text-accent" />,
      title: 'Premium Fleet',
      description: 'Top-quality bikes from Trek, Specialized, and Cannondale, maintained weekly for peak performance'
    },
    {
      icon: <Wrench className="h-6 w-6 text-accent" />,
      title: 'Expert Maintenance',
      description: 'Professional tune-ups before every rental. Gear systems, brakes, and tires checked thoroughly'
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: 'Multiple Locations',
      description: 'Convenient pickup points across the city. Drop-off at any location at no extra charge'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-accent" />,
      title: 'Best Prices',
      description: 'Competitive daily and weekly rates. No hidden fees, transparent pricing'
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage included. Ride with complete peace of mind'
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: 'Friendly Service',
      description: 'Expert staff to help you choose the right bike and provide local route recommendations'
    }
  ]}
  columns={3}
  backgroundColor="secondary"
/>
```

## 4-Column Layout

```tsx
<FeatureGrid
  heading="Our Services"
  features={[...8Features]}
  columns={4}
/>
```

## 2-Column Layout

```tsx
<FeatureGrid
  heading="Key Benefits"
  features={[...4Features]}
  columns={2}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| features | Feature[] | required | Array of feature objects |
| heading | string | required | Section heading |
| badge | string | undefined | Optional badge text |
| description | string | undefined | Optional section description |
| columns | 2 \| 3 \| 4 | 3 | Number of columns |
| backgroundColor | 'primary' \| 'secondary' \| 'background' | 'secondary' | Background color |
| className | string | undefined | Additional CSS classes |

### Feature Type
```typescript
{
  icon: ReactNode;      // Icon component
  title: string;        // Feature title
  description: string;  // Feature description
}
```

## Dependencies
- `framer-motion` - Animations
- Tailwind CSS - Styling
