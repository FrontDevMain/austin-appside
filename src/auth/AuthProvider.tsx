import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = (data: any) => {
    setUser(data);
    localStorage.setItem("auth_austin", JSON.stringify(data));
    localStorage.setItem("auth_austin_token", data.token);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_austin");
    localStorage.removeItem("auth_austin_token");
  };

  useEffect(() => {
    if (isUserAuthenticate()) {
      setUser(JSON.parse(localStorage.getItem("auth_austin") || ""));
    }
  }, []);

  const isUserAuthenticate = () => {
    let isAuthenticated = false;
    if (
      window?.localStorage &&
      window.localStorage.getItem("auth_austin_token")
    ) {
      isAuthenticated = true;
    }
    return isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isUserAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
