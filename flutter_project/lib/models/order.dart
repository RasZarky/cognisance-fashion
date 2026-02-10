import 'cart_item.dart';

class Order {
  final String id;
  final List<CartItem> items;
  final double totalPrice;
  final DateTime createdAt;
  final String status;
  final String? deliveryAddress;

  Order({
    required this.id,
    required this.items,
    required this.totalPrice,
    required this.createdAt,
    this.status = 'pending',
    this.deliveryAddress,
  });

  Order copyWith({
    String? id,
    List<CartItem>? items,
    double? totalPrice,
    DateTime? createdAt,
    String? status,
    String? deliveryAddress,
  }) {
    return Order(
      id: id ?? this.id,
      items: items ?? this.items,
      totalPrice: totalPrice ?? this.totalPrice,
      createdAt: createdAt ?? this.createdAt,
      status: status ?? this.status,
      deliveryAddress: deliveryAddress ?? this.deliveryAddress,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'items': items.map((item) => item.toJson()).toList(),
    'totalPrice': totalPrice,
    'createdAt': createdAt.toIso8601String(),
    'status': status,
    'deliveryAddress': deliveryAddress,
  };

  factory Order.fromJson(Map<String, dynamic> json) => Order(
    id: json['id'] as String,
    items: (json['items'] as List<dynamic>)
        .map((item) => CartItem.fromJson(item as Map<String, dynamic>))
        .toList(),
    totalPrice: (json['totalPrice'] as num).toDouble(),
    createdAt: DateTime.parse(json['createdAt'] as String),
    status: json['status'] as String? ?? 'pending',
    deliveryAddress: json['deliveryAddress'] as String?,
  );
}
