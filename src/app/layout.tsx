import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYBER GAMECOCK - ศูนย์รวมยอดสายพันธุ์เงินล้าน",
  description: "ระบบบริหารจัดการและซื้อ-ขายไก่ชนออนไลน์ (มาตรฐาน TOR)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#0d1117] text-slate-100">
        {children}
      </body>
    </html>
  );
}

