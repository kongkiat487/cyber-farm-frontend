import React from "react";

export interface HeroBannerProps {
  badgeText?: string;
  title?: React.ReactNode;
  description?: string;
  primaryActionText?: string;
  onPrimaryAction?: () => void;
  secondaryActionText?: string;
  onSecondaryAction?: () => void;
  memberActionText?: string;
  onMemberAction?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  badgeText = "แพลตฟอร์มไก่ชนพันธุ์แท้ มาตรฐานระดับประเทศ",
  title = (
    <>
      ศูนย์รวมยอดสายพันธุ์เงินล้าน
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 mt-1">
        ผังสายเลือด 3 รุ่น รับรองแท้ 100%
      </span>
    </>
  ),
  description = "สัมผัสประสบการณ์สั่งซื้อครบวงจร ทั้งไก่ชนมีชีวิตพร้อมคลิปเตะเป้า, ไข่เชื้อสายเลือดแชมป์พร้อมประกัน, และเวชภัณฑ์มาตรฐานฟาร์ม พร้อมบริการจัดส่งด้วยรถตู้ติดแอร์ดูแลตลอดทาง",
  primaryActionText = "ชมไก่ชนพร้อมขาย →",
  onPrimaryAction,
  secondaryActionText = "จองไข่เชื้อเงินล้าน",
  onSecondaryAction,
  memberActionText = "ห้องประมูล (Member)",
  onMemberAction,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b101b] via-[#111928] to-[#1f1712] border border-gray-800/80 shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
      <div className="absolute right-4 sm:right-12 -bottom-10 opacity-15 pointer-events-none select-none text-[180px] sm:text-[240px] leading-none filter blur-[1px]">
        🐓
      </div>
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl space-y-5">
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-medium">
            <span>✨</span>
            <span>{badgeText}</span>
          </div>
        )}

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light pt-1">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {primaryActionText && (
            <button
              onClick={onPrimaryAction}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              {primaryActionText}
            </button>
          )}
          {secondaryActionText && (
            <button
              onClick={onSecondaryAction}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900/80 hover:bg-gray-800 text-white font-medium text-sm border border-gray-700/80 transition-all cursor-pointer"
            >
              {secondaryActionText}
            </button>
          )}
          {memberActionText && (
            <button
              onClick={onMemberAction}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
            >
              {memberActionText}
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30">
            <span>🔴</span>
            <span className="font-medium">ถ่ายทอดสด & ขายบัตร</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/70 text-amber-200 border border-gray-700">
            <span>💊</span>
            <span>อุปกรณ์ & เวชภัณฑ์</span>
          </span>
        </div>
      </div>
    </div>
  );
};

