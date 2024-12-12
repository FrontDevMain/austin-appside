import {
  Alert,
  Col,
  Divider,
  Flex,
  Form,
  Grid,
  Input,
  Modal,
  Row,
  Typography,
} from "antd";
import langarImg from "../../assets/images/langerseva.svg";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import image1 from "../../assets/images/langerSeva/image 24.svg";
import image2 from "../../assets/images/langerSeva/image 25.svg";
import image3 from "../../assets/images/langerSeva/image 7.svg";
import image4 from "../../assets/images/langerSeva/image 5.svg";
import { AlpharadioGroupField, AlphaTextField } from "../../components/form";
import { validation } from "../../components/form/validations";
import AlphaDatePicker from "../../components/form/AlphaDatePicker";
import SubmitButton from "../../components/form/SubmitButton";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

function LangarSection() {
  const { pathname } = useLocation();
  const { isUserAuthenticate } = useAuth();
  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();
  const [form] = Form.useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const timeData = [
    { label: "12:30 AM - 1:30 PM", value: "12:30am-1:30pm" },
    { label: "1:30 PM - 2:30 PM", value: "1:30pm-2:30pm" },
    { label: "2:30 PM - 3:30 PM", value: "2:30pm-3:30pm" },
    { label: "3:30 PM - 4:30 PM", value: "3:30pm-4:30pm" },
  ];

  const [data, setData] = useState([
    {
      id: 0,
      img: image1,
      title: "Saturday",
      desc: [
        "While Gurudwara Sahib will provide most of the Langar items (raasan) required for Langar preparation, Any items that the sevak family wishes to contribute to Langar should be delivered by 5 pm on Saturday.",
        "All the chopping of vegetables, onions, ginger, etc. will start around 6 pm on Saturday. Cooking is performed on Sunday mornings.",
      ],
      link: "",
    },
    {
      id: 1,
      img: image2,
      title: "Sunday",
      desc: [
        "The cooking of Langar will start early in the Moring around 7:30 am.",
        "While Langar Sevadars will take the lead in all langar preparation related activities, the",
        "Sevak family and their friends are all welcome and encouraged to help with any or all Aspects of Langar Seva.",
        "A simple tea with Pakoras or another similar snack will be available to the Sanga....",
      ],
      link: "",
    },
    {
      id: 23,
      img: image3,
      title: "Embracing Diversity & Inclusivity",
      desc: [
        "One of the most remarkable aspects of Langar Seva is its inclusivity. Whether rich or poor, old or young, everyone sits together on the floor in Pangat (rows) and partakes in the meal with utmost humility and equality. This practice breaks down societal barriers, fostering a sense of belonging and unity among all who share the meal.",
      ],
      link: "",
    },
    {
      id: 3,
      img: image4,
      title: "The Spiritual and Social Impact",
      desc: [
        "Beyond nourishing the body, Langar nourishes the spirit. It serves as a potent reminder of the Sikh principle of ‘ Sarbat da Bhala’ – the well-being of all, and stands as a beacon of humanitarianism. The Langar Seva extends its impact beyond the Gurudwara, often reaching out to those in need during natural disasters, emergencies, or feeding the homeless, exemplifying the ....",
      ],
      link: "",
    },
  ]);

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
        type: "langar",
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
      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          showIcon
          closeIcon
          style={{ marginTop: 3 }}
        />
      )}
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
              Langar Seva
            </Typography.Paragraph>{" "}
            <Typography.Paragraph
              style={{
                textAlign: "center",
                width: screens.md ? "70%" : "95%",
                margin: "auto",
              }}
            >
              The SSGA appreciates your co-operation and understanding in
              preparing a simple Langar as per Guru-Maryada. The management
              would appreciate it if all Langar items be prepared within
              Gurudwara's Kitchen. Please contact the management of Singh Sabha
              or Bhai Sahib if you have plans to bring ready-to-go langar items
              that are not prepared within Gurdwara's kitchen to ensure Maryada.
            </Typography.Paragraph>
            <CustomButton
              style={{ alignSelf: "center", marginTop: 30 }}
              onClick={() => {
                isUserAuthenticate()
                  ? showModal()
                  : navigate("/auth/login", {
                      state: { callbackPath: pathname },
                    });
              }}
            >
              Book Now
            </CustomButton>
          </Flex>
        </Col>
        <Col
          span={screens.md ? 12 : 24}
          style={{ justifyItems: "center", alignSelf: "center" }}
        >
          <img
            src={langarImg}
            alt="Place of Peace"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Row
        style={{ margin: "10vh 0", height: "fit-content" }}
        gutter={screens.md ? 16 : 48}
      >
        {data.map((item) => (
          <Col
            span={screens.md ? 6 : 24}
            style={{ marginTop: screens.md ? 0 : 50 }}
          >
            <div
              style={{
                boxShadow: "0px 4px 8px 0px #00000040",
                borderRadius: 16,
                padding: 16,
                backgroundColor: "#ffffff",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src={item.img}
                alt="langer Seva Image 1"
                style={{ width: "100%" }}
              />
              <Typography.Title
                style={{ fontSize: 24, fontWeight: 700 }}
                className=""
              >
                {item.title}
              </Typography.Title>
              <ul style={{ marginBottom: 40 }}>
                {item.desc.map((key) => (
                  <li>
                    <Typography.Paragraph style={{ lineHeight: "19.5px" }}>
                      {key}
                    </Typography.Paragraph>
                  </li>
                ))}
              </ul>
              <Flex
                justify="center"
                align="end"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: 15,
                  transform: "translate(-50%)",
                }}
              >
                <CustomButton style={{ alignSelf: "center" }}>
                  Read more
                </CustomButton>
              </Flex>
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        title="Langar"
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

export default LangarSection;
