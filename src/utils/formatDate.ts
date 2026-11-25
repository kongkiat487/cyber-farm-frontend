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

