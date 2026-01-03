import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'routes/app_router.dart';

void main() {
  runApp(const CinnamonSriApp());
}

class CinnamonSriApp extends StatelessWidget {
  const CinnamonSriApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'CinnamonSri',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF8B4513), // Cinnamon brown color
          brightness: Brightness.light,
        ),
        useMaterial3: true,
        appBarTheme: const AppBarTheme(
          centerTitle: true,
          elevation: 0,
        ),
      ),
      routerConfig: AppRouter.router,
    );
  }
}

