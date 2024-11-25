import { Switch, Form } from "antd";
import { InputProps } from "./types";

export default function AlphaSwitch({
  label,
  name,
  rules,
  disabled = false,
  ...other
}: InputProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="checked" // Ensure the switch's checked state is managed by Form
      rules={rules}
    >
      <Switch disabled={!!disabled} />
    </Form.Item>
  );
}
