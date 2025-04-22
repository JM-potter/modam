"use client";
import React from "react";

export function Calendar({ selected, onSelect }: any) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <input
      type="date"
      className="p-2 border rounded w-full"
      value={selected ? selected.toISOString().split("T")[0] : today}
      onChange={(e) => onSelect(new Date(e.target.value))}
    />
  );
}
