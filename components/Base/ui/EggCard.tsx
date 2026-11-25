import React from "react";
import { EggProduct } from "@/types";
import { formatCurrency } from "@/lib/formatters";
import { Badge } from "./Badge";
import { Button } from "./Button";

export interface EggCardProps {
  egg: EggProduct;
  onReserve?: (egg: EggProduct) => void;
}

export const EggCard: React.FC<EggCardProps> = ({ egg, onReserve }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#131a29] border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col group text-white shadow-lg">
      <div className="relative h-44 bg-gray-950 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={egg.imageUrl}
          alt={egg.pairName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131a29] via-transparent to-black/30" />

        <div className="absolute top-2.5 left-2.5">
          <Badge variant="success" size="sm">
            {egg.tier}
          </Badge>
        </div>

        <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-emerald-300 font-semibold border border-emerald-500/40">
          ประกันเชื้อ {egg.guaranteeRate}
        </div>

        <div className="absolute bottom-2 left-3 right-3 text-[11px] text-gray-300">
          รหัสผสม: <span className="font-mono text-amber-400">{egg.code}</span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <h3 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
            {egg.pairName}
          </h3>
          <div className="text-[11px] text-gray-400 mt-1.5 space-y-0.5">
            <p>พ่อ: <span className="text-gray-300">{egg.fatherBloodline}</span></p>
            <p>แม่: <span className="text-gray-300">{egg.motherBloodline}</span></p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-xs">
          <div>
            <span className="text-[10px] text-gray-400 block">ราคาต่อฟอง</span>
            <span className="text-base font-extrabold text-emerald-400">
              {formatCurrency(egg.pricePerEgg)}
            </span>
          </div>
          <span className="text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
            คงเหลือ {egg.availableCount} ฟอง
          </span>
        </div>

        <Button
          size="sm"
          variant="amber"
          className="w-full text-xs font-semibold"
          onClick={() => onReserve?.(egg)}
        >
          🥚 จองไข่เชื้อเงินล้าน
        </Button>
      </div>
    </div>
  );
};

