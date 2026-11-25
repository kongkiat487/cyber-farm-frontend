"use client";

import { useState } from "react";
import { farmService } from "@/service/farmService";
import { TrackingOrder } from "@/type/farmType";

export function useTracking(initialId: string = "CY-8801") {
  const [trackingId, setTrackingId] = useState<string>(initialId);
  const [order, setOrder] = useState<TrackingOrder | null>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const searchTracking = async (idToSearch?: string) => {
    const target = idToSearch || trackingId;
    if (!target.trim()) return;

    setIsSearching(true);
    setErrorMessage("");
    try {
      const result = await farmService.getTrackingById(target);
      if (result) {
        setOrder(result);
      } else {
        setErrorMessage("ไม่พบรหัสติดตามนี้ (ลองค้นหาด้วย CY-8801 หรือ CY-8802)");
      }
    } catch {
      setErrorMessage("เกิดข้อผิดพลาดในการค้นหา");
    } finally {
      setIsSearching(false);
    }
  };

  return {
    trackingId,
    setTrackingId,
    order,
    isSearching,
    errorMessage,
    searchTracking,
  };
}

