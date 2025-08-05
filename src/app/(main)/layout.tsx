import MainLayout from "@/layout/MainLayout";
import { ChildrenType } from "@/types/type";
import React from "react";

function layout({ children }: ChildrenType) {
  return (
    <>
      <MainLayout>
        <div>{children}</div>
      </MainLayout>
    </>
  );
}

export default layout;
