import React from "react";
import { BloodlinePedigree } from "@/type/farmType";
import { Badge } from "@/components/ui/Badge";

export interface PedigreeSectionProps {
  pedigree?: BloodlinePedigree;
}

const samplePedigree: BloodlinePedigree = {
  id: "ped-999",
  cockName: "เจ้ามังกรเงิน (สายเลือดท็อปฟาร์ม)",
  generation: "สืบสายพันธุ์แท้ 3 รุ่น (F3 Pedigree)",
  father: "พยัคฆ์พันล้าน (แชมป์เงินรางวัล 4.4M)",
  mother: "แม่ดาวประกายพรึก (ธิดาหยกคีรี)",
  grandfather: "เจ้าหยกคีรี (ยอดไก่เชิงสถิติไร้พ่าย)",
  grandmother: "แม่นวลจันทร์ (สายยอดมงคล)",
  championships: ["แชมป์สนามเทิดไท", "แชมป์ไก่ชนเงินล้านภาคกลาง", "DNA Certificate No. 88392"],
  dnaVerified: true,
};

export const PedigreeSection: React.FC<PedigreeSectionProps> = ({
  pedigree = samplePedigree,
}) => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#121927] via-[#101622] to-[#1c1613] border border-amber-500/30 p-6 text-white space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🌳</span>
            <h2 className="text-lg font-bold text-white">
              ผังสายเลือด & พันธุกรรม (Pedigree Tree 3 Generations)
            </h2>
            <Badge variant="warning" size="sm">
              DNA Verified 100%
            </Badge>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            ตรวจสอบข้อมูลสายพันธุ์แท้รับรองจาก Cyber Farm ตรวจสอบย้อนกลับได้ถึงต้นตระกูลแชมป์
          </p>
        </div>

        <button className="text-xs text-amber-400 hover:underline flex items-center gap-1 self-start sm:self-auto">
          <span>📜 ตรวจสอบใบเซอร์ DNA</span>
          <span>→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Gen 1: Cock */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 flex flex-col justify-center">
          <span className="text-[10px] text-amber-400 font-semibold uppercase">รุ่นลูก (Offspring)</span>
          <div className="text-base font-bold text-white mt-1">{pedigree.cockName}</div>
          <span className="text-[11px] text-gray-300 mt-0.5">{pedigree.generation}</span>
          <div className="mt-3 flex flex-wrap gap-1">
            {pedigree.championships.map((champ, i) => (
              <span key={i} className="text-[9px] bg-amber-400/20 text-amber-200 px-1.5 py-0.5 rounded border border-amber-400/30">
                🏆 {champ}
              </span>
            ))}
          </div>
        </div>

        {/* Gen 2: Parents */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-[#172134] border border-gray-700">
            <span className="text-[10px] text-gray-400 font-semibold">พ่อพันธุ์ (Sire)</span>
            <div className="font-bold text-white mt-0.5">{pedigree.father}</div>
            <span className="text-[10px] text-emerald-400">สถิติ 5 ไฟต์ ชนะรวด</span>
          </div>
          <div className="p-3 rounded-xl bg-[#172134] border border-gray-700">
            <span className="text-[10px] text-gray-400 font-semibold">แม่พันธุ์ (Dam)</span>
            <div className="font-bold text-white mt-0.5">{pedigree.mother}</div>
            <span className="text-[10px] text-amber-300">จ่ายลูกชนเงินล้าน 4 ตัว</span>
          </div>
        </div>

        {/* Gen 3: Grandparents */}
        <div className="space-y-2">
          <div className="p-2.5 rounded-lg bg-[#111724] border border-gray-800">
            <span className="text-[9px] text-gray-400">ปู่ (Paternal Grandsire)</span>
            <div className="font-semibold text-gray-200">{pedigree.grandfather}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#111724] border border-gray-800">
            <span className="text-[9px] text-gray-400">ย่า (Paternal Granddam)</span>
            <div className="font-semibold text-gray-200">{pedigree.grandmother}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#111724] border border-gray-800">
            <span className="text-[9px] text-gray-400">ตา (Maternal Grandsire)</span>
            <div className="font-semibold text-gray-200">เจ้าหยกเพชร (สายเลือดแสนรัก)</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#111724] border border-gray-800">
            <span className="text-[9px] text-gray-400">ยาย (Maternal Granddam)</span>
            <div className="font-semibold text-gray-200">แม่กุหลาบดำ (สายม้าเหล็ก)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

