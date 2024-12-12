import React, { useEffect, useState } from "react";
import headerImg from "../assets/images/headerImg.svg";
import { useLocation } from "react-router-dom";
import { Typography } from "antd";

function Header() {
  const { pathname } = useLocation();

  const [data, setData] = useState({ title: "", desc: "" });
  const headerInfo = [
    {
      key: "diwan",
      title: "Diwan",
      desc: "Come, sit in the Diwan, and embrace the peace and wisdom of the Guru.",
    },
    {
      key: "langer-seva",
      title: "Langar Seva",
      desc: "Join us in Langar Seva, where selfless service nourishes the body and soul.",
    },
    {
      key: "live-events",
      title: "Live Events",
      desc: "Embracing Humanity: The Sacred Tradition of Langar Seva in Gurdwara.",
    },
    {
      key: "kids-classes",
      title: "Kids Classes",
      desc: "Singh Sabha Gurdwara of Austin is open daily with weekly Diwan on Sundays.",
    },
    {
      key: "event-booking",
      title: "Events Booking",
      desc: "Embracing Humanity: The Sacred Tradition of Langar Seva in Gurdwara.",
    },
    {
      key: "donation",
      title: "Donation",
      desc: "Embracing Humanity: The Sacred Tradition of Langar Seva in Gurdwara.",
    },
    {
      key: "contact-us",
      title: "Contact Us",
      desc: "Raise your hand to make our world to be a better place",
    },
  ];

  useEffect(() => {
    headerInfo.forEach((item) => {
      if (pathname.slice(1, pathname.length) == item.key) {
        setData({ title: item.title, desc: item.desc });
      }
    });
  }, [pathname]);

  return (
    <div
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        marginTop: 60,
      }}
    >
      <Typography.Paragraph
        className="heading_1 center"
        style={{
          color: "#ffffff",
          paddingTop: 180,
        }}
      >
        {data.title}
      </Typography.Paragraph>
      <Typography.Paragraph
        className="heading_2 center"
        style={{
          color: "#ffffff",
          fontWeight: 500,
          fontSize: 22,
          paddingBottom: 10,
          marginBottom: 0,
        }}
      >
        {data.desc}
      </Typography.Paragraph>
    </div>
  );
}

export default Header;
