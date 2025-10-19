# 📚 SISO UI Library - Complete Component Index

Quick reference for all components across all libraries.

## 🏢 SISO Core

### Internal (30+ components)
**Dashboards**: Analytics Dashboard, Metrics Display, KPI Cards
**Admin**: User Management, Content Moderation, System Settings
**Data**: Data Tables, Charts, Filters
**Forms**: Employee Forms, Internal Requests
**Reports**: Financial Reports, Performance Metrics
**Notifications**: Alerts, Tasks, Announcements

### Client (30+ components)
**Account**: Profile Settings, Subscription Management
**Support**: Help Center, Tickets, FAQ
**Portals**: Client Dashboard, Documents, Projects
**Communication**: Messaging, Notifications
**Billing**: Invoices, Payment History, Upgrades
**Settings**: Preferences, Integrations, Teams

### Partnership (30+ components)
**Onboarding**: Partner Registration, Verification
**Collaboration**: Workspaces, Documents, Messaging
**Reporting**: Metrics, Revenue Sharing, Performance
**Integration**: API Keys, Webhooks, Developer Tools
**Contracts**: Agreements, Terms, Compliance
**Resources**: Training, Brand Assets

---

## 🍽️ Restaurant UI Library (100+ components)

### 1. Menu Display
MenuCard, MenuGrid, MenuList, CategoryNav, ItemDetail, SpecialOffers, DietaryFilters, MenuSearch, FeaturedItems, ComboDeals

### 2. Ordering System
AddToCart, CartDrawer, CartSummary, OrderConfirmation, OrderTracking, ModifyOrder, OrderHistory, QuickReorder, ScheduleOrder, SplitBill

### 3. Booking & Reservations
ReservationForm, TableSelection, DateTimePicker, PartySize, SpecialRequests, ConfirmationCard, ModifyReservation, CancelReservation, WaitlistSignup

### 4. Navigation & Layout
MainNav, MobileMenu, Breadcrumbs, Footer, Hero, Section, Container, Grid, Sidebar

### 5. User Feedback
Toast, Modal, Alert, ProgressBar, LoadingSpinner, EmptyState, ErrorBoundary

### 6. User Account
Login, Signup, Profile, SavedAddresses, PaymentMethods, OrderHistory, Favorites, Loyalty

### 7. Social Proof
Reviews, Ratings, Testimonials, PhotoGallery, PopularItems, TrendingDishes

### 8. Interactive Features
LiveChat, NotificationCenter, SearchAutocomplete, LocationSelector, LanguageToggle

### 9. Marketing
Banner, Promo, Countdown, Newsletter, ShareButtons, ReferralCode

---

## 🚲 Bike Hire UI Library (45+ components)

### Booking (9)
BikeSelector, DateTimePicker, DurationCalculator, AddOnsSelector, LocationPicker, BookingSummary, PaymentForm, ConfirmationCard, BookingManagement

### Inventory (9)
BikeCard, BikeGrid, BikeListItem, BikeDetailView, AvailabilityCalendar, BikeComparison, FilterSidebar, SearchBar, SortOptions

### Pricing (9)
RateCalculator, PricingTable, DiscountBanner, DynamicPricing, GroupPricing, SeasonalRates, DepositInfo, InsuranceOptions, CouponInput

### Maps (9)
StationMap, StationDetails, RouteMap, DistanceCalculator, NearbyStations, RoutePlanner, TrafficLayer, LocationAutocomplete, DirectionsDisplay

### User Profile (9)
ProfileCard, RentalHistory, SavedLocations, PaymentMethods, Preferences, LoyaltyPoints, MembershipCard, ReferralCode, NotificationSettings

---

## 🗺️ Tour Guide UI Library (58+ components)

### Tour Catalog (11)
TourCard, TourGrid, TourListItem, FeaturedTours, CategoryFilter, DurationFilter, PriceRangeSlider, SearchBar, SortOptions, TourMap, DestinationSelector

