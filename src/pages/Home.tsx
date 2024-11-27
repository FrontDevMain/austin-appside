import { Space, theme, Typography } from "antd";
import homeImage from "../assets/images/HomeIMG.svg";
import HomeSection from "../sections/Home/HomeSection";
import Navbar from "../components/Navbar";

const { useToken } = theme;

function Home() {
  const { token } = useToken();
  return (
    <>
      <header
        style={{
          width: "100vw",
          height: "85vh",
          backgroundColor: token.colorText,
          overflow: "visible",
        }}
      >
        <Space
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 50,
            position: "relative",
            width: "95%",
            margin: "auto",
            height: "90vh",
          }}
        >
          <img
            src={homeImage}
            alt="Gurudwara Image"
            loading="lazy"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "90vh",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "99.5%",
              paddingBottom: "8%",
              bottom: 0,
              left: -1,
              textAlign: "center",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 32.5%, #000000 100%)",
            }}
          >
            <Typography.Title
              style={{
                color: "#fff",
                fontSize: 64,
              }}
            >
              Welcome to Austin Gurdwara
            </Typography.Title>
            <Typography.Text
              style={{
                color: "#fff",
                fontSize: 28,
              }}
            >
              Embracing the spirit of service, devotion, and community.
            </Typography.Text>
          </div>
        </Space>
      </header>
      <div
        style={{
          background:
            "linear-gradient(180deg, #C5E2FF 0%, #EBF5FF 46.5%, #FFFFFF 100%)",
        }}
      >
        <HomeSection />
      </div>
    </>
  );
}

export default Home;
