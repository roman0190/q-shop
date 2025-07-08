"use client";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductsSection";
import { Product } from "@/types/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;
        if (!allProducts) {
          setError("No Data found.");
        } else {
          // Filter only men's and women's clothing
          const filtered = allProducts.filter(
            (product: any) =>
              product.category === "men's clothing" ||
              product.category === "women's clothing"
          );

          setProducts(filtered);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductData();
  }, []);

  return (
    <div className="">
      <HeroSection />
      <FeatureSection />

      {error ? (
        <div className="bg-gray-200 py-10 text-center ">{error}</div>
      ) : (
        <ProductSection products={products} isLoading={isLoading} />
      )}
    </div>
  );
}
