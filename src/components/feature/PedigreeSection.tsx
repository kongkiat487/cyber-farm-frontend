import React from "react";
import { BloodlinePedigree } from "@/type/farmType";
import { Badge } from "@/components/ui/Badge";

export interface PedigreeTreeProps {
  pedigree?: BloodlinePedigree;
}

const defaultPedigree: BloodlinePedigree = {
  id: "ped-881",
  cockName: "เจ้าพายุสายฟ้า (#CF-881)",
  generation: "สืบสายพันธุ์แท้ 3 รุ่น (F3 Pedigree)",
  father: "พยัคฆ์พันล้าน (แชมป์ 4.4M)",
  mother: "แม่ดาวประกายพรึก (ธิดาหยกคีรี)",
  grandfather: "เจ้าหยกคีรี (ยอดสถิติไร้พ่าย)",
  grandmother: "แม่นวลจันทร์ (สายยอดมงคล)",
  championships: ["แชมป์สนามเทิดไท", "แชมป์ไก่ชนเงินล้านภาคกลาง", "DNA Certificate No. 88392"],
  dnaVerified: true,
};

export const PedigreeSection: React.FC<PedigreeTreeProps> = ({
  pedigree = defaultPedigree,
}) => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0e1422] via-[#121929] to-[#1a1512] border border-amber-500/30 p-5 sm:p-7 text-white space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-800 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🌳</span>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              แผนผังสายเลือด & พันธุกรรม 3 รุ่น (Pedigree Tree)
            </h2>
            <Badge variant="warning" size="sm">
              DNA Verified 100%
            </Badge>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            แผนผังต้นไม้พันธุกรรมย้อนหลัง 3 เจเนอเรชัน แสดงสายเลือดพ่อ-แม่ และ ปู่-ย่า-ตา-ยาย
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
            ✔ ใบรับรอง DNA No. 88392
          </span>
        </div>
      </div>

      {/* Pedigree Visual Tree Graph (Horizontal Tree with SVG Connecting Lines) */}
      <div className="overflow-x-auto pb-4 pt-2">
        <div className="min-w-[720px] max-w-4xl mx-auto flex items-center justify-between gap-0 relative">
          {/* ================= COLUMN 1: รุ่นลูก (OFFSPRING) ================= */}
          <div className="w-[30%] flex flex-col justify-center relative z-10">
            <div className="text-[11px] font-bold text-amber-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              รุ่นลูก (Gen 1 : Target)
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 via-[#1e2638] to-[#161d2d] border-2 border-amber-400/80 shadow-lg shadow-amber-500/10 hover:border-amber-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-amber-500 text-black font-extrabold px-2 py-0.5 rounded">
                  ตัวเป้าหมาย
                </span>
                <span className="text-[10px] text-gray-300 font-mono">#CF-881</span>
              </div>

              <div className="text-base font-extrabold text-white mt-2 leading-snug">
                {pedigree.cockName}
              </div>

              <div className="text-[11px] text-amber-300/90 mt-1">
                {pedigree.generation}
              </div>

              <div className="mt-3 pt-2.5 border-t border-gray-700/60 flex flex-wrap gap-1">
                {pedigree.championships.map((champ, i) => (
                  <span
                    key={i}
                    className="text-[9px] bg-black/60 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30"
                  >
                    🏆 {champ}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CONNECTOR 1 -> 2 (SVG Lines) */}
          <div className="w-[8%] h-72 flex items-center justify-center relative">
            <svg className="w-full h-full" viewBox="0 0 100 280" fill="none" preserveAspectRatio="none">
              {/* Path to Father (Top) */}
              <path
                d="M 0 140 C 50 140, 50 70, 100 70"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              {/* Path to Mother (Bottom) */}
              <path
                d="M 0 140 C 50 140, 50 210, 100 210"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              {/* Center Branch Dot */}
              <circle cx="0" cy="140" r="5" fill="#f59e0b" />
            </svg>
          </div>

          {/* ================= COLUMN 2: พ่อ-แม่ (PARENTS) ================= */}
          <div className="w-[30%] flex flex-col justify-between h-80 relative z-10 py-1">
            {/* Father Box (Top) */}
            <div className="p-3.5 rounded-xl bg-[#172236] border border-blue-500/50 hover:border-blue-400 transition-all shadow-md">
              <div className="flex items-center justify-between text-[10px] text-blue-300 font-bold mb-1">
                <span>♂ พ่อพันธุ์ (Sire 50%)</span>
                <span className="text-emerald-400">ชนะ 5 ไฟต์</span>
              </div>
              <div className="font-bold text-sm text-white">{pedigree.father}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">สายเลือด: ยอดมงคล + ม้าสีหมอก</div>
            </div>

            {/* Mother Box (Bottom) */}
            <div className="p-3.5 rounded-xl bg-[#172236] border border-rose-500/50 hover:border-rose-400 transition-all shadow-md">
              <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold mb-1">
                <span>♀ แม่พันธุ์ (Dam 50%)</span>
                <span className="text-amber-400">จ่ายลูกชน 4 ตัว</span>
              </div>
              <div className="font-bold text-sm text-white">{pedigree.mother}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">สายเลือด: ธิดาหยกคีรีแท้</div>
            </div>
          </div>

          {/* CONNECTOR 2 -> 3 (SVG Lines) */}
          <div className="w-[8%] h-80 flex items-center justify-center relative">
            <svg className="w-full h-full" viewBox="0 0 100 320" fill="none" preserveAspectRatio="none">
              {/* Father to Grandfather */}
              <path
                d="M 0 65 C 50 65, 50 35, 100 35"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              {/* Father to Grandmother */}
              <path
                d="M 0 65 C 50 65, 50 115, 100 115"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              <circle cx="0" cy="65" r="4" fill="#60a5fa" />

              {/* Mother to Grandfather */}
              <path
                d="M 0 255 C 50 255, 50 205, 100 205"
                stroke="#f43f5e"
                strokeWidth="2"
              />
              {/* Mother to Grandmother */}
              <path
                d="M 0 255 C 50 255, 50 285, 100 285"
                stroke="#f43f5e"
                strokeWidth="2"
              />
              <circle cx="0" cy="255" r="4" fill="#f43f5e" />
            </svg>
          </div>

          {/* ================= COLUMN 3: ปู่ย่าตายาย (GRANDPARENTS) ================= */}
          <div className="w-[24%] flex flex-col justify-between h-88 py-1 space-y-2 text-xs relative z-10">
            {/* Paternal Grandsire */}
            <div className="p-2.5 rounded-lg bg-[#111726] border border-gray-700/80 hover:border-gray-500 transition-all">
              <div className="text-[9px] text-blue-400 font-semibold">ปู่ (Paternal Grandsire 25%)</div>
              <div className="font-semibold text-gray-100 text-xs mt-0.5">{pedigree.grandfather}</div>
            </div>

            {/* Paternal Granddam */}
            <div className="p-2.5 rounded-lg bg-[#111726] border border-gray-700/80 hover:border-gray-500 transition-all">
              <div className="text-[9px] text-blue-400 font-semibold">ย่า (Paternal Granddam 25%)</div>
              <div className="font-semibold text-gray-100 text-xs mt-0.5">{pedigree.grandmother}</div>
            </div>

            {/* Maternal Grandsire */}
            <div className="p-2.5 rounded-lg bg-[#111726] border border-gray-700/80 hover:border-gray-500 transition-all">
              <div className="text-[9px] text-rose-400 font-semibold">ตา (Maternal Grandsire 25%)</div>
              <div className="font-semibold text-gray-100 text-xs mt-0.5">เจ้าหยกเพชร (แสนรัก)</div>
            </div>

            {/* Maternal Granddam */}
            <div className="p-2.5 rounded-lg bg-[#111726] border border-gray-700/80 hover:border-gray-500 transition-all">
              <div className="text-[9px] text-rose-400 font-semibold">ยาย (Maternal Granddam 25%)</div>
              <div className="font-semibold text-gray-100 text-xs mt-0.5">แม่กุหลาบดำ (ม้าเหล็ก)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info Legend */}
      <div className="pt-3 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-amber-400" /> รุ่นเป้าหมาย (100%)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-blue-400" /> สายพ่อ (Sire Line)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-rose-400" /> สายแม่ (Dam Line)
          </span>
        </div>
        <div className="text-gray-500">
          * ข้อมูลสายเลือดผ่านการตรวจยืนยันอัตลักษณ์พันธุกรรม (DNA Test Approved)
        </div>
      </div>
    </div>
  );
};
