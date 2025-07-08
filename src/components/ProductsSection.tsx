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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-2">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
