# 🗺️ Tour Guide UI Library

Complete component collection for tour booking, travel guides, and experience platforms.

## 📁 Structure

```
tour-guide-ui-library/
├── components/
│   ├── tour-catalog/      # Tour listings & browsing
│   ├── booking/           # Tour booking flow
│   ├── itinerary/         # Tour details & schedules
│   ├── reviews/           # Reviews & ratings
│   └── guide-profile/     # Guide information & credentials
├── utils/                 # Tour-specific utilities
├── hooks/                 # Custom React hooks
└── assets/                # Images, icons, and styles
```

## 🎯 Component Categories

### 🎫 Tour Catalog Components

Browse, search, and discover tours.

#### Components
- **TourCard**: Individual tour display card
- **TourGrid**: Grid layout for tour catalog
- **TourListItem**: List view for tours
- **FeaturedTours**: Highlight popular tours
- **CategoryFilter**: Filter by tour type (cultural, adventure, food, etc.)
- **DurationFilter**: Filter by tour length
- **PriceRangeSlider**: Filter by price
- **SearchBar**: Search tours by name, location, keywords
- **SortOptions**: Sort by popularity, price, rating, date
- **TourMap**: Show tours on a map
- **DestinationSelector**: Browse tours by destination

#### Example Usage
```jsx
import TourCard from './components/tour-catalog/TourCard'

<TourCard
  tour={{
    name: 'Historic Downtown Walking Tour',
    duration: '3 hours',
    price: 45,
    rating: 4.9,
    image: '/tours/downtown.jpg',
    category: 'Cultural',
    highlights: ['Historic sites', 'Local stories', 'Photo stops']
  }}
  onBook={handleBooking}
/>
```

---

### 🎟️ Booking Components

Tour booking flow and group management.

#### Components
- **TourDatePicker**: Select tour date
- **TimeSlotSelector**: Choose available time slot
- **GroupSizeSelector**: Number of participants
- **ParticipantForm**: Collect participant details
- **SpecialRequests**: Dietary needs, accessibility, languages
- **AddOnsSelector**: Meals, photos, transport, merchandise
- **BookingSummary**: Review booking details
- **PaymentForm**: Secure payment processing
- **ConfirmationCard**: Booking confirmation & tickets
- **WaitlistSignup**: Join waitlist for full tours
- **GiftBooking**: Book tour as a gift
- **GroupBooking**: Special group rates and management

#### Example Usage
```jsx
import GroupSizeSelector from './components/booking/GroupSizeSelector'

<GroupSizeSelector
  tourId={selectedTour.id}
  maxGroupSize={15}
  pricing={{
    adult: 45,
    child: 25,
    senior: 35
  }}
  onSelect={handleGroupSize}
/>
```

---

### 📅 Itinerary Components

Tour details, schedules, and day-by-day plans.

#### Components
- **ItineraryTimeline**: Day-by-day schedule
- **StopCard**: Individual stop/attraction details
- **RouteMap**: Visual tour route on map
- **DurationBreakdown**: Time spent at each location
- **InclusionsCard**: What's included/excluded
- **MeetingPoint**: Where and when to meet
- **WhatToBring**: Packing list and recommendations
- **DifficultyLevel**: Physical requirements indicator
- **WeatherInfo**: Weather forecast for tour day
- **CancellationPolicy**: Terms and conditions
- **SafetyGuidelines**: Safety information

#### Example Usage
```jsx
import ItineraryTimeline from './components/itinerary/ItineraryTimeline'

<ItineraryTimeline
  stops={[
    {
      time: '9:00 AM',
      location: 'City Hall',
      duration: '30 min',
      description: 'Start with historic architecture',
      image: '/stops/city-hall.jpg'
    },
    {
      time: '9:45 AM',
      location: 'Old Market',
      duration: '45 min',
      description: 'Explore local market and taste samples',
      image: '/stops/market.jpg'
    }
  ]}
/>
```

---

### ⭐ Reviews Components

Reviews, ratings, and social proof.

#### Components
- **ReviewCard**: Individual review display
- **ReviewList**: List of reviews with pagination
- **RatingBreakdown**: Star rating distribution
- **ReviewForm**: Submit a review
- **PhotoGallery**: Tourist photos from the tour
- **VerifiedBadge**: Verified review indicator
- **ReviewFilters**: Filter by rating, date, language
- **HelpfulVotes**: Mark reviews as helpful
- **GuideRating**: Separate rating for guide
- **ValueRating**: Rate value for money
- **ReviewStats**: Overall statistics
- **TourHighlights**: Most mentioned highlights from reviews

#### Example Usage
```jsx
import RatingBreakdown from './components/reviews/RatingBreakdown'

<RatingBreakdown
  ratings={{
    5: 156,
    4: 45,
    3: 12,
    2: 3,
    1: 1
  }}
  averageRating={4.8}
  totalReviews={217}
/>
```

---

### 👨‍🏫 Guide Profile Components

Tour guide information, credentials, and profiles.

#### Components
- **GuideCard**: Guide profile card
- **GuideBio**: Biography and experience
- **GuideStats**: Tours given, ratings, languages
- **Certifications**: Licenses and certifications
- **LanguagesSpoken**: Languages available
- **Specializations**: Areas of expertise
- **GuideAvailability**: Guide's schedule
- **GuideTours**: Tours offered by this guide
- **GuideReviews**: Reviews specific to guide
- **ContactGuide**: Message guide directly
- **GuideVideo**: Intro video from guide
- **SocialProof**: Awards, media mentions

