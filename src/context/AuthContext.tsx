"use client";
import {  users } from "@/data/users";
import { ChildrenType, IAuthContextType, IFormInputs } from "@/types/type";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({} as IAuthContextType);

function AuthContextProvider({ children }: ChildrenType) {
  const [user, setUser] = useState<IFormInputs>();
  const addUser = (data: IFormInputs) => {
    users.push(data);
    setUser(data);
    // axios("http://localhost:3001/users", {
    //   method: "POST",
    //   data: data,
    // });
    console.log(users);
  };

  if (user) {
    console.log("first");
  } else {
    console.log("no");
  }

  return (
    <AuthContext.Provider value={{ addUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
