import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/user.dart';

class AuthProvider extends ChangeNotifier {
  User? _user;
  bool _isLoggedIn = false;
  bool _isLoading = false;
  String? _error;

  User? get user => _user;
  bool get isLoggedIn => _isLoggedIn;
  bool get isLoading => _isLoading;
  String? get error => _error;

  AuthProvider() {
    _initializeAuth();
  }

  void _initializeAuth() async {
    final prefs = await SharedPreferences.getInstance();
    final email = prefs.getString('auth_email');
    if (email != null) {
      _user = User(email: email);
      _isLoggedIn = true;
      notifyListeners();
    }
  }

  Future<void> login(String email, String password) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      // Validate input
      if (email.isEmpty || password.isEmpty) {
        throw Exception('Invalid credentials');
      }

      // Mock authentication - in a real app, this would call a backend
      await Future.delayed(Duration(milliseconds: 800));

      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('auth_email', email);

      _user = User(email: email);
      _isLoggedIn = true;
      _error = null;
    } catch (e) {
      _error = e.toString();
      _isLoggedIn = false;
      _user = null;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> logout() async {
    _isLoading = true;
    notifyListeners();

    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove('auth_email');

      _user = null;
      _isLoggedIn = false;
      _error = null;
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }
}
