import { Checkbox, Form } from "antd";
import { InputProps } from "./types";

export default function AphaCheckbox({
  label,
  name,
  rules,
  disabled,
  options,
}: InputProps & { options: { label: string; value: string }[] }) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Checkbox.Group disabled={!!disabled}>
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </Form.Item>
  );
}
