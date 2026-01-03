import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:cinnamon_sri_mobile/main.dart';

void main() {
  testWidgets('App launches successfully', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const CinnamonSriApp());

    // Verify that the app shows the welcome text
    expect(find.text('Welcome to CinnamonSri'), findsOneWidget);
  });
}



