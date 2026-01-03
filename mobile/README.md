# CinnamonSri Mobile App

Flutter mobile application for the CinnamonSri Smart Cinnamon Industry Management System.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Flutter SDK** (3.0.0 or higher)
   - Download from: https://flutter.dev/docs/get-started/install
   - Verify installation: `flutter doctor`

2. **VS Code** with Flutter extensions:
   - Flutter extension
   - Dart extension

3. **Android Studio** (for Android development)
   - Android SDK
   - Android emulator or physical device

4. **Xcode** (for iOS development - macOS only)

## Setup Instructions

### 1. Install Flutter

1. Download Flutter SDK from https://flutter.dev/docs/get-started/install
2. Extract the zip file to a location (e.g., `C:\src\flutter`)
3. Add Flutter to your PATH:
   - Windows: Add `C:\src\flutter\bin` to your system PATH
   - Or use: `setx PATH "%PATH%;C:\src\flutter\bin"`

### 2. Verify Flutter Installation

Open a terminal and run:
```bash
flutter doctor
```

This will check your setup and display any missing dependencies.

### 3. Install VS Code Extensions

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Install:
   - **Flutter** (by Dart Code)
   - **Dart** (by Dart Code)

### 4. Setup Flutter in VS Code

1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Flutter: New Project" or use the command palette
4. Or open this project folder in VS Code

### 5. Get Dependencies

Navigate to the `mobile` folder and run:
```bash
cd mobile
flutter pub get
```

### 6. Run the App

1. Connect an Android device or start an emulator
2. In VS Code, press `F5` or click the Run button
3. Or use terminal: `flutter run`

## Project Structure

```
mobile/
├── lib/
│   ├── main.dart                 # App entry point
│   ├── screens/                  # UI screens
│   ├── widgets/                  # Reusable widgets
│   ├── models/                   # Data models
│   ├── services/                 # API services, business logic
│   ├── providers/                # State management
│   ├── utils/                    # Utilities, constants, helpers
│   └── routes/                   # Navigation routes
├── assets/
│   ├── images/                   # Image assets
│   ├── icons/                    # Icon assets
│   └── fonts/                    # Custom fonts
├── test/                         # Unit and widget tests
├── android/                      # Android configuration
├── ios/                          # iOS configuration
└── pubspec.yaml                  # Dependencies and assets
```

## Development Guidelines

- Follow Flutter/Dart style guide
- Use meaningful variable and function names
- Keep widgets small and reusable
- Use state management (Provider) for complex state
- Write tests for critical functionality

## Useful Commands

```bash
# Get dependencies
flutter pub get

# Run app
flutter run

# Build APK (Android)
flutter build apk

# Build iOS
flutter build ios

# Run tests
flutter test

# Analyze code
flutter analyze

# Format code
flutter format .
```

## Troubleshooting

### Flutter not found
- Ensure Flutter is in your PATH
- Restart VS Code after adding to PATH

### No devices found
- Start Android emulator from Android Studio
- Or connect a physical device with USB debugging enabled

### Dependencies issues
- Run `flutter clean`
- Run `flutter pub get` again



