import { Col, Flex, Row, Typography } from "antd";
import CustomButton from "../../components/CustomButton";
import image1 from "../../assets/images/donation.svg";

function DonationSection() {
  return (
    <Row style={{ margin: "6vh 0" }} gutter={48}>
      <Col span={12} style={{ justifyItems: "center", alignSelf: "center" }}>
        <Flex vertical style={{ height: "inherit" }}>
          <Typography.Title
            level={1}
            style={{
              // fontSize: 60,
              textAlign: "center",
              marginTop: 0,
            }}
          >
            Let's Donate
          </Typography.Title>{" "}
          <Typography.Paragraph
            style={{
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Donating in a Gurudwara, a place of worship in Sikhism, is a deeply
            ingrained tradition rooted in the Sikh principles of selfless
            service and community support. Gurudwaras serve as not just
            spiritual centers but also as hubs for humanitarian activities.
            Sikhs believe in the concept of “Dasvandh,” wherein individuals
            contribute a tenth of their earnings for the common good. This
            donation, known as “Guru’s offering” or “Golak,” supports various
            philanthropic endeavors such as langar, a community kitchen that
            provides free meals to all visitors irrespective of their
            background. The act of giving in a Gurudwara extends beyond
            financial contributions; it also involves voluntary service or
            “Seva.” This inclusive approach to donation fosters a sense of
            equality and unity among the Sikh community, promoting the ideals of
            compassion, generosity, and communal well-being. The Gurudwara thus
            stands not only as a place of worship but also as a symbol of
            collective responsibility and shared humanity.
          </Typography.Paragraph>
          <CustomButton style={{ alignSelf: "center" }}>Donate</CustomButton>
        </Flex>
      </Col>
      <Col span={12} style={{ justifyItems: "center", alignSelf: "center" }}>
        <img
          src={image1}
          alt="Place of Peace"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Col>
    </Row>
  );
}

export default DonationSection;
