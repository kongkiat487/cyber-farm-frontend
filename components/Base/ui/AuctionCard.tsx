import React from "react";
import { formatCurrency, formatNumber } from "@/lib";
import { Button } from "./Button";
import { Badge } from "./Badge";

export interface AuctionCardProps {
  code: string;
  title: string;
  currentBid: number;
  initialPrice: number;
  countdown: string;
  bloodline: string;
  weight: string;
  age: string;
  imageUrl: string;
  bidsCount: number;
  memberOnly?: boolean;
  onBid?: () => void;
  onWatchVideo?: () => void;
}

export const AuctionCard: React.FC<AuctionCardProps> = ({
  code,
  title,
  currentBid,
  initialPrice,
  countdown,
  bloodline,
  weight,
  age,
  imageUrl,
  bidsCount,
  memberOnly = true,
  onBid,
  onWatchVideo,
}) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#121824] border border-gray-800 shadow-lg flex flex-col group hover:border-rose-500/40 transition-all text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-3.5 py-1.5 flex items-center justify-between text-[11px] font-semibold text-white">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          ห้องประมูลสด (Live Auction)
        </span>
        <span>{code}</span>
      </div>

      {/* Media Box */}
      <div className="relative h-56 bg-gray-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
          {memberOnly && (
            <Badge variant="dark" size="sm">
              🔒 สิทธิพิเศษเฉพาะ Member
            </Badge>
          )}
        </div>

        <div className="absolute top-2.5 right-2.5">
          <Badge variant="danger" size="sm">
            ⏱️ เหลือ {countdown}
          </Badge>
        </div>

        {/* Bottom specs overlay */}
        <div className="absolute bottom-2.5 left-3 right-3 text-xs flex justify-between items-end">
          <div>
            <div className="text-[11px] text-gray-300">สายเลือด: {bloodline}</div>
            <div className="text-[11px] text-gray-400">
              น้ำหนัก: {weight} | อายุ: {age}
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-400">เคาะแล้ว</span>
            <div className="text-amber-400 font-bold">{formatNumber(bidsCount)} ครั้ง</div>
          </div>
        </div>
      </div>

      {/* Details & Bidding panel */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-[#131b2b]">
        <h3 className="font-bold text-sm text-white line-clamp-1 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-lg border border-gray-800">
          <div>
            <div className="text-[10px] text-gray-400">ราคาปัจจุบัน</div>
            <div className="text-lg font-extrabold text-amber-400">
              {formatCurrency(currentBid)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-400">ราคาเปิด</div>
            <div className="text-xs text-gray-300">{formatCurrency(initialPrice)}</div>
          </div>
        </div>

        {/* Bid Actions */}
        <div className="flex items-center gap-2 pt-1">
          <Button
            onClick={onBid}
            className="flex-1 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold"
            size="sm"
          >
            🔨 เคาะสู้ราคา (+500)
          </Button>
          <Button onClick={onWatchVideo} variant="dark" size="sm">
            ดูวิดีโอ
          </Button>
        </div>
      </div>
    </div>
  );
};

