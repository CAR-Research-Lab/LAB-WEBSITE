"use client";

import React, { useState } from "react";
import LogoDTU from "./LogoDTU";

interface UniversityLogoProps {
  size?: number;
  className?: string;
}

export default function UniversityLogo({ size = 50, className = "" }: UniversityLogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return <LogoDTU size={size} className={className} />;
  }

  return (
    <img
      src="/image_99b65b.png"
      alt="Delhi Technological University Logo"
      width={size}
      height={size}
      onError={() => setError(true)}
      className={`${className} object-contain transition-all duration-300`}
    />
  );
}
