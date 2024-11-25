// SelectField.js
import React from "react";
import { Select, Form } from "antd";
import PropTypes from "prop-types";
import { InputProps } from "./types";

const { Option } = Select;

export default function AlphaSelectField({
  label,
  name,
  rules,
  options,
  disabled = false,
  placeholder,
}: InputProps & { options: { label: string; value: string | undefined }[] }) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Select
        placeholder={placeholder}
        style={{ width: "100%" }}
        disabled={!!disabled}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}
