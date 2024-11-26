import { Alert, Col, Flex, Form, Input, Row, theme, Typography } from "antd";
import call from "../../assets/Icons/call.svg";
import draft from "../../assets/Icons/drafts.svg";
import distance from "../../assets/Icons/distance.svg";
import React, { useState } from "react";
import { AlphaTextField } from "../../components/form";
import { validation } from "../../components/form/validations";
import SubmitButton from "../../components/form/SubmitButton";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { AxiosError } from "axios";

function ContactUsSection() {
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const ImageStyle: React.CSSProperties = {
    height: 100,
    width: 100,
    objectFit: "cover",
    display: "block",
    margin: "auto",
  };

  const CardStyle: React.CSSProperties = {
    height: "fit-content",
    padding: 40,
    backgroundColor: "white",
    borderRadius: 16,
  };

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      setErrorMessage("");
      setSuccessMessage("");
      setLoading(true);
      const Response = await axiosInstance.post(ENDPOINTS.CONTACT_US, {
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
    <div style={{ margin: "5vh 0" }}>
      <Row gutter={16} style={{ alignItems: "center" }}>
        <Col span={8}>
          <div style={CardStyle}>
            <img src={call} style={ImageStyle} />
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              Phone
            </Typography.Title>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              (512) 222-SSGA <br />
              (512-222-7742)
            </Typography.Paragraph>
          </div>
        </Col>
        <Col span={8}>
          <div style={CardStyle}>
            <img src={draft} style={ImageStyle} />
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              Email
            </Typography.Title>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Board of Trustees
            </Typography.Paragraph>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              bot@ssga.groups.io
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Executive Committee
            </Typography.Paragraph>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              ec@ssga.groups.io
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Langar Coordinator
            </Typography.Paragraph>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              langar@austingurdwara.org
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Kids Kirtan/Punjabi Classes
            </Typography.Paragraph>
            <Typography.Paragraph style={{ textAlign: "center" }}>
              punjabiclass@ssga.groups.io
            </Typography.Paragraph>
          </div>
        </Col>
        <Col span={8}>
          <div style={CardStyle}>
            <img src={distance} style={ImageStyle} />
            <Typography.Title level={3} style={{ textAlign: "center" }}>
              Address
            </Typography.Title>

            <Typography.Paragraph style={{ textAlign: "center" }}>
              6404 J M Holloway Lane, <br /> Austin, Texas 78724 <br />{" "}
              <span style={{ fontWeight: 600 }}>
                Open Daily from 7 am – 6 pm
              </span>
            </Typography.Paragraph>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "5vh 0", justifyContent: "center" }}>
        <Col>
          <Typography.Paragraph
            style={{
              color: token.colorTextSecondary,
              marginBottom: 0,
              textAlign: "center",
            }}
          >
            CONTACT US
          </Typography.Paragraph>
          <Typography.Title
            style={{
              fontSize: 72,
              marginTop: 0,
            }}
          >
            Connect with Us
          </Typography.Title>
        </Col>
      </Row>
      <Form form={form} name="basic" onFinish={onFinish} layout="vertical">
        {successMessage && (
          <Alert message={successMessage} type="success" showIcon closeIcon />
        )}
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
        <Row style={{ margin: "2vh 0", justifyContent: "center" }} gutter={32}>
          <Col span={12}>
            <AlphaTextField
              name="firstName"
              placeholder="First Name"
              rules={[validation.required(), validation.maxLength(30)]}
            />
          </Col>
          <Col span={12}>
            <AlphaTextField
              name="lastName"
              placeholder="Last Name"
              rules={[validation.required(), validation.maxLength(30)]}
            />
          </Col>
          <Col span={12}>
            <AlphaTextField
              name="email"
              placeholder="Email"
              type="email"
              rules={[validation.required(), validation.maxLength(30)]}
            />
          </Col>
          <Col span={12}>
            <AlphaTextField
              name="phoneNumber"
              placeholder="Phone No."
              maxLength={10}
              rules={[
                validation.required(),
                validation.onlyNumbers(),
                validation.minLength(10),
              ]}
            />
          </Col>
          <Col span={24}>
            <Form.Item
              label={""}
              name={"message"}
              rules={[validation.required()]}
            >
              <Input.TextArea placeholder="Message" allowClear rows={6} />
            </Form.Item>
          </Col>
          <Flex justify="center">
            <SubmitButton loading={loading} form={form}>
              Send Message
            </SubmitButton>
          </Flex>
        </Row>
      </Form>
    </div>
  );
}

export default ContactUsSection;
