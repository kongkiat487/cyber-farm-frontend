"use client";

import React, { useState } from "react";
import {
  Button,
  Input,
  Badge,
  Card,
  CategoryCard,
  AuctionCard,
  RoleSwitcher,
  HeroBanner,
  TopBar,
  HeaderNav,
  Footer,
} from "@/components/Base";

type TabKey = "ui" | "farm" | "layout";

export default function ComponentGalleryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("ui");
  const [role, setRole] = useState<"guest" | "member" | "admin">("guest");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      {/* Gallery Header */}
      <div className="bg-[#111827] border-b border-gray-800 px-6 py-4 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🧩</span>
            <h1 className="text-lg font-bold text-white tracking-wide">
              Cyber Farm — Component Catalog / Gallery
            </h1>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            หน้านี้สร้างขึ้นสำหรับทดสอบและพรีวิว Components ใน <code>@/components/Base</code>
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-[#1a2335] p-1 rounded-xl border border-gray-700 text-xs font-medium">
          <button
            onClick={() => setActiveTab("ui")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "ui"
                ? "bg-amber-500 text-black font-bold shadow-sm"
                : "text-gray-300 hover:text-white"
            }`}
          >
            1. Base UI (Button/Input/Badge/Card)
          </button>
          <button
            onClick={() => setActiveTab("farm")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "farm"
                ? "bg-amber-500 text-black font-bold shadow-sm"
                : "text-gray-300 hover:text-white"
            }`}
          >
            2. Farm Components (Category/Auction/Hero/Switcher)
          </button>
          <button
            onClick={() => setActiveTab("layout")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "layout"
                ? "bg-amber-500 text-black font-bold shadow-sm"
                : "text-gray-300 hover:text-white"
            }`}
          >
            3. Layout (TopBar/HeaderNav/Footer)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-8 space-y-8">
        {/* ================= TAB 1: BASE UI ================= */}
        {activeTab === "ui" && (
          <div className="space-y-8">
            {/* Button Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🔘</span> Component: &lt;Button /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/Button.tsx</code></p>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-semibold block mb-2">Variants:</span>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="amber">variant=&quot;amber&quot;</Button>
                  <Button variant="primary">variant=&quot;primary&quot;</Button>
                  <Button variant="secondary">variant=&quot;secondary&quot;</Button>
                  <Button variant="danger">variant=&quot;danger&quot;</Button>
                  <Button variant="dark">variant=&quot;dark&quot;</Button>
                  <Button variant="outline">variant=&quot;outline&quot;</Button>
                  <Button variant="amber" disabled>disabled</Button>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-semibold block mb-2">Sizes:</span>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="amber" size="sm">size=&quot;sm&quot;</Button>
                  <Button variant="amber" size="md">size=&quot;md&quot;</Button>
                  <Button variant="amber" size="lg">size=&quot;lg&quot;</Button>
                </div>
              </div>
            </div>

            {/* Input Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>⌨️</span> Component: &lt;Input /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/Input.tsx</code></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="ช่องค้นหา / ข้อความทั่วไป"
                  placeholder="พิมพ์ข้อความที่ต้องการทดสอบ..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  helperText="มี helper text ด้านล่าง"
                />
                <Input
                  label="ช่องที่มี Error State"
                  defaultValue="ข้อมูลผิดพลาด"
                  error="รูปแบบข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง"
                />
              </div>
            </div>

            {/* Badge Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🏷️</span> Component: &lt;Badge /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/Badge.tsx</code></p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="warning">variant=&quot;warning&quot;</Badge>
                <Badge variant="danger" pulse>variant=&quot;danger&quot; + pulse</Badge>
                <Badge variant="success">variant=&quot;success&quot;</Badge>
                <Badge variant="primary">variant=&quot;primary&quot;</Badge>
                <Badge variant="dark">variant=&quot;dark&quot;</Badge>
                <Badge variant="neutral">variant=&quot;neutral&quot;</Badge>
              </div>
            </div>

            {/* Card Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>📦</span> Component: &lt;Card /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/Card.tsx</code></p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card variant="dark" hoverable className="p-4">
                  <h3 className="font-bold text-sm text-amber-400">Card (variant=&quot;dark&quot;, hoverable)</h3>
                  <p className="text-xs text-gray-400 mt-1">สามารถนำเมาส์มา hover ดูเอฟเฟกต์การเคลื่อนไหวได้</p>
                </Card>
                <Card variant="bordered" className="p-4">
                  <h3 className="font-bold text-sm text-gray-200">Card (variant=&quot;bordered&quot;)</h3>
                  <p className="text-xs text-gray-400 mt-1">กล่องสไตล์ขอบโปร่งใสแบบเรียบง่าย</p>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: FARM SPECIFIC COMPONENTS ================= */}
        {activeTab === "farm" && (
          <div className="space-y-8">
            {/* CategoryCard Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🃏</span> Component: &lt;CategoryCard /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/CategoryCard.tsx</code></p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <CategoryCard
                  icon="🐓"
                  title="ไก่ชนมีชีวิต"
                  subtitle="คลิปเตะเป้า + สายเลือด"
                  badge="4 ตัว"
                  badgeVariant="warning"
                />
                <CategoryCard
                  icon="🥚"
                  title="ไข่เชื้อพร้อมเพาะ"
                  subtitle="ราคา Tier 1/3/5 ฟอง"
                  badge="2 สุ่มผสม"
                  badgeVariant="success"
                />
                <CategoryCard
                  icon="🔴"
                  title="ถ่ายทอดสด & บัตร"
                  subtitle="บัตรสด / ดูย้อนหลัง"
                  badge="Member Live"
                  badgeVariant="danger"
                  active
                />
              </div>
            </div>

            {/* AuctionCard Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🔨</span> Component: &lt;AuctionCard /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/AuctionCard.tsx</code></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AuctionCard
                  code="รหัส AUC-001"
                  title="เจ้าพยัคฆ์ดำ แข้งหน้าจัด ปากไว เชิงบนดีเยี่ยม"
                  currentBid={32000}
                  initialPrice={15000}
                  countdown="01:24:18"
                  bloodline="ยอดมงคล + ม้าสีหมอก (3 รุ่น)"
                  weight="2.85 กก."
                  age="11 เดือน"
                  imageUrl="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"
                  bidsCount={14}
                  memberOnly
                  onBid={() => alert("คลิกเคาะราคา AUC-001")}
                  onWatchVideo={() => alert("เปิดคลิปวิดีโอ")}
                />
              </div>
            </div>

            {/* RoleSwitcher Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🎛️</span> Component: &lt;RoleSwitcher /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/RoleSwitcher.tsx</code></p>
              </div>

              <div className="p-4 bg-gray-950/60 rounded-xl flex flex-col items-center gap-3">
                <RoleSwitcher
                  currentRole={role}
                  onRoleChange={(newRole) => setRole(newRole)}
                  onOpenDepositCalc={() => alert("คลิกคำนวณมัดจำ")}
                />
                <span className="text-xs text-gray-400">
                  Role ที่เลือกอยู่ขณะนี้: <b className="text-amber-400">{role}</b>
                </span>
              </div>
            </div>

            {/* HeroBanner Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>📢</span> Component: &lt;HeroBanner /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/ui/HeroBanner.tsx</code></p>
              </div>

              <HeroBanner
                onPrimaryAction={() => alert("คลิก: ชมไก่ชนพร้อมขาย")}
                onSecondaryAction={() => alert("คลิก: จองไข่เชื้อ")}
                onMemberAction={() => alert("คลิก: ห้องประมูล")}
              />
            </div>
          </div>
        )}

        {/* ================= TAB 3: LAYOUT COMPONENTS ================= */}
        {activeTab === "layout" && (
          <div className="space-y-8">
            {/* TopBar Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🔝</span> Component: &lt;TopBar /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/layout/TopBar.tsx</code></p>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-800">
                <TopBar currentRole={role} onRoleChange={setRole} />
              </div>
            </div>

            {/* HeaderNav Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🧭</span> Component: &lt;HeaderNav /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/layout/HeaderNav.tsx</code></p>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-800">
                <HeaderNav cartCount={3} notificationCount={1} />
              </div>
            </div>

            {/* Footer Component */}
            <div className="p-6 rounded-2xl bg-[#141b2a] border border-gray-800 space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <h2 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>🔻</span> Component: &lt;Footer /&gt;
                </h2>
                <p className="text-xs text-gray-400">Path: <code>components/Base/layout/Footer.tsx</code></p>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-800">
                <Footer />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

