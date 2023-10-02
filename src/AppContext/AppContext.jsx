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

  // const iscated = useMemo(() => {
  //   if (user.token) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, [user.token]);

  const isAuthenticated = true;

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
  const [chevVisible, setChevVisible] = useState(true);
  
  return (
    <AppContext.Provider value={{ chevVisible, setChevVisible }}>
      {children}
    </AppContext.Provider>
  );
}
