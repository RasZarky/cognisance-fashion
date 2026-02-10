# Cognisance Fashion - Flutter App

A beautiful and feature-rich fashion e-commerce mobile application built with Flutter. This is a Flutter conversion of the original React/TypeScript web application.

## Features

- **Home Screen**: Beautiful landing page with hero section, services, testimonials, and more
- **Shop Screen**: Browse products with filtering and search capabilities
- **Shopping Cart**: Add/remove items, adjust quantities, and view totals
- **Order Management**: View order history and track orders
- **User Authentication**: Login functionality with local storage
- **Responsive Design**: Optimized for mobile and tablet devices
- **Beautiful UI**: Modern design with smooth animations and transitions

## Project Structure

```
lib/
├── main.dart              # App entry point
├── models/                # Data models
│   ├── cart_item.dart
│   ├── user.dart
│   ├── order.dart
│   ├── product.dart
│   └── index.dart
├── providers/             # State management
│   ├── auth_provider.dart
│   ├── cart_provider.dart
│   ├── order_provider.dart
│   └── index.dart
├── screens/               # App screens/pages
│   ├── home_screen.dart
│   ├── shop_screen.dart
│   ├── cart_screen.dart
│   ├── orders_screen.dart
│   ├── login_screen.dart
│   └── index.dart
├── widgets/               # Reusable widgets
│   ├── product_card.dart
│   ├── page_loader.dart
│   ├── hero_section.dart
│   ├── section_cards.dart
│   ├── cart_widgets.dart
│   └── index.dart
├── services/              # Business logic and services
│   ├── product_service.dart
│   ├── notification_service.dart
│   └── index.dart
└── utils/                 # Utilities and constants
    ├── theme.dart
    ├── colors.dart
    ├── text_styles.dart
    └── index.dart
```

## Getting Started

### Prerequisites

- Flutter SDK (3.0.0+)
- Dart SDK (3.0.0+)
- A text editor or IDE (VS Code, Android Studio, IntelliJ IDEA)

### Installation

1. **Install Flutter**: Follow the [official Flutter installation guide](https://flutter.dev/docs/get-started/install)

2. **Clone the project**:
```bash
cd path/to/flutter_project
```

3. **Get dependencies**:
```bash
flutter pub get
```

4. **Run the app**:
```bash
flutter run
```

## Dependencies

- **provider**: ^6.0.0 - State management
- **shared_preferences**: ^2.2.0 - Local storage
- **go_router**: ^13.0.0 - Navigation and routing
- **http**: ^1.1.0 - HTTP requests
- **google_fonts**: ^6.0.0 - Custom fonts
- **cached_network_image**: ^3.3.0 - Image caching
- **flutter_animate**: ^4.2.0+1 - Animations
- **fluttertoast**: ^8.2.0 - Toast notifications
- **shimmer**: ^3.0.0 - Loading shimmer effects

## App Screens

### Home Screen
- Large hero section with call-to-action
- Services overview with feature cards
- Customer testimonials
- Footer with contact information

### Shop Screen
- Product grid with images and ratings
- Product search functionality
- Category filtering
- Quick add-to-cart buttons

### Cart Screen
- List of cart items with images and prices
- Quantity adjustment controls
- Remove item functionality
- Cart summary with total calculation
- Checkout button

### Orders Screen
- List of all past orders
- Order status display
- Order details (items, date, total)
- Cancel order functionality for pending orders

### Login Screen
- Email and password fields
- Login validation
- Password visibility toggle
- Sign-up link (placeholder)
- Forgot password link (placeholder)

## State Management

The app uses the **Provider** package for state management with three main providers:

- **AuthProvider**: Manages user authentication state and operations
- **CartProvider**: Manages shopping cart state and operations
- **OrderProvider**: Manages orders and order history

## Styling & Theme

- **Colors**: Custom color palette with primary purple, secondary pink, and accent colors
- **Typography**: Google Fonts (Poppins) for modern, clean typography
- **Theme**: Material Design 3 with custom light theme configuration

## Key Features Implementation

### State Management
- React Context → Provider pattern
- Uses `ChangeNotifier` for state updates
- Automatic UI rebuild on state changes

### Navigation
- Bottom navigation bar for main sections
- Modal dialogs for account menu
- Push navigation for authentication flow

### Data Persistence
- SharedPreferences for user authentication data
- Mock data for products and orders (can be replaced with API calls)

### Animations
- Page transitions with flutter_animate
- Loading animations in ProductCard components
- Smooth scaling and fade animations

## Conversion Notes

This Flutter app is converted from a React/TypeScript web application:

### Key Conversions:
- **React Components** → **Flutter Widgets**
- **React Context** → **Provider package**
- **Tailwind CSS** → **Flutter Material Design + Custom Theme**
- **lucide-react icons** → **Material Icons**
- **motion/react animations** → **flutter_animate**
- **localStorage** → **SharedPreferences**
- **TypeScript interfaces** → **Dart classes with copyWith methods**

## Future Enhancements

- Connect to real backend API
- Payment gateway integration
- User profile management
- Product reviews and ratings
- Wishlist functionality
- Advanced filtering and sorting
- Order tracking with real-time updates
- Push notifications
- Multiple language support

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please open an issue in the project repository.

---

**Built with ❤️ using Flutter**
