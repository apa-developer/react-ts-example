"use client";

import { useState } from "react";
import RadioGroup from "@/components/radio";

const RadioGroupDemo = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const radioOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold">RadioGroup Component Demo</h2>

      {/* Contoh penggunaan RadioGroup */}
      <div>
        <RadioGroup
          options={radioOptions}
          value={selectedValue}
          onChange={handleRadioChange}
        />
      </div>

      <div>
        <p className="mt-2 text-sm">Selected Option: {selectedValue}</p>
      </div>
    </div>
  );
};

export default RadioGroupDemo;
