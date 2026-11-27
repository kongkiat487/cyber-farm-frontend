"use client";

import { useState } from "react";
import { ChickenDetailItem } from "@/type/farmType";

const mockDefaultChicken: ChickenDetailItem = {
  id: "chk-881",
  code: "#CF-881",
  name: "เจ้าพายุสายฟ้า",
  tags: ["★ ดาวรุ่ง", "★ แชมป์เปียน", "★ ไก่หนุ่มคัดผ่าน"],
  breedType: "พม่ารำวงลูกผสม",
  weight: "2.7 กก.",
  age: "10 เดือน",
  winCount: 3,
  fightingStyleTitle: "ลีลาและสไตล์การชน (Fighting Style)",
  fightingStyleDetail: "ม้าล่อสปีด แข้งหน้าที่จัด ชิ่งซ้ายขวาแล้วแทงเดือยลึก",
  fightHistory: [
    {
      id: "fh-1",
      arena: "ชนะสนามทองสุข",
      stake: 22000,
      description: "ชนะสนามทองสุข ไฟต์ติดมัดจำ 22,000 บ.",
    },
    {
      id: "fh-2",
      arena: "ชนะชมรมกีฬาไก่ชนอันดามัน",
      stake: 110000,
      description: "ชนะชมรมกีฬาไก่ชนอันดามัน 110,000 บ.",
    },
    {
      id: "fh-3",
      arena: "ชนะสนามมาตรฐานภาคกลาง",
      stake: 330000,
      description: "ชนะสนามมาตรฐานภาคกลาง 330,000 บ. (ยก 2)",
      isHighlight: true,
    },
  ],
  transportInfo:
    "จัดส่งผ่านรถตู้สัตว์เลี้ยง/รถทัวร์ติดแอร์ มีน้ำและอาหารดูแลตลอดทาง แอดมินจะแจ้งจุดนัดรับ เบอร์คนขับ และทะเบียนรถทันทีเมื่อรถออกเดินทาง",
  price: 35000,
  depositRate: 0.3,
  status: "reserved",
  images: [
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80",
  ],
  videoUrl: "https://www.youtube.com",
};

export type DetailTab = "info" | "pedigree" | "video";

export function useChickenDetail(initialData: ChickenDetailItem = mockDefaultChicken) {
  const [chicken, setChicken] = useState<ChickenDetailItem>(initialData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<DetailTab>("info");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openDetail = (item?: Partial<ChickenDetailItem>) => {
    if (item) {
      setChicken((prev) => ({
        ...prev,
        ...item,
      }));
    }
    setSelectedImageIndex(0);
    setActiveTab("info");
    setIsOpen(true);
  };

  const closeDetail = () => {
    setIsOpen(false);
  };

  const selectImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: `${chicken.code} ${chicken.name}`,
          text: `รายละเอียดไก่ชน ${chicken.name} จาก Cyber Farm`,
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("คัดลอกลิงก์เรียบร้อยแล้ว");
      }
    }
  };

  const depositAmount = Math.round(chicken.price * chicken.depositRate);

  return {
    chicken,
    isOpen,
    activeTab,
    selectedImageIndex,
    depositAmount,
    setActiveTab,
    openDetail,
    closeDetail,
    selectImage,
    handleShare,
  };
}

