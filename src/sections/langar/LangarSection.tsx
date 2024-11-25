import { Col, Flex, Row, Typography } from "antd";
import langarImg from "../../assets/images/langerseva.svg";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import image1 from "../../assets/images/langerSeva/image 24.svg";
import image2 from "../../assets/images/langerSeva/image 25.svg";
import image3 from "../../assets/images/langerSeva/image 7.svg";
import image4 from "../../assets/images/langerSeva/image 5.svg";

function LangarSection() {
  const [data, setData] = useState([
    {
      id: 0,
      img: image1,
      title: "Saturday",
      desc: [
        "While Gurudwara Sahib will provide most of the Langar items (raasan) required for Langar preparation, Any items that the sevak family wishes to contribute to Langar should be delivered by 5 pm on Saturday.",
        "All the chopping of vegetables, onions, ginger, etc. will start around 6 pm on Saturday. Cooking is performed on Sunday mornings.",
      ],
      link: "",
    },
    {
      id: 1,
      img: image2,
      title: "Sunday",
      desc: [
        "The cooking of Langar will start early in the Moring around 7:30 am.",
        "While Langar Sevadars will take the lead in all langar preparation related activities, the",
        "Sevak family and their friends are all welcome and encouraged to help with any or all Aspects of Langar Seva.",
        "A simple tea with Pakoras or another similar snack will be available to the Sanga....",
      ],
      link: "",
    },
    {
      id: 23,
      img: image3,
      title: "Embracing Diversity & Inclusivity",
      desc: [
        "One of the most remarkable aspects of Langar Seva is its inclusivity. Whether rich or poor, old or young, everyone sits together on the floor in Pangat (rows) and partakes in the meal with utmost humility and equality. This practice breaks down societal barriers, fostering a sense of belonging and unity among all who share the meal.",
      ],
      link: "",
    },
    {
      id: 3,
      img: image4,
      title: "The Spiritual and Social Impact",
      desc: [
        "Beyond nourishing the body, Langar nourishes the spirit. It serves as a potent reminder of the Sikh principle of ‘ Sarbat da Bhala’ – the well-being of all, and stands as a beacon of humanitarianism. The Langar Seva extends its impact beyond the Gurudwara, often reaching out to those in need during natural disasters, emergencies, or feeding the homeless, exemplifying the ....",
      ],
      link: "",
    },
  ]);
  return (
    <>
      <Row style={{ margin: "6vh 0" }} gutter={48}>
        <Col span={12} style={{ justifyItems: "center", alignSelf: "center" }}>
          <Flex vertical style={{ height: "inherit", width: "80%" }}>
            <Typography.Title
              level={1}
              style={{
                // fontSize: 60,
                textAlign: "center",
                marginTop: 0,
              }}
            >
              Langar Seva
            </Typography.Title>{" "}
            <Typography.Paragraph
              style={{
                fontSize: 16,
                textAlign: "center",
              }}
            >
              The SSGA appreciates your co-operation and understanding in
              preparing a simple Langar as per Guru-Maryada. The management
              would appreciate it if all Langar items be prepared within
              Gurudwara’ s Kitchen. Please contact the management of Singh Sabha
              or Bhai Sahib if you have plans to bring ready-to-go langar items
              that are not prepared within Gurdwara’ s kitchen to ensure
              Maryada.
            </Typography.Paragraph>
            <CustomButton style={{ alignSelf: "center" }}>
              Book Now
            </CustomButton>
          </Flex>
        </Col>
        <Col span={12} style={{ justifyItems: "center", alignSelf: "center" }}>
          <img
            src={langarImg}
            alt="Place of Peace"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
      <Row style={{ margin: "16vh 0", height: "fit-content" }} gutter={16}>
        {data.map((item) => (
          <Col span={6}>
            <div
              style={{
                boxShadow: "0px 4px 8px 0px #00000040",
                borderRadius: 16,
                padding: 16,
                backgroundColor: "#ffffff",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src={item.img}
                alt="langer Seva Image 1"
                style={{ width: "100%" }}
              />
              <Typography.Title level={4} style={{ marginTop: 5 }}>
                {item.title}
              </Typography.Title>
              <ul style={{ marginBottom: 40 }}>
                {item.desc.map((key) => (
                  <li>
                    <Typography.Paragraph style={{ lineHeight: "19.5px" }}>
                      {key}
                    </Typography.Paragraph>
                  </li>
                ))}
              </ul>
              <Flex
                justify="center"
                align="end"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: 15,
                  transform: "translate(-50%)",
                }}
              >
                <CustomButton style={{ alignSelf: "center" }}>
                  Read more
                </CustomButton>
              </Flex>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default LangarSection;
