# Quick Reference Guide

Fast lookup guide for common tasks and file locations.

## 🎯 Quick Navigation

### Finding Things
| What | Location |
|------|----------|
| App entry point | `lib/main.dart` |
| Home page layout | `lib/screens/home_screen.dart` |
| Shopping page | `lib/screens/shop_screen.dart` |
| Cart management | `lib/providers/cart_provider.dart` |
| User authentication | `lib/providers/auth_provider.dart` |
| App colors | `lib/utils/colors.dart` |
| Text styles | `lib/utils/text_styles.dart` |
| App theme | `lib/utils/theme.dart` |
| Product data | `lib/services/product_service.dart` |
| Notifications | `lib/services/notification_service.dart` |

## 🚀 Common Commands

```bash
# Get dependencies
flutter pub get

# Run app on device
flutter run

# Run with verbose output
flutter run -v

# Hot reload during run
Press 'r'

# Hot restart during run
Press 'R'

# Stop running app
Press 'q'

# Build APK for Android
flutter build apk

# Build iOS IPA
flutter build ios

# Check for issues
flutter analyze

# Format code
dart format lib/

# Run tests
flutter test
```

## 📁 Adding New Files

### New Screen
```bash
# Create file: lib/screens/new_screen.dart

import 'package:flutter/material.dart';

class NewScreen extends StatelessWidget {
  const NewScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('New Screen')),
      body: Center(child: Text('Content here')),
    );
  }
}
```

### New Provider
```bash
# Create file: lib/providers/new_provider.dart

import 'package:flutter/material.dart';

class NewProvider extends ChangeNotifier {
  // State variables
  String _state = '';
  
  String get state => _state;
  
  // Methods
  void updateState(String newValue) {
    _state = newValue;
    notifyListeners();
  }
}
```

### New Widget
```bash
# Create file: lib/widgets/new_widget.dart

import 'package:flutter/material.dart';

class NewWidget extends StatelessWidget {
  final String title;
  
  const NewWidget({
    required this.title,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Text(title),
    );
  }
}
```

### New Model
```bash
# Create file: lib/models/new_model.dart

class NewModel {
  final String id;
  final String name;
  
  NewModel({
    required this.id,
    required this.name,
  });
  
  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
  };
  
  factory NewModel.fromJson(Map<String, dynamic> json) => NewModel(
    id: json['id'] as String,
    name: json['name'] as String,
  );
}
```

## 🎨 Customization Checklists

### Change Brand Colors
- [ ] Edit `lib/utils/colors.dart`
- [ ] Update `primaryColor` and `secondaryColor`
- [ ] Update accent colors
- [ ] Rebuild app: `flutter run`

### Change App Name
- [ ] Update `pubspec.yaml` → `name:` field
- [ ] Update `android/app/src/main/AndroidManifest.xml`
- [ ] Update `ios/Runner/Info.plist` → `CFBundleName`
- [ ] Update `README.md`

### Change App Icon
- [ ] Replace `android/app/src/main/res/mipmap-*/ic_launcher.png`
- [ ] Replace `ios/Runner/Assets.xcassets/AppIcon.appiconset/`
- [ ] Run `flutter pub get && flutter run`

### Change App Font
- [ ] Edit `pubspec.yaml`
- [ ] Add new font family
- [ ] Update `lib/utils/text_styles.dart`
- [ ] Use `AppTextStyles.bodyLarge` throughout app

## 📱 Widget Usage Examples

### Using Provider
```dart
// Read state
Consumer<CartProvider>(
  builder: (context, cartProvider, child) {
    return Text('Items: ${cartProvider.cart.length}');
  },
)

// Or use Provider.of
final cartProvider = Provider.of<CartProvider>(context);
```

### Showing Toast Notification
```dart
import 'package:cognisance_fashion/services/notification_service.dart';

NotificationService.showSuccess('Item added!');
NotificationService.showError('Something went wrong');
NotificationService.showInfo('FYI message');
NotificationService.showWarning('Warning message');
```

### Navigation
```dart
// Go to login screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const LoginScreen()),
);

// Go back
Navigator.pop(context);
```

