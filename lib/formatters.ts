/**
 * ฟอร์แมตวันที่เป็นรูปแบบที่อ่านง่าย
 */
export function formatDate(date: string | number | Date, locale: string = "th-TH"): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "-";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

/**
 * ฟอร์แมตตัวเลขพร้อมคั่นคอมม่าและทศนิยม
 */
export function formatNumber(value: number, decimals: number = 0): string {
  if (isNaN(value)) return "0";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * ฟอร์แมตสกุลเงิน (ค่าเริ่มต้น THB)
 */
export function formatCurrency(value: number, currency: string = "THB", locale: string = "th-TH"): string {
  if (isNaN(value)) return "-";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

