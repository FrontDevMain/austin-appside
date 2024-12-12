import {
  Alert,
  Col,
  Flex,
  Form,
  Grid,
  Input,
  Row,
  theme,
  Typography,
} from "antd";
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
  const screens = Grid.useBreakpoint();
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
      <Row gutter={[16, 16]} style={{ alignItems: "center" }}>
        <Col span={screens.md ? 8 : 24}>
          <div style={CardStyle}>
            <img src={call} style={ImageStyle} />
            <Typography.Paragraph className="heading_2 center">
              Phone
            </Typography.Paragraph>
            <Typography.Paragraph className="center">
              (512) 222-SSGA <br />
              (512-222-7742)
            </Typography.Paragraph>
          </div>
        </Col>
        <Col span={screens.md ? 8 : 24}>
          <div style={CardStyle}>
            <img src={draft} style={ImageStyle} />
            <Typography.Paragraph className="heading_2 center">
              Email
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Board of Trustees
            </Typography.Paragraph>
            <Typography.Paragraph className="center">
              bot@ssga.groups.io
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Executive Committee
            </Typography.Paragraph>
            <Typography.Paragraph className="center">
              ec@ssga.groups.io
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Langar Coordinator
            </Typography.Paragraph>
            <Typography.Paragraph className="center">
              langar@austingurdwara.org
            </Typography.Paragraph>
            <Typography.Paragraph
              style={{ textAlign: "center", fontWeight: 700, marginBottom: 0 }}
            >
              Kids Kirtan/Punjabi Classes
            </Typography.Paragraph>
            <Typography.Paragraph className="center">
              punjabiclass@ssga.groups.io
            </Typography.Paragraph>
          </div>
        </Col>
        <Col span={screens.md ? 8 : 24}>
          <div style={CardStyle}>
            <img src={distance} style={ImageStyle} />
            <Typography.Paragraph className="heading_2 center">
              Address
            </Typography.Paragraph>

            <Typography.Paragraph className="center">
              6404 J M Holloway Lane, <br /> Austin, Texas 78724 <br />{" "}
              <span style={{ fontWeight: 600 }}>
                Open Daily from 7 am – 6 pm
              </span>
            </Typography.Paragraph>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "3vh 0 0vh", justifyContent: "center" }}>
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
          <Typography.Paragraph className="heading_1 center">
            Connect with Us
          </Typography.Paragraph>
        </Col>
      </Row>
      <Form form={form} name="basic" onFinish={onFinish} layout="vertical">
        {successMessage && (
          <Alert message={successMessage} type="success" showIcon closeIcon />
        )}
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
        <Row style={{ margin: "1vh 0", justifyContent: "center" }} gutter={32}>
          <Col span={screens.md ? 12 : 24}>
            <AlphaTextField
              name="firstName"
              placeholder="First Name"
              rules={[validation.required(), validation.maxLength(30)]}
            />
          </Col>
          <Col span={screens.md ? 12 : 24}>
            <AlphaTextField
              name="lastName"
              placeholder="Last Name"
              rules={[validation.required(), validation.maxLength(30)]}
            />
          </Col>
          <Col span={screens.md ? 12 : 24}>
            <AlphaTextField
              name="email"
              placeholder="Email"
              type="email"
              rules={[validation.required(), validation.maxLength(30)]}
            />
          </Col>
          <Col span={screens.md ? 12 : 24}>
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
