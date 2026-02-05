
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { AuthProvider } from './context/AuthContext';
  import { CartProvider } from './context/CartContext';
  import { OrderProvider } from './context/OrderContext';

  createRoot(document.getElementById("root")!).render(
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
  