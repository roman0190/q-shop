"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import ReactStars from "react-stars";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { Product as ProductType } from "@/types/Product";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";

const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart, cartItems } = useCart();

  // Use the useParams hook
  const params = useParams();
  const productId = parseInt(params.id as string, 10);
  const isInCart = cartItems.some((item) => item.id === product?.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product");
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]); // dependency array এ productId যোগ করেছি

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">{error || "Product not found"}</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-8 h-auto sm:h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-blue-500 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to shop
        </Link>
        <div className="bg-white rounded shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
              <div className="relative h-80 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  <ReactStars
                    count={5}
                    value={product.rating.rate}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    half={true}
                  />
                </div>
                <span className="text-sm text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </div>
              <div className="mb-6">
                <span className="text-[#2890f1] text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="mb-6">
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(product)}
                  disabled={isInCart}
                  className={`px-6 py-3 rounded-sm font-bold flex items-center justify-center flex-1
                    ${
                      isInCart
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                  <FaShoppingCart className="mr-2" />
                  {isInCart ? "Already in Cart" : "Add to Cart"}
                </button>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-2 text-black">
                  Product Details:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>
                    Category:{" "}
                    <span className="capitalize">{product.category}</span>
                  </li>
                  <li>SKU: PRD-{product.id.toString().padStart(4, "0")}</li>
                  <li>Free shipping on orders over $50</li>
                  <li>30-day return policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
