import ButtonDemo from "@/components/demo/button-demo";
import CheckboxDemo from "@/components/demo/checkbox-demo";
import InputDemo from "@/components/demo/input-demo";
import RadioGroupDemo from "@/components/demo/radio-demo";
import SelectDemo from "@/components/demo/select-demo";
import TextAreaDemo from "@/components/demo/textarea-demo";

export default function Home() {
  return (
    <div>
      {/* Button */}
      <ButtonDemo />

      {/* Input */}
      <InputDemo />

      {/* Checkbox */}
      <CheckboxDemo />

      {/* RadioGroup */}
      <RadioGroupDemo />

      {/* TextArea */}
      <TextAreaDemo />

      {/* Select */}
      <SelectDemo />
    </div>
  );
}
