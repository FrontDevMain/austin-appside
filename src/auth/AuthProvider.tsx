import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = (data: any) => {
    setUser(data);
    localStorage.setItem("auth_austin", data);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_austin");
  };

  useEffect(() => {
    if (isUserAuthenticate()) {
      setUser(localStorage.getItem("auth_austin"));
    }
  }, []);

  const isUserAuthenticate = () => {
    let isAuthenticated = false;
    if (window?.localStorage && window.localStorage.getItem("auth_austin")) {
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
