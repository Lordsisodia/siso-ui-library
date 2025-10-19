# 🚲 Bike Hire UI Library

Complete component collection for bike rental, outdoor equipment hire, and activity booking platforms.

## 📁 Structure

```
bike-hire-ui-library/
├── components/
│   ├── booking/           # Booking flow components
│   ├── inventory/         # Bike catalog & listings
│   ├── pricing/           # Rate calculators & pricing displays
│   ├── maps/              # Location selection & maps
│   └── user-profile/      # User accounts & preferences
├── utils/                 # Bike hire-specific utilities
├── hooks/                 # Custom React hooks
└── assets/                # Images, icons, and styles
```

## 🎯 Component Categories

### 🎫 Booking Components

Components for the bike rental booking flow.

#### Components
- **BikeSelector**: Choose bike type (mountain, road, electric, etc.)
- **DateTimePicker**: Select rental date and time
- **DurationCalculator**: Pick rental duration (hourly, daily, weekly)
- **AddOnsSelector**: Helmets, locks, GPS, child seats
- **LocationPicker**: Pick-up and drop-off locations
- **BookingSummary**: Review booking before confirmation
- **PaymentForm**: Secure payment processing
- **ConfirmationCard**: Booking confirmation display
- **BookingManagement**: View/modify/cancel bookings

#### Example Usage
```jsx
import BikeSelector from './components/booking/BikeSelector'

<BikeSelector
  bikes={availableBikes}
  onSelect={handleBikeSelection}
  filterOptions={['Electric', 'Mountain', 'Road', 'Hybrid']}
/>
```

---

### 🚴 Inventory Components

Display bike catalog, availability, and specifications.

#### Components
- **BikeCard**: Individual bike display card
- **BikeGrid**: Grid layout for bike catalog
- **BikeListItem**: List view for bikes
- **BikeDetailView**: Full bike specifications and photos
- **AvailabilityCalendar**: See bike availability
- **BikeComparison**: Compare multiple bikes side-by-side
- **FilterSidebar**: Filter bikes by type, size, features
- **SearchBar**: Search bikes by name, type, or features
- **SortOptions**: Sort by price, rating, availability

#### Example Usage
```jsx
import BikeCard from './components/inventory/BikeCard'

<BikeCard
  bike={{
    name: 'Trek Mountain X',
    type: 'Mountain',
    dailyRate: 45,
    rating: 4.8,
    image: '/bikes/trek.jpg',
    features: ['21-speed', 'Disc brakes', 'Front suspension']
  }}
  onBook={handleBooking}
/>
```

---

### 💰 Pricing Components

Rate calculators, pricing displays, and discount management.

#### Components
- **RateCalculator**: Calculate total price based on duration
- **PricingTable**: Display hourly/daily/weekly rates
- **DiscountBanner**: Show active promotions
- **DynamicPricing**: Real-time price updates
- **GroupPricing**: Discounts for multiple bikes
- **SeasonalRates**: Display seasonal pricing
- **DepositInfo**: Security deposit information
- **InsuranceOptions**: Optional insurance add-ons
- **CouponInput**: Apply discount codes

#### Example Usage
```jsx
import RateCalculator from './components/pricing/RateCalculator'

<RateCalculator
  baseRate={45}
  duration={3}
  durationType="days"
  addOns={selectedAddOns}
  onTotalCalculated={setTotal}
/>
```

---

### 🗺️ Maps Components

Location selection, route planning, and station maps.

#### Components
- **StationMap**: Show all bike stations on map
- **StationDetails**: Station info (bikes available, address, hours)
- **RouteMap**: Suggested cycling routes
- **DistanceCalculator**: Calculate distance between stations
- **NearbyStations**: Find closest stations
- **RoutePlanner**: Plan multi-stop routes
- **TrafficLayer**: Show bike-friendly paths
- **LocationAutocomplete**: Search locations
- **DirectionsDisplay**: Turn-by-turn directions

#### Example Usage
```jsx
import StationMap from './components/maps/StationMap'

<StationMap
  stations={bikeStations}
  userLocation={currentLocation}
  onStationSelect={handleStationSelect}
  showAvailability={true}
/>
```

---

### 👤 User Profile Components

User account management and preferences.

