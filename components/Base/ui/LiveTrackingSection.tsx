import React, { useState } from "react";
import { TrackingOrder } from "@/types";
import { Badge } from "./Badge";
import { Button } from "./Button";

const sampleTrackings: Record<string, TrackingOrder> = {
  "CY-8801": {
    trackingId: "CY-8801",
    recipientName: "คุณสมศักดิ์ ส.ไก่ชน (ชลบุรี)",
    itemDescription: "ไก่ชนมีชีวิต (เจ้าพยัคฆ์ดำ) + กรงแอร์มาตรฐาน",
    status: "กำลังขนส่ง (รถแอร์)",
    origin: "ศูนย์กระจายพันธุ์ Cyber Farm (อยุธยา)",
    destination: "ปลายทาง อำเภอเมือง จ.ชลบุรี",
    estArrival: "วันนี้ 16:30 น.",
    vanTemp: "25.4 °C (ระบบควบคุมอุณหภูมิสมบูรณ์)",
  },
  "CY-8802": {
    trackingId: "CY-8802",
    recipientName: "คุณประพันธ์ (ขอนแก่น)",
    itemDescription: "ไข่เชื้อ Tier VIP จำนวน 3 ฟอง (กล่องโฟมกันกระแทกสุญญากาศ)",
    status: "เตรียมจัดส่ง",
    origin: "ศูนย์เพาะพันธุ์ Cyber Farm",
    destination: "อ.เมือง จ.ขอนแก่น",
    estArrival: "พรุ่งนี้ 11:00 น.",
    vanTemp: "24.0 °C",
  },
};

export const LiveTrackingSection: React.FC = () => {
  const [searchId, setSearchId] = useState("CY-8801");
  const [currentOrder, setCurrentOrder] = useState<TrackingOrder | null>(
    sampleTrackings["CY-8801"]
  );

  const handleSearch = () => {
    const found = sampleTrackings[searchId.trim().toUpperCase()];
    if (found) {
      setCurrentOrder(found);
    } else {
      alert("ไม่พบรหัสติดตามนี้ (ลองค้นหาด้วย CY-8801 หรือ CY-8802)");
    }
  };

  return (
    <div className="rounded-2xl bg-[#121929] border border-gray-800 p-6 text-white space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🚚</span>
            <h2 className="text-lg font-bold text-white">
              ระบบติดตามการขนส่งแบบเรียลไทม์ (Live Climate-Controlled Van Tracking)
            </h2>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            รถตู้ติดแอร์พิเศษสำหรับส่งไก่ชนและไข่เชื้อ ดูแลระดับอุณหภูมิและสุขภาพไก่ตลอดการเดินทาง
          </p>
        </div>

        <div className="flex items-center gap-2 max-w-sm w-full">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="กรอกรหัส CY-XXXX"
            className="w-full bg-[#1b253b] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 uppercase font-mono"
          />
          <Button size="sm" variant="amber" onClick={handleSearch} className="shrink-0 text-xs">
            ค้นหา
          </Button>
        </div>
      </div>

      {currentOrder && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#172236] p-4 rounded-xl border border-gray-700/60">
              <div>
                <span className="text-[11px] text-gray-400 block">หมายเลขพัสดุ</span>
                <span className="font-mono text-base font-extrabold text-amber-400">
                  {currentOrder.trackingId}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-gray-400 block">ผู้รับสินค้า</span>
                <span className="text-sm font-semibold">{currentOrder.recipientName}</span>
              </div>
              <Badge variant="primary" pulse size="md">
                {currentOrder.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
              <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                <span className="text-lg block mb-1">📦</span>
                <span className="font-semibold block">1. รับพัสดุเข้าระบบ</span>
                <span className="text-[10px] text-gray-400">08:00 น. อยุธยา</span>
              </div>
              <div className="p-3 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 ring-1 ring-amber-500/40">
                <span className="text-lg block mb-1 animate-bounce">🚐</span>
                <span className="font-semibold block">2. กำลังเดินทาง (รถตู้แอร์)</span>
                <span className="text-[10px] text-gray-300">บนมอเตอร์เวย์</span>
              </div>
              <div className="p-3 rounded-lg bg-gray-800/60 border border-gray-800 text-gray-500">
                <span className="text-lg block mb-1">🏁</span>
                <span className="font-semibold block">3. ส่งมอบถึงมือ</span>
                <span className="text-[10px] text-gray-500">คาดว่า {currentOrder.estArrival}</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-[#101b2f] to-[#141b2a] border border-blue-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  สภาพแวดล้อมในรถขนส่ง
                </span>
                <span className="text-[10px] bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded">
                  Live Sensor
                </span>
              </div>
              <div className="mt-3">
                <span className="text-3xl font-extrabold text-blue-400">25.4 °C</span>
                <p className="text-[11px] text-gray-300 mt-1">
                  ระบบควบคุมอุณหภูมิคงที่ ลดความเครียดของสัตว์ปีก ปลอดภัย 100%
                </p>
              </div>
            </div>

            <div className="text-xs text-gray-400 pt-3 border-t border-gray-800/80 space-y-1">
              <div>จุดเริ่มต้น: {currentOrder.origin}</div>
              <div>ปลายทาง: {currentOrder.destination}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

