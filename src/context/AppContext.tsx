"use client";
import { AppContextType, ChildrenType, LanguageType } from "@/types/type";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({} as AppContextType);

function AppContextProvider({ children }: ChildrenType) {
  const [language, setLanguage] = useState<LanguageType>("EN");

  const handleLanguage = (value: LanguageType) => {
    if (value === "EN") {
      document.body.dir = "ltr";
      return;
    }

    if (value === "FA") {
      document.body.dir = "rtl";
    }

    setLanguage(value);
  };

  return (
    <AppContext.Provider value={{ handleLanguage, language }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
export const useCart = () => useContext(AppContext);
