import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );
}
