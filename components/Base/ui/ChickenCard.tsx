import React from "react";
import { ChickenProduct } from "@/types";
import { formatCurrency } from "@/lib/formatters";
import { Badge } from "./Badge";
import { Button } from "./Button";

export interface ChickenCardProps {
  product: ChickenProduct;
  onSelect?: (product: ChickenProduct) => void;
  onWatchVideo?: (product: ChickenProduct) => void;
  onClick?: (product: ChickenProduct) => void;
}

export const ChickenCard: React.FC<ChickenCardProps> = ({
  product,
  onSelect,
  onWatchVideo,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick?.(product)}
      className="rounded-xl overflow-hidden bg-[#131a29] border border-gray-800 hover:border-amber-500/60 transition-all duration-300 flex flex-col group text-white shadow-lg cursor-pointer hover:shadow-amber-500/10 hover:-translate-y-1"
    >
      <div className="relative h-52 bg-gray-950 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131a29] via-transparent to-black/40" />

        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <Badge variant="warning" size="sm">
            {product.code}
          </Badge>
          <span className="bg-black/60 backdrop-blur-md text-[10px] text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
            {product.winStats}
          </span>
        </div>

        <div className="absolute top-2.5 right-2.5">
          <Badge
            variant={
              product.status === "available"
                ? "success"
                : product.status === "reserved"
                ? "warning"
                : "danger"
            }
            size="sm"
          >
            {product.status === "available"
              ? "พร้อมส่ง"
              : product.status === "reserved"
              ? "ติดจอง"
              : "ปิดการขาย"}
          </Badge>
        </div>

        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-gray-300">
          <span>สไตล์: <b className="text-amber-400">{product.fightStyle}</b></span>
          <span>นน. {product.weight}</span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <h3 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">
            สายเลือด: {product.bloodline} | อายุ {product.age}
          </p>
        </div>

        <div className="flex items-baseline justify-between pt-2 border-t border-gray-800">
          <div>
            <span className="text-[10px] text-gray-400 block">ราคาเปิดจำหน่าย</span>
            <span className="text-base font-extrabold text-amber-400">
              {formatCurrency(product.price)}
            </span>
          </div>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
          <Button
            size="sm"
            variant="amber"
            className="flex-1 text-xs"
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(product);
            }}
            disabled={product.status !== "available"}
          >
            🛒 สั่งซื้อทันที
          </Button>
          <Button
            size="sm"
            variant="dark"
            className="text-xs px-2.5"
            onClick={(e) => {
              e.stopPropagation();
              onWatchVideo?.(product);
            }}
          >
            ▶️ คลิปเป้า
          </Button>
        </div>
      </div>
    </div>
  );
};
