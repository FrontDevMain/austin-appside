import { Alert, Col, Divider, Flex, Form, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AlphaCheckboxField, AlphaTextField } from "../components/form";
import { validation } from "../components/form/validations";
import SubmitButton from "../components/form/SubmitButton";
import axiosInstance from "../api/AxiosInstance";
import { ENDPOINTS } from "../api/endPoints/EndPoints";

export const AuthContext = React.createContext({});

export default function UserLayout() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const isAuthenticated = () => {
    let isAuthenticated = false;
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      const authData = localStorage.getItem("auth");
      if (authData) {
        isAuthenticated = true;
      }
    }
    !isAuthenticated && showModal();
    return isAuthenticated;
  };

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
      handleCancel();
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <div style={{ marginTop: 40 }}>
        <Outlet />
      </div>
      <Modal
        title="Login"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {" "}
        <Divider style={{ margin: 0 }} />
        <Form form={form} name="basic" onFinish={onFinish} layout="vertical">
          {successMessage && (
            <Alert message={successMessage} type="success" showIcon closeIcon />
          )}
          {errorMessage && (
            <Alert message={errorMessage} type="error" showIcon />
          )}
          <Typography.Paragraph
            type="secondary"
            style={{ textAlign: "center", marginTop: 10 }}
          >
            Please login here
          </Typography.Paragraph>
          <Row
            style={{ margin: "2vh 0", justifyContent: "center" }}
            gutter={32}
          >
            <Col span={24}>
              <AlphaTextField
                name="email"
                placeholder="Enter email"
                type="email"
                rules={[validation.required(), validation.maxLength(30)]}
              />
            </Col>
            <Col span={24}>
              <AlphaTextField
                name="pasword"
                placeholder="Enter Password"
                maxLength={10}
                rules={[
                  validation.required(),
                  validation.onlyNumbers(),
                  validation.minLength(10),
                ]}
              />
            </Col>
            <Col span={24}>
              <Flex justify="space-between">
                <AlphaCheckboxField
                  name="remember"
                  options={[{ label: "Remember", value: "Remember" }]}
                />
                <Typography.Link style={{ marginTop: 7 }}>
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
            <Typography.Paragraph>
              You don’t have an account?{" "}
              <Typography.Link> Register</Typography.Link>
            </Typography.Paragraph>
          </Row>
        </Form>
      </Modal>
    </AuthContext.Provider>
  );
}
