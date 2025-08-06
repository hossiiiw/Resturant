"use client";
import { User, users } from "@/data/users";
import { ChildrenType, IAuthContextType } from "@/types/type";
import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext({} as IAuthContextType);

function AuthContextProvider({ children }: ChildrenType) {
  const addUser = (data: User) => {
    users.push(data);
    // axios("http://localhost:3001/users", {
    //   method: "POST",
    //   data: data,
    // });
  };

  return (
    <AuthContext.Provider value={{ addUser }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
