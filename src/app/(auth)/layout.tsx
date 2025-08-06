import AppContextProvider from "@/context/AppContext";
import AuthContextProvider from "@/context/AuthContext";
import { ChildrenType } from "@/types/type";
import React from "react";

function layout({ children }: ChildrenType) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <div>{children}</div>
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default layout;
