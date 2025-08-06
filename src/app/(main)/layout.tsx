import AuthContextProvider from "@/context/AuthContext";
import MainLayout from "@/layout/MainLayout";
import { ChildrenType } from "@/types/type";
import React from "react";

function layout({ children }: ChildrenType) {
  return (
    <>
      <AuthContextProvider>
        <MainLayout>
          <div>{children}</div>
        </MainLayout>
      </AuthContextProvider>
    </>
  );
}

export default layout;
