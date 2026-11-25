import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "warning" | "danger" | "success" | "neutral" | "dark";
  size?: "sm" | "md";
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  size = "md",
  pulse = false,
  className = "",
  children,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    warning: "bg-amber-500 text-black border-amber-600 font-semibold",
    danger: "bg-rose-500 text-white border-rose-600",
    success: "bg-emerald-500 text-white border-emerald-600",
    neutral: "bg-gray-800 text-gray-200 border-gray-700",
    dark: "bg-black/70 backdrop-blur-md text-amber-300 border-amber-400/40",
  }[variant];

  const sizeStyles = {
    sm: "text-[10px] px-1.5 py-0.5",
    md: "text-xs px-2.5 py-1",
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border font-medium ${variantStyles} ${sizeStyles} ${className}`.trim()}
      {...props}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />}
      {children}
    </span>
  );
};

