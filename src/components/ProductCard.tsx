import React from "react";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaShoppingCart,
} from "react-icons/fa";

const ProductCard = ({ product }: { product: Product }) => {
  // Function to render star ratings
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={`star-${i}`} className="text-yellow-300" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FaStarHalfAlt key={`star-${i}`} className="text-yellow-300" />
        );
      } else {
        stars.push(<FaRegStar key={`star-${i}`} className="text-yellow-300" />);
      }
    }

    return stars;
  };

  return (
    <Link href={`/product/${product.id}`} className="w-full">
      <div className="bg-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
        <div className="relative w-full h-48 mb-4 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 12rem"
            priority
          />
          {product.rating.count >= 200 ? (
            <span className=" absolute top-0 font-serif bg-blue-600 px-2 py-1 rounded-sm text-white text-sm">
              Best Seller
            </span>
          ) : (
            <span className=" absolute top-0 font-serif bg-green-500 px-2 py-1 rounded-sm text-white text-sm">
              New Arrival
            </span>
          )}
        </div>

        <div className="flex items-center space-x-1 mb-1">
          {product.rating && renderRatingStars(product.rating.rate)}
          <span className="text-xs text-gray-500 ml-1">
            ({product.rating?.count})
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-1">
          {product.title}
        </h3>

        <p className="text-[#2890f1] font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            // addToCart(product) implementation will go here
          }}
          className="bg-black text-[#f9f9f9] px-6 py-2 rounded-sm transition-colors w-full mt-auto font-bold cursor-pointer flex items-center justify-center"
          aria-label={`Add ${product.title} to cart`}
        >
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
