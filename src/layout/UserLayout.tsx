import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthContext = React.createContext({});

export default function UserLayout() {
  const { pathname } = useLocation();

  if (pathname == "/") return <Navigate to={"/home"} />;

  return <Outlet />;
}
