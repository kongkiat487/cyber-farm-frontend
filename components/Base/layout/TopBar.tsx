import React from "react";

export interface TopBarProps {
  currentRole?: "guest" | "member" | "admin";
  onRoleChange?: (role: "guest" | "member" | "admin") => void;
}

export const TopBar: React.FC<TopBarProps> = ({ currentRole = "guest", onRoleChange }) => {
  return (
    <div className="w-full bg-[#0d131f] text-xs text-gray-300 border-b border-gray-800/80 px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          CYBER FARM PLATFORM
        </span>
        <span className="text-gray-400 hidden sm:inline text-[11px]">
          | ระบบบริหารจัดการและซื้อ-ขายไก่ชนออนไลน์ (มาตรฐาน TOR)
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-[11px]">
        <button
          onClick={() => onRoleChange?.("guest")}
          className={`px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 font-medium ${
            currentRole === "guest"
              ? "bg-amber-500 text-black shadow-sm font-semibold"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <span>👤</span> ทั่วไป (Guest)
        </button>
        <button
          onClick={() => onRoleChange?.("member")}
          className={`px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 font-medium ${
            currentRole === "member"
              ? "bg-emerald-500 text-white shadow-sm font-semibold"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <span>⭐</span> สมาชิก (Member -5%)
        </button>
        <button
          onClick={() => onRoleChange?.("admin")}
          className={`px-2.5 py-0.5 rounded-full transition-all flex items-center gap-1 font-medium ${
            currentRole === "admin"
              ? "bg-blue-600 text-white shadow-sm font-semibold"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <span>🛡️</span> แอดมิน (Admin)
        </button>
        <button className="text-gray-400 hover:text-gray-200 ml-2 px-1 text-[11px] flex items-center gap-1">
          <span>🔄</span> รีเซ็ตข้อมูล
        </button>
      </div>
    </div>
  );
};

