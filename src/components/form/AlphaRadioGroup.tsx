// RadioGroup.js
import React from "react";
import { Radio, Form, Grid } from "antd";
import PropTypes from "prop-types";
import { InputProps } from "./types";

export default function AlphaRadioGroup({
  label,
  name,
  rules,
  options,
  disabled = false,
}: InputProps & { options: { label: string; value: string }[] }) {
  const screens = Grid.useBreakpoint();
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Radio.Group
        disabled={!!disabled}
        style={{
          display: screens.md ? "flex" : "column",
          justifyContent: screens.md ? "space-evenly" : "space-between",
          gap: screens.md ? 0 : 10,
        }}
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
