# SkeletonLoader

Flexible skeleton loading component for various content types.

## Features
✅ Multiple preset variants (card, list, detail, text, avatar)
✅ Custom skeleton support
✅ Configurable count
✅ Pulse animation
✅ Responsive design

## Usage

```tsx
import { SkeletonLoader } from '@siso/ui-library/bike-rental/states/SkeletonLoader';

// While loading bikes
{isLoading && <SkeletonLoader variant="card" count={6} />}
```

## Variants

### Card Skeleton
```tsx
<SkeletonLoader variant="card" count={3} />
```
Perfect for: Product cards, bike cards, grid items

### List Skeleton
```tsx
<SkeletonLoader variant="list" count={5} />
```
Perfect for: Reviews, bookings, activity feeds

### Detail Skeleton
```tsx
<SkeletonLoader variant="detail" />
```
Perfect for: Product detail pages, bike details

### Text Skeleton
```tsx
<SkeletonLoader variant="text" count={3} />
```
Perfect for: Paragraphs, descriptions

### Avatar Skeleton
```tsx
<SkeletonLoader variant="avatar" />
```
Perfect for: User avatars, profile pictures

## Bike Rental Examples

```tsx
// Loading bike grid
{loadingBikes && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <SkeletonLoader variant="card" count={6} />
  </div>
)}

// Loading bike details
{loadingBike && <SkeletonLoader variant="detail" />}

// Loading reviews
{loadingReviews && <SkeletonLoader variant="list" count={3} />}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'card' \| 'list' \| 'detail' \| 'text' \| 'avatar' \| 'custom' | 'card' | Skeleton style |
| count | number | 1 | Number of skeletons to render |
| className | string | '' | Additional CSS classes |
| children | ReactNode | undefined | Custom skeleton content (for variant='custom') |

## Dependencies
- Tailwind CSS - Animation and styling
