import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
