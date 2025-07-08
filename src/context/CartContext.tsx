"use client";
import { CartContextType } from "@/types/CartContextType";
import { Product } from "@/types/Product";
import { createContext, ReactNode, useContext, useState } from "react";

const CartContext = createContext<CartContextType>({
  cartItems: [],
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartItemsCount: () => 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Open & Close cart
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  //Add product to cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);

      if (exists) {
        // If already in cart, do nothing
        return prevItems;
      } else {
        // Add item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    if (cartItems.length == 0) {
      openCart(); // Open cart even if item was already there
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id != id));
  };

  // increase quantity
  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        return item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item;
      })
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) => {
      // Decrease quantity first
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) - 1 } : item
      );

      // Remove any items with quantity <= 0
      return updatedItems.filter((item) => (item.quantity || 0) > 0);
    });
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  // Get total number of items in cart
  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  const value = {
    cartItems,
    isCartOpen,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
