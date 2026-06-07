import React from "react";

interface LogoCARProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function LogoCAR({ className = "", size = 120, light = false }: LogoCARProps) {
  const primaryColor = light ? "#FFFFFF" : "#7A1C1C";
  const accentColor = light ? "#E7DAAF" : "#A3704C";

  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
    >
      {/* 1. Cogwheel / Gear on Left (representing Automation / C) */}
      <g transform="translate(60, 80)">
        {/* Outer teeth */}
        <circle cx="0" cy="0" r="30" stroke={primaryColor} strokeWidth="6" strokeDasharray="10,6" />
        <circle cx="0" cy="0" r="38" stroke={primaryColor} strokeWidth="3" className="opacity-40" />
        <circle cx="0" cy="0" r="22" stroke={primaryColor} strokeWidth="4" />
        
        {/* Microchip nodes inside gear */}
        <circle cx="0" cy="0" r="8" fill={accentColor} />
        <line x1="-15" y1="0" x2="15" y2="0" stroke={primaryColor} strokeWidth="2" />
        <line x1="0" y1="-15" x2="0" y2="15" stroke={primaryColor} strokeWidth="2" />
        
        {/* Letter C overlay effect */}
        <path d="M 22 -15 A 25 25 0 1 0 22 15" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" fill="none" />
      </g>

      {/* 2. Drawing Compass / Divider in Center (forming the letter A) */}
      <g transform="translate(130, 80)">
        {/* Hinge at the top */}
        <circle cx="0" cy="-45" r="7" fill={accentColor} />
        <circle cx="0" cy="-45" r="10" stroke={primaryColor} strokeWidth="2" />
        
        {/* Left Leg */}
        <path
          d="M 0 -45 L -26 38 C -27 41 -23 43 -22 40 L -6 -10 Z"
          fill={primaryColor}
        />
        {/* Right Leg */}
        <path
          d="M 0 -45 L 26 38 C 27 41 23 43 22 40 L 6 -10 Z"
          fill={primaryColor}
        />
        
        {/* Sharp Tips */}
        <line x1="-24" y1="36" x2="-28" y2="48" stroke={accentColor} strokeWidth="2" />
        <line x1="24" y1="36" x2="28" y2="48" stroke={accentColor} strokeWidth="2" />

        {/* Adjusting Screw Bar */}
        <path d="M -22 10 L 22 10" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="0" cy="10" r="5" fill={primaryColor} />

        {/* Letter A crossbar */}
        <path d="M -12 22 L 12 22" stroke={primaryColor} strokeWidth="4.5" />
      </g>

      {/* 3. Ashoka Chakra / Letter R on Right */}
      <g transform="translate(200, 80)">
        {/* Outer Wheel of Chakra */}
        <circle cx="0" cy="-15" r="20" stroke={primaryColor} strokeWidth="3" />
        <circle cx="0" cy="-15" r="16" stroke={accentColor} strokeWidth="1" />
        
        {/* Chakra Spokes (24 spokes represented beautifully) */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="-15"
            x2={(18 * Math.cos((i * 30 * Math.PI) / 180)).toFixed(4)}
            y2={(-15 + 18 * Math.sin((i * 30 * Math.PI) / 180)).toFixed(4)}
            stroke={primaryColor}
            strokeWidth="1.2"
          />
        ))}
        <circle cx="0" cy="-15" r="4.5" fill={primaryColor} />

        {/* Letter R legs and spine */}
        {/* Spine */}
        <rect x="-26" y="-38" width="7.5" height="78" fill={primaryColor} rx="1" />
        
        {/* Loop of R */}
        <path
          d="M -22 -35 C 5 -35 15 -25 15 -12 C 15 1 -5 10 -22 10"
          stroke={primaryColor}
          strokeWidth="7.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Diagonal Leg of R (styled as chevron stripes matching the blueprint image) */}
        <path
          d="M -5 8 L 16 38"
          stroke={primaryColor}
          strokeWidth="7.5"
          strokeLinecap="round"
        />
        
        {/* Small horizontal details/stripes underneath the loop */}
        <line x1="-20" y1="18" x2="0" y2="18" stroke={accentColor} strokeWidth="3" />
        <line x1="-20" y1="26" x2="-5" y2="26" stroke={accentColor} strokeWidth="3" />
      </g>
      
      {/* Subtle tech background grids */}
      <path d="M 10 120 L 270 120" stroke={primaryColor} strokeWidth="1" strokeDasharray="4,6" className="opacity-30" />
    </svg>
  );
}
