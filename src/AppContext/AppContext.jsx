import { createContext, useEffect, useMemo, useState } from "react";
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [chevVisible, setChevVisible] = useState(true);

  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData
      ? JSON.parse(userData)
      : {
          token: null,
          college: null,
          id: null,
          phone: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const isAuthenticated = useMemo(() => {
    if (user.token) {
      return true;
    } else {
      return false;
    }
  }, [user.token]);

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
      id: null,
      phone: null,
    });
  };

  return (
    <AppContext.Provider
      value={{
        chevVisible,
        setChevVisible,
        isAuthenticated,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
