import React, { useState } from "react";
import { ChickenDetailItem } from "@/types";
import { Input } from "@/components/Base/ui/Input";
import { Button } from "@/components/Base/ui/Button";

export interface ChickenFormProps {
  initialData?: Partial<ChickenDetailItem>;
  onSubmit?: (data: Partial<ChickenDetailItem>) => void;
  onCancel?: () => void;
}

export const ChickenForm: React.FC<ChickenFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<ChickenDetailItem>>({
    code: initialData?.code || "#CF-881",
    name: initialData?.name || "เจ้าพายุสายฟ้า",
    breedType: initialData?.breedType || "พม่ารำวงลูกผสม",
    weight: initialData?.weight || "2.7 กก.",
    age: initialData?.age || "10 เดือน",
    winCount: initialData?.winCount || 3,
    price: initialData?.price || 35000,
    fightingStyleDetail:
      initialData?.fightingStyleDetail ||
      "ม้าล่อสปีด แข้งหน้าที่จัด ชิ่งซ้ายขวาแล้วแทงเดือยลึก",
    status: initialData?.status || "reserved",
  });

  const handleChange = <K extends keyof ChickenDetailItem>(
    field: K,
    value: ChickenDetailItem[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="รหัสไก่ชน (Code)"
          value={formData.code || ""}
          onChange={(e) => handleChange("code", e.target.value)}
        />
        <Input
          label="ชื่อไก่ชน (Name)"
          value={formData.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          label="สายพันธุ์ (Breed Type)"
          value={formData.breedType || ""}
          onChange={(e) => handleChange("breedType", e.target.value)}
        />
        <Input
          label="น้ำหนัก (Weight)"
          value={formData.weight || ""}
          onChange={(e) => handleChange("weight", e.target.value)}
        />
        <Input
          label="อายุ (Age)"
          value={formData.age || ""}
          onChange={(e) => handleChange("age", e.target.value)}
        />
        <Input
          label="ราคาจำหน่าย (บาท)"
          type="number"
          value={formData.price || 0}
          onChange={(e) => handleChange("price", Number(e.target.value))}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-300">
          สไตล์การชน (Fighting Style)
        </label>
        <textarea
          rows={2}
          value={formData.fightingStyleDetail || ""}
          onChange={(e) => handleChange("fightingStyleDetail", e.target.value)}
          className="w-full px-3 py-2 border border-gray-700 rounded-lg text-sm bg-transparent text-white focus:outline-none focus:border-amber-500"
        />
      </div>

      <div className="flex items-center justify-end gap-2 pt-2">
        {onCancel && (
          <Button type="button" variant="outline" size="sm" onClick={onCancel}>
            ยกเลิก
          </Button>
        )}
        <Button type="submit" variant="amber" size="sm">
          💾 บันทึกข้อมูลไก่ชน
        </Button>
      </div>
    </form>
  );
};

