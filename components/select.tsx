import React from "react";

export function Select({ children, onValueChange }: any) {
  return <div>{children}</div>;
}

export function SelectTrigger({ children, className = "", ...props }: any) {
  return (
    <select className={`w-full border p-2 rounded ${className}`} {...props}>
      <option disabled selected>
        수령 장소 선택
      </option>
      {children}
    </select>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  return <option disabled>{placeholder}</option>;
}

export function SelectContent({ children }: any) {
  return <>{children}</>;
}

export function SelectItem({ children, value }: any) {
  return <option value={value}>{children}</option>;
}
