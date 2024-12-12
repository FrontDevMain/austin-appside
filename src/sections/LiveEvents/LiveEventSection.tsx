import { FileImageFilled } from "@ant-design/icons";
import { Col, Flex, Grid, Row, theme, Typography } from "antd";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/AxiosInstance";
import { ENDPOINTS } from "../../api/endPoints/EndPoints";

function LiveEventSection() {
  const { token } = theme.useToken();
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const Response = await axiosInstance.get(
        ENDPOINTS.GET_BOOKINGS(1, 5, "")
      );
      if (Response.status !== 201) throw new Error("Something went wrong");
      console.log(Response);
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  const data = [
    {
      id: 0,
      img: "",
      title: "Annual Baisakhi Celebration",
      desc: "Celebrate the Sikh New Year and the Khalsa Day with us! Enjoy prayers, cultural performances, and a festive Langar.",
      date: "April 13, 2025",
      link: "",
    },
    {
      id: 1,
      img: "",
      title: "Youth Kirtan Night",
      desc: "A night dedicated to our youth, where they can lead the congregation in kirtan and learn about Sikh teachings.",
      date: "Every Last Friday of the Month",
      link: "",
    },
    {
      id: 2,
      img: "",
      title: "Annual Baisakhi Celebration",
      desc: "Celebrate the Sikh New Year and the Khalsa Day with us! Enjoy prayers, cultural performances, and a festive Langar.",
      date: "April 13, 2025",
      link: "",
    },
  ];

  const attendBooking = async (id: string) => {
    try {
      const Response = await axiosInstance.get(ENDPOINTS.ATTEND_BOOKING(id));
      if (Response.status !== 200) throw new Error("Something went wrong");
      console.log(Response);
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  return (
    <Row style={{ margin: "5vh 0" }}>
      <Col span={24}>
        <Typography.Paragraph
          style={{
            color: token.colorTextSecondary,
            textAlign: "center",
          }}
        >
          EVENTS
        </Typography.Paragraph>
        <Typography.Paragraph
          className="heading_1 center"
          style={{ marginBottom: 20 }}
        >
          Upcoming Events
        </Typography.Paragraph>
        {data.map((item) => (
          <Row
            className="scale-content"
            style={{
              boxShadow: "0px 4px 8px 0px #00000040",
              alignItems: "center",
              marginBottom: 30,
              padding: 20,
            }}
            gutter={16}
          >
            <Col span={screens.md ? 4 : 24}></Col>
            <Col span={screens.md ? 14 : 24} style={{ alignItems: "center" }}>
              <Typography.Paragraph className="heading_2" style={{ margin: 0 }}>
                {item.title}
              </Typography.Paragraph>
              <Typography.Paragraph>{item.desc}</Typography.Paragraph>
              <Typography.Paragraph
                style={{ color: token.colorTextSecondary, marginBottom: 0 }}
              >
                {item.date}
              </Typography.Paragraph>
            </Col>
            <Col span={screens.md ? 6 : 24}>
              <CustomButton onClick={() => attendBooking(item.id + "")}>
                Attend
              </CustomButton>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
}

export default LiveEventSection;
