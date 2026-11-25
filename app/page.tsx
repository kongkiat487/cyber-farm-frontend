"use client";

import React, { useState } from "react";
import {
  TopBar,
  HeaderNav,
  HeroBanner,
  CategorySection,
  LiveAuctionSection,
  ChickenCard,
  EggCard,
  MedicalCard,
  PedigreeSection,
  LiveTrackingSection,
  ChickenDetailModal,
  ChickenForm,
  Card,
  Button,
  Footer,
} from "@/components/Base";
import { useChickenDetail } from "@/hooks/useChickenDetail";
import {
  ChickenDetailItem,
  ChickenProduct,
  EggProduct,
  MedicalProduct,
} from "@/types";

const mockChickens: ChickenProduct[] = [
  {
    id: "chk-881",
    code: "#CF-881",
    name: "เจ้าพายุสายฟ้า",
    fightStyle: "ม้าล่อสปีด แข้งหน้าที่จัด ชิ่งซ้ายขวา",
    price: 35000,
    originalPrice: 42000,
    imageUrl:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    weight: "2.7 กก.",
    age: "10 เดือน",
    bloodline: "พม่ารำวงลูกผสม (F3)",
    winStats: "ชนะ 3 ไฟต์บ่อนมาตรฐาน",
    status: "reserved",
  },
  {
    id: "chk-101",
    code: "CF-101",
    name: "เจ้าเสือดำ แข้งหน้าถี่ ปากไว",
    fightStyle: "ม้าล่อรำวง + เหลี่ยมชนจัด",
    price: 35000,
    originalPrice: 42000,
    imageUrl:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    weight: "2.85 กก.",
    age: "11 เดือน",
    bloodline: "ยอดมงคล + ม้าสีหมอก",
    winStats: "ชนะ 2 ไฟต์บ่อนมาตรฐาน",
    status: "available",
  },
  {
    id: "chk-102",
    code: "CF-102",
    name: "เจ้าหยกเพชร ลีลาพริ้ว สาดแข้งคม",
    fightStyle: "พม่าลูกผสม เชิงบนชัดเจน",
    price: 28000,
    imageUrl:
      "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=600&q=80",
    weight: "2.70 กก.",
    age: "10 เดือน",
    bloodline: "หยกคีรีแท้ 100%",
    winStats: "เตะเป้าผ่านเกณฑ์เกรด A",
    status: "available",
  },
  {
    id: "chk-103",
    code: "CF-103",
    name: "เจ้าสายฟ้า กัดเจ็บ แทงลึก",
    fightStyle: "ป่าก๋อยพัฒนา ตีตัวหัก",
    price: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=600&q=80",
    weight: "2.95 กก.",
    age: "13 เดือน",
    bloodline: "ก๋อยเพชรดำ + เทพลีลา",
    winStats: "ชนะ 3 ไฟต์ (ติดจอง)",
    status: "reserved",
  },
];

const mockEggs: EggProduct[] = [
  {
    id: "egg-01",
    code: "PAIR-YOK-99",
    pairName: "คู่ผสมเงินล้าน: พ่อหยกคีรี X แม่กุหลาบทอง",
    fatherBloodline: "เจ้าหยกคีรี (ยอดสถิติแชมป์)",
    motherBloodline: "แม่กุหลาบทอง (ธิดามังกรขาว)",
    pricePerEgg: 3500,
    tier: "Tier VIP",
    guaranteeRate: "85%",
    availableCount: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "egg-02",
    code: "PAIR-MONG-02",
    pairName: "คู่ผสมเกรดเพาะ: พ่อยอดมงคล X แม่แสงจันทร์",
    fatherBloodline: "เจ้ายอดมงคล (แชมป์เทิดไท)",
    motherBloodline: "แม่แสงจันทร์ (สายม้าสีหมอก)",
    pricePerEgg: 2200,
    tier: "Tier 1",
    guaranteeRate: "80%",
    availableCount: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "egg-03",
    code: "PAIR-KOY-05",
    pairName: "คู่ผสมก๋อยท็อป: พ่อก๋อยเพชรดำ X แม่ทองพันชั่ง",
    fatherBloodline: "ก๋อยเพชรดำ (สายตีหลังหัก)",
    motherBloodline: "แม่ทองพันชั่ง (จ่ายลูกเบอร์แข้งจัด)",
    pricePerEgg: 1800,
    tier: "Tier 2",
    guaranteeRate: "75%",
    availableCount: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80",
  },
];

