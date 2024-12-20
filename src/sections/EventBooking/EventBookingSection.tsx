import {
  Alert,
  Col,
  Divider,
  Flex,
  Form,
  Grid,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import weddingImg from "../../assets/images/eventBookibgs/wedding.svg";
import langerImg from "../../assets/images/eventBookibgs/langar.svg";
import akhandImg from "../../assets/images/eventBookibgs/akhand.svg";
import birthdayImg from "../../assets/images/eventBookibgs/birthday.svg";
import sehajImg from "../../assets/images/eventBookibgs/sahajPath.svg";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { AlpharadioGroupField, AlphaTextField } from "../../components/form";
import { validation } from "../../components/form/validations";
import SubmitButton from "../../components/form/SubmitButton";
import AlphaDatePicker from "../../components/form/AlphaDatePicker";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

function EventBookingSection() {
  const { pathname } = useLocation();
  const { isUserAuthenticate } = useAuth();
  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [eventType, setEventType] = useState("");

  const [form] = Form.useForm();

  const showModal = (val: string) => {
    setEventType(val);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setEventType("");
    setIsModalOpen(false);
    form.resetFields();
  };

  const imageStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };

  const timeData = [
    { label: "12:30 AM - 1:30 PM", value: "12:30am-1:30pm" },
    { label: "1:30 PM - 2:30 PM", value: "1:30pm-2:30pm" },
    { label: "2:30 PM - 3:30 PM", value: "2:30pm-3:30pm" },
    { label: "3:30 PM - 4:30 PM", value: "3:30pm-4:30pm" },
  ];

  const onFinish = async (values: any) => {
    try {
      setSuccessMessage("");
      setLoading(true);
      const Response = await axiosInstance.post(ENDPOINTS.EVENT_BOOKING, {
        ...values,
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        peopleCount: +values.peopleCount,
        dateOfBooking: values.dateOfBooking,
        timeSlot: values.timeSlot,
        type: eventType,
      });
      if (Response.status !== 201) throw new Error("Something went wrong");
      setSuccessMessage(Response.data.message);
      form.resetFields();
      handleCancel();
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Space direction="vertical" size={"large"} style={{ padding: "5vh 0" }}>
        {successMessage && (
          <Alert message={successMessage} type="success" showIcon closeIcon />
        )}
        <Row gutter={[16, 16]}>
          <Col span={screens.md ? 12 : 24}>
            <Row dir="vertical" gutter={[16, 16]}>
              <Col span={24}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "clip",
                  }}
                  className="image_effect"
                >
                  <img
                    src={weddingImg}
                    alt="Wedding Image"
                    draggable={false}
                    style={imageStyle}
                  />
                  <Flex
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                      position: "absolute",
                      bottom: 0,
                      height: 100,
                      width: "100%",
                    }}
                    align="end"
                    justify="space-between"
                  >
                    <Typography.Paragraph
                      className="heading_2"
                      style={{
                        color: "white",
                        margin: 10,
                      }}
                    >
                      Wedding
                    </Typography.Paragraph>
                    <CustomButton
                      style={{ margin: 10, padding: "20px 30px" }}
                      onClick={() => {
                        isUserAuthenticate()
                          ? showModal("wedding")
                          : navigate("/auth/login", {
                              state: { callbackPath: pathname },
                            });
                      }}
                    >
                      Book
                    </CustomButton>
                  </Flex>
                </div>
              </Col>
              <Col span={24}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "clip",
                  }}
                  className="image_effect"
                >
                  <img
                    src={langerImg}
                    alt="Langar Image"
                    draggable={false}
                    style={imageStyle}
                  />
                  <Flex
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                      position: "absolute",
                      bottom: 0,
                      height: 100,
                      width: "100%",
                    }}
                    align="end"
                    justify="space-between"
                  >
                    <Typography.Paragraph
                      className="heading_2"
                      style={{
                        color: "white",
                        margin: 10,
                      }}
                    >
                      Langar
                    </Typography.Paragraph>
                    <CustomButton
                      style={{ margin: 10, padding: "20px 30px" }}
                      onClick={() => {
                        isUserAuthenticate()
                          ? showModal("langar")
                          : navigate("/auth/login", {
                              state: { callbackPath: pathname },
                            });
                      }}
                    >
                      Book
                    </CustomButton>
                  </Flex>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={screens.md ? 12 : 24}>
            <Row dir="vertical" gutter={[16, 16]}>
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col span={screens.md ? 12 : 24}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "clip",
                      }}
                      className="image_effect"
                    >
                      <img
                        src={akhandImg}
                        alt="Langar Image"
                        draggable={false}
                        style={imageStyle}
                      />
                      <Flex
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                          position: "absolute",
                          bottom: 0,
                          height: 100,
                          width: "100%",
                        }}
                        align="end"
                        justify="space-between"
                      >
                        <Typography.Paragraph
                          style={{
                            color: "white",
                            margin: 10,
                            fontWeight: 700,
                            fontSize: 24,
                          }}
                        >
                          Akhand Paath
                        </Typography.Paragraph>
                        <CustomButton
                          style={{ margin: 10, padding: "20px 30px" }}
                          onClick={() => {
                            isUserAuthenticate()
                              ? showModal("akhand path")
                              : navigate("/auth/login", {
                                  state: { callbackPath: pathname },
                                });
                          }}
                        >
                          Book
                        </CustomButton>
                      </Flex>
                    </div>
                  </Col>
                  <Col span={screens.md ? 12 : 24}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        overflow: "clip",
                      }}
                      className="image_effect"
                    >
                      <img
                        src={birthdayImg}
                        alt="Langar Image"
                        draggable={false}
                        style={imageStyle}
                      />
                      <Flex
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                          position: "absolute",
                          bottom: 0,
                          height: 100,
                          width: "100%",
                        }}
                        align="end"
                        justify="space-between"
                      >
                        <Typography.Paragraph
                          style={{
                            color: "white",
                            margin: 10,
                            fontWeight: 700,
                            fontSize: 24,
                          }}
                        >
                          Birthday
                        </Typography.Paragraph>
                        <CustomButton
                          style={{ margin: 10, padding: "20px 30px" }}
                          onClick={() => {
                            isUserAuthenticate()
                              ? showModal("birthday")
                              : navigate("/auth/login", {
                                  state: { callbackPath: pathname },
                                });
                          }}
                        >
                          Book
                        </CustomButton>
                      </Flex>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "clip",
                  }}
                  className="image_effect"
                >
                  <img
                    src={sehajImg}
                    alt="Langar Image"
                    draggable={false}
                    style={imageStyle}
                  />
                  <Flex
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                      position: "absolute",
                      bottom: 0,
                      height: 100,
                      width: "100%",
                    }}
                    align="end"
                    justify="space-between"
                  >
                    <Typography.Paragraph
                      className="heading_2"
                      style={{
                        color: "white",
                        margin: 10,
                      }}
                    >
                      Sehaj Paath
                    </Typography.Paragraph>
                    <CustomButton
                      style={{ margin: 10, padding: "20px 30px" }}
                      onClick={() => {
                        isUserAuthenticate()
                          ? showModal("sehaj path")
                          : navigate("/auth/login", {
                              state: { callbackPath: pathname },
                            });
                      }}
                    >
                      Book
                    </CustomButton>
                  </Flex>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Space>
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
          <Row style={{ margin: "2vh 0" }} gutter={32}>
            <Col span={screens.md ? 12 : 24}>
              <AlphaTextField
                name="peopleCount"
                placeholder="Number of People"
                maxLength={4}
                rules={[validation.onlyNumbers()]}
              />
            </Col>
            <Col span={screens.md ? 12 : 24}>
              <AlphaTextField
                name="fullName"
                placeholder="Full Name"
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
            <Col span={screens.md ? 12 : 24}>
              <AlphaDatePicker
                name="dateOfBooking"
                placeholder="DD/MM/YYYY"
                format={"DD/MM/YYYY"}
                rules={[validation.required()]}
              />
            </Col>
            <Col span={24}>
              <Typography.Paragraph>Available time Slots</Typography.Paragraph>

              <AlpharadioGroupField
                name="timeSlot"
                options={timeData}
                rules={[validation.required()]}
              />
            </Col>

            <Flex justify="center" style={{ width: "100%" }}>
              <SubmitButton loading={loading} form={form}>
                Book Now
              </SubmitButton>
            </Flex>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default EventBookingSection;
