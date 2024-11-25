// DateRangePickerField.js
import { DatePicker, Form } from "antd";
import { InputProps } from "./types";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

export default function AlphaDateRangePickerField({
  label,
  name,
  rules,
  placeholder,
  disabled = false,
  format,
}: InputProps & { format: string }) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <RangePicker
        format={format}
        disabled={!!disabled}
        maxDate={dayjs(new Date())}
        style={{ width: "100%" }}
      />
    </Form.Item>
  );
}
