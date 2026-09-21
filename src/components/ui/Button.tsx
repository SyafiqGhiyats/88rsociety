"use client";

import React from "react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "volt" | "outline" | "ghost" | "orange" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  triggerConfetti?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      triggerConfetti = false,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (triggerConfetti) {
        try {
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#6C1A1A", "#FF5722", "#00E5FF", "#FFFFFF"]
          });
        } catch {
          // ignore if canvas not supported
        }
      }
      if (onClick) onClick(e);
    };

    const variantStyles = {
      primary:
        "bg-primary text-white font-extrabold hover:bg-primary-hover hover:shadow-primary active:scale-[0.98]",
      volt:
        "bg-primary text-white font-extrabold hover:bg-primary-hover hover:shadow-primary active:scale-[0.98]",
      outline:
        "bg-transparent text-white border border-white/20 hover:border-primary hover:text-white hover:bg-primary/10 active:scale-[0.98]",
      ghost:
        "bg-transparent text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
      orange:
        "bg-hyper-orange text-white font-bold hover:bg-hyper-orange-hover hover:shadow-orange active:scale-[0.98]",
      dark: "bg-dark-card text-white border border-white/10 hover:border-white/25 hover:bg-dark-card-hover active:scale-[0.98]"
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-full gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-full gap-2",
      lg: "text-base px-6 py-3.5 rounded-full gap-2.5 tracking-wide",
      xl: "text-lg px-8 py-4 rounded-full gap-3 font-black tracking-wider uppercase"
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-sans transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
