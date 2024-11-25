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
      title: "Events Booking",
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
        paddingBottom: 10,
      }}
    >
      <Typography.Title
        level={1}
        style={{ textAlign: "center", color: "#ffffff", paddingTop: 220 }}
      >
        {data.title}
      </Typography.Title>
      <Typography.Paragraph
        style={{
          textAlign: "center",
          color: "#ffffff",
          paddingTop: 60,
        }}
      >
        {data.desc}
      </Typography.Paragraph>
    </div>
  );
}

export default Header;