const mockMedicals: MedicalProduct[] = [
  {
    id: "med-01",
    name: "สมุนไพรบำรุงกำลัง ไซเบอร์ เพาเวอร์ (Cyber Power)",
    category: "บำรุงกำลัง",
    price: 450,
    rating: 4.9,
    soldCount: 1240,
    description: "บำรุงเลือด กำลังบินไม่ตก ฟื้นตัวเร็วหลังฝึกซ้อม",
    imageUrl:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "med-02",
    name: "สเปรย์ห้ามเลือด & สมานแผลสด สูตรนาโนแคร์",
    category: "รักษาแผล",
    price: 320,
    rating: 4.8,
    soldCount: 850,
    description: "แห้งไว ไม่แสบ ฆ่าเชื้อแบคทีเรีย ป้องกันการอักเสบ",
    imageUrl:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "med-03",
    name: "นวมครอบเดือยอย่างดี หนังแท้เกรดฟาร์มแข่ง",
    category: "อุปกรณ์ฝึกซ้อม",
    price: 290,
    rating: 4.9,
    soldCount: 2100,
    description: "ซับแรงกระแทกได้ยอดเยี่ยม ไม่ทำให้คู่ซ้อมบาดเจ็บ",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "med-04",
    name: "วิตามินเข้มข้น แคลเซียมเสริมสร้างกระดูกและเดือย",
    category: "วิตามิน",
    price: 390,
    rating: 4.7,
    soldCount: 920,
    description: "สร้างความแข็งแกร่งของกระดูกแข้งและปากเดือย",
    imageUrl:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomePage() {
  const chickenDetail = useChickenDetail();
  const [showAdminForm, setShowAdminForm] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(1);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  const handleOpenChicken = (chicken: ChickenProduct) => {
    chickenDetail.openDetail({
      ...chickenDetail.chicken,
      id: chicken.id,
      code: chicken.code,
      name: chicken.name,
      price: chicken.price,
      weight: chicken.weight,
      age: chicken.age,
      fightingStyleDetail: chicken.fightStyle,
      status: chicken.status,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* 1. Production Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <HeaderNav cartCount={cartCount} notificationCount={2} />

      {/* 3. Main Unified Storefront Dashboard Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 pb-16">
        {/* Quick Dashboard Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#141b2a] border border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎛️</span>
            <div>
              <div className="text-sm font-bold text-white">
                Dashboard Action & Detail Preview
              </div>
              <div className="text-xs text-gray-400">
                คลิกที่การ์ดไก่ชน หรือคลิกปุ่มด้านขวาเพื่อเปิดดู Popup รายละเอียดตามรูปภาพ
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="amber"
              size="sm"
              onClick={() => chickenDetail.openDetail()}
            >
              👁️ ดู Popup รายละเอียด #CF-881
            </Button>
            <Button
              variant="dark"
              size="sm"
              onClick={() => setShowAdminForm((prev) => !prev)}
            >
              {showAdminForm ? "ซ่อนฟอร์มแก้ไข" : "✏️ ฟอร์มแก้ไขข้อมูลไก่ชน"}
            </Button>
          </div>
        </div>

        {/* Form จัดการไก่ชน ผูกกับ UI Dashboard */}
        {showAdminForm && (
          <Card variant="dark" className="p-6 space-y-4 border-amber-500/40">
            <div className="border-b border-gray-800 pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <span>📝</span> ฟอร์มจัดการและแก้ไขข้อมูลไก่ชน (Chicken Management Form)
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  เชื่อมโยงกับ State และข้อมูลของไก่ชนในระบบ
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdminForm(false)}
              >
                ปิดฟอร์ม
              </Button>
            </div>

            <ChickenForm
              initialData={chickenDetail.chicken}
              onSubmit={(updatedData) => {
                chickenDetail.openDetail({
                  ...chickenDetail.chicken,
                  ...updatedData,
                } as ChickenDetailItem);
                alert("บันทึกข้อมูลและอัปเดต Popup รายละเอียดเรียบร้อยแล้ว");
              }}
              onCancel={() => setShowAdminForm(false)}
            />
          </Card>
        )}

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
          <LiveAuctionSection />
        </section>

        {/* SECTION 4: Live Chickens */}
        <section id="live-chickens" className="space-y-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🐓</span>
                <h2 className="text-xl font-bold text-white">ไก่ชนมีชีวิตพร้อมขาย (Live Gamecocks)</h2>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  คลิกที่การ์ดเพื่อดูรายละเอียด
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                คลิกที่ตัวการ์ดไก่ชน หรือปุ่มคลิปเป้า เพื่อเปิดดูรายละเอียดเชิงลึกและผังสายเลือด
              </p>
            </div>
            <button className="text-xs text-amber-400 hover:underline self-start sm:self-auto cursor-pointer">
              ดูไก่ชนทั้งหมด ({mockChickens.length}) →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockChickens.map((chicken) => (
              <ChickenCard
                key={chicken.id}
                product={chicken}
                onClick={handleOpenChicken}
                onSelect={(item) => {
                  handleOpenChicken(item);
                }}
                onWatchVideo={(item) => {
                  handleOpenChicken(item);
                  chickenDetail.setActiveTab("video");
                }}
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
            {mockEggs.map((egg) => (
              <EggCard key={egg.id} egg={egg} onReserve={handleAddToCart} />
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
            {mockMedicals.map((med) => (
              <MedicalCard key={med.id} product={med} onAddToCart={handleAddToCart} />
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

      {/* 4. Chicken Detail Modal Popup (ตามรูปภาพเป๊ะๆ) */}
      <ChickenDetailModal detailHook={chickenDetail} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
