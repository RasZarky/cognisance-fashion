import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../utils/colors.dart';

class HeroSection extends StatelessWidget {
  final String title;
  final String subtitle;
  final VoidCallback onCTAPressed;
  final String ctaText;

  const HeroSection({
    required this.title,
    required this.subtitle,
    required this.onCTAPressed,
    this.ctaText = 'Shop Now',
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: MediaQuery.of(context).size.height * 0.6,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            AppColors.primaryPurple.withOpacity(0.8),
            AppColors.accentPurple.withOpacity(0.6),
            AppColors.secondaryPink.withOpacity(0.4),
          ],
        ),
      ),
      child: Stack(
        children: [
          // Background Pattern
          Positioned.fill(
            child: Opacity(
              opacity: 0.1,
              child: Image.network(
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
                fit: BoxFit.cover,
              ),
            ),
          ),
          // Content
          Center(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    title,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 48,
                      fontWeight: FontWeight.w800,
                      color: Colors.white,
                    ),
                  )
                      .animate()
                      .fadeIn(duration: 600.ms)
                      .slideY(begin: -0.3, end: 0),
                  const SizedBox(height: 16),
                  Text(
                    subtitle,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 18,
                      color: Colors.white,
                      fontWeight: FontWeight.w300,
                    ),
                  )
                      .animate()
                      .fadeIn(duration: 800.ms, delay: 200.ms)
                      .slideY(begin: -0.2, end: 0),
                  const SizedBox(height: 32),
                  ElevatedButton(
                    onPressed: onCTAPressed,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: AppColors.primaryPurple,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 40,
                        vertical: 16,
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    child: Text(
                      ctaText,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  )
                      .animate()
                      .fadeIn(duration: 1000.ms, delay: 400.ms)
                      .slideY(begin: 0.3, end: 0)
                      .then()
                      .animate(onPlay: (controller) => controller.repeat())
                      .scale(duration: 1500.ms, begin: Offset(0.98, 0.98), end: const Offset(1, 1))
                      .then(delay: 1500.ms)
                      .scale(duration: 1500.ms, begin: const Offset(1, 1), end: Offset(0.98, 0.98)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
