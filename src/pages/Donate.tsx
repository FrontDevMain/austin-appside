import React from "react";
import Header from "../components/Header";
import { Col, Row } from "antd";
import DonationSection from "../sections/Donation/DonationSection";

function Donate() {
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
          <DonationSection />
        </Col>
      </Row>
    </>
  );
}

export default Donate;
