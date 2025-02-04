import { createContext } from "react";

export type CartItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
};

export type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  setCartItems: () => {},
  setCartCount: () => {},
});

export default CartContext;
