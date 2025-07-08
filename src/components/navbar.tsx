"use client";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-white text-black w-full py-[2%] px-[2%] sticky top-0 z-30">
      <div className="container mx-auto flex justify-between">
        <div>
          {/* logo */}
          <span className="text-2xl font-bold">Q-shop</span>
        </div>
        {/* desktop */}
        <div className="flex text-gray-700 gap-8 items-center justify-center font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Cart</Link>
          <Link href={"/"}>
            <FaUserCircle className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
