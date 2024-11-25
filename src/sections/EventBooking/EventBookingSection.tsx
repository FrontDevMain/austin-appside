import { Col, Flex, Row, Space, Typography } from "antd";
import weddingImg from "../../assets/images/eventBookibgs/wedding.svg";
import langerImg from "../../assets/images/eventBookibgs/langar.svg";
import akhandImg from "../../assets/images/eventBookibgs/akhand.svg";
import birthdayImg from "../../assets/images/eventBookibgs/birthday.svg";
import sehajImg from "../../assets/images/eventBookibgs/sahajPath.svg";
import CustomButton from "../../components/CustomButton";

const DemoBox: React.FC<React.PropsWithChildren<{ value: number }>> = (
  props
) => <p className={`height-${props.value}`}>{props.children}</p>;

function EventBookingSection() {
  const imageStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <Space direction="vertical" size={"large"} style={{ padding: "5vh 0" }}>
      <Typography.Title
        style={{
          fontSize: 72,
          marginTop: 0,
          textAlign: "center",
        }}
      >
        Events
      </Typography.Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Row dir="vertical" gutter={[16, 16]}>
            <Col span={24}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "clip",
                }}
                className="image_effect"
              >
                <img
                  src={weddingImg}
                  alt="Wedding Image"
                  draggable={false}
                  style={imageStyle}
                />
                <Flex
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    position: "absolute",
                    bottom: 0,
                    height: 100,
                    width: "100%",
                  }}
                  align="end"
                  justify="space-between"
                >
                  <Typography.Title
                    level={3}
                    style={{ color: "white", margin: 10 }}
                  >
                    Wedding
                  </Typography.Title>
                  <CustomButton style={{ margin: 10 }}>Book</CustomButton>
                </Flex>
              </div>
            </Col>
            <Col span={24}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "clip",
                }}
                className="image_effect"
              >
                <img
                  src={langerImg}
                  alt="Langar Image"
                  draggable={false}
                  style={imageStyle}
                />
                <Flex
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    position: "absolute",
                    bottom: 0,
                    height: 100,
                    width: "100%",
                  }}
                  align="end"
                  justify="space-between"
                >
                  <Typography.Title
                    level={3}
                    style={{ color: "white", margin: 10 }}
                  >
                    Langar
                  </Typography.Title>
                  <CustomButton style={{ margin: 10 }}>Book</CustomButton>
                </Flex>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row dir="vertical" gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "clip",
                    }}
                    className="image_effect"
                  >
                    <img
                      src={akhandImg}
                      alt="Langar Image"
                      draggable={false}
                      style={imageStyle}
                    />
                    <Flex
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                        position: "absolute",
                        bottom: 0,
                        height: 100,
                        width: "100%",
                      }}
                      align="end"
                      justify="space-between"
                    >
                      <Typography.Title
                        level={3}
                        style={{ color: "white", margin: 10 }}
                      >
                        Akhand Paath
                      </Typography.Title>
                      <CustomButton style={{ margin: 10 }}>Book</CustomButton>
                    </Flex>
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      overflow: "clip",
                    }}
                    className="image_effect"
                  >
                    <img
                      src={birthdayImg}
                      alt="Langar Image"
                      draggable={false}
                      style={imageStyle}
                    />
                    <Flex
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                        position: "absolute",
                        bottom: 0,
                        height: 100,
                        width: "100%",
                      }}
                      align="end"
                      justify="space-between"
                    >
                      <Typography.Title
                        level={3}
                        style={{ color: "white", margin: 10 }}
                      >
                        Birthday
                      </Typography.Title>
                      <CustomButton style={{ margin: 10 }}>Book</CustomButton>
                    </Flex>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "clip",
                }}
                className="image_effect"
              >
                <img
                  src={sehajImg}
                  alt="Langar Image"
                  draggable={false}
                  style={imageStyle}
                />
                <Flex
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    position: "absolute",
                    bottom: 0,
                    height: 100,
                    width: "100%",
                  }}
                  align="end"
                  justify="space-between"
                >
                  <Typography.Title
                    level={3}
                    style={{ color: "white", margin: 10 }}
                  >
                    Sehaj Paath
                  </Typography.Title>
                  <CustomButton style={{ margin: 10 }}>Book</CustomButton>
                </Flex>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Space>
  );
}

export default EventBookingSection;
