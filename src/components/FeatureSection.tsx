import React from "react";
import Image from "next/image";
const FeatureSection = () => {
  return (
    <section className="bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 ">
            <div className="sm:w-[25%] w-[50%]">
              <Image
                src="/extra-images/collections.png"
                alt="Feature Collections"
                width={1080}
                height={1080}
                className="w-full h-auto "
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Featured Collections
              </h2>
              <p className="text-gray-600">See what our customers are buying</p>
              <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300">
                View All Products
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FeatureSection;
