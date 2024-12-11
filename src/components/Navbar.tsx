import { useEffect, useState } from "react";
import {
  Drawer,
  Flex,
  Grid,
  Menu,
  MenuProps,
  Space,
  theme,
  Typography,
} from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "./Logo";
import hamburgerIcon from "../assets/Icons/hamburger.svg";
import { useAuth } from "../auth/AuthProvider";

const { useToken } = theme;

const Navbar = () => {
  const { user, logout } = useAuth();
  const { token } = useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const screens = Grid.useBreakpoint();
  const [current, setCurrent] = useState("home");
  const [isHover, setIsHover] = useState("");

  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    setCurrent(pathname.slice(1, pathname.length));
  }, [pathname]);

  const navItems = [
    { id: 1, label: "Home", key: "home" },
    { id: 2, label: "Diwan", key: "diwan" },
    { id: 3, label: "Langar Seva", key: "langer-seva" },
    { id: 4, label: "Live Events", key: "live-events" },
    screens.xl
      ? { id: 0, label: <Logo />, key: "home" }
      : { id: 0, label: "", key: "" },
    { id: 5, label: "Event Booking", key: "event-booking" },
    { id: 6, label: "Kids Classes", key: "kids-classes" },
    { id: 7, label: "Donation", key: "donation" },
    { id: 8, label: "Contact Us", key: "contact-us" },
  ];

  if (!screens.xl) {
    return (
      <nav>
        <Flex
          align="center"
          justify="space-between"
          style={{
            backgroundColor: token.colorText,
            position: "fixed",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <Space style={{ marginLeft: 10, height: 70 }}>
            <div style={{ height: 50, width: 50 }}>
              <Logo />
            </div>
          </Space>
          <Space style={{ marginRight: 10 }} onClick={showDrawer}>
            <img src={hamburgerIcon} height={50} />
          </Space>
        </Flex>
        <Drawer onClose={onClose} open={open}>
          <Flex vertical justify="space-between" style={{ height: "100%" }}>
            <div>
              {navItems.map((item) =>
                item.id == 0 ? (
                  <span style={{ margin: "0px 20px" }}>{item.label}</span>
                ) : (
                  <Typography.Link
                    key={item.key}
                    className={isHover || current ? "scale-content" : ""}
                    onClick={() => {
                      navigate("/" + item.key);
                      setCurrent(item.key);
                      onClose();
                    }}
                    onMouseEnter={() => setIsHover(item.key)}
                    onMouseLeave={() => setIsHover("")}
                    style={{
                      display: "block",
                      padding: 10,
                      color:
                        isHover == item.key
                          ? token.colorTextSecondary
                          : current == item.key
                          ? token.colorTextSecondary
                          : token.colorText,
                      fontSize: 20,
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </Typography.Link>
                )
              )}
            </div>

            <Flex gap={10}>
              <Typography.Link
                className={isHover || current ? "scale-content" : ""}
                onClick={() => {
                  if (user) {
                    logout();
                  } else {
                    navigate("/auth/login");
                    onClose();
                  }
                }}
                onMouseEnter={() => setIsHover("login")}
                onMouseLeave={() => setIsHover("")}
                style={{
                  display: "inline-block",
                  padding: 10,
                  color: token.colorText,
                  fontSize: 22,
                  marginBottom: 10,
                  cursor: "pointer",
                  border: `1px solid ${token.colorText}`,
                  borderRadius: 10,
                  flexGrow: 1,
                }}
              >
                {user ? "Logout" : " Login"}
              </Typography.Link>
              <Typography.Paragraph
                className="donate_button"
                onClick={() => {
                  navigate("/donation");
                  onClose();
                }}
                style={{
                  padding: 10,
                  color: token.colorText,
                  fontSize: 22,
                  marginBottom: 10,
                  cursor: "pointer",
                  border: `1px solid ${token.colorText}`,
                  borderRadius: 10,
                  flexGrow: 1,
                }}
              >
                Donate
              </Typography.Paragraph>
            </Flex>
          </Flex>
        </Drawer>
      </nav>
    );
  }

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
                fontWeight: 500,
                color:
                  isHover == item.key
                    ? token.colorTextSecondary
                    : current == item.key
                    ? token.colorTextSecondary
                    : "#fff",

                marginBottom: 10,
                cursor: "pointer",
              }}
            >
              {item.label}
            </Typography.Link>
          );
        })}
      </Flex>

      <div style={{ position: "fixed", right: 40, top: 10, zIndex: 2 }}>
        <Flex>
          <Typography.Link
            className={isHover || current ? "scale-content" : ""}
            onClick={() => {
              user ? logout() : navigate("/auth/login");
            }}
            onMouseEnter={() => setIsHover("login")}
            onMouseLeave={() => setIsHover("")}
            style={{
              display: "inline-block",
              padding: 10,
              fontWeight: 500,
              color:
                isHover == "login"
                  ? token.colorTextSecondary
                  : current == "login"
                  ? token.colorTextSecondary
                  : "#fff",

              marginBottom: 10,
              cursor: "pointer",
            }}
          >
            {user ? "Logout" : " Login"}
          </Typography.Link>
          <Typography.Paragraph
            className="donate_button"
            onClick={() => {
              navigate("/donation");
            }}
          >
            Donate
          </Typography.Paragraph>
        </Flex>
      </div>
    </nav>
  );
};

export default Navbar;
