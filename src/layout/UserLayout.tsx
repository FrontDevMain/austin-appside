import React from "react";
import { Outlet } from "react-router-dom";

export const AuthContext = React.createContext({});

export default function UserLayout() {
  const isAuthenticated = () => {
    let isAuthenticated = false;
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      const authData = localStorage.getItem("auth");
      if (authData) {
        isAuthenticated = true;
      }
    }

    return isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
