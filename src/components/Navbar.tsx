import { useEffect, useState } from "react";
import { Flex, Menu, MenuProps, theme, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import logo from "../assets/logo/Vector.svg";
import Logo from "./Logo";

const { useToken } = theme;

const Navbar = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState("home");
  const [isHover, setIsHover] = useState("");

  useEffect(() => {
    setCurrent(pathname.slice(1, pathname.length));
  }, [pathname]);

  const navItems = [
    { id: 1, label: "Home", key: "home" },
    { id: 2, label: "Diwan", key: "diwan" },
    { id: 3, label: "Langar Seva", key: "langer-seva" },
    { id: 4, label: "Live Events", key: "live-events" },
    { id: 0, label: <Logo />, key: "home" },
    { id: 5, label: "Event Booking", key: "event-booking" },
    { id: 6, label: "Kids Classes", key: "kids-classes" },
    { id: 7, label: "Donation", key: "donation" },
    { id: 8, label: "Contact Us", key: "contact-us" },
  ];

  return (
    <nav>
      <Flex
        align="center"
        justify="center"
        style={{
          backgroundColor: token.colorText,
          position: "fixed",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        {navItems.map((item) => {
          return item.id == 0 ? (
            <span style={{ margin: "0px 20px" }}>{item.label}</span>
          ) : (
            <Typography.Link
              key={item.key}
              className={isHover || current ? "scale-content" : ""}
              onClick={() => {
                navigate("/" + item.key);
                setCurrent(item.key);
              }}
              onMouseEnter={() => setIsHover(item.key)}
              onMouseLeave={() => setIsHover("")}
              style={{
                display: "inline-block",
                padding: 10,
                color:
                  isHover == item.key
                    ? token.colorTextSecondary
                    : current == item.key
                    ? token.colorTextSecondary
                    : "#fff",
                fontSize: 16,
                marginBottom: 10,
                cursor: "pointer",
              }}
            >
              {item.label}
            </Typography.Link>
          );
        })}
      </Flex>
    </nav>
  );
};

export default Navbar;
