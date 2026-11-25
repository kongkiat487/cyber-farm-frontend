export interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
  active?: boolean;
}

export interface AuctionCardItem {
  id: string;
  code: string;
  title: string;
  currentBid: number;
  initialPrice: number;
  countdown: string;
  bloodline: string;
  weight: string;
  age: string;
  imageUrl: string;
  status: "live" | "upcoming" | "ended";
  bidsCount: number;
}

export interface FightHistoryItem {
  id: string;
  arena: string;
  stake: number;
  description: string;
  isHighlight?: boolean;
}

export interface ChickenDetailItem {
  id: string;
  code: string;
  name: string;
  tags: string[];
  breedType: string;
  weight: string;
  age: string;
  winCount: number;
  fightingStyleTitle: string;
  fightingStyleDetail: string;
  fightHistory: FightHistoryItem[];
  transportInfo: string;
  price: number;
  depositRate: number;
  status: "available" | "reserved" | "sold";
  images: string[];
  videoUrl?: string;
  pedigree?: BloodlinePedigree;
}

export interface ChickenProduct {
  id: string;
  code: string;
  name: string;
  fightStyle: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  weight: string;
  age: string;
  bloodline: string;
  winStats: string;
  status: "available" | "reserved" | "sold";
}

export interface EggProduct {
  id: string;
  code: string;
  pairName: string;
  fatherBloodline: string;
  motherBloodline: string;
  pricePerEgg: number;
  tier: "Tier 1" | "Tier 2" | "Tier VIP";
  guaranteeRate: string;
  availableCount: number;
  imageUrl: string;
}

export interface MedicalProduct {
  id: string;
  name: string;
  category: "บำรุงกำลัง" | "รักษาแผล" | "อุปกรณ์ฝึกซ้อม" | "วิตามิน";
  price: number;
  rating: number;
  soldCount: number;
  imageUrl: string;
  description: string;
}

export interface BloodlinePedigree {
  id: string;
  cockName: string;
  generation: string;
  father: string;
  mother: string;
  grandfather: string;
  grandmother: string;
  championships: string[];
  dnaVerified: boolean;
}

export interface TrackingOrder {
  trackingId: string;
  recipientName: string;
  itemDescription: string;
  status: "จัดส่งแล้ว" | "กำลังขนส่ง (รถแอร์)" | "เตรียมจัดส่ง";
  origin: string;
  destination: string;
  estArrival: string;
  vanTemp: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}
