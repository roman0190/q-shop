import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="bg-white w-full relative">
      <div>
        <Image
          src="/hero-section/section.png"
          alt="alt"
          width={1444}
          height={1444}
          className="w-full"
        />
      </div>
      <div className=" absolute top-0  w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="text-black md:text-5xl text-2xl font-bold font-sans">Q-Shop</span>
          <span className="text-white md:text-4xl font-bold font-serif">
            Shopping is cheaper than theraphy
          </span>
          <div className="relative bg-white w-[70%] text-gray-500 rounded-md px-2">
            <input
              type="text"
              className="w-full outline-none md:px-2 md:py-2 py-1"
              placeholder="Search for product"
            />
            <button className="absolute text-gray-400 right-2 md:text-xl bottom-2 cursor-pointer">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
