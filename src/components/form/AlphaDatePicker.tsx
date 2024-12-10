// DatePickerField.js
import React from "react";
import { DatePicker, Form } from "antd";
import { InputProps } from "./types";
import dayjs from "dayjs";

export default function AlphaDatePicker({
  label,
  name,
  rules,
  placeholder,
  disabled = false,
  format,
}: InputProps & { format: string }) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <DatePicker
        placeholder={placeholder}
        format={{
          format: format,
          type: "mask",
        }}
        type="date"
        minDate={dayjs(new Date())}
        style={{ width: "100%" }}
        disabled={!!disabled}
      />
    </Form.Item>
  );
}
