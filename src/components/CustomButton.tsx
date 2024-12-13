import { Button, theme } from "antd";
import React from "react";

function CustomButton({
  children,
  style,
  onClick,
  loading,
  ...other
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  loading?: boolean;
}) {
  const { token } = theme.useToken();
  return (
    <Button
      style={{
        width: "fit-content",
        backgroundColor: token.colorTextSecondary,
        color: "#fff",
        outline: "none",
        border: "none",
        boxSizing: "border-box",
        borderRadius: 50,
        padding: "30px 60px",
        fontWeight: 700,
        ...style,
      }}
      loading={loading}
      onClick={onClick}
      {...other}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
