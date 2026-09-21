import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "volt" | "orange" | "cyan" | "neutral" | "outline";
  pulse?: boolean;
}

export function Badge({
  className,
  variant = "primary",
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary/25 text-red-200 border border-primary/40",
    volt: "bg-primary/25 text-red-200 border border-primary/40",
    orange: "bg-hyper-orange/15 text-hyper-orange border border-hyper-orange/30",
    cyan: "bg-cyan/15 text-cyan border border-cyan/30",
    neutral: "bg-white/10 text-slate-300 border border-white/10",
    outline: "bg-transparent text-slate-300 border border-white/20"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  );
}
