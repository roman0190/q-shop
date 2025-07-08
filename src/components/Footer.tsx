import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Q-Shop</h3>
            <p className="text-sm mb-4">
              Q-Shop is your one-stop destination for quality products at
              affordable prices. We believe shopping should be as enjoyable as
              it is convenient.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white hover:underline transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/men's clothing"
                  className="hover:text-white hover:underline transition-colors capitalize"
                >
                  Men&apos;s Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/women's clothing"
                  className="hover:text-white hover:underline transition-colors capitalize"
                >
                  Women&apos;s Clothing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-[#2890f1]" />
                <span>Nikunja 2 ,Dhaka</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-[#2890f1]" />
                <span>+0881 567-8900</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#2890f1]" />
                <span>support@qshop.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white text-base font-semibold mb-2">
                Subscribe to our Newsletter
              </h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-sm px-4 py-2 rounded-l-sm focus:outline-none flex-grow"
                />
                <button
                  type="submit"
                  className="bg-[#2890f1] hover:bg-blue-600 px-4 py-2 text-white rounded-r-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-medium mb-2">We Accept:</h4>
              <div className="flex space-x-4 text-xl">
                <FaCcVisa className="text-gray-400" />
                <FaCcMastercard className="text-gray-400" />
                <FaCcPaypal className="text-gray-400" />
                <FaCcApplePay className="text-gray-400" />
              </div>
            </div>
            <div className="text-sm">
              <p>© {new Date().getFullYear()} Q-Shop. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
