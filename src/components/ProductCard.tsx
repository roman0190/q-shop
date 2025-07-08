"use client";
import React from "react";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import ReactStars from "react-stars";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.id === product?.id);
  return (
    <div className="relative w-full border border-gray-300 rounded-b-lg rounded-sm ">
      <Link
        href={`/product/${product.id}`}
        className=" bg-white shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col rounded-t-lg"
      >
        <div className="relative w-full h-48 mb-4 overflow-hidden ">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 12rem"
            priority
          />
        </div>
        <div className="absolute -top-[1px] left-0 font-medium border-r border-b border-r-blue-500/30 border-b-blue-500/30 rounded-br-sm overflow-hidden">
          {product.rating.count >= 200 ? (
            <span className=" bg-gray-400/50 px-2 py-1 text-black text-sm ">
              Best Seller
            </span>
          ) : (
            <span className=" bg-gray-300/50 px-2 py-1 text-black text-sm">
              New Arrival
            </span>
          )}
        </div>

        <div className="flex items-center space-x-1 mb-1">
          {product.rating && (
            <ReactStars
              count={5}
              value={product.rating.rate}
              size={14}
              color2={"#ffd700"}
              edit={false}
              half={true}
            />
          )}
          <span className="text-xs text-gray-500 ml-1">
            ({product.rating?.count})
          </span>
        </div>

        <h3 className="text-lg  text-gray-800 line-clamp-1 mb-1">
          {product.title}
        </h3>

        <p className="text-[#2890f1] font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>
      </Link>
      <button
        onClick={() => {
          if (!isInCart) {
            addToCart(product);
          }
        }}
        disabled={isInCart}
        className={`px-6 py-2 rounded-b-lg transition-colors w-full mt-auto font-bold cursor-pointer flex items-center justify-center
            ${
              isInCart
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-[#f9f9f9] hover:bg-gray-800"
            }`}
        aria-label={`Add ${product.title} to cart`}
      >
        <FaShoppingCart className="mr-2 " />
        {isInCart ? "Already in Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
