import { createContext, useEffect, useMemo, useState } from "react";

export const AppContext = createContext();

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData
      ? JSON.parse(userData)
      : {
          token: null,
          college: null,
          email: null,
          id: null,
          phone: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const isAuthenticated = useMemo(() => !!user.token, [user.token]);

  const login = (userData, token) => {
    const newUser = { ...userData, token: token };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser({
      token: null,
      college: null,
      email: null,
      id: null,
      phone: null,
    });
  };

  return { isAuthenticated, login, logout, user };
};

export function AppProvider({ children }) {
  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
}
