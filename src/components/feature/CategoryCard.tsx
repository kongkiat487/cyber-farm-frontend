import React from "react";
import { Badge } from "@/components/ui/Badge";

export interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: "primary" | "warning" | "danger" | "success" | "neutral" | "dark";
  active?: boolean;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  subtitle,
  badge,
  badgeVariant = "warning",
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-3.5 rounded-xl border transition-all cursor-pointer bg-[#141b2a] hover:bg-[#1a2337] hover:border-amber-400/50 ${
        active
          ? "border-rose-500 bg-[#1e1724] ring-1 ring-rose-500/30"
          : "border-gray-800"
      }`}
    >
      {badge && (
        <div className="absolute top-2.5 right-2.5">
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        </div>
      )}

      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-bold text-sm text-white leading-snug">
        {title}
      </div>
      {subtitle && (
        <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
          {subtitle}
        </div>
      )}
    </div>
  );
};

