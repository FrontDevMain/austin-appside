import React, { useState } from "react";
import bgImage from "../assets/images/footerBg.svg";
import { Col, Flex, Row, theme, Typography } from "antd";
import Logo from "./Logo";

const { useToken } = theme;

function Footer() {
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
          padding: "100px 0",
        }}
      >
        <Row>
          <Col span={2} offset={4}>
            <Logo />
          </Col>
          {footerData.map((item) => {
            return (
              <Col span={4}>
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
          <Col span={4}>
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
        <Col offset={4}>
          <Typography.Paragraph style={{ color: "#ffffff", fontSize: 13 }}>
            &#169; 2024 All Rights Reserved
          </Typography.Paragraph>
          <Flex gap={"large"}>
            {footerSecurity.map((item) => {
              return (
                <Typography.Link
                  key={item.label}
                  style={{
                    display: "block",
                    width: "fit-content",
                    color:
                      isHover == item.label ? token.colorTextSecondary : "#fff",
                    fontSize: 14,
                  }}
                  onMouseEnter={() => setIsHover(item.label)}
                  onMouseLeave={() => setIsHover("")}
                >
                  {item.label}
                </Typography.Link>
              );
            })}
          </Flex>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
