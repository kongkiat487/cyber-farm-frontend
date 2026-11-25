import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0c101a] py-6 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p suppressHydrationWarning>© 2026 Cyber Farm. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-amber-400 transition-colors">นโยบายความเป็นส่วนตัว</a>
          <a href="#" className="hover:text-amber-400 transition-colors">เงื่อนไขการให้บริการ</a>
        </div>
      </div>
    </footer>
  );
};
