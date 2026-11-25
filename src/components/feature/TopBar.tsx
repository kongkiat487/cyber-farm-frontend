import React from "react";
import Link from "next/link";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0e17] text-xs text-gray-300 border-b border-gray-800/80 px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Farm Platform Identity & Standard */}
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 text-[11px] tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            CYBER GAMECOCK
          </span>
          <span className="text-gray-400 hidden sm:inline text-[11px]">
            ระบบมาตรฐานฟาร์มระดับประเทศ (TOR Certified)
          </span>
          <span className="text-gray-600 hidden md:inline">•</span>
          <span className="text-emerald-400 hidden md:inline text-[11px] font-medium">
            🛡️ รับประกันสายเลือดแท้ 100% พร้อมใบ DNA
          </span>
        </div>

        {/* Right: Production Member Privileges & CTA */}
        <div className="flex items-center gap-3 text-[11px]">
          {/* Member Benefits Tag */}
          <div className="hidden lg:flex items-center gap-1.5 text-gray-400">
            <span>✨ สมัครสมาชิกรับส่วนลดทันที 5% ทุกออเดอร์</span>
          </div>

          <div className="h-3.5 w-[1px] bg-gray-800 hidden lg:block" />

          {/* Member Registration & Action Button (Production Look) */}
          <div className="flex items-center gap-2">
            <Link
              href="#member"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-semibold shadow-sm hover:shadow-amber-500/20 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>👑</span>
              <span>สมัครสมาชิก VIP</span>
              <span className="bg-black/80 text-amber-300 text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-0.5">
                ฟรี
              </span>
            </Link>

            <Link
              href="#login"
              className="px-2.5 py-1 rounded-full text-gray-300 hover:text-white hover:bg-gray-800/80 transition-colors"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
