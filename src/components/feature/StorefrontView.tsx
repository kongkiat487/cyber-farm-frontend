"use client";

import React, { useState } from "react";
import { useStorefront } from "@/hook/useStorefront";
import { useChickenDetail } from "@/hook/useChickenDetail";
import { TopBar } from "./TopBar";
import { HeaderNav } from "./HeaderNav";
import { HeroBanner } from "./HeroBanner";
import { CategorySection } from "./CategorySection";
import { LiveAuctionSection } from "./LiveAuctionSection";
import { ChickenCard } from "./ChickenCard";
import { EggCard } from "./EggCard";
import { MedicalCard } from "./MedicalCard";
import { PedigreeSection } from "./PedigreeSection";
import { LiveTrackingSection } from "./LiveTrackingSection";
import { Footer } from "./Footer";
import { ChickenDetailModal } from "./ChickenDetailModal";
import { ChickenForm } from "./ChickenForm";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export const StorefrontView: React.FC = () => {
  const {
    cartCount,
    chickenList,
    eggList,
    medicalList,
    auctionList,
    addToCart,
  } = useStorefront();

  const chickenDetail = useChickenDetail();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* 1. Production Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <HeaderNav cartCount={cartCount} notificationCount={2} />

      {/* 3. Main Storefront Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 pb-16">
        {/* SECTION 1: Hero Banner */}
        <section id="hero">
          <HeroBanner
            onPrimaryAction={() => {
              document.getElementById("live-chickens")?.scrollIntoView({ behavior: "smooth" });
            }}
            onSecondaryAction={() => {
              document.getElementById("eggs")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMemberAction={() => {
              document.getElementById("auction")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </section>

        {/* SECTION 2: Category Hub */}
        <section id="categories">
          <CategorySection />
        </section>

        {/* SECTION 3: Live Auction Room */}
        <section id="auction" className="scroll-mt-20">
          <LiveAuctionSection auctions={auctionList} />
        </section>

        {/* SECTION 4: Live Chickens */}
        <section id="live-chickens" className="space-y-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🐓</span>
                <h2 className="text-xl font-bold text-white">ไก่ชนมีชีวิตพร้อมขาย (Live Gamecocks)</h2>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  มีคลิปเตะเป้าทุกตัว
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                คัดเกรดพิเศษผ่านการเตะเป้าทดสอบเชิงชน รับประกันสายเลือดตรงปกทุกตัว
              </p>
            </div>
            <button className="text-xs text-amber-400 hover:underline self-start sm:self-auto cursor-pointer">
              ดูไก่ชนทั้งหมด ({chickenList.length}) →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chickenList.map((chicken) => (
              <ChickenCard
                key={chicken.id}
                product={chicken}
                onClick={() => {
                  chickenDetail.openDetail({
                    id: chicken.id,
                    code: chicken.code,
                    name: chicken.name,
                    breedType: chicken.bloodline,
                    weight: chicken.weight,
                    age: chicken.age,
                    winCount: 3,
                    price: chicken.price,
                    status: chicken.status,
                    images: [chicken.imageUrl],
                  });
                }}
                onSelect={addToCart}
                onWatchVideo={(item) => alert(`รับชมวิดีโอคลิปเตะเป้าของ: ${item.name}`)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 5: Champion Egg Breeding Pairs */}
        <section id="eggs" className="space-y-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🥚</span>
                <h2 className="text-xl font-bold text-white">ไข่เชื้อสายเลือดแชมป์ (Champion Pedigree Eggs)</h2>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  รับประกันมีเชื้อ 100%
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                ผสมจากพ่อ-แม่พันธุ์เงินล้านชั้นยอด จัดส่งในกล่องโฟมกันกระแทกสุญญากาศ
              </p>
            </div>
            <button className="text-xs text-emerald-400 hover:underline self-start sm:self-auto cursor-pointer">
              ดูคู่ผสมทั้งหมด →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eggList.map((egg) => (
              <EggCard key={egg.id} egg={egg} onReserve={addToCart} />
            ))}
          </div>
        </section>

        {/* SECTION 6: Farm Equipment & Medical */}
        <section id="medical" className="space-y-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💊</span>
                <h2 className="text-xl font-bold text-white">อุปกรณ์ & เวชภัณฑ์มาตรฐานฟาร์ม (Farm Supplies)</h2>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                ยาสมุนไพรบำรุงกำลัง วิตามิน และอุปกรณ์ฝึกซ้อมเกรดบ่อนชนมาตรฐาน
              </p>
            </div>
            <button className="text-xs text-blue-400 hover:underline self-start sm:self-auto cursor-pointer">
              ดูเวชภัณฑ์ทั้งหมด →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {medicalList.map((med) => (
              <MedicalCard key={med.id} product={med} onAddToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* SECTION 7: Pedigree Tree */}
        <section id="pedigree" className="scroll-mt-20">
          <PedigreeSection />
        </section>

        {/* SECTION 8: Live Climate Van Tracking */}
        <section id="tracking" className="scroll-mt-20">
          <LiveTrackingSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Chicken Detail Modal */}
      <ChickenDetailModal detailHook={chickenDetail} />

      {/* Chicken Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="เพิ่ม / แก้ไขข้อมูลไก่ชน (Farm Inventory)"
      >
        <ChickenForm
          onSubmit={(data) => {
            alert(`บันทึกข้อมูลสำเร็จ: ${data.name || "ไก่ชน"}`);
            setIsFormOpen(false);
          }}
          onCancel={() => setIsFormOpen(false)}
        />
      </Modal>

      {/* Floating Action Button for Inventory Form */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="amber"
          className="shadow-2xl font-bold flex items-center gap-2 px-4 py-3 rounded-full text-sm hover:scale-105 transition-transform"
          onClick={() => setIsFormOpen(true)}
        >
          <span>➕</span>
          <span>เพิ่มข้อมูลไก่ชน</span>
        </Button>
      </div>
    </div>
  );
};
