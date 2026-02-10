import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../utils/colors.dart';
import '../utils/text_styles.dart';

class PageLoader extends StatelessWidget {
  const PageLoader({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Color(0xFFFAF9F7),
            Color(0xFFF0E8FA),
            Color(0xFFFAF5FB),
          ],
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Animated Logo/Brand
          Text(
            'Cognisance',
            style: AppTextStyles.displayLarge.copyWith(
              color: AppColors.primaryPurple,
            ),
          )
              .animate(onPlay: (controller) => controller.repeat())
              .scale(duration: 1500.ms, begin: Offset(0.95, 0.95), end: const Offset(1, 1))
              .then(delay: 1500.ms)
              .scale(duration: 1500.ms, begin: const Offset(1, 1), end: Offset(0.95, 0.95)),
          const SizedBox(height: 8),
          Text(
            'Fashion',
            style: AppTextStyles.headlineLarge.copyWith(
              color: AppColors.secondaryPink,
            ),
          ),
          const SizedBox(height: 40),
          // Animated loading indicator
          Container(
            width: 50,
            height: 50,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(
                color: AppColors.primaryPurple.withOpacity(0.2),
                width: 4,
              ),
            ),
            child: Stack(
              children: [
                Container(
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(
                      color: AppColors.primaryPurple.withOpacity(0.2),
                      width: 4,
                    ),
                  ),
                ),
                Center(
                  child: SizedBox(
                    width: 40,
                    height: 40,
                    child: CircularProgressIndicator(
                      valueColor: AlwaysStoppedAnimation<Color>(
                        AppColors.primaryPurple.withOpacity(0.7),
                      ),
                      strokeWidth: 3,
                    ),
                  ),
                ),
              ],
            ),
          )
              .animate(onPlay: (controller) => controller.repeat())
              .rotate(duration: 2000.ms),
        ],
      ),
    );
  }
}
