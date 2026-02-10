import '../models/product.dart';

class ProductService {
  // Mock products data - in a real app, this would come from a backend API
  static final List<Product> mockProducts = [
    Product(
      id: 1,
      name: 'Elegant Summer Dress',
      description: 'A beautiful and comfortable summer dress perfect for any occasion.',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1595777712802-61a6120f2ffe?w=500&h=600&fit=crop',
      category: 'Dresses',
      rating: 4.5,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Red', 'Blue', 'Black'],
    ),
    Product(
      id: 2,
      name: 'Classic White Shirt',
      description: 'Timeless white shirt that goes with everything in your wardrobe.',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      category: 'Shirts',
      rating: 4.8,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Cream'],
    ),
    Product(
      id: 3,
      name: 'Designer Jeans',
      description: 'Premium denim jeans with a perfect fit and style.',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c62b96b59?w=500&h=600&fit=crop',
      category: 'Bottoms',
      rating: 4.7,
      sizes: ['28', '30', '32', '34', '36', '38'],
      colors: ['Dark Blue', 'Light Blue', 'Black'],
    ),
    Product(
      id: 4,
      name: 'Luxury Blazer',
      description: 'Sophisticated blazer for professional and casual wear.',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1505814346881-fa72b27e8b04?w=500&h=600&fit=crop',
      category: 'Jackets',
      rating: 4.6,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
    ),
    Product(
      id: 5,
      name: 'Silk Evening Gown',
      description: 'Stunning silk gown perfect for special events and celebrations.',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1566478989037-b9b9fbb13167?w=500&h=600&fit=crop',
      category: 'Dresses',
      rating: 4.9,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Gold', 'Silver'],
    ),
    Product(
      id: 6,
      name: 'Casual T-Shirt',
      description: 'Comfortable and versatile t-shirt for everyday wear.',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      category: 'Tops',
      rating: 4.4,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Gray', 'Black', 'Blue'],
    ),
  ];

  Future<List<Product>> getProducts() async {
    // Simulate API call delay
    await Future.delayed(const Duration(milliseconds: 500));
    return mockProducts;
  }

  Future<List<Product>> getProductsByCategory(String category) async {
    await Future.delayed(const Duration(milliseconds: 500));
    return mockProducts.where((p) => p.category == category).toList();
  }

  Future<Product?> getProductById(int id) async {
    await Future.delayed(const Duration(milliseconds: 300));
    try {
      return mockProducts.firstWhere((p) => p.id == id);
    } catch (e) {
      return null;
    }
  }

  Future<List<Product>> searchProducts(String query) async {
    await Future.delayed(const Duration(milliseconds: 400));
    final lowerQuery = query.toLowerCase();
    return mockProducts
        .where((p) =>
            p.name.toLowerCase().contains(lowerQuery) ||
            p.description.toLowerCase().contains(lowerQuery))
        .toList();
  }

  List<String> getCategories() {
    return mockProducts.map((p) => p.category).toSet().toList();
  }
}
