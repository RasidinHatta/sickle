// ToggleVisibility.tsx
"use client";

import { useState } from "react";

export default function ToggleVisibility({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="absolute top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-blue-700 transition"
      >
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && <div>{children}</div>}
    </div>
  );
}
