"use client";

import React, { useState } from "react";
import TextArea from "@/components/textarea";

const TextAreaDemo = () => {
  const [textValue, setTextValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold">TextArea Component Demo</h2>

      {/* Contoh penggunaan TextArea */}
      <div>
        <label htmlFor="textArea" className="block text-sm font-medium mb-2">
          Your Message:
        </label>
        <TextArea
          id="textArea"
          value={textValue}
          onChange={handleChange}
          placeholder="Type your message here..."
          className="w-sm" // Menambahkan class untuk menyesuaikan lebar text area
        />
      </div>

      <div>
        <p className="mt-2 text-sm">You typed: {textValue}</p>
      </div>
    </div>
  );
};

export default TextAreaDemo;
