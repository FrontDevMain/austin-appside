import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// auth route
import AuthProvider from "./auth/AuthProvider";

import Navbar from "./components/Navbar";
import { ConfigProvider, theme } from "antd";
import Footer from "./components/Footer";

import ScrollToTop from "./components/scroll-to-top";
import UserLayout from "./layout/UserLayout";
import GuestLayout from "./layout/GuestLayout";

//auth
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const NewPassword = lazy(() => import("./pages/auth/NewPassword"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));

//pages
const Home = lazy(() => import("./pages/Home"));
const Diwan = lazy(() => import("./pages/Diwan"));
const LangerSeva = lazy(() => import("./pages/LangerSeva"));
const LiveEvents = lazy(() => import("./pages/LiveEvents"));
const Donate = lazy(() => import("./pages/Donate"));
const EventBooking = lazy(() => import("./pages/EventBooking"));
const KidsClasses = lazy(() => import("./pages/KidsClasses"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#164080",
          colorTextSecondary: "#FF7315",
          borderRadius: 8,

          colorLink: "#FF7315",
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
      <Suspense fallback={<></>}>
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<UserLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/diwan" element={<Diwan />} />
                <Route path="/langer-seva" element={<LangerSeva />} />
                <Route path="/live-events" element={<LiveEvents />} />
                <Route path="/event-booking" element={<EventBooking />} />
                <Route path="/kids-classes" element={<KidsClasses />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/donation" element={<Donate />} />
                <Route path="/auth" element={<GuestLayout />}>
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/auth/Register" element={<Register />} />
                  <Route
                    path="/auth/forgot-password"
                    element={<ForgotPassword />}
                  />
                </Route>
              </Route>
            </Routes>
            <Footer />

            <ScrollToTop />
          </Router>
        </AuthProvider>
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
