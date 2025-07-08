import React from 'react';
import Image from 'next/image';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Product } from '@/types/Product';
import { useCart } from '@/context/CartContext';

interface CartProductProps {
  product: Product;
}

const CartProduct = ({ product }: CartProductProps) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <li className="py-4">
      <div className="flex items-center">
        {/* Product image */}
        <div className="w-16 h-16 relative mr-4 bg-gray-100 rounded">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 64px, 64px"
          />
        </div>
        
        {/* Product info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {product.title}
          </h3>
          <p className="text-[#2890f1] font-bold mt-1">
            ${product.price.toFixed(2)}
          </p>
          
          {/* Quantity controls */}
          <div className="flex items-center mt-2">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="p-1 rounded border border-gray-300 hover:bg-gray-100"
            //   disabled={(product.quantity || 1) <= 1}
              aria-label="Decrease quantity"
            >
              <FaMinus size={10} />
            </button>
            <span className="mx-2 text-sm w-6 text-center">
              {product.quantity || 1}
            </span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="p-1 rounded border border-gray-300 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <FaPlus size={10} />
            </button>
          </div>
        </div>
        
        {/* Item total price */}
        <div className="mr-4 text-right">
          <p className="text-sm text-gray-500">Total:</p>
          <p className="font-medium">
            ${((product.price * (product.quantity || 1)).toFixed(2))}
          </p>
        </div>
        
        {/* Remove button */}
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-1 p-2 text-red-500 hover:bg-red-50 rounded-full"
          aria-label={`Remove ${product.title} from cart`}
        >
          <FaTrash size={16} />
        </button>
      </div>
    </li>
  );
};

export default CartProduct;