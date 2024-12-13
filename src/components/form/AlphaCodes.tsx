// OTPInput.js
import React, { useState, useRef } from "react";
import { Input, Form } from "antd";
import { InputProps } from "./types";

export default function AlphaCodes({
  label,
  name,
  rules,
  disabled,
  length = 6,
  placeholder = "-",
}: InputProps & { length?: number; placeholder?: string; disabled?: boolean }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const form = Form.useFormInstance();
  const inputsRef = useRef<any>([]);

  form.setFieldValue(name, otp.join(""));

  const handleChange = (
    event: React.ChangeEvent<HTMLButtonElement | any>,
    index: number
  ) => {
    const { value } = event.target;

    // Validate input
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1); // Only take the last character
      setOtp(newOtp);

      // Move focus to the next input
      if (value && index < length - 1) {
        (inputsRef.current[index + 1] as any).focus();
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      (inputsRef.current[index - 1] as any).focus();
      form.setFieldValue(name, form.getFieldValue.toString().slice(0, -1));
    }
  };

  return (
    <Form.Item label={label} name={name} rules={rules}>
      <div style={{ display: "flex", gap: "8px" }}>
        {otp.map((value, index) => (
          <Input
            key={index}
            value={value}
            disabled={disabled}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(event: React.ChangeEvent) => handleChange(event, index)}
            onKeyDown={(event: React.KeyboardEvent<HTMLElement>) =>
              handleKeyDown(event, index)
            }
            maxLength={1}
            placeholder={placeholder}
            style={{ minWidth: "30px", textAlign: "center" }}
          />
        ))}
      </div>
    </Form.Item>
  );
}
