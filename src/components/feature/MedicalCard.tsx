import React from "react";
import { MedicalProduct } from "@/type/farmType";
import { formatCurrency, formatNumber } from "@/utils/formatNumber";
import { Button } from "@/components/ui/Button";

export interface MedicalCardProps {
  product: MedicalProduct;
  onAddToCart?: (product: MedicalProduct) => void;
}

export const MedicalCard: React.FC<MedicalCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#131a29] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col group text-white shadow-lg">
      <div className="relative h-40 bg-gray-950 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131a29] via-transparent to-black/30" />

        <div className="absolute top-2.5 left-2.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[10px] font-medium px-2 py-0.5 rounded">
          {product.category}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <h3 className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1 text-amber-400">
            ★ {product.rating.toFixed(1)}
          </span>
          <span>ขายแล้ว {formatNumber(product.soldCount)} ชิ้น</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-800">
          <span className="text-base font-extrabold text-white">
            {formatCurrency(product.price)}
          </span>
          <Button
            size="sm"
            variant="primary"
            className="text-xs px-3"
            onClick={() => onAddToCart?.(product)}
          >
            + เพิ่มลงตะกร้า
          </Button>
        </div>
      </div>
    </div>
  );
};

