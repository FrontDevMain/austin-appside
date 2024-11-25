import { Button, theme } from "antd";
import React from "react";

function CustomButton({
  children,
  style,
  onClick,
  ...other
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const { token } = theme.useToken();
  return (
    <Button
      style={{
        width: "fit-content",
        backgroundColor: token.colorTextSecondary,
        color: "#fff",
        outline: "none",
        border: "",
        boxSizing: "border-box",
        borderRadius: 30,
        padding: 25,
        ...style,
      }}
      {...other}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
