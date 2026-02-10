class Product {
  final int id;
  final String name;
  final String description;
  final double price;
  final String image;
  final String category;
  final double? rating;
  final List<String>? sizes;
  final List<String>? colors;

  Product({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.image,
    required this.category,
    this.rating,
    this.sizes,
    this.colors,
  });

  Product copyWith({
    int? id,
    String? name,
    String? description,
    double? price,
    String? image,
    String? category,
    double? rating,
    List<String>? sizes,
    List<String>? colors,
  }) {
    return Product(
      id: id ?? this.id,
      name: name ?? this.name,
      description: description ?? this.description,
      price: price ?? this.price,
      image: image ?? this.image,
      category: category ?? this.category,
      rating: rating ?? this.rating,
      sizes: sizes ?? this.sizes,
      colors: colors ?? this.colors,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'description': description,
    'price': price,
    'image': image,
    'category': category,
    'rating': rating,
    'sizes': sizes,
    'colors': colors,
  };

  factory Product.fromJson(Map<String, dynamic> json) => Product(
    id: json['id'] as int,
    name: json['name'] as String,
    description: json['description'] as String,
    price: (json['price'] as num).toDouble(),
    image: json['image'] as String,
    category: json['category'] as String,
    rating: (json['rating'] as num?)?.toDouble(),
    sizes: (json['sizes'] as List<dynamic>?)?.cast<String>(),
    colors: (json['colors'] as List<dynamic>?)?.cast<String>(),
  );
}
