"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import CartSidebar from "./CartSidebar";
const Navbar = () => {
  const { cartItems, openCart, closeCart, isCartOpen } = useCart();
  const itemCount = cartItems.length;
  return (
    <nav className="bg-white text-black w-full py-[2%] px-[2%] sticky top-0 z-30">
      <div className="container mx-auto flex justify-between">
        <div>
          {/* logo */}
          <span className="text-2xl font-bold">Q-shop</span>
        </div>
        {/* desktop */}
        <div className="flex text-gray-700 gap-8 items-center justify-center font-semibold">
          <Link href={"/"}>Home</Link>
          <button
            className="relative cursor-pointer"
            onClick={() => (isCartOpen ? closeCart() : openCart())}
          >
            <span>Cart</span>
            <div className=" absolute -top-1 -left-3 bg-red-600/80 text-black w-4 h-4 rounded-full flex items-center justify-center text-sm p-2">
              {itemCount}
            </div>
          </button>
          <Link href={"/"}>
            <FaUserCircle className="text-2xl" />
          </Link>
        </div>
      </div>
      {isCartOpen && <CartSidebar />}
    </nav>
  );
};

export default Navbar;
