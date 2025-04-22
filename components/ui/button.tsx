import React from "react";

export function Card({ children, className = "", ...props }: any) {
  return (
    <div className={`rounded-xl border bg-white shadow ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }: any) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
