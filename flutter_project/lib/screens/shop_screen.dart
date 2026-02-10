import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/product.dart';
import '../providers/cart_provider.dart';
import '../services/product_service.dart';
import '../services/notification_service.dart';
import '../widgets/product_card.dart';
import '../utils/colors.dart';
import '../utils/text_styles.dart';

class ShopScreen extends StatefulWidget {
  const ShopScreen({Key? key}) : super(key: key);

  @override
  State<ShopScreen> createState() => _ShopScreenState();
}

class _ShopScreenState extends State<ShopScreen> {
  final ProductService _productService = ProductService();
  late Future<List<Product>> _productsFuture;
  String _selectedCategory = 'All';
  String _searchQuery = '';

  @override
  void initState() {
    super.initState();
    _productsFuture = _productService.getProducts();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Shop'),
        elevation: 0,
        actions: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: Consumer<CartProvider>(
              builder: (context, cartProvider, child) {
                return Container(
                  decoration: BoxDecoration(
                    color: AppColors.cardColor,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  child: Row(
                    children: [
                      const Icon(Icons.shopping_bag, size: 18, color: AppColors.primaryPurple),
                      const SizedBox(width: 4),
                      Text(
                        cartProvider.totalItems.toString(),
                        style: AppTextStyles.labelMedium.copyWith(
                          color: AppColors.primaryPurple,
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
      body: Column(
        children: [
          // Search Bar
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              onChanged: (value) {
                setState(() {
                  _searchQuery = value;
                });
              },
              decoration: InputDecoration(
                hintText: 'Search products...',
                prefixIcon: const Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
          ),

          // Category Filter
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Consumer<CartProvider>(
                builder: (context, cartProvider, child) {
                  return Wrap(
                    spacing: 8,
                    children: ['All', ..._productService.getCategories()].map((category) {
                      return ChoiceChip(
                        label: Text(category),
                        selected: _selectedCategory == category,
                        onSelected: (selected) {
                          setState(() {
                            _selectedCategory = selected ? category : 'All';
                          });
                        },
                        selectedColor: AppColors.primaryPurple,
                        labelStyle: TextStyle(
                          color: _selectedCategory == category ? Colors.white : AppColors.darkText,
                        ),
                      );
                    }).toList(),
                  );
                },
              ),
            ),
          ),

          const SizedBox(height: 16),

          // Products Grid
          Expanded(
            child: FutureBuilder<List<Product>>(
              future: _productsFuture,
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const Center(child: CircularProgressIndicator());
                }

                if (snapshot.hasError) {
                  return Center(
                    child: Text('Error: ${snapshot.error}'),
                  );
                }

                List<Product> products = snapshot.data ?? [];

                // Filter by category
                if (_selectedCategory != 'All') {
                  products = products.where((p) => p.category == _selectedCategory).toList();
                }

                // Filter by search query
                if (_searchQuery.isNotEmpty) {
                  products = products
                      .where((p) =>
                          p.name.toLowerCase().contains(_searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().contains(_searchQuery.toLowerCase()))
                      .toList();
                }

                if (products.isEmpty) {
                  return Center(
                    child: Text(
                      'No products found',
                      style: AppTextStyles.bodyLarge,
                    ),
                  );
                }

                return GridView.builder(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    mainAxisSpacing: 16,
                    crossAxisSpacing: 16,
                    childAspectRatio: 0.75,
                  ),
                  itemCount: products.length,
                  itemBuilder: (context, index) {
                    final product = products[index];
                    return ProductCard(
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      imageUrl: product.image,
                      rating: product.rating,
                      onTap: () {
                        // Navigate to product detail
                      },
                      onAddToCart: () {
                        context.read<CartProvider>().addToCart(
                          CartItem(
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            quantity: 1,
                          ),
                        );
                        NotificationService.showSuccess('${product.name} added to cart!');
                      },
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

// Import CartItem from models
import '../models/index.dart';
