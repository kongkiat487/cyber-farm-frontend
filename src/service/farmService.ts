import {
  ChickenProduct,
  EggProduct,
  MedicalProduct,
  AuctionCardItem,
  TrackingOrder,
} from "@/type/farmType";

// Mock Data Source - Data Access Layer
const mockChickens: ChickenProduct[] = [
  {
    id: "chk-101",
    code: "CF-101",
    name: "เจ้าเสือดำ แข้งหน้าถี่ ปากไว",
    fightStyle: "ม้าล่อรำวง + เหลี่ยมชนจัด",
    price: 35000,
    originalPrice: 42000,
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=600&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=600&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "med-02",
    name: "สเปรย์ห้ามเลือด & สมานแผลสด สูตรนาโนแคร์",
    category: "รักษาแผล",
    price: 320,
    rating: 4.8,
    soldCount: 850,
    description: "แห้งไว ไม่แสบ ฆ่าเชื้อแบคทีเรีย ป้องกันการอักเสบ",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "med-03",
    name: "นวมครอบเดือยอย่างดี หนังแท้เกรดฟาร์มแข่ง",
    category: "อุปกรณ์ฝึกซ้อม",
    price: 290,
    rating: 4.9,
    soldCount: 2100,
    description: "ซับแรงกระแทกได้ยอดเยี่ยม ไม่ทำให้คู่ซ้อมบาดเจ็บ",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "med-04",
    name: "วิตามินเข้มข้น แคลเซียมเสริมสร้างกระดูกและเดือย",
    category: "วิตามิน",
    price: 390,
    rating: 4.7,
    soldCount: 920,
    description: "สร้างความแข็งแกร่งของกระดูกแข้งและปากเดือย",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
  },
];

const mockAuctions: AuctionCardItem[] = [
  {
    id: "auc-001",
    code: "รหัส AUC-001",
    title: "เจ้าพยัคฆ์ดำ แข้งหน้าจัด ปากไว เชิงบนดีเยี่ยม",
    currentBid: 32000,
    initialPrice: 15000,
    countdown: "01:24:18",
    bloodline: "ยอดมงคล + ม้าสีหมอก (3 รุ่น)",
    weight: "2.85 กก.",
    age: "11 เดือน",
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    status: "live",
    bidsCount: 14,
  },
  {
    id: "auc-002",
    code: "รหัส AUC-002",
    title: "เจ้าหยกคีรี ลีลาพริ้ว วิ่งสาดแข้ง ตีเจ็บลึก",
    currentBid: 28500,
    initialPrice: 12000,
    countdown: "02:45:10",
    bloodline: "หยกคีรีแท้ 100% สายเลือดแชมป์",
    weight: "2.70 กก.",
    age: "10 เดือน",
    imageUrl: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=600&q=80",
    status: "live",
    bidsCount: 9,
  },
];

const mockTrackings: Record<string, TrackingOrder> = {
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

export const farmService = {
  async getChickenList(): Promise<ChickenProduct[]> {
    return Promise.resolve(mockChickens);
  },

  async getEggList(): Promise<EggProduct[]> {
    return Promise.resolve(mockEggs);
  },

  async getMedicalList(): Promise<MedicalProduct[]> {
    return Promise.resolve(mockMedicals);
  },

  async getAuctionList(): Promise<AuctionCardItem[]> {
    return Promise.resolve(mockAuctions);
  },

  async getTrackingById(id: string): Promise<TrackingOrder | null> {
    const formattedId = id.trim().toUpperCase();
    return Promise.resolve(mockTrackings[formattedId] || null);
  },
};

