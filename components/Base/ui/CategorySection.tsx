import React from "react";
import { CategoryItem } from "@/types";

interface CategorySectionProps {
  categories?: CategoryItem[];
}

const defaultCategories: CategoryItem[] = [
  {
    id: "live-chicken",
    name: "ไก่ชนมีชีวิต",
    subtitle: "คลิปเตะเป้า + สายเลือด",
    icon: "🐓",
    badge: "4 ตัว",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  },
  {
    id: "eggs",
    name: "ไข่เชื้อพร้อมเพาะ",
    subtitle: "ราคา Tier 1/3/5 ฟอง",
    icon: "🥚",
    badge: "2 สุ่มผสม",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  },
  {
    id: "live-stream",
    name: "ถ่ายทอดสด & บัตร",
    subtitle: "บัตรสด / ดูย้อนหลัง",
    icon: "🔴",
    badge: "Member Live",
    badgeColor: "bg-rose-500 text-white border-rose-600",
    active: true,
  },
  {
    id: "auctions",
    name: "ห้องประมูลไก่",
    subtitle: "เฉพาะสมาชิกเท่านั้น",
    icon: "🔨",
    badge: "เสนอราคา",
    badgeColor: "bg-amber-500 text-black border-amber-600 font-semibold",
  },
  {
    id: "medical",
    name: "อุปกรณ์ & เวชภัณฑ์",
    subtitle: "ยาบำรุง, วิตามิน, นวม",
    icon: "💊",
    badge: "5 รายการ",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  },
  {
    id: "bloodline",
    name: "ผังสายเลือด",
    subtitle: "พันธุกรรมย้อนหลัง 3 รุ่น",
    icon: "🌳",
    badge: "สืบสาย 3 รุ่น",
    badgeColor: "bg-amber-500 text-black border-amber-600 font-semibold",
  },
];

export const CategorySection: React.FC<CategorySectionProps> = ({
  categories = defaultCategories,
}) => {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-amber-500">⚡</span>
          <h2 className="text-base sm:text-lg font-bold text-white">
            หมวดหมู่หลักของฟาร์ม
          </h2>
        </div>
        <button className="text-xs text-gray-400 hover:text-amber-400 transition-colors">
          เลือกดูสินค้าตามประเภท →
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`relative p-3.5 rounded-xl border transition-all cursor-pointer bg-[#141b2a] hover:bg-[#1a2337] hover:border-amber-400/50 ${
              cat.active
                ? "border-rose-500 bg-[#1e1724] ring-1 ring-rose-500/30"
                : "border-gray-800"
            }`}
          >
            {/* Badge top-right */}
            {cat.badge && (
              <span
                className={`absolute top-2.5 right-2.5 text-[9px] font-semibold px-1.5 py-0.5 rounded border ${
                  cat.badgeColor || "bg-gray-800 text-gray-300 border-gray-700"
                }`}
              >
                {cat.badge}
              </span>
            )}

            <div className="text-2xl mb-2">{cat.icon}</div>
            <div className="font-bold text-sm text-white leading-snug">
              {cat.name}
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
              {cat.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
