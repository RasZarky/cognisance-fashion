import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/index.dart';
import 'screens/index.dart';
import 'utils/theme.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => CartProvider()),
        ChangeNotifierProvider(create: (_) => OrderProvider()),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cognisance Fashion',
      theme: AppTheme.lightTheme,
      home: const MainScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _selectedIndex = 0;

  final List<Widget> _screens = const [
    HomeScreen(),
    ShopScreen(),
    CartScreen(),
    OrdersScreen(),
  ];

  final List<String> _titles = [
    'Home',
    'Shop',
    'Cart',
    'Orders',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_titles[_selectedIndex]),
        elevation: 0,
        actions: [
          if (_selectedIndex != 3)
            Padding(
              padding: const EdgeInsets.all(16),
              child: Center(
                child: Consumer<AuthProvider>(
                  builder: (context, authProvider, child) {
                    return GestureDetector(
                      onTap: () {
                        if (!authProvider.isLoggedIn) {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const LoginScreen(),
                            ),
                          );
                        } else {
                          _showAccountMenu(context);
                        }
                      },
                      child: CircleAvatar(
                        backgroundColor:
                            authProvider.isLoggedIn
                                ? const Color(0xFF6B4BA8)
                                : const Color(0xFFE8E4F0),
                        child: Text(
                          authProvider.isLoggedIn
                              ? authProvider.user?.email?[0].toUpperCase() ?? 'U'
                              : 'L',
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
        ],
      ),
      body: _screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_bag),
            label: 'Shop',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart),
            label: 'Cart',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.receipt_long),
            label: 'Orders',
          ),
        ],
      ),
    );
  }

  void _showAccountMenu(BuildContext context) {
    showModalBottomSheet(
      context: context,
      builder: (context) => Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Consumer<AuthProvider>(
              builder: (context, authProvider, child) {
                return ListTile(
                  leading: const Icon(Icons.person),
                  title: Text(authProvider.user?.email ?? 'User'),
                  subtitle: const Text('Account'),
                );
              },
            ),
            const SizedBox(height: 16),
            ListTile(
              leading: const Icon(Icons.settings),
              title: const Text('Settings'),
              onTap: () {
                Navigator.pop(context);
                // Navigate to settings
              },
            ),
            ListTile(
              leading: const Icon(Icons.logout, color: Color(0xFFE91E63)),
              title: const Text('Logout', style: TextStyle(color: Color(0xFFE91E63))),
              onTap: () {
                context.read<AuthProvider>().logout();
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}
