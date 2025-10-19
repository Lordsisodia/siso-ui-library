# ImageWithFallback

Smart image component with automatic fallback, loading skeleton, and error handling.

## Features
✅ Automatic fallback on error
✅ Loading skeleton animation
✅ Smooth fade-in transition
✅ Lazy loading
✅ TypeScript support
✅ Extends all native img props

## Usage

```tsx
import { ImageWithFallback } from '@siso/ui-library/bike-rental/ui/ImageWithFallback';

<ImageWithFallback
  src={bike.image}
  alt={bike.name}
  className="w-full h-64 object-cover rounded-lg"
/>
```

## Bike Rental Example

```tsx
<ImageWithFallback
  src={bike.imageUrl}
  alt={`${bike.brand} ${bike.model}`}
  fallback="/images/placeholder-bike.jpg"
  className="aspect-video w-full rounded-md object-cover"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | required | Image source URL |
| alt | string | required | Alt text for accessibility |
| fallback | string | default placeholder | Fallback image URL on error |
| showSkeleton | boolean | true | Show loading skeleton |
| className | string | undefined | CSS classes |
| ...rest | ImgHTMLAttributes | - | All native img props supported |

## Examples

### With Custom Fallback
```tsx
<ImageWithFallback
  src={unreliableUrl}
  alt="Product"
  fallback="/images/no-image.png"
/>
```

### Without Skeleton
```tsx
<ImageWithFallback
  src={product.image}
  alt={product.name}
  showSkeleton={false}
/>
```

## Dependencies
- None (pure React component)
- Optional: Tailwind CSS for styling
