import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import CartContext, { CartItem } from "@/context/CartContext";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[])
    );

    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <CartContext.Provider
      value={{ 
        cartItems, 
        cartCount,
        addToCart, 
        removeFromCart, 
        setCartItems, 
        setCartCount }}
    >
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </CartContext.Provider>
  );
}
