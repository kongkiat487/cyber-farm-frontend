"use client";

import React from "react";
import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  active?: boolean;
  highlight?: boolean;
}

const navItems: NavItem[] = [
  { id: "home", label: "หน้าแรก", icon: "🏠", href: "/", active: true },
  { id: "chickens", label: "ไก่ชนมีชีวิต", icon: "🐓", href: "#chickens" },
  { id: "eggs", label: "ไข่เชื้อพร้อมเพาะ", icon: "🥚", href: "#eggs" },
  { id: "equipments", label: "อุปกรณ์ & เวชภัณฑ์", icon: "💊", href: "#equipments" },
  { id: "auctions", label: "ประมูล", icon: "🔨", href: "#auctions" },
  { id: "live", label: "ถ่ายทอดสด", icon: "🔴", href: "#live", highlight: true },
];

export interface HeaderNavProps {
  cartCount?: number;
  notificationCount?: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  cartCount = 1,
  notificationCount = 2,
}) => {
  return (
    <header className="w-full bg-[#111827] text-white border-b border-gray-800 shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shadow-inner shadow-amber-500/20">
            🐓
          </div>
          <div className="leading-tight">
            <div className="text-base font-extrabold tracking-wide text-white flex items-center gap-1.5">
              <span>CYBER</span>
              <span className="text-amber-400">GAMECOCK</span>
            </div>
            <div className="text-[10px] text-amber-400/90 font-light tracking-wide">
              ฟาร์มมาตรฐานสากล
            </div>
          </div>
        </Link>

        {/* Center Nav tabs */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                item.active
                  ? "bg-gray-800 text-amber-400 border border-gray-700/60 shadow-sm"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/60"
              }`}
            >
              <span className={`text-base ${item.highlight ? "animate-pulse" : ""}`}>
                {item.icon}
              </span>
              <span className="mt-0.5 text-[11px] whitespace-nowrap">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 text-xs">
          <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/80 hover:bg-gray-800 border border-gray-700 text-gray-200">
            <span>👤</span>
            <span>เข้าสู่ระบบ / สมาชิก</span>
          </button>
          <button className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-800/60 hover:bg-gray-800 text-gray-300 border border-gray-700/60">
            <span>📄</span>
            <span>ใบเสร็จ</span>
          </button>
          <button className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-800/60 hover:bg-gray-800 text-gray-300 border border-gray-700/60">
            <span>💬</span>
            <span>ติดตามขนส่ง</span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg bg-gray-800/60 hover:bg-gray-800 text-gray-300 border border-gray-700/60">
            <span>🔔</span>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                {notificationCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-semibold shadow-md shadow-amber-500/20 transition-all">
            <span>🛒</span>
            <span>ตะกร้า</span>
            <span className="ml-1 bg-black text-amber-400 px-1.5 py-0.2 rounded-full text-[10px] font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

