import { useState, useEffect } from "react";

export default function Button() {
  const [border, setBorder] = useState(false);

  const handleClick = () => {
    setBorder(true);

    setTimeout(() => {
      setBorder(false);
    }, 1000); 
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 text-white bg-blue-500 rounded ${
        border ? "  bg-red-500" : " bg-blue-700"
      } transition-all duration-300`}
    >
      Click Me
    </button>
  );
}
