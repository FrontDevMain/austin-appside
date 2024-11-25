import React from "react";
import Header from "../components/Header";
import { Col, Row } from "antd";
import LangarSection from "../sections/langar/LangarSection";

function LangerSeva() {
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
          <LangarSection />
        </Col>
      </Row>
    </>
  );
}

export default LangerSeva;
