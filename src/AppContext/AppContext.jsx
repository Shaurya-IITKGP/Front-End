import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        user,
        setIsAuthenticated,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
