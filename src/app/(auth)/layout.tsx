import AppContextProvider from "@/context/AppContext";
import { ChildrenType } from "@/types/type";
import React from "react";

function layout({ children }: ChildrenType) {
  return (
    <AppContextProvider>
      <div>{children}</div>
    </AppContextProvider>
  );
}

export default layout;
