import {
  Alert,
  Col,
  Divider,
  Flex,
  Form,
  Grid,
  Modal,
  Row,
  Typography,
} from "antd";
import CustomButton from "../../components/CustomButton";
import image1 from "../../assets/images/donation.svg";
import { AlphaSelectField, AlphaTextField } from "../../components/form";
import { validation } from "../../components/form/validations";
import { useState } from "react";
import SubmitButton from "../../components/form/SubmitButton";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { useAuth } from "../../auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

function DonationSection() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isUserAuthenticate } = useAuth();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const screens = Grid.useBreakpoint();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    setErrorMessage("");
    setSuccessMessage("");
    try {
      setLoading(true);
      const Response = await axiosInstance.post(ENDPOINTS.DONATE, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        amount: +values.amount,
        currency: values.currency,
        causeOfDonation: values.causeOfDonation,
      });
      if (Response.status !== 200) throw new Error("Something went wrong");
      setSuccessMessage(Response.data.message);
      handleCancel();
    } catch (err: any) {
      setErrorMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Row
        style={{
          margin: "6vh 0",
          flexDirection: screens.md ? "row" : "column-reverse",
        }}
        gutter={48}
      >
        <Col
          span={screens.md ? 12 : 24}
          style={{ justifyItems: "center", alignSelf: "center" }}
        >
          <Flex vertical style={{ height: "inherit" }}>
            <Typography.Paragraph className="heading_1 center">
              Let's Donate
            </Typography.Paragraph>{" "}
            <Typography.Paragraph
              style={{
                width: screens.md ? "80%" : "100%",
                margin: "auto",
                textAlign: "center",
              }}
            >
              Donating in a Gurudwara, a place of worship in Sikhism, is a
              deeply ingrained tradition rooted in the Sikh principles of
              selfless service and community support. Gurudwaras serve as not
              just spiritual centers but also as hubs for humanitarian
              activities. Sikhs believe in the concept of “Dasvandh,” wherein
              individuals contribute a tenth of their earnings for the common
              good. This donation, known as “Guru’s offering” or “Golak,”
              supports various philanthropic endeavors such as langar, a
              community kitchen that provides free meals to all visitors
              irrespective of their background. The act of giving in a Gurudwara
              extends beyond financial contributions; it also involves voluntary
              service or “Seva.” This inclusive approach to donation fosters a
              sense of equality and unity among the Sikh community, promoting
              the ideals of compassion, generosity, and communal well-being. The
              Gurudwara thus stands not only as a place of worship but also as a
              symbol of collective responsibility and shared humanity.
            </Typography.Paragraph>
            <CustomButton
              style={{ alignSelf: "center", marginTop: 30 }}
              onClick={() =>
                isUserAuthenticate()
                  ? showModal()
                  : navigate("/auth/login", {
                      state: { callbackPath: pathname },
                    })
              }
            >
              Donate
            </CustomButton>
          </Flex>
        </Col>
        <Col
          span={screens.md ? 12 : 24}
          style={{ justifyItems: "center", alignSelf: "center" }}
        >
          <img
            src={image1}
            alt="Place of Peace"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Modal
        title="Event Booking"
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        {" "}
        <Divider style={{ margin: 0 }} />
        <Form form={form} name="basic" onFinish={onFinish} layout="vertical">
          {successMessage && (
            <Alert message={successMessage} type="success" showIcon closeIcon />
          )}
          {errorMessage && (
            <Alert message={errorMessage} type="error" showIcon closeIcon />
          )}
          <Row style={{ margin: "2vh 0" }} gutter={32}>
            <Col span={screens.md ? 6 : 12}>
              <AlphaSelectField
                name="currency"
                placeholder="Currency"
                options={[
                  { label: "CAD", value: "CAD" },
                  { label: "USD", value: "USD" },
                  { label: "GBP", value: "GBP" },
                  { label: "AUD", value: "AUD" },
                  { label: "INR", value: "INR" },
                ]}
              />
            </Col>
            <Col span={screens.md ? 18 : 12}>
              <AlphaTextField
                name="amount"
                placeholder="Amount"
                rules={[validation.required(), validation.onlyNumbers()]}
              />
            </Col>
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
            <Col span={24}>
              <AlphaTextField
                name="email"
                placeholder="Email"
                type="email"
                rules={[validation.required(), validation.maxLength(30)]}
              />
            </Col>
            <Col span={24}>
              <AlphaTextField
                name="causeOfDonation"
                placeholder="Cause Of Donation"
                rules={[validation.required()]}
              />
            </Col>

            <Flex justify="center" style={{ width: "100%" }}>
              <SubmitButton loading={loading} form={form}>
                Donate Now
              </SubmitButton>
            </Flex>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default DonationSection;
