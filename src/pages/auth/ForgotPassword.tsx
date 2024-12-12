import { Alert, Col, Flex, Form, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { AlphaCheckboxField, AlphaTextField } from "../../components/form";
import { validation } from "../../components/form/validations";
import SubmitButton from "../../components/form/SubmitButton";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      setLoading(true);
      const Response = await axiosInstance.post(ENDPOINTS.LOGIN, {
        ...values,
      });
      if (Response.status !== 200) throw new Error("Something went wrong");
      setSuccessMessage(Response.data.message);
      form.resetFields();
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col span={24} style={{ padding: "0 16px" }}>
        <Typography.Paragraph className="heading_2">
          FORGOT PASSWORD
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary">
          Enter your email for the verification process. we will send 6 digit
          code to your email.
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
            <Flex justify="center">
              <SubmitButton loading={loading} form={form}>
                Continue
              </SubmitButton>
            </Flex>
          </Col>
          <Typography.Paragraph style={{ marginTop: 10 }}>
            Already have an account?{" "}
            <Typography.Link onClick={() => navigate("/auth/login")}>
              {" "}
              Login
            </Typography.Link>
          </Typography.Paragraph>
        </Row>
      </Form>
    </Row>
  );
}

export default ForgotPassword;
