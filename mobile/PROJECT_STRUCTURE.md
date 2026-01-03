# Project Structure

```
mobile/
│
├── lib/                          # Main source code
│   ├── main.dart                # App entry point
│   │
│   ├── screens/                 # All UI screens
│   │   ├── home/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── ...
│   │
│   ├── widgets/                 # Reusable UI components
│   │   ├── buttons/
│   │   ├── cards/
│   │   ├── forms/
│   │   └── ...
│   │
│   ├── models/                  # Data models/entities
│   │   ├── user.dart
│   │   ├── cinnamon_batch.dart
│   │   └── ...
│   │
│   ├── services/                # Business logic & API calls
│   │   ├── api_service.dart
│   │   ├── auth_service.dart
│   │   └── ...
│   │
│   ├── providers/               # State management (Provider)
│   │   ├── auth_provider.dart
│   │   ├── user_provider.dart
│   │   └── ...
│   │
│   ├── routes/                  # Navigation & routing
│   │   └── app_router.dart
│   │
│   └── utils/                   # Utilities & helpers
│       ├── constants.dart       # App constants
│       ├── helpers.dart         # Helper functions
│       └── validators.dart      # Form validators
│
├── assets/                       # Static assets
│   ├── images/                  # Image files
│   ├── icons/                   # Icon files
│   └── fonts/                   # Custom fonts
│
├── test/                         # Tests
│   ├── unit/                    # Unit tests
│   ├── widget/                  # Widget tests
│   └── integration/             # Integration tests
│
├── android/                      # Android-specific files
├── ios/                          # iOS-specific files
│
├── .vscode/                      # VS Code configuration
│   ├── launch.json              # Debug configurations
│   └── settings.json            # VS Code settings
│
├── pubspec.yaml                  # Dependencies & assets
├── analysis_options.yaml         # Linting rules
├── .gitignore                    # Git ignore rules
├── README.md                     # Project documentation
└── SETUP_GUIDE.md               # Setup instructions
```

## Folder Purposes

### `lib/screens/`
Contains all the screen/widget files for different pages of your app.
- Each screen should be in its own folder
- Example: `lib/screens/login/login_screen.dart`

### `lib/widgets/`
Reusable UI components that can be used across multiple screens.
- Organize by type: buttons, cards, forms, etc.
- Example: `lib/widgets/custom_button.dart`

### `lib/models/`
Data classes representing your app's data structures.
- Use for API responses, database entities, etc.
- Example: `lib/models/user_model.dart`

### `lib/services/`
Business logic, API calls, and external service integrations.
- Keep UI logic separate from business logic
- Example: `lib/services/api_service.dart`

### `lib/providers/`
State management using Provider pattern.
- Manages app-wide state
- Example: `lib/providers/auth_provider.dart`

### `lib/routes/`
Navigation and routing configuration.
- Define all app routes here
- Example: `lib/routes/app_router.dart`

### `lib/utils/`
Helper functions, constants, and utilities.
- Shared code used across the app
- Example: `lib/utils/constants.dart`

## Naming Conventions

- **Files:** Use snake_case (e.g., `user_profile_screen.dart`)
- **Classes:** Use PascalCase (e.g., `UserProfileScreen`)
- **Variables/Functions:** Use camelCase (e.g., `userName`, `getUserData()`)
- **Constants:** Use camelCase with const (e.g., `const maxRetries = 3`)

## Best Practices

1. **One widget per file** - Keep files focused and maintainable
2. **Separate concerns** - UI, business logic, and data should be separate
3. **Reusable widgets** - Extract common UI patterns into widgets
4. **Consistent naming** - Follow Flutter/Dart conventions
5. **Documentation** - Add comments for complex logic



