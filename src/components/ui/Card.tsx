import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  borderPrimary?: boolean;
  borderVolt?: boolean;
  slanted?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  borderPrimary = false,
  borderVolt = false,
  slanted = false,
  children,
  ...props
}: CardProps) {
  const isBorderPrimary = borderPrimary || borderVolt;
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-dark-card/90 border transition-all duration-300 backdrop-blur-md",
        isBorderPrimary
          ? "border-primary/40 shadow-primary-sm"
          : "border-white/10",
        hoverEffect &&
          "hover:border-white/25 hover:bg-dark-card-hover hover:-translate-y-1 hover:shadow-xl",
        slanted && "slanted-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
