# Hero

Full-screen hero section with image carousel, animated text, and CTAs.

## Features
✅ Automatic image carousel
✅ Smooth fade transitions
✅ Framer Motion animations
✅ Gradient overlay
✅ Progress indicators
✅ Multiple CTA buttons
✅ Responsive design
✅ Customizable timing

## Usage

```tsx
import { Hero } from '@siso/ui-library/bike-rental/layout/Hero';

<Hero
  images={[
    { url: '/bike1.jpg', alt: 'Mountain bike' },
    { url: '/bike2.jpg', alt: 'Road bike' },
    { url: '/bike3.jpg', alt: 'E-bike' }
  ]}
  badge="Premium Fleet"
  heading="Experience Freedom on Two Wheels"
  subheading="Explore the city with our premium bike rental service"
  buttons={[
    { label: 'Browse Bikes', href: '/bikes', variant: 'primary' },
    { label: 'Learn More', href: '/about', variant: 'secondary' }
  ]}
/>
```

## Bike Rental Example

```tsx
<Hero
  images={[
    {
      url: 'https://images.unsplash.com/photo-bike-mountain.jpg',
      alt: 'Mountain bikes for trail adventures'
    },
    {
      url: 'https://images.unsplash.com/photo-bike-electric.jpg',
      alt: 'E-bikes for effortless city cruising'
    },
    {
      url: 'https://images.unsplash.com/photo-bike-road.jpg',
      alt: 'Road bikes for speed enthusiasts'
    }
  ]}
  badge="Eco-Friendly Transport"
  heading="Ride Green, Ride Free"
  subheading="Premium bikes for every adventure. From mountain trails to city streets."
  buttons={[
    { label: 'Start Riding', href: '/bikes' },
    { label: 'Our Story', href: '/about', variant: 'secondary' }
  ]}
  autoPlayInterval={5000}
/>
```

## Car Rental Example

```tsx
<Hero
  images={[
    { url: '/porsche.jpg', alt: 'Porsche 911' },
    { url: '/ferrari.jpg', alt: 'Ferrari F8' },
    { url: '/lamborghini.jpg', alt: 'Lamborghini Huracan' }
  ]}
  badge="Luxury Fleet"
  heading="Experience Luxury on Four Wheels"
  subheading="Drive the finest high-performance vehicles"
  buttons={[
    { label: 'Explore Fleet', href: '/cars' }
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| images | HeroImage[] | required | Array of image objects |
| heading | string | required | Main heading text |
| subheading | string | required | Subheading/description text |
| badge | string | undefined | Optional badge text |
| buttons | HeroButton[] | [] | CTA buttons |
| autoPlayInterval | number | 6000 | Auto-advance time (ms) |
| showIndicators | boolean | true | Show progress indicators |
| className | string | undefined | Additional CSS classes |

### HeroImage Type
```typescript
{
  url: string;  // Image URL
  alt: string;  // Alt text for accessibility
}
```

### HeroButton Type
```typescript
{
  label: string;          // Button text
  href: string;           // Link destination
  variant?: 'primary' | 'secondary';  // Button style
}
```

## Customization

### Single Image (No Carousel)
```tsx
<Hero
  images={[{ url: '/hero.jpg', alt: 'Hero image' }]}
  heading="Welcome"
  subheading="Get started today"
  showIndicators={false}
/>
```

### Custom Timing
```tsx
<Hero
  images={heroImages}
  heading="Fast Transitions"
  subheading="Images change every 3 seconds"
  autoPlayInterval={3000}
/>
```

## Dependencies
- `framer-motion` - Animations
- `react-router-dom` - Link component
- Tailwind CSS - Styling