#### Example Usage
```jsx
import GuideCard from './components/guide-profile/GuideCard'

<GuideCard
  guide={{
    name: 'Maria Garcia',
    photo: '/guides/maria.jpg',
    rating: 4.9,
    totalTours: 342,
    languages: ['English', 'Spanish', 'French'],
    specialties: ['History', 'Architecture', 'Food Culture'],
    yearsExperience: 8
  }}
  onViewProfile={showGuideDetails}
/>
```

---

## 🛠️ Utilities

### Common Functions

```javascript
// utils/tourCalculator.js
export const calculateTourPrice = (basePrice, groupSize, addOns) => {
  // Pricing logic with group discounts
}

// utils/availabilityChecker.js
export const checkTourAvailability = (tourId, date, groupSize) => {
  // Availability logic
}

// utils/distanceCalculator.js
export const calculateTourDistance = (stops) => {
  // Calculate total tour distance
}

// utils/durationFormatter.js
export const formatDuration = (hours) => {
  // Format duration display
}

// utils/dateHelpers.js
export const getAvailableDates = (tourId, month) => {
  // Get tour availability for month
}
```

---

## 🎣 Custom Hooks

```javascript
// hooks/useTourAvailability.js
export const useTourAvailability = (tourId, month) => {
  // Fetch tour availability
}

// hooks/useBooking.js
export const useBooking = () => {
  // Booking state management
}

// hooks/useGuides.js
export const useGuides = (filters) => {
  // Fetch and filter guides
}

// hooks/useReviews.js
export const useReviews = (tourId) => {
  // Fetch and manage reviews
}

// hooks/useTourSearch.js
export const useTourSearch = (query, filters) => {
  // Search tours with filters
}
```

---

## 🎨 Design Considerations

### Color Palette
- **Primary**: Adventure green (#4CAF50) - Nature, exploration
- **Secondary**: Sky blue (#03A9F4) - Travel, freedom
- **Accent**: Sunset orange (#FF6F00) - Excitement, energy
- **Neutral**: Warm grays for backgrounds

### Typography
- **Headings**: Poppins (friendly, modern)
- **Body**: Open Sans (readable, professional)
- **Prices**: Roboto Mono (clear, distinctive)

### Imagery
- Destination photos (high quality)
- Tourist activities in action
- Cultural and local landmarks
- Happy travelers (diverse)
- Guide photos (professional, approachable)

---

## 🚀 Quick Start

### 1. Browse Components
```bash
cd SISO-UI-Library/tour-guide-ui-library/components
ls -la
```

### 2. Copy a Component
```bash
# Copy TourCard to your project
cp components/tour-catalog/TourCard.jsx your-project/src/components/
```

### 3. Import and Use
```jsx
import TourCard from './components/TourCard'

function TourList() {
  return (
    <div className="tour-grid">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  )
}
```

---

## 📦 Complete Component List

### Tour Catalog (11 components)
- TourCard
- TourGrid
- TourListItem
- FeaturedTours
- CategoryFilter
- DurationFilter
- PriceRangeSlider
- SearchBar
- SortOptions
- TourMap
- DestinationSelector

### Booking (12 components)
- TourDatePicker
- TimeSlotSelector
- GroupSizeSelector
- ParticipantForm
- SpecialRequests
- AddOnsSelector
- BookingSummary
- PaymentForm
- ConfirmationCard
- WaitlistSignup
- GiftBooking
- GroupBooking

### Itinerary (11 components)
- ItineraryTimeline
- StopCard
- RouteMap
- DurationBreakdown
- InclusionsCard
- MeetingPoint
- WhatToBring
- DifficultyLevel
- WeatherInfo
- CancellationPolicy
- SafetyGuidelines

### Reviews (12 components)
- ReviewCard
- ReviewList
- RatingBreakdown
- ReviewForm
- PhotoGallery
- VerifiedBadge
- ReviewFilters
- HelpfulVotes
- GuideRating
- ValueRating
- ReviewStats
- TourHighlights

### Guide Profile (12 components)
- GuideCard
- GuideBio
- GuideStats
- Certifications
- LanguagesSpoken
- Specializations
- GuideAvailability
- GuideTours
- GuideReviews
- ContactGuide
- GuideVideo
- SocialProof

**Total: 58+ components**

---

## 💡 Use Cases

- Tour booking platforms
- Travel experience marketplaces
- Walking tour companies
- Food tour businesses
- Adventure tour operators
- City sightseeing services
- Cultural experience platforms
- Virtual tour platforms
- Private guide booking
- Educational tours

---

## 🌍 Localization Support

Many components support multiple languages:
- Tour descriptions
- Guide bios
- Reviews
- Booking forms
- UI labels

---

## 🤝 Contributing

To add tour guide components:
1. Place in appropriate category folder
2. Follow naming conventions
3. Include PropTypes/TypeScript
4. Add example usage
5. Consider localization needs
6. Update this README

---

**Get started**: Copy → Customize → Build your tour platform! 🗺️
