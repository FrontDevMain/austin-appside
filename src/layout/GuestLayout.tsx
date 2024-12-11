import { Col, Flex, Grid, Row, Space, Typography } from "antd";
import { Outlet } from "react-router-dom";
import bg from "../assets/images/auth/guestBg.svg";
import icon from "../assets/images/auth/icon.svg";

function GuestLayout() {
  const screens = Grid.useBreakpoint();
  return (
    <Row style={{ height: "99vh", width: "99vw", padding: 20 }} gutter={16}>
      <Col
        span={screens.md ? 12 : 24}
        style={{
          backgroundColor: "#EBF5FF",
          borderRadius: 20,
          display: screens.md ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={bg} alt="Background Image" style={{ width: "90%" }} />
      </Col>
      <Col
        span={screens.md ? 12 : 24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          margin: "20px 0px",
        }}
      >
        <div style={{ width: "80%", margin: "auto" }}>
          <Flex align="center" gap={10}>
            <img src={icon} width={40} />
            <Typography.Title level={3} style={{ margin: 0, color: "#000000" }}>
              Singh Sabha Gurdwara of Austin
            </Typography.Title>
          </Flex>
          <Outlet />
        </div>
      </Col>
    </Row>
  );
}

export default GuestLayout;
