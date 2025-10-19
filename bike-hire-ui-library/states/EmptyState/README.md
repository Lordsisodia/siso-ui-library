# EmptyState

Clean empty state component for displaying "no results", "not found", or "empty list" states.

## Features
✅ Optional icon
✅ Heading and description
✅ Optional CTA button
✅ Centered layout
✅ Button variants
✅ Fully customizable

## Usage

```tsx
import { EmptyState } from '@siso/ui-library/bike-rental/states/EmptyState';
import { Bike } from 'lucide-react';

<EmptyState
  icon={<Bike size={64} className="text-muted-foreground" />}
  heading="No Bikes Available"
  description="All bikes are currently rented. Check back later!"
  action={{
    label: 'Browse All Bikes',
    onClick: () => navigate('/bikes')
  }}
/>
```

## Examples

### No Search Results
```tsx
<EmptyState
  icon={<Search size={48} />}
  heading="No Results Found"
  description={`No bikes found matching "${searchQuery}"`}
  action={{
    label: 'Clear Filters',
    onClick: clearFilters,
    variant: 'outline'
  }}
/>
```

### Empty Favorites
```tsx
<EmptyState
  icon={<Heart size={48} />}
  heading="No Favorites Yet"
  description="Start adding bikes to your favorites to see them here"
  action={{
    label: 'Browse Bikes',
    onClick: () => navigate('/bikes')
  }}
/>
```

### Not Found (404)
```tsx
<EmptyState
  heading="Bike Not Found"
  description="The bike you're looking for doesn't exist or has been removed."
  action={{
    label: 'Go to Homepage',
    onClick: () => navigate('/')
  }}
/>
```

### No Bookings
```tsx
<EmptyState
  icon={<Calendar size={48} />}
  heading="No Upcoming Rentals"
  description="You don't have any bike rentals scheduled"
  action={{
    label: 'Book a Bike',
    onClick: () => navigate('/bikes')
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | ReactNode | undefined | Icon to display above heading |
| heading | string | required | Main heading text |
| description | string | undefined | Optional description text |
| action | ActionConfig | undefined | Optional CTA button |
| className | string | '' | Additional CSS classes |

### ActionConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | required | Button text |
| onClick | () => void | required | Button click handler |
| variant | 'default' \| 'outline' \| 'ghost' \| 'destructive' | 'default' | Button style |

## Dependencies
- shadcn/ui Button component
- lucide-react (for icons)
