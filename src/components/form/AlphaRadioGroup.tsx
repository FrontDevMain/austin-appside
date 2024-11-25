// RadioGroup.js
import React from "react";
import { Radio, Form } from "antd";
import PropTypes from "prop-types";
import { InputProps } from "./types";

export default function AlphaRadioGroup({
  label,
  name,
  rules,
  options,
  disabled = false,
}: InputProps & { options: { label: string; value: string }[] }) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Radio.Group
        disabled={!!disabled}
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}
