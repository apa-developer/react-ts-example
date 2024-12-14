"use client";

import React, { useState } from "react";
import Input from "@/components/input";

const InputDemo = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold">Input Component Demo</h2>

      {/* Contoh penggunaan Input */}
      <div>
        <label htmlFor="inputField" className="block text-sm font-medium mb-2">
          Enter Text:
        </label>
        <Input
          id="inputField"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="w-sm" // Menambahkan class untuk menyesuaikan lebar input
        />
      </div>

      <div>
        <p className="mt-2 text-sm">You entered: {inputValue}</p>
      </div>
    </div>
  );
};

export default InputDemo;