#### Components
- **ProfileCard**: User profile display
- **RentalHistory**: Past rental history
- **SavedLocations**: Favorite pick-up/drop-off spots
- **PaymentMethods**: Manage payment cards
- **Preferences**: Bike preferences, notifications
- **LoyaltyPoints**: Rewards program display
- **MembershipCard**: Membership tier and benefits
- **ReferralCode**: Share referral code
- **NotificationSettings**: Manage alerts and emails

#### Example Usage
```jsx
import RentalHistory from './components/user-profile/RentalHistory'

<RentalHistory
  userId={currentUser.id}
  rentals={pastRentals}
  onViewDetails={showRentalDetails}
/>
```

---

## 🛠️ Utilities

### Common Functions

```javascript
// utils/priceCalculator.js
export const calculateTotalPrice = (baseRate, duration, addOns) => {
  // Pricing logic
}

// utils/availabilityChecker.js
export const checkBikeAvailability = (bikeId, startDate, endDate) => {
  // Availability logic
}

// utils/distanceCalculator.js
export const calculateDistance = (location1, location2) => {
  // Distance calculation
}

// utils/validators.js
export const validateBooking = (bookingData) => {
  // Validation logic
}
```

---

## 🎣 Custom Hooks

```javascript
// hooks/useBikeAvailability.js
export const useBikeAvailability = (bikeId, dateRange) => {
  // Fetch and manage bike availability
}

// hooks/useBooking.js
export const useBooking = () => {
  // Booking state management
}

// hooks/useStations.js
export const useStations = (userLocation) => {
  // Fetch nearby stations
}

// hooks/usePricing.js
export const usePricing = (bikeType, duration) => {
  // Dynamic pricing calculation
}
```

---

## 🎨 Design Considerations

### Color Palette
- **Primary**: Active blue (#00B4D8) - Energy and movement
- **Secondary**: Green (#4CAF50) - Eco-friendly, outdoors
- **Accent**: Orange (#FF9800) - Action, urgency
- **Neutral**: Gray scale for backgrounds

### Typography
- **Headings**: Montserrat (bold, sporty)
- **Body**: Roboto (clean, readable)
- **Prices**: DM Sans (modern, clear)

### Imagery
- High-quality bike photos
- Outdoor lifestyle images
- Action shots (people cycling)
- Map markers and icons

---

## 🚀 Quick Start

### 1. Browse Components
```bash
cd SISO-UI-Library/bike-hire-ui-library/components
ls -la
```

### 2. Copy a Component
```bash
# Copy BikeCard to your project
cp components/inventory/BikeCard.jsx your-project/src/components/
```

### 3. Import and Use
```jsx
import BikeCard from './components/BikeCard'

function BikeList() {
  return (
    <div className="bike-grid">
      {bikes.map(bike => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  )
}
```

---

## 📦 Complete Component List

### Booking (9 components)
- BikeSelector
- DateTimePicker
- DurationCalculator
- AddOnsSelector
- LocationPicker
- BookingSummary
- PaymentForm
- ConfirmationCard
- BookingManagement

### Inventory (9 components)
- BikeCard
- BikeGrid
- BikeListItem
- BikeDetailView
- AvailabilityCalendar
- BikeComparison
- FilterSidebar
- SearchBar
- SortOptions

### Pricing (9 components)
- RateCalculator
- PricingTable
- DiscountBanner
- DynamicPricing
- GroupPricing
- SeasonalRates
- DepositInfo
- InsuranceOptions
- CouponInput

### Maps (9 components)
- StationMap
- StationDetails
- RouteMap
- DistanceCalculator
- NearbyStations
- RoutePlanner
- TrafficLayer
- LocationAutocomplete
- DirectionsDisplay

### User Profile (9 components)
- ProfileCard
- RentalHistory
- SavedLocations
- PaymentMethods
- Preferences
- LoyaltyPoints
- MembershipCard
- ReferralCode
- NotificationSettings

**Total: 45+ components**

---

## 💡 Use Cases

- Bike rental platforms
- E-bike sharing services
- Outdoor equipment hire
- Scooter rentals
- Tour bike bookings
- Bike shop rental systems
- City bike programs
- Campus bike sharing

---

## 🤝 Contributing

To add bike hire components:
1. Place in appropriate category folder
2. Follow naming conventions
3. Include PropTypes/TypeScript
4. Add example usage
5. Update this README

---

**Get started**: Copy → Customize → Build your bike hire platform! 🚲
