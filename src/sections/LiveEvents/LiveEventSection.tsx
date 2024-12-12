import { FileImageFilled } from "@ant-design/icons";
import { Col, Flex, Grid, Row, theme, Typography } from "antd";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";

function LiveEventSection() {
  const { token } = theme.useToken();
  const screens = Grid.useBreakpoint();

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
            <Col span={screens.md ? 16 : 24} style={{ alignItems: "center" }}>
              <Typography.Paragraph className="heading_2">
                {item.title}
              </Typography.Paragraph>
              <Typography.Paragraph>{item.desc}</Typography.Paragraph>
              <Typography.Paragraph style={{ color: token.colorTextSecondary }}>
                {item.date}
              </Typography.Paragraph>
            </Col>
            <Col span={4}>
              <CustomButton>Attend</CustomButton>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
}

export default LiveEventSection;
