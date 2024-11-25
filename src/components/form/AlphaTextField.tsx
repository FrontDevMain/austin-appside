import { Input, Form } from "antd";
import { InputProps } from "./types";

export default function AlphaTextField({
  type,
  label,
  name,
  rules,
  placeholder,
  maxLength,
  disabled,
}: InputProps & { maxLength?: number }) {
  return (
    <Form.Item label={label} name={name} rules={rules} validateFirst>
      <Input
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={!!disabled}
        type={type}
      />
    </Form.Item>
  );
}
