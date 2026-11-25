import { Metadata } from "next";
import { StorefrontView } from "@/components/feature/StorefrontView";

export const metadata: Metadata = {
  title: "CYBER GAMECOCK - ศูนย์รวมยอดสายพันธุ์เงินล้าน",
  description: "ระบบบริหารจัดการและซื้อ-ขายไก่ชนออนไลน์ ครบวงจร",
};

export default function HomePage() {
  return <StorefrontView />;
}

