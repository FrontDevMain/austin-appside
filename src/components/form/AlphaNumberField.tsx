// NumberField.js
import React from "react";
import { InputNumber, Form } from "antd";
import PropTypes from "prop-types";
import { InputProps } from "./types";

export default function AlphaNumberField({
  label,
  name,
  rules,
  maxLength = 12,
  disabled = false,
  placeholder,
}: InputProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      style={{ flexGrow: 1 }}
      validateFirst
    >
      <InputNumber
        type="number"
        placeholder={placeholder}
        style={{ width: "100%", appearance: "none" }}
        disabled={!!disabled}
        maxLength={maxLength}
        controls={false}
      />
    </Form.Item>
  );
}
