import diwanImg from "../../assets/images/diwanImg.svg";
import { Col, Flex, Grid, Row, theme, Typography } from "antd";

function DiwanSection() {
  const { token } = theme.useToken();
  const screens = Grid.useBreakpoint();

  const timeTable = [
    { time: "11:30 AM", title: "Sangat and Kids Kirtan" },
    { time: "12:00 AM", title: "Kirtan by Bhai Sahib" },
    { time: "1:15 PM", title: "Ardas and Hukamnama" },
    { time: "1:30 PM", title: "Parshad and Langar" },
  ];

  return (
    <>
      <Row
        style={{
          margin: "6vh 0",
          flexDirection: screens.md ? "row" : "column-reverse",
        }}
        gutter={32}
      >
        <Col span={screens.md ? 12 : 24}>
          <Flex vertical style={{ height: "inherit" }}>
            {" "}
            <Typography.Paragraph className="heading_2 center">
              Program Schedule
            </Typography.Paragraph>{" "}
          </Flex>
          <ul>
            {timeTable.map((item) => (
              <li style={{ listStyle: token.colorText }}>
                <Row gutter={48}>
                  <Col span={6}>
                    <Typography.Paragraph
                      style={{
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.time}
                    </Typography.Paragraph>{" "}
                  </Col>
                  <Col>
                    <Typography.Paragraph style={{ marginBottom: 0 }}>
                      {item.title}
                    </Typography.Paragraph>{" "}
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
          <Typography.Paragraph>
            To Sponsor the Diwan{" "}
            <Typography.Link
              style={{ color: token.colorTextSecondary, fontWeight: 600 }}
            >
              Click Here{" "}
            </Typography.Link>
            (Sponsorship Money goes towards gurdwara operating expense)
          </Typography.Paragraph>
          <div
            style={{
              border: `1px solid ${token.colorText}`,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Typography.Paragraph style={{ lineHeight: "19.5px" }}>
              Volunteers are needed to help set up and clean up after the diwan.
              To volunteer in the setup, please arrive at the gurdwara sahib at
              10:15 AM. To help in the cleanup, please plan to stay after the
              langar.{" "}
            </Typography.Paragraph>
          </div>
        </Col>
        <Col
          span={screens.md ? 12 : 24}
          style={{ justifyItems: "center", alignSelf: "center" }}
        >
          <img
            src={diwanImg}
            alt="Place of Peace"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </>
  );
}

export default DiwanSection;