### Using Theme
```dart
import 'package:cognisance_fashion/utils/theme.dart';
import 'package:cognisance_fashion/utils/colors.dart';
import 'package:cognisance_fashion/utils/text_styles.dart';

// Use colors
Container(color: AppColors.primaryPurple)

// Use text styles
Text('Heading', style: AppTextStyles.headlineLarge)

// Use padding
SizedBox(width: AppTheme.paddingMedium)
```

## 🔍 Debugging Tips

### View Logs
```bash
flutter run -v
# Look for your prints and error messages
```

### Check State
```dart
print(cartProvider.cart.length);
print(authProvider.user?.email);
```

### Common Issues

| Issue | Solution |
|-------|----------|
| App crashes on start | Check main.dart, verify imports |
| Provider errors | Ensure MultiProvider wraps app |
| Image not loading | Check URL, verify permissions |
| Button not responding | Check onPressed callback |
| State not updating | Call notifyListeners() in provider |
| Build failures | Run `flutter clean && flutter pub get` |

## 📊 Project Metrics

- **Screens**: 5 (Home, Shop, Cart, Orders, Login)
- **Widgets**: 5+ custom widgets
- **Providers**: 3 (Auth, Cart, Order)
- **Models**: 4 (User, CartItem, Order, Product)
- **Services**: 2 (Product, Notification)
- **Colors**: 15+ custom colors
- **Total Components**: 30+

## 🧪 Testing Template

```dart
test('CartProvider adds item', () {
  final provider = CartProvider();
  final item = CartItem(
    id: 1,
    name: 'Test',
    price: 19.99,
    image: '',
    quantity: 1,
  );
  
  provider.addToCart(item);
  
  expect(provider.cart.length, 1);
});
```

## 🔐 Security Checklist

- [ ] Don't hardcode API keys
- [ ] Validate all inputs
- [ ] Never log sensitive data
- [ ] Use HTTPS for API calls
- [ ] Validate JWT tokens
- [ ] Sanitize user input
- [ ] Never commit secrets
- [ ] Use environment variables

## 📦 Dependency Versions

```yaml
provider: ^6.0.0              # State management
shared_preferences: ^2.2.0    # Local storage
http: ^1.1.0                  # HTTP requests
google_fonts: ^6.0.0          # Fonts
cached_network_image: ^3.3.0  # Image caching
flutter_animate: ^4.2.0+1     # Animations
fluttertoast: ^8.2.0          # Toast notifications
shimmer: ^3.0.0               # Loading shimmer
```

## 🎓 Learning Resources

### Flutter Basics
- Official Flutter docs: https://flutter.dev/docs
- Dart guide: https://dart.dev/guides
- Widget catalog: https://flutter.dev/docs/development/ui/widgets

### State Management
- Provider package: https://pub.dev/packages/provider
- State management guide: https://flutter.dev/docs/development/data-and-backend/state-mgmt

### Best Practices
- Flutter style guide: https://flutter.dev/docs/development/best-practices
- Effective Dart: https://dart.dev/guides/language/effective-dart

## 🚨 Common Errors & Fixes

### "RenderFlex overflowed"
```dart
// Wrap in SingleChildScrollView
SingleChildScrollView(
  child: Column(children: [...])
)
```

### "setState called after dispose"
```dart
// Check if mounted before setState
if (mounted) {
  setState(() { ... });
}
```

### "All elements passed must be non-null"
```dart
// Use ?? operator for null safety
items ?? []
```

### "Provider not found"
```dart
// Ensure Provider is wrapped in MultiProvider
MultiProvider(
  providers: [Provider(...)],
  child: MyApp(),
)
```

## 📈 Performance Tips

1. Use `const` constructors
2. Use `ListView.builder` for long lists
3. Cache images with `CachedNetworkImage`
4. Lazy load screens
5. Profile with `flutter run --profile`
6. Use `FutureBuilder` for async data
7. Avoid rebuilds with `const` and `Consumer`

## 🎯 Next Actions

1. **Read**: Start with `README.md`
2. **Setup**: Follow `SETUP_GUIDE.md`
3. **Learn**: Study `MIGRATION_GUIDE.md`
4. **Explore**: Browse source code
5. **Run**: Execute `flutter run`
6. **Modify**: Change colors and branding
7. **Connect**: Integrate your backend API
8. **Deploy**: Build and release

---

**Quick Reference v1.0**
Last Updated: January 2024
