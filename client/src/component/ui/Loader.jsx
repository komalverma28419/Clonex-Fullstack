import React from "react";

const Loader = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: {
      wrapper: "h-8 w-8",
      dot: "h-2 w-2",
      distance: "12px",
    },
    md: {
      wrapper: "h-12 w-12",
      dot: "h-2.5 w-2.5",
      distance: "18px",
    },
    lg: {
      wrapper: "h-16 w-16",
      dot: "h-3 w-3",
      distance: "24px",
    },
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div
      className={`relative ${currentSize.wrapper} ${className}`}
      aria-label="Loading"
      role="status"
    >
      {[...Array(8)].map((_, index) => (
        <span
          key={index}
          className={`absolute left-1/2 top-0 ${currentSize.dot} -translate-x-1/2 rounded-full`}
          style={{
            transform: `rotate(${index * 45}deg) translateY(${currentSize.distance})`,
            animation: "loaderDot 1s linear infinite",
            animationDelay: `${index * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Loader;