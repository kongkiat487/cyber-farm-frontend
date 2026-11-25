import React from "react";

export interface RoleSwitcherProps {
  currentRole: "guest" | "member" | "admin";
  onRoleChange: (role: "guest" | "member" | "admin") => void;
  onOpenDepositCalc?: () => void;
}

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({
  currentRole,
  onRoleChange,
  onOpenDepositCalc,
}) => {
  return (
    <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#111827]/95 backdrop-blur-md border border-gray-700/80 shadow-2xl text-xs text-white">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
      >
        <span>📱</span>
        <span>Portal</span>
      </button>

      <button
        type="button"
        onClick={() => onRoleChange("guest")}
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all font-medium ${
          currentRole === "guest"
            ? "bg-sky-600 text-white shadow-sm font-semibold"
            : "text-gray-300 hover:text-white hover:bg-gray-800"
        }`}
      >
        <span>🌐</span>
        <span>Web (Guest)</span>
        <span className="bg-sky-800 text-sky-200 text-[9px] px-1.5 py-0.2 rounded-full font-bold ml-0.5">
          1
        </span>
      </button>

      <button
        type="button"
        onClick={() => onRoleChange("member")}
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all font-medium ${
          currentRole === "member"
            ? "bg-emerald-600 text-white shadow-sm font-semibold"
            : "text-gray-300 hover:text-white hover:bg-gray-800"
        }`}
      >
        <span>✨</span>
        <span>Member (-5%)</span>
      </button>

      <button
        type="button"
        className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
      >
        <span>📲</span>
        <span>Mobile</span>
      </button>

      <button
        type="button"
        onClick={() => onRoleChange("admin")}
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all font-medium ${
          currentRole === "admin"
            ? "bg-blue-600 text-white shadow-sm font-semibold"
            : "text-gray-300 hover:text-white hover:bg-gray-800"
        }`}
      >
        <span>💼</span>
        <span>Backoffice</span>
      </button>

      <div className="h-4 w-[1px] bg-gray-700 mx-1" />

      <button
        type="button"
        onClick={onOpenDepositCalc}
        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-amber-400 hover:bg-amber-500/10 transition-colors text-[11px]"
      >
        <span>💬</span>
        <span>คำนวณมัดจำ</span>
      </button>
    </div>
  );
};

