import { ChildrenType } from "@/types/type";
import React from "react";
import Navbar from "./Navbar";
import AppContextProvider from "@/context/AppContext";
import Footer from "./Footer";
import AuthContextProvider from "@/context/AuthContext";

function MainLayout({ children }: ChildrenType) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <div className="bg-theme">
          <Navbar />
          <div className="sm:px-0 md:px-22 lg:44 ">{children}</div>
        </div>
        <Footer />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MainLayout;
