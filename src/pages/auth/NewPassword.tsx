import { Alert, Col, Flex, Form, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { AlphaCheckboxField, AlphaTextField } from "../../components/form";
import { validation } from "../../components/form/validations";
import SubmitButton from "../../components/form/SubmitButton";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { useNavigate } from "react-router-dom";

function NewPassword() {
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
      const Response = await axiosInstance.post(
        ENDPOINTS.UPDATE_PASSWORD,
        values
      );
      if (Response.status !== 200)
        throw new Error(Response?.data?.error || "Something went wrong");
      setSuccessMessage(Response.data.message);
      form.resetFields();
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
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
          NEW PASSWORD
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary">
          Set the new password for your account so you can login and access all
          features
        </Typography.Paragraph>
      </Col>
      <Form form={form} name="basic" onFinish={onFinish} layout="vertical">
        {successMessage && (
          <>
            <Alert message={successMessage} type="success" showIcon closeIcon />
            <Typography.Paragraph
              style={{ marginTop: 10, textAlign: "center" }}
            >
              Please{" "}
              <Typography.Link onClick={() => navigate("/auth/login")}>
                {" "}
                Login
              </Typography.Link>{" "}
              with New Password
            </Typography.Paragraph>
          </>
        )}
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}

        <Row style={{ margin: "2vh 0", justifyContent: "center" }} gutter={32}>
          <Col span={24}>
            <AlphaTextField
              name="newPassword"
              placeholder="Enter new password"
              rules={[validation.required()]}
            />
          </Col>
          <Col span={24}>
            <AlphaTextField
              name="confirmPassword"
              placeholder="Confirm new password"
              rules={[validation.required()]}
            />
          </Col>

          <Col span={24}>
            <Flex justify="center">
              <SubmitButton loading={loading} form={form}>
                Change Password
              </SubmitButton>
            </Flex>
          </Col>
        </Row>
      </Form>
    </Row>
  );
}

export default NewPassword;
