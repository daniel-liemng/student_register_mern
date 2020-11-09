import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/api/users/auth", { email, password });

      setUserInfo(data);

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AppContext.Provider value={{ userInfo, login }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
