/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
};

type ButtonProps = ButtonBaseProps & Omit<HTMLMotionProps<"button">, "ref">;

// Crear un Link animado
const MotionLink = motion.create(Link);

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, children, className = "", ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden group";

    const variants = {
      primary:
        "bg-foreground text-background rounded-md hover:bg-foreground-muted border border-transparent",
      secondary:
        "bg-surface text-foreground rounded-md border border-border hover:border-border-hover hover:bg-surface-hover",
      outline:
        "border border-border bg-transparent rounded-md hover:bg-surface text-foreground hover:border-border-hover",
      ghost:
        "bg-transparent rounded-md hover:bg-surface text-foreground-muted hover:text-foreground",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-[15px]",
      lg: "h-12 px-8 text-base",
    };

    const commonProps = {
      ref: ref as any,
      whileHover: { y: -1 },
      whileTap: { scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 15 },
      className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
    };

    const innerContent = (
      <>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </>
    );

    if (href) {
      const isExternal = href.startsWith('http') || href.startsWith('mailto:');
      
      if (isExternal) {
        return (
          <motion.a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} {...commonProps as any} {...props}>
            {innerContent}
          </motion.a>
        );
      }

      const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      return (
        <MotionLink href={href} onClick={handleSmoothScroll} {...commonProps as any} {...props}>
          {innerContent}
        </MotionLink>
      );
    }

    return (
      <motion.button {...commonProps as any} {...props}>
        {innerContent}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
