import { Alert, Col, Flex, Form, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import SubmitButton from "../../components/form/SubmitButton";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { useLocation, useNavigate } from "react-router-dom";
import AlphaCodes from "../../components/form/AlphaCodes";
import { validation } from "../../components/form/validations";
import CustomButton from "../../components/CustomButton";

export default function OtpVerification() {
  const { state } = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (!state?.id) navigate("/auth/login");
  }, []);

  const onFinish = async () => {
    try {
      setErrorMessage("");
      setLoading(true);
      const Response = await axiosInstance.post(
        ENDPOINTS.VERIFY_OTP(state?.id),
        { otp: form.getFieldValue("otp") }
      );
      if (Response.status !== 200) throw new Error("Something went wrong");
      form.resetFields();
      localStorage.setItem("auth_austin_token", Response.data.token);
      navigate("/auth/new-password");
    } catch (err: any) {
      console.log(err);
      setErrorMessage(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col span={24} style={{ padding: "0 16px" }}>
        <Typography.Paragraph className="heading_2">
          Verification
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary">
          Enter your 6 digit code that you received on your email.
        </Typography.Paragraph>
      </Col>
      <Form form={form} name="basic" onFinish={onFinish} layout="vertical">
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}

        <Row style={{ margin: "1vh 0", justifyContent: "center" }} gutter={32}>
          <Col span={24}>
            <AlphaCodes name="otp" rules={[validation.required()]} />
          </Col>

          <Col span={24}>
            <Flex justify="center">
              <CustomButton loading={loading} onClick={onFinish}>
                Continue
              </CustomButton>
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
