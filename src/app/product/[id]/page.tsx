"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import ReactStars from "react-stars";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { Product as ProductType } from "@/types/Product";

const Product = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productId = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product");
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

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-4">Quantity:</span>
                  <div className="flex border border-gray-300">
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-black"
                      //   onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={1}
                      //   value={quantity}
                      //   onChange={(e) =>
                      //     setQuantity(parseInt(e.target.value) || 1)
                      //   }
                      className="w-12 text-center border-x border-gray-300 py-1 text-black"
                    />
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-black"
                      //   onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-sm font-bold flex items-center justify-center flex-1 hover:bg-gray-800">
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-2">Product Details:</h3>
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
