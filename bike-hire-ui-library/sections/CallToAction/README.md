# CallToAction

Eye-catching call-to-action section with background patterns and centered content.

## Features
✅ Animated reveal
✅ Background patterns (grid/dots/none)
✅ Configurable colors
✅ Centered layout
✅ Large CTA button
✅ Optional description

## Usage

```tsx
import { CallToAction } from '@siso/ui-library/bike-rental/sections/CallToAction';

<CallToAction
  heading="Ready to Start Your Adventure?"
  description="Book a bike today and explore the city"
  buttonLabel="Browse Bikes"
  buttonHref="/bikes"
/>
```

## Bike Rental Example

```tsx
<CallToAction
  heading="Ready to Ride?"
  description="Join thousands of happy riders. Book your bike today and experience the freedom of two wheels!"
  buttonLabel="Book Your Bike Now"
  buttonHref="/bikes"
  backgroundPattern="grid"
/>
```

## Different Patterns

### Grid Pattern
```tsx
<CallToAction
  heading="Get Started Today"
  buttonLabel="Sign Up"
  buttonHref="/signup"
  backgroundPattern="grid"
/>
```

### Dots Pattern
```tsx
<CallToAction
  heading="Join Our Community"
  buttonLabel="Learn More"
  buttonHref="/about"
  backgroundPattern="dots"
/>
```

### No Pattern
```tsx
<CallToAction
  heading="Simple CTA"
  buttonLabel="Get Started"
  buttonHref="/start"
  backgroundPattern="none"
/>
```

## Custom Colors

```tsx
<CallToAction
  heading="Special Offer"
  description="Limited time discount on all weekly rentals"
  buttonLabel="View Offer"
  buttonHref="/offers"
  backgroundColor="bg-green-600 text-white"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| heading | string | required | Main heading text |
| buttonLabel | string | required | CTA button text |
| buttonHref | string | required | CTA button destination |
| description | string | undefined | Optional description text |
| backgroundPattern | 'grid' \| 'dots' \| 'none' | 'grid' | Background pattern style |
| backgroundColor | string | 'bg-primary text-primary-foreground' | Background color classes |
| className | string | undefined | Additional CSS classes |

## Examples by Use Case

### Bike Rental
```tsx
<CallToAction
  heading="Experience Freedom on Two Wheels"
  description="Premium bikes. Flexible rentals. Unbeatable prices."
  buttonLabel="Start Riding"
  buttonHref="/bikes"
/>
```

### Equipment Rental
```tsx
<CallToAction
  heading="Gear Up for Your Next Adventure"
  description="Professional equipment for professionals and enthusiasts"
  buttonLabel="Browse Equipment"
  buttonHref="/equipment"
/>
```

### Service Business
```tsx
<CallToAction
  heading="Ready to Transform Your Business?"
  description="Let's discuss how we can help you succeed"
  buttonLabel="Schedule Consultation"
  buttonHref="/contact"
/>
```

## Dependencies
- `framer-motion` - Animations
- `react-router-dom` - Link
- Tailwind CSS - Styling
