import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "bordered";
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  hoverable = false,
  className = "",
  children,
  ...props
}) => {
  const variantStyles = {
    default: "bg-[#141b2a] border border-gray-800 shadow-sm",
    dark: "bg-[#121824] border border-gray-800 shadow-lg text-white",
    bordered: "bg-transparent border border-gray-800",
  }[variant];

  const hoverStyles = hoverable
    ? "transition-all duration-200 hover:shadow-md hover:border-amber-500/50 cursor-pointer"
    : "";

  return (
    <div
      className={`rounded-xl overflow-hidden ${variantStyles} ${hoverStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

