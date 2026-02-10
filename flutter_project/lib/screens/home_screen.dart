import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/cart_provider.dart';
import '../services/notification_service.dart';
import '../widgets/hero_section.dart';
import '../widgets/section_cards.dart';
import '../utils/colors.dart';
import '../utils/text_styles.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Section
            HeroSection(
              title: 'Cognisance Fashion',
              subtitle: 'Discover Your Style, Express Yourself',
              ctaText: 'Shop Now',
              onCTAPressed: () {
                // Navigate to shop
              },
            ),
            const SizedBox(height: 40),

            // About Section
            SectionHeader(
              title: 'About Us',
              subtitle: 'Premium Fashion for Modern Living',
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Text(
                'Welcome to Cognisance Fashion, where style meets elegance. '
                'We curate the finest collection of clothing and accessories '
                'to help you express your unique personality.',
                style: AppTextStyles.bodyLarge,
                textAlign: TextAlign.center,
              ),
            ),
            const SizedBox(height: 40),

            // Services Section
            SectionHeader(
              title: 'Our Services',
              subtitle: 'Everything You Need for Perfect Shopping',
            ),
            Padding(
              padding: const EdgeInsets.all(20),
              child: GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 2,
                mainAxisSpacing: 16,
                crossAxisSpacing: 16,
                children: [
                  FeatureCard(
                    icon: Icons.local_shipping,
                    title: 'Fast Shipping',
                    description: 'Delivery within 3-5 business days',
                    iconColor: AppColors.primaryPurple,
                  ),
                  FeatureCard(
                    icon: Icons.shield,
                    title: 'Secure Payment',
                    description: '100% secured transactions',
                    iconColor: AppColors.successColor,
                  ),
                  FeatureCard(
                    icon: Icons.undo,
                    title: 'Easy Returns',
                    description: '30-day return policy',
                    iconColor: AppColors.accentPurple,
                  ),
                  FeatureCard(
                    icon: Icons.headset_mic,
                    title: '24/7 Support',
                    description: 'Customer support always ready',
                    iconColor: AppColors.secondaryPink,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),

            // Testimonials Section
            SectionHeader(
              title: 'What Our Customers Say',
              subtitle: 'Real Reviews from Real Customers',
            ),
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                children: [
                  TestimonialCard(
                    name: 'Sarah Johnson',
                    message: 'Amazing quality and fast delivery! I\'m very happy with my purchase.',
                    rating: 5,
                  ),
                  const SizedBox(height: 16),
                  TestimonialCard(
                    name: 'Michael Chen',
                    message: 'Great collection of trendy items. Will definitely shop here again!',
                    rating: 4.5,
                  ),
                  const SizedBox(height: 16),
                  TestimonialCard(
                    name: 'Emma Wilson',
                    message: 'Outstanding customer service. The staff helped me find the perfect outfit.',
                    rating: 5,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),

            // Footer Section
            Container(
              width: double.infinity,
              color: AppColors.darkText,
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Cognisance Fashion',
                    style: AppTextStyles.headlineMedium.copyWith(
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    '© 2024 Cognisance Fashion. All rights reserved.',
                    style: AppTextStyles.bodyMedium.copyWith(
                      color: Colors.white70,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      const Icon(Icons.email, color: Colors.white, size: 18),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          'info@cognisancefashion.com',
                          style: AppTextStyles.bodyMedium.copyWith(
                            color: Colors.white70,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.location_on, color: Colors.white, size: 18),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          '123 Fashion Street, City, Country',
                          style: AppTextStyles.bodyMedium.copyWith(
                            color: Colors.white70,
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
