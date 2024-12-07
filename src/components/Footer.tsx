import React, { useState } from "react";
import bgImage from "../assets/images/footerBg.svg";
import { Col, Flex, Grid, Row, Space, theme, Typography } from "antd";
import Logo from "./Logo";

const { useToken } = theme;

function Footer() {
  const screens = Grid.useBreakpoint();
  const { token } = useToken();
  const [isHover, setIsHover] = useState("");
  const footerData = [
    {
      title: "Links",
      menu: [
        { label: "Home", link: "/" },
        { label: "About Us", link: "" },
        { label: "Kids Classes", link: "" },
        { label: "Event Booking", link: "" },
        { label: "Diwan", link: "" },
        { label: "Langar", link: "" },
        { label: "Construction", link: "" },
      ],
    },
    {
      title: "Gurbani Links",
      menu: [
        { label: "Gurbani Kirtan", link: "" },
        { label: "Sikhi To The Max", link: "" },
        { label: "Search Gurbani", link: "" },
        { label: "Sri Granth", link: "" },
      ],
    },
    {
      title: "Sikhism Links",
      menu: [
        { label: "Sikhs Home Page", link: "" },
        { label: "BBC World Service", link: "" },
        { label: "The Sikh Coalition", link: "" },
        { label: "Sikh Media Watch", link: "" },
      ],
    },
  ];

  const footerSecurity = [
    { label: "Privacy Policy", link: "" },
    { label: "Terms of Use", link: "" },
    { label: "Sales and Refunds", link: "" },
    { label: "Legal", link: "" },
    { label: "Site Map", link: "" },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "100%",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          padding: screens.md ? "100px 0" : "10px",
        }}
      >
        <Row>
          <Col span={screens.md ? 2 : 0} offset={screens.md ? 4 : 2}>
            {screens.md ? (
              <Space style={{ height: 100 }}>
                <Logo />
              </Space>
            ) : null}
          </Col>
          {footerData.map((item) => {
            return (
              <Col span={screens.md ? 4 : 8}>
                <Typography.Title
                  level={4}
                  style={{ color: "#fff", marginTop: 0 }}
                >
                  {item.title}
                </Typography.Title>
                {item.menu.map((keys) => (
                  <Typography.Link
                    href=""
                    key={keys.label}
                    onMouseEnter={() => setIsHover(keys.label)}
                    onMouseLeave={() => setIsHover("")}
                    style={{
                      display: "block",
                      width: "fit-content",
                      color:
                        isHover == keys.label
                          ? token.colorTextSecondary
                          : "#fff",
                      transform:
                        isHover == keys.label ? "scale(1.5)" : "scale(1)",
                      fontSize: 13,
                      marginBottom: 10,
                    }}
                  >
                    {keys.label}
                  </Typography.Link>
                ))}
              </Col>
            );
          })}
          <Col span={screens.md ? 4 : 24}>
            <Typography.Title level={5} style={{ color: "#fff", marginTop: 0 }}>
              Contacts
            </Typography.Title>
            <Typography.Link
              href=""
              style={{
                display: "block",
                width: "fit-content",
                color: "#fff",
                fontSize: 14,
                marginBottom: 10,
              }}
            >
              6404 J M Holloway Lane, <br /> Austin Texas 787246
            </Typography.Link>
            <Typography.Link
              href=""
              style={{
                display: "block",
                width: "fit-content",
                color: "#fff",
                fontSize: 14,
              }}
            >
              (512) 222 - SSGA <br /> (512-222-7742)
            </Typography.Link>
          </Col>
        </Row>
      </div>
      <Row style={{ backgroundColor: "#092050", padding: "50px 0" }}>
        <Col offset={screens.md ? 4 : 1}>
          <Typography.Paragraph style={{ color: "#ffffff", fontSize: 13 }}>
            &#169; 2024 All Rights Reserved
          </Typography.Paragraph>
          <Flex gap={"large"}>
            <Row>
              {footerSecurity.map((item) => {
                return (
                  <Col span={screens.md ? 8 : 24}>
                    <Typography.Link
                      key={item.label}
                      style={{
                        display: "block",
                        width: "fit-content",
                        color:
                          isHover == item.label
                            ? token.colorTextSecondary
                            : "#fff",
                        fontSize: 14,
                      }}
                      onMouseEnter={() => setIsHover(item.label)}
                      onMouseLeave={() => setIsHover("")}
                    >
                      {item.label}
                    </Typography.Link>
                  </Col>
                );
              })}
            </Row>
          </Flex>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
