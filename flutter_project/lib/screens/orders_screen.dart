import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/order_provider.dart';
import '../utils/colors.dart';
import '../utils/text_styles.dart';

class OrdersScreen extends StatelessWidget {
  const OrdersScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Orders'),
        elevation: 0,
      ),
      body: Consumer<OrderProvider>(
        builder: (context, orderProvider, child) {
          if (orderProvider.orders.isEmpty) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.receipt_long,
                    size: 64,
                    color: AppColors.lightText,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'No orders yet',
                    style: AppTextStyles.headlineMedium,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Start shopping to place your first order',
                    style: AppTextStyles.bodyMedium.copyWith(
                      color: AppColors.lightText,
                    ),
                  ),
                ],
              ),
            );
          }

          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: orderProvider.orders.length,
            itemBuilder: (context, index) {
              final order = orderProvider.orders[index];
              return Card(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Order #${order.id.substring(0, 8).toUpperCase()}',
                            style: AppTextStyles.titleLarge,
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color: order.status == 'pending'
                                  ? AppColors.warningColor
                                  : order.status == 'cancelled'
                                      ? AppColors.errorColor
                                      : AppColors.successColor,
                              borderRadius: BorderRadius.circular(4),
                            ),
                            child: Text(
                              order.status.toUpperCase(),
                              style: AppTextStyles.labelSmall.copyWith(
                                color: order.status == 'pending'
                                    ? Colors.black
                                    : Colors.white,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Text(
                        'Date: ${order.createdAt.toString().split('.')[0]}',
                        style: AppTextStyles.bodySmall.copyWith(
                          color: AppColors.lightText,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Container(height: 1, color: AppColors.border),
                      const SizedBox(height: 12),
                      Text(
                        'Items: ${order.items.length}',
                        style: AppTextStyles.bodyMedium,
                      ),
                      const SizedBox(height: 8),
                      ...order.items.map((item) => Padding(
                        padding: const EdgeInsets.symmetric(vertical: 4),
                        child: Text(
                          '• ${item.name} x${item.quantity}',
                          style: AppTextStyles.bodySmall,
                        ),
                      )),
                      const SizedBox(height: 12),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Total: \$${order.totalPrice.toStringAsFixed(2)}',
                            style: AppTextStyles.titleMedium.copyWith(
                              fontWeight: FontWeight.w700,
                              color: AppColors.primaryPurple,
                            ),
                          ),
                          if (order.status == 'pending')
                            ElevatedButton(
                              onPressed: () {
                                context
                                    .read<OrderProvider>()
                                    .cancelOrder(order.id);
                              },
                              style: ElevatedButton.styleFrom(
                                backgroundColor: AppColors.errorColor,
                              ),
                              child: const Text('Cancel Order'),
                            ),
                        ],
                      ),
                    ],
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
