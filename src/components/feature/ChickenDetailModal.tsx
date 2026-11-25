"use client";

import React from "react";
import { Modal } from "@/components/Base/ui/Modal";
import { Button } from "@/components/Base/ui/Button";
import { useChickenDetail } from "@/hooks/useChickenDetail";
import { formatNumber } from "@/lib/formatters";
import { PedigreeSection } from "@/components/Base/ui/PedigreeSection";

export interface ChickenDetailModalProps {
  detailHook?: ReturnType<typeof useChickenDetail>;
}

export const ChickenDetailModal: React.FC<ChickenDetailModalProps> = ({
  detailHook,
}) => {
  const defaultHook = useChickenDetail();
  const {
    chicken,
    isOpen,
    activeTab,
    selectedImageIndex,
    depositAmount,
    setActiveTab,
    closeDetail,
    selectImage,
    handleShare,
  } = detailHook || defaultHook;

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeDetail}
      onShare={handleShare}
      headerBadge={
        <div className="bg-amber-500 text-black font-extrabold text-xs px-2.5 py-1 rounded-md tracking-wider">
          {chicken.code}
        </div>
      }
      title={
        <span className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
          {chicken.name}
        </span>
      }
      footer={
        <>
          <div>
            <div className="text-[11px] text-gray-400 font-medium">ราคาจำหน่าย</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-amber-500 tracking-tight">
                ฿{formatNumber(chicken.price)}
              </span>
              <span className="text-xs text-gray-400 font-normal">
                (มัดจำ {Math.round(chicken.depositRate * 100)}%: ฿{formatNumber(depositAmount)})
              </span>
            </div>
          </div>

          <div>
            {chicken.status === "reserved" ? (
              <div className="px-5 py-2.5 bg-blue-50/80 text-blue-800 border border-blue-200/80 font-medium rounded-xl text-xs sm:text-sm shadow-sm select-none">
                มีผู้จองแล้ว (กำลังรอชำระ)
              </div>
            ) : chicken.status === "available" ? (
              <Button variant="amber" size="md" className="font-bold text-sm px-6">
                จองทันที (มัดจำ ฿{formatNumber(depositAmount)})
              </Button>
            ) : (
              <div className="px-5 py-2.5 bg-gray-100 text-gray-500 rounded-xl text-xs sm:text-sm font-medium">
                ปิดการขายแล้ว
              </div>
            )}
          </div>
        </>
      }
    >
      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-6 px-6 border-b border-gray-100 text-xs sm:text-sm font-semibold">
        <button
          type="button"
          onClick={() => setActiveTab("info")}
          className={`py-3.5 flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
            activeTab === "info"
              ? "border-amber-500 text-amber-600 font-bold"
              : "border-transparent text-gray-500 hover:text-gray-900"
          }`}
        >
          <span>⬡</span>
          <span>ข้อมูลทั่วไปและรูปถ่าย</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("pedigree")}
          className={`py-3.5 flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
            activeTab === "pedigree"
              ? "border-amber-500 text-amber-600 font-bold"
              : "border-transparent text-gray-500 hover:text-gray-900"
          }`}
        >
          <span>🌳</span>
          <span>ผังสายเลือด 3 รุ่น</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("video")}
          className={`py-3.5 flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
            activeTab === "video"
              ? "border-amber-500 text-amber-600 font-bold"
              : "border-transparent text-gray-500 hover:text-gray-900"
          }`}
        >
          <span className="text-rose-500">▷</span>
          <span>คลิปวิดีโอเตะเป้า</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "info" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={chicken.images[selectedImageIndex] || chicken.images[0]}
                  alt={chicken.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="font-semibold text-amber-300">CYBER GAMECOCK FARM</span>
                  <span className="text-gray-300">{chicken.code}</span>
                  <span className="text-rose-400 font-bold text-[9px] bg-rose-500/20 px-1 rounded">
                    VERIFIED
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                {chicken.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => selectImage(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? "border-amber-500 ring-2 ring-amber-500/20 scale-102"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {chicken.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/60"
                  >
                    {tag}
                  </span>
                ))}
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200">
                  {chicken.breedType}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-gray-50/80 border border-gray-100 text-center">
                <div>
                  <div className="text-[10px] text-gray-600 flex items-center justify-center gap-1">
                    <span>⚖️</span>
                    <span>น้ำหนัก</span>
                  </div>
                  <div className="text-sm font-extrabold text-gray-900 mt-0.5">
                    {chicken.weight}
                  </div>
                </div>

                <div className="border-x border-gray-200/60">
                  <div className="text-[10px] text-gray-600 flex items-center justify-center gap-1">
                    <span>📅</span>
                    <span>อายุ</span>
                  </div>
                  <div className="text-sm font-extrabold text-gray-900 mt-0.5">
                    {chicken.age}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-gray-600 flex items-center justify-center gap-1">
                    <span>🏆</span>
                    <span>สถิติไฟต์</span>
                  </div>
                  <div className="text-sm font-extrabold text-amber-600 mt-0.5">
                    ชนะ {chicken.winCount} ไฟต์
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-1">
                <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <span className="text-amber-500">⚡</span>
                  <span>{chicken.fightingStyleTitle}</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-light">
                  {chicken.fightingStyleDetail}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                  <span className="text-emerald-500 text-sm">✔</span>
                  <span>ประวัติไฟต์การชนที่ผ่านมา</span>
                </div>

                <div className="space-y-1.5">
                  {chicken.fightHistory.map((fh) => (
                    <div
                      key={fh.id}
                      className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between border ${
                        fh.isHighlight
                          ? "bg-amber-500/10 border-amber-300 text-amber-950 font-semibold"
                          : "bg-gray-50/80 border-gray-100 text-gray-700 font-normal"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{fh.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200/70 space-y-1">
                <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <span>🚚</span>
                  <span>การจัดส่งสัตว์เลี้ยงมีชีวิต (Live Animal Transport)</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  {chicken.transportInfo}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pedigree" && (
          <div className="py-2">
            <PedigreeSection />
          </div>
        )}

        {activeTab === "video" && (
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center text-white space-y-3 p-6 text-center">
            <span className="text-4xl text-rose-500 animate-pulse">▶</span>
            <div className="font-bold text-base">คลิปเตะเป้าและทดสอบเชิงชน</div>
            <p className="text-xs text-gray-400 max-w-md">
              รับชมคลิปวิดีโอความคมชัดสูง Full HD บันทึกจากสนามซ้อมมาตรฐาน
            </p>
            <Button
              variant="amber"
              size="sm"
              onClick={() => window.open(chicken.videoUrl, "_blank")}
            >
              เปิดดูคลิปวิดีโอ (YouTube)
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

