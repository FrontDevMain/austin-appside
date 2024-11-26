import {
  Col,
  Divider,
  Flex,
  Form,
  Modal,
  Row,
  Steps,
  theme,
  Typography,
} from "antd";
import CustomButton from "../../components/CustomButton";
import image1 from "../../assets/images/kidsClasses.svg";
import React, { useState } from "react";
import {
  AlpharadioGroupField,
  AlphaSelectField,
  AlphaTextField,
} from "../../components/form";
import { validation } from "../../components/form/validations";
import SubmitButton from "../../components/form/SubmitButton";
import AlphaDatePicker from "../../components/form/AlphaDatePicker";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";

function KidsClassSection() {
  const { token } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setCurrent(0);
    form.resetFields();
    setIsModalOpen(false);
  };

  const timeData = [
    { label: "12:30 AM - 1:30 PM", value: "12:30 AM - 1:30 PM" },
    { label: "1:30 PM - 2:30 PM", value: "1:30 PM - 2:30 PM" },
    { label: "2:30 PM - 3:30 PM", value: "2:30 PM - 3:30 PM" },
    { label: "3:30 PM - 4:30 PM", value: "3:30 PM - 4:30 PM" },
  ];

  const [form] = Form.useForm();
  const slot = Form.useWatch("slot", { form, preserve: true });

  const onFinishStep1 = async (values: any) => {
    try {
      setLoading(true);
      const Response = await axiosInstance.post(ENDPOINTS.KIDS_CLASSES.STEP_1, {
        services: values.services,
        noOfKids: +values.noOfKids,
      });
      if (Response.status !== 200) throw new Error("Something went wrong");
      console.log(Response);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  const onFinishStep2 = async (values: any) => {
    setCurrent(2);
  };
  const onFinishStep3 = async (values: any) => {
    setCurrent(3);
  };
  const onFinishStep4 = async (values: any) => {
    setCurrent(4);
  };
  return (
    <>
      <Row style={{ margin: "6vh 0" }} gutter={48}>
        <Col span={12} style={{ justifyItems: "center", alignSelf: "center" }}>
          <Flex vertical style={{ height: "inherit" }}>
            <Typography.Title
              level={1}
              style={{
                // fontSize: 60,
                textAlign: "center",
                marginTop: 0,
              }}
            >
              Kids Classes
            </Typography.Title>{" "}
            <Typography.Paragraph
              style={{
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Punjabi classes are held on the first Saturday of every month,
              before the Diwan at the Presbyterian Church, according to the
              following schedule: <br /> Gurmat Class: 10:30AM-11:15 AM Gurmukhi
              Class: 11:15 AM-12:00 PM <br /> Currently we have three levels for
              kids based on their age and their familiarity with Gurmukhi and
              Gurmat.
            </Typography.Paragraph>
            <CustomButton
              style={{ alignSelf: "center" }}
              onClick={() => showModal()}
            >
              Book Now
            </CustomButton>
          </Flex>
        </Col>
        <Col span={12} style={{ justifyItems: "center", alignSelf: "center" }}>
          <img
            src={image1}
            alt="Place of Peace"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Modal
        title="To Join Classes"
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <Divider style={{ margin: 0 }} />
        <Steps
          current={current}
          labelPlacement="vertical"
          style={{ margin: "2vh 0" }}
          items={[
            { title: "Service Selection" },
            { title: "Date & Time" },
            { title: "Your Information" },
            { title: "Family Details" },
            { title: "Payments" },
          ]}
        />
        {current == 0 && (
          <Form
            form={form}
            name="basic"
            onFinish={onFinishStep1}
            layout="vertical"
          >
            <Flex vertical>
              <AlphaSelectField
                name="services"
                placeholder="Select Service"
                options={[
                  { label: "Swimming", value: "swimming" },
                  { label: "Dancing", value: "dancing" },
                  { label: "Painting", value: "painting" },
                ]}
              />
              <AlphaTextField
                name="noOfKids"
                placeholder="Number of kids"
                maxLength={5}
                rules={[
                  validation.required(),
                  validation.onlyNumbers(),
                  validation.maxLength(5),
                ]}
              />
              <Flex justify="center">
                <SubmitButton loading={loading} form={form}>
                  Continue
                </SubmitButton>
              </Flex>
            </Flex>
          </Form>
        )}
        {current == 1 && (
          <Form
            form={form}
            name="basic"
            onFinish={onFinishStep2}
            layout="vertical"
          >
            <Flex vertical>
              <AlphaDatePicker
                name="service"
                placeholder="DD/MM/YYYY"
                format={"DD/MM/YYYY"}
                rules={[validation.required()]}
              />
              <Typography.Paragraph style={{ textAlign: "center" }}>
                Available time Slots
              </Typography.Paragraph>

              <AlpharadioGroupField
                name="slot"
                options={timeData}
                rules={[validation.required()]}
              />

              <Flex justify="center">
                <SubmitButton loading={loading} form={form}>
                  Continue
                </SubmitButton>
              </Flex>
            </Flex>
          </Form>
        )}
        {current == 2 && (
          <Form
            form={form}
            name="basic"
            onFinish={onFinishStep3}
            layout="vertical"
          >
            <Row gutter={32}>
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
              <Col span={12}>
                <AlphaTextField
                  name="age"
                  placeholder="Student Age"
                  maxLength={2}
                  rules={[validation.required(), validation.onlyNumbers()]}
                />
              </Col>
              <Col span={12}>
                <AlphaSelectField
                  name="lessonBefore"
                  placeholder="Has your child taken Gurmukhi lessons before?"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </Col>
              <Col span={12}>
                <AlphaSelectField
                  name="size"
                  placeholder="All Student - Sweatshirt/ T-Shirt Size"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </Col>
              <Col span={12}>
                <AlphaTextField
                  name="etc"
                  placeholder="Anything else we need to know about the students"
                  maxLength={2}
                  rules={[validation.required()]}
                />
              </Col>
            </Row>
            <Flex justify="center">
              <SubmitButton loading={loading} form={form}>
                Continue
              </SubmitButton>
            </Flex>
          </Form>
        )}
        {current == 3 && (
          <Form
            form={form}
            name="basic"
            onFinish={onFinishStep4}
            layout="vertical"
          >
            <Row gutter={32}>
              <Col span={12}>
                <AlphaTextField
                  name="parentsName"
                  placeholder="Parents Name"
                  rules={[validation.required(), validation.maxLength(30)]}
                />
              </Col>

              <Col span={12}>
                <AlphaTextField
                  name="parentsEmailId"
                  placeholder="Parents Email Id"
                  type="email"
                  rules={[validation.required(), validation.maxLength(30)]}
                />
              </Col>
              <Col span={12}>
                <AlphaTextField
                  name="parentsContact"
                  placeholder="Parents Contact No."
                  maxLength={10}
                  rules={[
                    validation.required(),
                    validation.onlyNumbers(),
                    validation.minLength(10),
                  ]}
                />
              </Col>

              <Col span={12}>
                <AlphaSelectField
                  name="tablaInterest"
                  placeholder="Will your be interested for learning Kirtan & Tabla?"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </Col>
              <Col span={12}>
                <AlphaSelectField
                  name="volunteering"
                  placeholder="Would you be Interested in Volunteering?"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </Col>
              <Col span={12}>
                <AlphaTextField
                  name="goals"
                  placeholder="What are your goals for your student in learning punjabi?"
                  rules={[validation.required()]}
                />
              </Col>
            </Row>
            <Flex justify="center">
              <SubmitButton loading={loading} form={form}>
                Continue
              </SubmitButton>
            </Flex>
          </Form>
        )}
      </Modal>
    </>
  );
}

export default KidsClassSection;
