"use client";

import Checkbox from "@/components/checkbox";

const CheckboxDemo = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold">Checkbox Component Demo</h2>

      {/* Contoh penggunaan Checkbox */}
      <div>
        <Checkbox label="Accept terms and conditions" />
      </div>
    </div>
  );
};

export default CheckboxDemo;
