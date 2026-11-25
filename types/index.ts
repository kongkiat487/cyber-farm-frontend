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

export interface ChickenProduct {
  id: string;
  code: string;
  name: string;
  generation: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  weight: string;
  bloodline: string;
  status: "available" | "reserved" | "sold";
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
