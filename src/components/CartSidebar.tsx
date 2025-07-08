import React, { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import CartProduct from "./CartProduct";
import { useCart } from "@/context/CartContext";
import { CheckoutFormData } from "@/types/CheckoutFormData";
import CheckoutModal from "./CheckoutModal";

const CartSidebar = () => {
  const { isCartOpen, closeCart, cartItems, getCartTotal, clearCart } =
    useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const totalPrice = getCartTotal();

  const openCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const handleCheckoutSubmit = (formData: CheckoutFormData) => {
    console.log("Order submitted:", { formData, cartItems, totalPrice });
    alert("Order placed successfully!");
    clearCart();
    closeCheckoutModal();
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed  bg-opacity-50 z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full max-h-screen w-full sm:w-96 bg-white shadow-lg z-50 transform transition-all duration-500 ease-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold flex items-center">
            <FaShoppingCart className="mr-2 text-[#2890f1]" />
            Your Cart ({cartItems.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <FaTimes className="text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-5xl mb-4 text-gray-300">
                <FaShoppingCart />
              </div>
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="bg-[#2890f1] text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartProduct key={item.id} product={item} />
              ))}
            </ul>
          )}
        </div>

        {/* Footer with total and checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={clearCart}
                className="text-red-500 text-sm hover:underline"
              >
                Clear Cart
              </button>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-500">Subtotal:</span>
                <span className="text-xl font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#2890f1] text-white py-3 w-full text-center font-medium rounded-sm hover:bg-blue-600 transition-colors"
                onClick={openCheckoutModal}
              >
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="border border-gray-300 bg-white text-gray-700 py-3 w-full text-center font-medium rounded-sm hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={closeCheckoutModal}
        onSubmit={handleCheckoutSubmit}
        totalAmount={totalPrice}
      />
    </>
  );
};

export default CartSidebar;
