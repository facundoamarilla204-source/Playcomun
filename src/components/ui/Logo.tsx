import React from "react";
import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image 
      src="/logo.png" 
      alt="PlayComun Logo" 
      width={180}
      height={60}
      priority
      className={className} 
    />
  );
}
