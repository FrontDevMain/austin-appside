import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// auth route
import AuthProvider from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Donate from "./pages/Donate";
import { ConfigProvider, theme } from "antd";
import Footer from "./components/Footer";
import Diwan from "./pages/Diwan";
import LangerSeva from "./pages/LangerSeva";
import LiveEvents from "./pages/LiveEvents";
import EventBooking from "./pages/EventBooking";
import KidsClasses from "./pages/KidsClasses";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/scroll-to-top";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#164080",
          colorTextSecondary: "#FF7315",
          borderRadius: 8,
          fontSize: 16,
        },
        components: {
          Menu: {
            itemColor: "#ffffff",
            itemHoverColor: "#FF7315",
            colorBgContainer: "#164080",
            horizontalItemSelectedColor: "#FF7315",
          },
          Input: {
            colorBorder: "#5FAFFF",
            paddingBlock: 16,
            borderRadius: 25,
            paddingInline: 25,
            colorTextPlaceholder: "#164080",
            hoverBorderColor: "#FF7315",
            activeBorderColor: "#FF7315",
          },
          InputNumber: {
            colorBorder: "#5FAFFF",
            paddingBlock: 16,
            borderRadius: 25,
            paddingInline: 25,
            colorTextPlaceholder: "#164080",
            hoverBorderColor: "#FF7315",
            activeBorderColor: "#FF7315",
          },
          Steps: {
            iconSize: 60,
            colorPrimary: "#164080",
            iconFontSize: 18,
          },
        },
      }}
    >
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/diwan" element={<Diwan />} />
            <Route path="/langer-seva" element={<LangerSeva />} />
            <Route path="/live-events" element={<LiveEvents />} />
            <Route path="/event-booking" element={<EventBooking />} />
            <Route path="/kids-classes" element={<KidsClasses />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/donation"
              element={
                // <PrivateRoute>
                <Donate />
                // </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;
