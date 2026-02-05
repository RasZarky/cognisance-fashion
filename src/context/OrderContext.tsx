import React, { createContext, useContext, useState } from 'react';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  estimatedDelivery: string;
  trackingNumber?: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  getOrder: (id: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Sample orders for testing
const SAMPLE_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    items: [
      {
        id: 1,
        name: 'Elegant Evening Gown',
        price: 450,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbmluZyUyMGdvd258ZW58MXx8fHwxNzcwMTkwMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    total: 450,
    status: 'delivered',
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    trackingNumber: 'GH-2024-001-ABC123',
  },
  {
    id: 'ORD-002',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    items: [
      {
        id: 3,
        name: 'Ankara Print Dress',
        price: 350,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1760907949889-eb62b7fd9f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJpbnQlMjBhbmthcmElMjBkcmVzc3xlbnwxfHx8fDE3NzAyMjg0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    total: 700,
    status: 'shipped',
    estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    trackingNumber: 'GH-2024-002-XYZ789',
  },
  {
    id: 'ORD-003',
    date: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000).toISOString(),
    items: [
      {
        id: 2,
        name: 'Luxury Bridal Gown',
        price: 1500,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1747847471528-7b95ea7a4c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmlkYWwlMjB3ZWRkaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzcwMjI4NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    total: 1500,
    status: 'processing',
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    trackingNumber: 'GH-2024-003-DEF456',
  },
];

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(SAMPLE_ORDERS);

  const addOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const getOrder = (id: string) => {
    return orders.find((order) => order.id === id);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}
