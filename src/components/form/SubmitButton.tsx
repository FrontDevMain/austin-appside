import React from "react";
import type { FormInstance } from "antd";
import { Button, Form, Input, Space, theme } from "antd";

interface SubmitButtonProps {
  loading: boolean;
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  loading,
  children,
}) => {
  const { token } = theme.useToken();
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      loading={loading}
      style={{
        width: "fit-content",
        backgroundColor: !submittable ? "gray" : token.colorTextSecondary,
        color: "#fff",
        outline: "none",
        border: "",
        boxSizing: "border-box",
        borderRadius: 30,
        padding: 25,
      }}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
