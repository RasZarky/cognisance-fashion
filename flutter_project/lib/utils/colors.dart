import 'package:flutter/material.dart';

class AppColors {
  // Primary Colors
  static const Color primaryPurple = Color(0xFF6B4BA8);
  static const Color secondaryPink = Color(0xFFEC407A);
  static const Color accentPurple = Color(0xFF9C27B0);

  // Background Colors
  static const Color backgroundColor = Color(0xFFFAF9F7);
  static const Color surfaceColor = Color(0xFFFFFFFF);
  static const Color cardColor = Color(0xFFF5F3FA);

  // Text Colors
  static const Color darkText = Color(0xFF2D1B4E);
  static const Color mediumText = Color(0xFF5A4A8A);
  static const Color lightText = Color(0xFF7B68A6);
  static const Color hintText = Color(0xFFB0A0C0);

  // Status Colors
  static const Color success = Color(0xFF4CAF50);
  static const Color error = Color(0xFFE91E63);
  static const Color warning = Color(0xFFFFC107);
  static const Color info = Color(0xFF2196F3);

  // Border & Divider
  static const Color border = Color(0xFFE8E4F0);
  static const Color divider = Color(0xFFECEAF0);

  // Gradient Colors
  static const List<Color> gradientPrimary = [
    Color(0xFF6B4BA8),
    Color(0xFF9C27B0),
  ];

  static const List<Color> gradientSecondary = [
    Color(0xFFEC407A),
    Color(0xFFFF6090),
  ];

  static const List<Color> gradientBackground = [
    Color(0xFFFAF9F7),
    Color(0xFFFAF5FB),
  ];

  // Overlay Colors
  static Color overlayDark = Colors.black.withOpacity(0.3);
  static Color overlayLight = Colors.white.withOpacity(0.7);
}
