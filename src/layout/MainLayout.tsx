import { ChildrenType } from "@/types/type";
import React from "react";
import Navbar from "./Navbar";
import AppContextProvider from "@/context/AppContext";

function MainLayout({ children }: ChildrenType) {
  return (
    <AppContextProvider>
      <div className="bg-theme">
        <Navbar />
        <div className="sm:px-0 md:px-22 lg:44">{children}</div>
      </div>
    </AppContextProvider>
  );
}

export default MainLayout;
