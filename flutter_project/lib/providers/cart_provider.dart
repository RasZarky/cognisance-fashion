import 'package:flutter/material.dart';
import '../models/cart_item.dart';

class CartProvider extends ChangeNotifier {
  final List<CartItem> _cart = [];

  List<CartItem> get cart => _cart;

  int get cartCount => _cart.length;

  int get totalItems => _cart.fold(0, (sum, item) => sum + item.quantity);

  double getTotalPrice() {
    return _cart.fold(0, (sum, item) => sum + (item.price * item.quantity));
  }

  void addToCart(CartItem item) {
    final existingIndex = _cart.indexWhere((i) => i.id == item.id);
    
    if (existingIndex >= 0) {
      _cart[existingIndex].quantity += item.quantity;
    } else {
      _cart.add(item);
    }
    
    notifyListeners();
  }

  void removeFromCart(int id) {
    _cart.removeWhere((item) => item.id == id);
    notifyListeners();
  }

  void updateQuantity(int id, int quantity) {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      final index = _cart.indexWhere((item) => item.id == id);
      if (index >= 0) {
        _cart[index].quantity = quantity;
        notifyListeners();
      }
    }
  }

  void clearCart() {
    _cart.clear();
    notifyListeners();
  }

  CartItem? getItem(int id) {
    try {
      return _cart.firstWhere((item) => item.id == id);
    } catch (e) {
      return null;
    }
  }
}
