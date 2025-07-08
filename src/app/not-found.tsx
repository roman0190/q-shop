import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Return to Home
      </Link>
    </div>
  );
}
