import React from "react";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard";
import Loading from "@/app/loading";

interface ProductsSectionProps {
  products: Product[];
  isLoading?: boolean;
}
const ProductsSection = ({ products, isLoading }: ProductsSectionProps) => {
  return (
    <section className="bg-gray-200 text-black py-10 w-full">
      <div className="container mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
        <div className="w-24 h-1 bg-[#2890f1] mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked collection of top-quality products designed to
          enhance your lifestyle
        </p>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-2">
            {products.map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
