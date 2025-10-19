# FeaturedProducts

Showcase featured products with heading, description, grid display, and "View All" CTA.

## Features
✅ Animated section header
✅ Product grid integration
✅ Limit max products displayed
✅ "View All" CTA button
✅ Custom product rendering
✅ Stagger animations

## Usage

```tsx
import { FeaturedProducts } from '@siso/ui-library/bike-rental/sections/FeaturedProducts';
import { ProductCard } from '@siso/ui-library/bike-rental/cards/ProductCard';

<FeaturedProducts
  products={bikes}
  heading="Featured Bikes"
  description="Check out our most popular bikes"
  maxProducts={6}
  viewAllLink="/bikes"
  renderCard={(bike) => (
    <ProductCard
      product={bike}
      imageUrl={bike.image}
      title={bike.name}
      dailyRate={bike.rate}
      specs={bike.specs}
      onBookNow={handleBooking}
    />
  )}
/>
```

## Bike Rental Example

```tsx
<FeaturedProducts
  products={topBikes}
  badge="Premium Selection"
  heading="Featured Bikes"
  description="Discover our hand-picked selection of premium bikes for every adventure"
  maxProducts={6}
  viewAllLink="/bikes"
  viewAllText="Browse All Bikes"
  renderCard={(bike) => (
    <ProductCard
      product={bike}
      imageUrl={bike.imageUrl}
      title={`${bike.brand} ${bike.model}`}
      subtitle={bike.type}
      dailyRate={bike.dailyRate}
      specs={[
        { label: 'Type', value: bike.type },
        { label: 'Gears', value: `${bike.gears}-speed` },
        { label: 'Frame', value: bike.frameSize }
      ]}
      rating={bike.averageRating}
      detailsLink={`/bikes/${bike.id}`}
      onBookNow={(bike) => openBookingModal(bike)}
    />
  )}
  backgroundColor="bg-background"
/>
```

## Custom Card Rendering

```tsx
<FeaturedProducts
  products={bikes}
  heading="Top Bikes"
  renderCard={(bike) => (
    <div className="custom-card">
      <img src={bike.image} alt={bike.name} />
      <h3>{bike.name}</h3>
      <p>${bike.price}/day</p>
    </div>
  )}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| products | T[] | required | Array of products |
| renderCard | (product: T) => ReactNode | required | Product card render function |
| heading | string | required | Section heading |
| badge | string | 'Featured' | Badge text |
| description | string | undefined | Section description |
| maxProducts | number | 6 | Max products to display |
| viewAllLink | string | undefined | "View All" link destination |
| viewAllText | string | 'View All' | "View All" button text |
| backgroundColor | string | 'bg-background' | Background color class |
| className | string | undefined | Additional CSS classes |

## Integration with ProductCard

```tsx
import { ProductCard } from '@siso/ui-library/bike-rental/cards/ProductCard';

<FeaturedProducts
  products={bikes}
  heading="Featured Bikes"
  renderCard={(bike) => (
    <ProductCard {...bikeProps} />
  )}
/>
```

## Dependencies
- `framer-motion` - Animations
- `react-router-dom` - Link
- ProductGrid component
