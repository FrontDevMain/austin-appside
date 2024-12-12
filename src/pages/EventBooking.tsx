import React from "react";
import Header from "../components/Header";
import { Col, Grid, Row } from "antd";
import EventBookingSection from "../sections/EventBooking/EventBookingSection";

function EventBooking() {
  const screens = Grid.useBreakpoint();
  return (
    <>
      <Header />
      <Row
        style={{
          background:
            "linear-gradient(180deg, #C5E2FF 0%, #EBF5FF 46.5%, #FFFFFF 100%)",
        }}
      >
        <Col offset={screens.md ? 2 : 1} span={screens.md ? 20 : 22}>
          <EventBookingSection />
        </Col>
      </Row>
    </>
  );
}

export default EventBooking;
