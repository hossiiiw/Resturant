"use client";
import { users } from "@/data/users";
import { ChildrenType, IAuthContextType, IFormInputs } from "@/types/type";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext({} as IAuthContextType);

function AuthContextProvider({ children }: ChildrenType) {
  const [user, setUser] = useState<IFormInputs>();
  const [loginToken, setLoginToken] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get("loginToken");
    const userData = localStorage.getItem("user");
    if (token) {
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }

    if (token) {
      setLoginToken(true);
    }
  }, [loginToken]);

  const ExitUser = () => {
    Cookies.remove("loginToken");
    setLoginToken(false);
  };

  const addUser = (data: IFormInputs) => {
    users.push(data);
    // axios("http://localhost:3001/users", {
    //   method: "POST",
    //   data: data,
    // });
    console.log(users);
  };

  console.log(user);
  return (
    <AuthContext.Provider value={{ addUser, ExitUser, user, loginToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
