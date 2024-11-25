import React from "react";
import Header from "../components/Header";
import LiveEventSection from "../sections/LiveEvents/LiveEventSection";
import { Col, Row } from "antd";

function LiveEvents() {
  return (
    <>
      <Header />
      <Row
        style={{
          background:
            "linear-gradient(180deg, #C5E2FF 0%, #EBF5FF 46.5%, #FFFFFF 100%)",
        }}
      >
        <Col offset={4} span={16}>
          <LiveEventSection />
        </Col>
      </Row>
    </>
  );
}

export default LiveEvents;
