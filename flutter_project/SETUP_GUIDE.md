# Installation & Setup Guide

Complete guide to set up and run the Cognisance Fashion Flutter application.

## System Requirements

### Minimum Requirements
- Flutter SDK: 3.0.0+
- Dart SDK: 3.0.0+ (comes with Flutter)
- Android SDK Level 21+ or iOS 11+

### Recommended Setup
- Flutter SDK: Latest stable version
- Android Studio 2022.1+ or VS Code with Flutter extension
- Xcode 14+ (for iOS development on macOS)
- Java Development Kit (JDK) 11+

## Installation Steps

### 1. Install Flutter

#### Windows
1. Download Flutter from [flutter.dev](https://flutter.dev/docs/get-started/install/windows)
2. Extract to a desired location (e.g., `C:\flutter`)
3. Add Flutter to PATH:
   - Open System Properties → Environment Variables
   - Add `C:\flutter\bin` to PATH
4. Run `flutter doctor` in PowerShell to verify installation

#### macOS
```bash
# Using Homebrew (recommended)
brew install flutter

# Or manually
cd ~/development
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:`pwd`/flutter/bin"
```

#### Linux
```bash
cd ~/development
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:`pwd`/flutter/bin"
echo 'export PATH="$PATH:$HOME/development/flutter/bin"' >> ~/.bashrc
```

### 2. Verify Flutter Installation

```bash
flutter --version
flutter doctor
```

Fix any issues reported by `flutter doctor`.

### 3. Clone/Setup Project

```bash
# Navigate to project directory
cd path/to/flutter_project

# Get all dependencies
flutter pub get

# (Optional) Upgrade to latest dependencies
flutter pub upgrade
```

### 4. Platform-Specific Setup

#### Android Setup

1. **Install Java Development Kit (JDK)**:
   - Download JDK 11 from [oracle.com](https://www.oracle.com/java/technologies/downloads/)
   - Set JAVA_HOME environment variable

2. **Configure Android SDK**:
   ```bash
   # Accept Android licenses
   flutter doctor --android-licenses
   ```

3. **Connect Android Device**:
   - Enable Developer Mode on device (tap Build Number 7 times in Settings)
   - Enable USB Debugging
   - Connect via USB
   - Run `adb devices` to verify

#### iOS Setup (macOS only)

```bash
# Install iOS build tools
sudo gem install cocoapods

# Update Pod specs
cd flutter_project/ios
pod repo update
cd ../..

# Configure iOS project
flutter pub get
```

### 5. Run the Application

#### Run on Device

```bash
# List connected devices
flutter devices

# Run app
flutter run

# Run with specific device
flutter run -d <device_id>
```

#### Run on Emulator/Simulator

```bash
# Android Emulator
flutter emulators
flutter emulators launch <emulator_name>
flutter run

# iOS Simulator (macOS)
open -a Simulator
flutter run
```

#### Run in Release Mode

```bash
flutter run --release
```

## Development Commands

### Hot Reload
```bash
# During `flutter run`, press 'r' to hot reload
# Press 'R' to hot restart
```

### Code Generation (if using any)
```bash
flutter pub run build_runner build
flutter pub run build_runner watch  # Watch mode
```

### Check Code Quality
```bash
# Analyze code
dart analyze

# Format code
dart format lib/

# Run linter
flutter analyze
```

### Run Tests
```bash
# Unit tests
flutter test

# Specific test file
flutter test test/unit/models_test.dart

# With coverage
flutter test --coverage
```

## Project Structure Setup

```
flutter_project/
├── lib/
│   ├── main.dart                 # Entry point
│   ├── models/                   # Data models
│   ├── providers/                # State management
│   ├── screens/                  # Full-screen pages
│   ├── widgets/                  # Reusable widgets
│   ├── services/                 # Business logic
│   └── utils/                    # Constants & utilities
├── test/                         # Test files
├── android/                      # Android project
├── ios/                          # iOS project
├── web/                          # Web assets (if building for web)
├── pubspec.yaml                  # Dependencies
├── analysis_options.yaml         # Linter rules
└── README.md                     # Documentation
```

## Common Issues & Solutions

### Issue: Flutter doctor shows errors

**Solution**:
```bash
flutter doctor -v
# Read the output carefully and follow the suggested fixes
# Common fixes:
flutter pub get
flutter pub upgrade
cd android && ./gradlew clean && cd ..
```

### Issue: Android build fails

**Solution**:
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter pub get
flutter run
```

### Issue: iOS build fails

**Solution**:
```bash
cd ios
rm -rf Pods
rm Podfile.lock
cd ..
flutter clean
flutter pub get
flutter run
```

### Issue: Port 8888 already in use (Android Studio issues)

**Solution**:
```bash
# Kill the process using the port
# Windows: netstat -ano | findstr :8888 | taskkill /PID <PID> /F
# macOS/Linux: lsof -ti:8888 | xargs kill -9

# Or simply use a different hot reload device
flutter run -d <different_device>
```

### Issue: Pub cache issues

**Solution**:
```bash
flutter pub cache clean
flutter pub get
```

## IDE Setup

### VS Code
1. Install extension: "Flutter" (Dart Code)
2. Install extension: "Dart" (Dart Code)
3. Reload VS Code
4. Open project folder
5. Press `F5` or use Run → Start Debugging

### Android Studio
1. Install plugin: "Flutter"
2. Install plugin: "Dart"
3. Restart IDE
4. File → Open → Select project folder
5. Click "Get dependencies" notification
6. Run → Run 'main.dart'

### IntelliJ IDEA
1. Install plugin: "Flutter"
2. Install plugin: "Dart"
3. Restart IDE
4. Open project
5. Accept configure notifications
6. Run → Run → Select main.dart

## Building for Production

### Android APK/Bundle

```bash
# Build APK
flutter build apk

# Build App Bundle (for Google Play)
flutter build appbundle

# Build AAB with split APKs
flutter build appbundle --split-per-abi
```

### iOS App

```bash
# Build iOS app
flutter build ios

# Build for simulator
flutter build ios --simulator

# Archive for release to App Store
flutter build ios --release
```

### Web (if enabled)

```bash
flutter build web --release
# Output in build/web/
```

## Performance Testing

```bash
# Run app with performance overlay
flutter run --profile

# Trace performance
flutter run --trace-skia

# Check frame rendering
flutter run --profile
# Press 'P' to show performance overlay
```

## Debugging

### Enable Debug Logging
```bash
flutter run -v
```

### DevTools
```bash
flutter pub global activate devtools
devtools
# Then run: flutter run --observatory-port=<port>
```

### Run Flutter Inspector
```bash
flutter inspect
```

## Environment Variables (Optional)

Create `.env` file in project root:
```
API_BASE_URL=https://api.example.com
ENVIRONMENT=development
```

Load in code using `flutter_dotenv` package.

## Next Steps

1. **Understand the codebase**: Review MIGRATION_GUIDE.md
2. **Explore screens**: Navigate through all app screens
3. **Modify mock data**: Replace with real API calls
4. **Customize theme**: Update colors and fonts in `utils/theme.dart`
5. **Add features**: Implement payment, notifications, etc.
6. **Deploy**: Follow platform-specific deployment guides

## Additional Resources

- [Flutter Official Documentation](https://flutter.dev/docs)
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)
- [Flutter Awesome](https://github.com/Solido/awesome-flutter)
- [Material Design Guide](https://material.io/)
- [Provider Package Documentation](https://pub.dev/packages/provider)

## Support

For issues or questions:
1. Check Flutter documentation
2. Run `flutter doctor` for system issues
3. Search GitHub issues
4. Create a new issue with:
   - Flutter version (`flutter --version`)
   - Device/emulator info (`flutter devices`)
   - Full error logs (`flutter run -v`)
   - Steps to reproduce

---

Last updated: 2024
Flutter version: 3.0.0+
