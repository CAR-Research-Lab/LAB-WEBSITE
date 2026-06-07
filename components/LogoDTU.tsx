import React from "react";

interface LogoDTUProps {
  className?: string;
  size?: number;
}

export default function LogoDTU({ className = "", size = 120 }: LogoDTUProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
    >
      {/* Outer Decorative Rings */}
      <circle cx="100" cy="100" r="96" stroke="#7A1C1C" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="92" stroke="#7A1C1C" strokeWidth="1" />
      <circle cx="100" cy="100" r="88" stroke="#7A1C1C" strokeWidth="1.5" />
      
      {/* Maroon Filled Ring for Text */}
      <circle cx="100" cy="100" r="76" stroke="#7A1C1C" strokeWidth="22" className="opacity-95" />
      
      {/* Inner Decorative Ring */}
      <circle cx="100" cy="100" r="63" stroke="#7A1C1C" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="59" stroke="#7A1C1C" strokeWidth="1" />
      
      {/* Text on Circle Path */}
      <path
        id="curve-top"
        d="M 28 100 A 72 72 0 1 1 172 100"
        fill="transparent"
      />
      <path
        id="curve-bottom"
        d="M 172 100 A 72 72 0 1 1 28 100"
        fill="transparent"
      />
      
      {/* Circular Text */}
      <text fill="#FFFFFF" fontSize="10.5" fontWeight="bold" letterSpacing="0.8">
        <textPath href="#curve-top" startOffset="50%" textAnchor="middle">
          DELHI TECHNOLOGICAL UNIVERSITY
        </textPath>
      </text>
      
      <text fill="#FFFFFF" fontSize="10.5" fontWeight="bold" letterSpacing="1.2">
        <textPath href="#curve-bottom" startOffset="50%" textAnchor="middle">
          • ESTABLISHED 1941 •
        </textPath>
      </text>

      {/* Center Shield / Container */}
      <g transform="translate(100, 105)">
        {/* Shield Border */}
        <path
          d="M -30 -35 L 30 -35 C 30 -35 32 -10 30 15 C 28 30 0 42 0 42 C 0 42 -28 30 -30 15 C -32 -10 -30 -35 -30 -35 Z"
          fill="#FFFFFF"
          stroke="#7A1C1C"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        
        {/* Shield Inner Inset */}
        <path
          d="M -26 -31 L 26 -31 C 26 -31 28 -8 26 13 C 24 26 0 37 0 37 C 0 37 -24 26 -26 13 C -28 -8 -26 -31 -26 -31 Z"
          fill="#FDFDFD"
          stroke="#7A1C1C"
          strokeWidth="1"
          strokeDasharray="2,2"
        />

        {/* DELTECH Text Banner */}
        <rect x="-25" y="-12" width="50" height="15" fill="#7A1C1C" rx="2" />
        <text
          x="0"
          y="0"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="900"
          textAnchor="middle"
          letterSpacing="1.5"
        >
          DELTECH
        </text>

        {/* Flame of Knowledge (Torch) */}
        {/* Torch Handle */}
        <path
          d="M -4 5 L 4 5 L 2 25 L -2 25 Z"
          fill="#7A1C1C"
          stroke="#7A1C1C"
          strokeWidth="1"
        />
        <line x1="-5" y1="5" x2="5" y2="5" stroke="#7A1C1C" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Flame */}
        <path
          d="M 0 -13 C 5 -20 12 -23 7 -32 C 3 -28 2 -24 0 -24 C -2 -24 -3 -28 -7 -32 C -12 -23 -5 -20 0 -13 Z"
          fill="url(#flameGradient)"
        />
        
        {/* Inner Flame Core */}
        <path
          d="M 0 -15 C 2 -18 5 -20 3 -25 C 1 -22 1 -20 0 -20 C -1 -20 -1 -22 -3 -25 C -5 -20 -2 -18 0 -15 Z"
          fill="#FFD700"
        />
        
        {/* Mini stars inside shield */}
        <circle cx="-16" cy="-22" r="1.5" fill="#7A1C1C" />
        <circle cx="16" cy="-22" r="1.5" fill="#7A1C1C" />
        <circle cx="-16" cy="20" r="1.5" fill="#7A1C1C" />
        <circle cx="16" cy="20" r="1.5" fill="#7A1C1C" />
      </g>

      {/* Decorative Star Accents along Maroon Ring */}
      <g transform="translate(100, 100)">
        <polygon points="0,-82 -3,-86 -8,-86 -4,-90 -6,-95 0,-92 6,-95 4,-90 8,-86 3,-86" fill="#7A1C1C" transform="rotate(45)" />
        <polygon points="0,-82 -3,-86 -8,-86 -4,-90 -6,-95 0,-92 6,-95 4,-90 8,-86 3,-86" fill="#7A1C1C" transform="rotate(-45)" />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4D00" />
          <stop offset="50%" stopColor="#FF9900" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
}
