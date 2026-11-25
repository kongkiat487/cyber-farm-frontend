import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline" | "amber" | "dark";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer";

    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500",
      danger: "bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
      amber: "bg-amber-500 text-black font-semibold hover:bg-amber-400 focus:ring-amber-500 shadow-sm",
      dark: "bg-gray-900 text-white border border-gray-700 hover:bg-gray-800 focus:ring-gray-600",
    }[variant];

    const sizeStyles = {
      sm: "text-xs px-2.5 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
    }[size];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
