"use client";

import { useState } from "react";
import Select from "@/components/select";

const SelectDemo = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4" },
    { label: "Option 5", value: "5" },
  ];

  const [singleSelectValue, setSingleSelectValue] = useState<string[]>([]);
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([]);

  const handleSingleSelectChange = (value: string[]) => {
    setSingleSelectValue(value);
  };

  const handleMultiSelectChange = (values: string[]) => {
    setMultiSelectValue(values);
  };

  return (
    <div className="space-y-6 p-4">
      {/* Single Select Demo */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Single Select</h3>
        <Select
          options={options}
          placeholder="Select a single option"
          onChange={handleSingleSelectChange}
          isMultiSelect={false}
        />
        <p className="mt-2 text-sm">
          Selected:{" "}
          {singleSelectValue.length > 0 ? singleSelectValue[0] : "None"}
        </p>
      </div>

      {/* Multi Select Demo */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Multi Select</h3>
        <Select
          options={options}
          placeholder="Select multiple options"
          onChange={handleMultiSelectChange}
          isMultiSelect={true}
        />
        <p className="mt-2 text-sm">
          Selected:{" "}
          {multiSelectValue.length > 0 ? multiSelectValue.join(", ") : "None"}
        </p>
      </div>

      {/* Searchable Select Demo */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Searchable Select</h3>
        <Select
          options={options}
          placeholder="Search and select an option"
          onChange={handleSingleSelectChange}
          isSearchable={true}
          isMultiSelect={false}
        />
        <p className="mt-2 text-sm">
          Selected:{" "}
          {singleSelectValue.length > 0 ? singleSelectValue[0] : "None"}
        </p>
      </div>
    </div>
  );
};

export default SelectDemo;