### Booking (12)
TourDatePicker, TimeSlotSelector, GroupSizeSelector, ParticipantForm, SpecialRequests, AddOnsSelector, BookingSummary, PaymentForm, ConfirmationCard, WaitlistSignup, GiftBooking, GroupBooking

### Itinerary (11)
ItineraryTimeline, StopCard, RouteMap, DurationBreakdown, InclusionsCard, MeetingPoint, WhatToBring, DifficultyLevel, WeatherInfo, CancellationPolicy, SafetyGuidelines

### Reviews (12)
ReviewCard, ReviewList, RatingBreakdown, ReviewForm, PhotoGallery, VerifiedBadge, ReviewFilters, HelpfulVotes, GuideRating, ValueRating, ReviewStats, TourHighlights

### Guide Profile (12)
GuideCard, GuideBio, GuideStats, Certifications, LanguagesSpoken, Specializations, GuideAvailability, GuideTours, GuideReviews, ContactGuide, GuideVideo, SocialProof

---

## 🔍 Quick Search

### Need a booking component?
- Restaurant: `restaurant-ui-library/components/3-booking-reservations/`
- Bike: `bike-hire-ui-library/components/booking/`
- Tour: `tour-guide-ui-library/components/booking/`

### Need a payment component?
- Check each library's booking folder
- All include PaymentForm, ConfirmationCard

### Need user profile?
- SISO Core: `siso-core/[internal|client|partnership]/components/`
- Bike: `bike-hire-ui-library/components/user-profile/`
- Tour: `tour-guide-ui-library/components/guide-profile/`

### Need reviews/ratings?
- Restaurant: `restaurant-ui-library/components/7-social-proof/`
- Tour: `tour-guide-ui-library/components/reviews/`

### Need maps/locations?
- Bike: `bike-hire-ui-library/components/maps/`
- Tour: `tour-guide-ui-library/components/itinerary/`
- Restaurant: `restaurant-ui-library/components/8-interactive-features/`

---

## 📊 Statistics

| Library | Total Components | Categories |
|---------|-----------------|------------|
| SISO Core (Internal) | ~30 | 6 |
| SISO Core (Client) | ~30 | 6 |
| SISO Core (Partnership) | ~30 | 6 |
| Restaurant | ~100 | 9 |
| Bike Hire | ~45 | 5 |
| Tour Guide | ~58 | 5 |
| **TOTAL** | **~293** | **37** |

---

## 🎯 Component Selection Guide

### I need a component for...

**Displaying items/products**
→ Restaurant: MenuCard
→ Bike: BikeCard
→ Tour: TourCard

**Booking/Reservations**
→ All libraries have booking folders

**User accounts**
→ SISO Core (internal/client/partnership)
→ Bike: user-profile folder
→ Restaurant: User Account category

**Pricing/Payments**
→ Bike: pricing folder
→ All libraries: PaymentForm in booking

**Reviews**
→ Restaurant: Social Proof category
→ Tour: reviews folder

**Maps/Location**
→ Bike: maps folder (most comprehensive)
→ Tour: itinerary folder

**Navigation**
→ Restaurant: Navigation category
→ SISO Core: Navigation components

**Forms**
→ All libraries have forms in relevant categories
→ SISO Core: Extensive form components

---

## 💡 Pro Tips

1. **Start broad**: Check the main library READMEs first
2. **Search by category**: Components are organized by function
3. **Look for similar**: If one library has it, others might too
4. **Copy & adapt**: Components are designed to be customized
5. **Check utils**: Don't forget utility functions and hooks

---

**Quick Links**:
- [Main README](./README.md)
- [SISO Core](./siso-core/README.md)
- [Restaurant](./restaurant-ui-library/README.md)
- [Bike Hire](./bike-hire-ui-library/README.md)
- [Tour Guide](./tour-guide-ui-library/README.md)
