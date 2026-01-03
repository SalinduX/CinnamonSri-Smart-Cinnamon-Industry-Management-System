# Flutter Setup Guide for VS Code

## Step-by-Step Installation

### 1. Install Flutter SDK

#### Windows:
1. Download Flutter SDK from: https://docs.flutter.dev/get-started/install/windows
2. Extract the zip file to a location like `C:\src\flutter` (avoid spaces in path)
3. Add Flutter to your PATH:
   - Open "Environment Variables" in Windows
   - Edit the "Path" variable
   - Add: `C:\src\flutter\bin`
   - Or run in PowerShell (as Administrator):
     ```powershell
     [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\src\flutter\bin", "Machine")
     ```

#### Verify Installation:
Open a new terminal/PowerShell and run:
```bash
flutter --version
flutter doctor
```

### 2. Install VS Code Extensions

1. Open VS Code
2. Press `Ctrl+Shift+X` to open Extensions
3. Search and install:
   - **Flutter** (by Dart Code) - This will also install the Dart extension
   - Optionally: **Flutter Widget Snippets**, **Awesome Flutter Snippets**

### 3. Configure Flutter SDK Path in VS Code

1. Press `Ctrl+Shift+P` to open Command Palette
2. Type: `Flutter: Change SDK`
3. Enter your Flutter SDK path (e.g., `C:\src\flutter`)

Or manually:
1. Press `Ctrl+,` to open Settings
2. Search for: `dart.flutterSdkPath`
3. Set it to your Flutter SDK path

### 4. Install Android Studio (for Android Development)

1. Download from: https://developer.android.com/studio
2. Install Android Studio
3. Open Android Studio → More Actions → SDK Manager
4. Install:
   - Android SDK Platform-Tools
   - Android SDK Build-Tools
   - Android SDK (latest version)
5. Set up Android Emulator:
   - Tools → Device Manager → Create Device
   - Choose a device (e.g., Pixel 5)
   - Download a system image (e.g., Android 13)
   - Finish setup

### 5. Accept Android Licenses

Open terminal and run:
```bash
flutter doctor --android-licenses
```
Accept all licenses by typing `y` when prompted.

### 6. Setup Project

1. Open the `mobile` folder in VS Code:
   - File → Open Folder → Select `mobile` folder
2. VS Code should detect it's a Flutter project
3. Install dependencies:
   - Press `Ctrl+Shift+P`
   - Type: `Flutter: Get Packages`
   - Or run in terminal: `flutter pub get`

### 7. Verify Setup

Run in terminal:
```bash
cd mobile
flutter doctor
```

All items should show checkmarks (✓). Common issues:
- ✗ Android toolchain: Install Android Studio
- ✗ VS Code: Install Flutter extension
- ✗ Connected device: Start emulator or connect device

### 8. Run Your First App

1. **Start an Emulator:**
   - Open Android Studio → Device Manager
   - Click Play button on an emulator
   - Or in VS Code: `Ctrl+Shift+P` → `Flutter: Launch Emulator`

2. **Run the App:**
   - Press `F5` in VS Code
   - Or click the Run button in VS Code
   - Or run in terminal: `flutter run`

### 9. Hot Reload & Hot Restart

- **Hot Reload:** Press `Ctrl+\` or click the reload button (changes UI instantly)
- **Hot Restart:** Press `Ctrl+Shift+F5` (restarts app with changes)
- **Stop:** Press `Shift+F5`

## Troubleshooting

### Flutter command not found
- Restart VS Code after adding Flutter to PATH
- Restart your computer if needed
- Verify PATH: `echo $env:Path` (PowerShell)

### No devices found
- Start Android emulator from Android Studio
- Or connect physical device with USB debugging enabled
- Check: `flutter devices`

### VS Code doesn't recognize Flutter
- Install Flutter extension
- Reload VS Code: `Ctrl+Shift+P` → `Developer: Reload Window`
- Check Flutter SDK path in settings

### Dependencies issues
```bash
flutter clean
flutter pub get
```

### Build errors
```bash
flutter doctor -v  # Detailed info
flutter upgrade    # Update Flutter
```

## Useful VS Code Shortcuts

- `F5` - Run/Debug
- `Ctrl+F5` - Run without debugging
- `Shift+F5` - Stop
- `Ctrl+\` - Hot reload
- `Ctrl+Shift+F5` - Hot restart
- `Ctrl+Shift+P` - Command Palette
- `Ctrl+,` - Settings

## Next Steps

1. ✅ Flutter is installed and configured
2. ✅ VS Code is set up with Flutter extension
3. ✅ Project structure is ready
4. 🎨 Start designing your UI screens!

You're all set! Start building your CinnamonSri mobile app! 🚀



