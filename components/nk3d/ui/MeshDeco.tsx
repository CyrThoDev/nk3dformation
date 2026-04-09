import React from "react";

interface MeshDecoProps {
  className?: string;
}

export function MeshDeco({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="480"
      height="380"
      viewBox="0 0 480 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0L0 0 0 40"
            stroke="#1A4F8A"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <radialGradient id="hero-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </radialGradient>
        <mask id="hero-mask">
          <rect width="480" height="380" fill="url(#hero-fade)" />
        </mask>
      </defs>
      <rect width="480" height="380" fill="url(#hero-grid)" mask="url(#hero-mask)" />
    </svg>
  );
}