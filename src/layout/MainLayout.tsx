import { ChildrenType } from "@/types/type";
import React from "react";
import Navbar from "./Navbar";
import AppContextProvider from "@/context/AppContext";

function MainLayout({ children }: ChildrenType) {
  return (
    <AppContextProvider>
      <div className="bg-theme">
        <Navbar />
        {children}
      </div>
    </AppContextProvider>
  );
}

export default MainLayout;
