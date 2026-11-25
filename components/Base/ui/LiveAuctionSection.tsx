import React from "react";
import { AuctionCardItem } from "@/types";
import { formatCurrency, formatNumber } from "@/lib";

interface LiveAuctionSectionProps {
  auctions?: AuctionCardItem[];
}

const defaultAuctions: AuctionCardItem[] = [
  {
    id: "auc-001",
    code: "รหัส AUC-001",
    title: "เจ้าพยัคฆ์ดำ แข้งหน้าจัด ปากไว เชิงบนดีเยี่ยม",
    currentBid: 32000,
    initialPrice: 15000,
    countdown: "01:24:18",
    bloodline: "ยอดมงคล + ม้าสีหมอก (3 รุ่น)",
    weight: "2.85 กก.",
    age: "11 เดือน",
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    status: "live",
    bidsCount: 14,
  },
  {
    id: "auc-002",
    code: "รหัส AUC-002",
    title: "เจ้าหยกคีรี ลีลาพริ้ว วิ่งสาดแข้ง ตีเจ็บลึก",
    currentBid: 28500,
    initialPrice: 12000,
    countdown: "02:45:10",
    bloodline: "หยกคีรีแท้ 100% สายเลือดแชมป์",
    weight: "2.70 กก.",
    age: "10 เดือน",
    imageUrl: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=600&q=80",
    status: "live",
    bidsCount: 9,
  },
];

export const LiveAuctionSection: React.FC<LiveAuctionSectionProps> = ({
  auctions = defaultAuctions,
}) => {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#351016] via-[#1a121d] to-[#0f1422] border border-rose-900/40 p-5 sm:p-6 text-white space-y-5 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-rose-900/30 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>ห้องประมูลสดออนไลน์ (Live Auction - สิทธิ์เฉพาะ Member)</span>
            </span>
          </div>
          <p className="text-xs text-rose-200/80 mt-1">
            เปิดประมูลสายพันธุ์ระดับท็อปฟาร์ม ผู้ใช้ทั่วไปดูได้แต่ต้องเป็น Member ถึงจะร่วมเคาะราคาได้
          </p>
        </div>

        <button className="self-start sm:self-center flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-700/80 hover:bg-rose-600 text-xs font-semibold transition-all">
          <span>เข้าสู่ห้องประมูลเต็มรูปแบบ</span>
          <span>→</span>
        </button>
      </div>

      {/* Auction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {auctions.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden bg-[#121824] border border-gray-800 shadow-lg flex flex-col group hover:border-rose-500/40 transition-all"
          >
            {/* Top Badge Banner */}
            <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-3.5 py-1.5 flex items-center justify-between text-[11px] font-semibold text-white">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                ห้องประมูลสด (Live Auction)
              </span>
              <span>{item.code}</span>
            </div>

            {/* Media Box & Info overlay */}
            <div className="relative h-56 bg-gray-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Status Tags on Image */}
              <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                <span className="bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span>🔒</span> สิทธิพิเศษเฉพาะ Member
                </span>
              </div>

              <div className="absolute top-2.5 right-2.5">
                <span className="bg-rose-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  ⏱️ เหลือ {item.countdown}
                </span>
              </div>

              {/* Bottom specs in image */}
              <div className="absolute bottom-2.5 left-3 right-3 text-xs flex justify-between items-end">
                <div>
                  <div className="text-[11px] text-gray-300">สายเลือด: {item.bloodline}</div>
                  <div className="text-[11px] text-gray-400">
                    น้ำหนัก: {item.weight} | อายุ: {item.age}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400">เคาะแล้ว</span>
                  <div className="text-amber-400 font-bold">{formatNumber(item.bidsCount)} ครั้ง</div>
                </div>
              </div>
            </div>

            {/* Details & Bidding panel */}
            <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-[#131b2b]">
              <div>
                <h3 className="font-bold text-sm text-white line-clamp-1 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-lg border border-gray-800">
                <div>
                  <div className="text-[10px] text-gray-400">ราคาปัจจุบัน</div>
                  <div className="text-lg font-extrabold text-amber-400">
                    {formatCurrency(item.currentBid)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-400">ราคาเปิด</div>
                  <div className="text-xs text-gray-300">{formatCurrency(item.initialPrice)}</div>
                </div>
              </div>

              {/* Bid Action */}
              <div className="flex items-center gap-2 pt-1">
                <button className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5">
                  <span>🔨</span>
                  <span>เคาะสู้ราคา (+500)</span>
                </button>
                <button className="py-2 px-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs border border-gray-700">
                  ดูวิดีโอ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

