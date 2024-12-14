"use client";

import React from "react";
import { Plus, Trash, Edit, Search } from "lucide-react";
import Button from "@/components/button";

const ButtonDemo = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Button Variants</h1>

      {/* Variant: Text Only */}
      <div>
        <h2 className="font-semibold">Text Only</h2>
        <Button>Click Me</Button>
      </div>

      {/* Variant: Icon Only */}
      <div className="space-y-2">
        <h2 className="font-semibold">Icon Only</h2>
        <Button variant="iconOnly">
          <Plus size={18} />
        </Button>
        <Button variant="iconOnly">
          <Trash size={18} />
        </Button>
      </div>

      {/* Variant: Text and Icon */}
      <div className="space-y-2">
        <h2 className="font-semibold">Text and Icon</h2>
        <Button variant="textAndIcon" iconPosition="left">
          <Edit size={18} />
          Edit
        </Button>
        <Button variant="textAndIcon" iconPosition="right">
          Search
          <Search size={18} />
        </Button>
      </div>

      {/* Custom Styling */}
      <div>
        <h2 className="font-semibold">Custom Styled Button</h2>
        <Button className="bg-red-500 text-white hover:bg-red-600">
          Danger Action
        </Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
