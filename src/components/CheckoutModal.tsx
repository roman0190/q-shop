import { CheckoutFormData } from "@/types/CheckoutFormData";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: CheckoutFormData) => void;
  totalAmount: number;
}

const CheckoutModal = ({
  isOpen,
  onClose,
  onSubmit,
  totalAmount,
}: CheckoutModalProps) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name as keyof CheckoutFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div
        className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="bg-white w-full max-w-md rounded-md shadow-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800">Checkout</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4">
            <p className="mb-4 text-sm text-gray-600">
              Complete your order by providing your shipping details.
            </p>

            <div className="mb-4 bg-blue-50 p-3 rounded-md">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Total Amount:</span>
                <span className="font-bold text-[#2890f1]">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Address */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="address"
                >
                  Shipping Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full px-3 py-2 border ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="123 Main St, Apt 4B"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                )}
              </div>

              {/* City and Postal Code - Two columns */}
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    } rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="New York"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                  )}
                </div>

                <div className="flex-1">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="postalCode"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      errors.postalCode ? "border-red-500" : "border-gray-300"
                    } rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="10001"
                  />
                  {errors.postalCode && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.postalCode}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="+1 (234) 567-8900"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#2890f1] hover:bg-blue-600 text-white font-medium py-3 rounded-sm transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
