import 'package:flutter/material.dart';
import '../models/order.dart';
import '../models/cart_item.dart';
import 'package:uuid/uuid.dart';

class OrderProvider extends ChangeNotifier {
  final List<Order> _orders = [];

  List<Order> get orders => _orders;

  int get orderCount => _orders.length;

  Order? createOrder(List<CartItem> items, double totalPrice, String? deliveryAddress) {
    if (items.isEmpty) return null;

    const uuid = Uuid();
    final order = Order(
      id: uuid.v4(),
      items: List.from(items),
      totalPrice: totalPrice,
      createdAt: DateTime.now(),
      status: 'pending',
      deliveryAddress: deliveryAddress,
    );

    _orders.insert(0, order); // Add to beginning for latest first
    notifyListeners();
    return order;
  }

  void updateOrderStatus(String orderId, String status) {
    final index = _orders.indexWhere((order) => order.id == orderId);
    if (index >= 0) {
      _orders[index] = _orders[index].copyWith(status: status);
      notifyListeners();
    }
  }

  Order? getOrder(String id) {
    try {
      return _orders.firstWhere((order) => order.id == id);
    } catch (e) {
      return null;
    }
  }

  void cancelOrder(String orderId) {
    final order = getOrder(orderId);
    if (order != null && order.status == 'pending') {
      updateOrderStatus(orderId, 'cancelled');
    }
  }
}
