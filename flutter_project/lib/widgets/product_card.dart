import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:shimmer/shimmer.dart';
import '../utils/colors.dart';
import '../utils/text_styles.dart';

class ProductCard extends StatelessWidget {
  final int id;
  final String name;
  final double price;
  final String imageUrl;
  final double? rating;
  final VoidCallback onTap;
  final VoidCallback? onAddToCart;

  const ProductCard({
    required this.id,
    required this.name,
    required this.price,
    required this.imageUrl,
    this.rating,
    required this.onTap,
    this.onAddToCart,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        elevation: 2,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Product Image
            Expanded(
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(12),
                    topRight: Radius.circular(12),
                  ),
                  color: AppColors.cardColor,
                ),
                child: CachedNetworkImage(
                  imageUrl: imageUrl,
                  fit: BoxFit.cover,
                  placeholder: (context, url) {
                    return Shimmer.fromColors(
                      baseColor: AppColors.border,
                      highlightColor: Colors.white,
                      child: Container(color: AppColors.border),
                    );
                  },
                  errorWidget: (context, url, error) {
                    return Container(
                      color: AppColors.cardColor,
                      child: const Icon(Icons.image_not_supported),
                    );
                  },
                ),
              ),
            ),
            // Product Details
            Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    name,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: AppTextStyles.titleMedium,
                  ),
                  const SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        '\$${price.toStringAsFixed(2)}',
                        style: AppTextStyles.headlineSmall.copyWith(
                          color: AppColors.primaryPurple,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      if (rating != null)
                        Row(
                          children: [
                            const Icon(
                              Icons.star,
                              size: 14,
                              color: AppColors.warningColor,
                            ),
                            const SizedBox(width: 4),
                            Text(
                              rating.toString(),
                              style: AppTextStyles.labelSmall,
                            ),
                          ],
                        ),
                    ],
                  ),
                  if (onAddToCart != null) ...[
                    const SizedBox(height: 8),
                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        onPressed: onAddToCart,
                        style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.symmetric(vertical: 8),
                          backgroundColor: AppColors.primaryPurple,
                        ),
                        child: const Text('Add to Cart'),
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
