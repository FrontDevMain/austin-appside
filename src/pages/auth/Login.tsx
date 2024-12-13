import { Alert, Col, Flex, Form, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { AlphaCheckboxField, AlphaTextField } from "../../components/form";
import { validation } from "../../components/form/validations";
import SubmitButton from "../../components/form/SubmitButton";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

function Login() {
  const { login } = useAuth();
  const { state } = useLocation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      setLoading(true);
      const Response = await axiosInstance.post(ENDPOINTS.LOGIN, {
        email: values.email.toLowerCase(),
        password: values.password,
      });
      if (Response.status !== 200) throw new Error("Something went wrong");
      login(Response.data.data);
      navigate(state?.callbackPath || "/home");
      form.resetFields();
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col span={24} style={{ padding: 16 }}>
        <Typography.Paragraph className="heading_2">Login</Typography.Paragraph>
        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
          Please login here
        </Typography.Paragraph>
      </Col>
      <Form form={form} name="basic" onFinish={onFinish} layout="vertical">
        {successMessage && (
          <Alert message={successMessage} type="success" showIcon closeIcon />
        )}
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}

        <Row style={{ margin: "1vh 0", justifyContent: "center" }} gutter={32}>
          <Col span={24}>
            <AlphaTextField
              name="email"
              placeholder="Enter email address"
              type="email"
              rules={[validation.required(), validation.maxLength(30)]}
            />
          </Col>
          <Col span={24}>
            <div style={{ position: "relative" }}>
              <AlphaTextField
                name="password"
                placeholder="Enter Password"
                type={isPasswordShow ? "text" : "password"}
                rules={[validation.required()]}
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "5%",
                  transform: "translate(-5%, -50%)",
                  cursor: "pointer",
                  fontSize: 20,
                }}
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow ? <EyeFilled /> : <EyeInvisibleFilled />}
              </span>
            </div>
          </Col>
          <Col span={24}>
            <Flex justify="space-between">
              <AlphaCheckboxField
                name="remember"
                options={[{ label: "Remember", value: "Remember" }]}
              />
              <Typography.Link
                style={{ marginTop: 7 }}
                onClick={() => navigate("/auth/forgot-password")}
              >
                Forgot Password ?
              </Typography.Link>
            </Flex>
          </Col>
          <Col span={24}>
            <Flex justify="center">
              <SubmitButton loading={loading} form={form}>
                Login
              </SubmitButton>
            </Flex>
          </Col>
          <Typography.Paragraph style={{ marginTop: 10 }}>
            You don’t have an account?{" "}
            <Typography.Link onClick={() => navigate("/auth/Register")}>
              {" "}
              Register
            </Typography.Link>
          </Typography.Paragraph>
        </Row>
      </Form>
    </Row>
  );
}

export default Login;
