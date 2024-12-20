import { Col, Flex, Grid, Row, Space, theme, Typography } from "antd";
import homeSection1Img from "../../assets/images/place.svg";
import homeSection2Img from "../../assets/images/connect.svg";

const { useToken } = theme;

function HomeSection() {
  const { token } = useToken();
  const screens = Grid.useBreakpoint();
  const cardData = ["Join us", "Upcoming Events", "Make a Donation"];

  return (
    <Space
      direction={"vertical"}
      size={"large"}
      style={{ padding: "20vh 0 5vh" }}
    >
      {/* section 1 */}
      <Row>
        <Col span={screens.md ? 8 : 20} offset={screens.md ? 4 : 2}>
          <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
            WELCOME
          </Typography.Paragraph>
          <Typography.Title
            className=""
            style={{ fontSize: screens.md ? 72 : 48, marginTop: 0 }}
          >
            Who Are We?
          </Typography.Title>
        </Col>
        <Col span={screens.md ? 8 : 20} offset={screens.md ? 0 : 2}>
          <Typography.Paragraph style={{ fontSize: 16 }}>
            The Singh Sabha Gurdwara of Austin represents the activity and goals
            of the wider sangat in Austin, Texas. Since 1995, the Gurdwara has
            held regular Gurdwara Diwans in various rented sites. The Gurdwara
            was formally established as a 501(c)(3) corporation in 2003.
            <br />
            <br />
            Diwans are held on the second and fourth Sunday of each month. The
            Gurdwara sends an email to registered members and updates the
            Facebook page with the Diwan schedule and timings 2-3 days before
            the Diwan.
          </Typography.Paragraph>
        </Col>
      </Row>

      {/* section 1 cards */}
      <Row>
        <Col offset={screens.md ? 4 : 2} span={screens.md ? 16 : 22}>
          <Row gutter={[16, 16]}>
            {cardData.map((item, index) => (
              <Col span={screens.md ? 8 : 24}>
                <Space
                  direction="vertical"
                  size={"large"}
                  style={{
                    backgroundColor: "#fff",
                    padding: "50px  0px",
                    width: "90%",
                    margin: "auto",
                    borderRadius: 10,
                    boxShadow: "0px 4px 8px 0px #00000040",
                  }}
                >
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      margin: "auto",
                      borderRadius: "50%",
                      backgroundColor: token.colorTextSecondary,
                    }}
                  ></div>
                  <Typography.Paragraph
                    className=""
                    style={{
                      textAlign: "center",
                      fontSize: 32,
                    }}
                  >
                    {item}
                  </Typography.Paragraph>
                </Space>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* section 2 */}
      <Row style={{ margin: "10vh 0 2vh" }}>
        <Col offset={4} span={16}>
          <Typography.Paragraph
            style={{
              color: token.colorTextSecondary,
              marginBottom: 0,
              textAlign: "center",
            }}
          >
            WELCOME
          </Typography.Paragraph>
          <Typography.Title
            className=""
            style={{
              fontSize: screens.md ? 72 : 48,
              marginTop: 0,
              textAlign: "center",
            }}
          >
            Learn About Sikhs
          </Typography.Title>
          <Typography.Paragraph
            style={{
              textAlign: "center",
            }}
          >
            Sikhism (/ˈsɪkɪzəm/) or Sikhi (Punjabi: Sikkhī, [ˈsɪkːʰiː], from,
            Sikh, ‘disciple’, ‘seeker’, or ‘learner’) is a monotheistic and
            panentheistic religion that originated in the Punjab region of the
            Indian subcontinent around the end of the 15th century CE. Sikhism
            is one of the youngest of the major religions and the world’s
            fifth-largest organized religion, with about 30 million Sikhs as of
            the early-21st century.
            <br />
            Sikhism developed from the spiritual teachings of Guru Nanak, the
            first Guru (1469–1539), and of the nine Sikh gurus who succeeded
            him. The tenth guru, Gobind Singh (1666–1708), named the Sikh
            scripture Guru Granth Sahib as his successor, bringing to a close
            the line of human gurus and establishing the scripture as the
            eternal, religious spiritual guide for Sikhs. Guru Nanak taught that
            living an “active, creative, and practical life” of “truthfulness,
            fidelity, self-control and purity” is above metaphysical truth, and
            that the ideal man.
          </Typography.Paragraph>
          <Row style={{ marginTop: "6vh" }} gutter={48}>
            <Col
              span={screens.md ? 12 : 24}
              style={{ justifyItems: "center", alignSelf: "center" }}
            >
              <img
                src={homeSection1Img}
                alt="Place of Peace"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Col>
            <Col
              span={screens.md ? 12 : 24}
              style={{ justifyItems: "center", alignSelf: "center" }}
            >
              <Flex vertical style={{ height: "inherit", width: "80%" }}>
                {" "}
                <Typography.Paragraph className="heading_2 center">
                  Place Of Peace
                </Typography.Paragraph>{" "}
                <Typography.Paragraph
                  style={{
                    textAlign: "center",
                  }}
                >
                  A Gurudwara is a haven of peace, where minds find calm, hearts
                  find unity, and souls connect with the divine.
                </Typography.Paragraph>
              </Flex>
            </Col>
          </Row>

          <Row
            style={{
              marginTop: "6vh",
              flexDirection: screens.md ? "row" : "column-reverse",
            }}
            gutter={32}
          >
            <Col
              span={screens.md ? 12 : 24}
              style={{ justifyItems: "center", alignSelf: "center" }}
            >
              <Flex vertical style={{ height: "inherit", width: "80%" }}>
                <Typography.Paragraph className="heading_2 center">
                  Connect Devotees
                </Typography.Paragraph>{" "}
                <Typography.Paragraph
                  style={{
                    textAlign: "center",
                  }}
                >
                  A place where devotees unite in faith, finding strength and
                  connection through shared devotion and service.
                </Typography.Paragraph>
              </Flex>
            </Col>
            <Col
              span={screens.md ? 12 : 24}
              style={{ justifyItems: "center", alignSelf: "center" }}
            >
              <img
                src={homeSection2Img}
                alt="Place of Peace"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Space>
  );
}

export default HomeSection;
