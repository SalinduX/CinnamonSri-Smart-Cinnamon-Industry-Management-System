import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

/// Application router configuration
/// Add your routes here as you develop new screens
class AppRouter {
  static final GoRouter router = GoRouter(
    initialLocation: '/',
    routes: [
      GoRoute(
        path: '/',
        name: 'home',
        builder: (context, state) => const HomeScreen(),
      ),
      // Add more routes here as you develop screens
    ],
  );
}

// Placeholder - will be moved to screens folder
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('CinnamonSri'),
      ),
      body: const Center(
        child: Text('Welcome to CinnamonSri'),
      ),
    );
  }
}



