'use client';

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import CartContext from "../../context/CartContext";

export default function Cart() {
  const router = useRouter();
  const { cartItems, cartCount, setCartItems, setCartCount } =
    useContext(CartContext);

  const calculateTotalPrice = (): string => {
    return cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      return prevItems.reduce((acc: any[], item) => {
        if (item.id === productId) {
          if ((item.quantity || 1) > 1) {
            acc.push({ ...item, quantity: (item.quantity || 1) - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <div>
      <h3>
        Total Cart Items: {cartCount} | Total Price: ₹{calculateTotalPrice()}
      </h3>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity || 1}</p>
              <img
                src={item.image || "/placeholder.png"}
                alt={item.title}
                height={100}
              />
              <p>Price: ₹{(item.price * (item.quantity || 1)).toFixed(2)}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button className="btn btn-secondary" onClick={() => router.push("/")}>
        Continue Shopping
      </button>
    </div>
  );
}
