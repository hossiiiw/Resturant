"use client";
import { AppContextType, ChildrenType, LanguageType } from "@/types/type";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({} as AppContextType);

function AppContextProvider({ children }: ChildrenType) {
  const [language, setLanguage] = useState<LanguageType>("EN");
  const [theme, setTheme] = useState<boolean>(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.style.setProperty("--bgThemeColor", "#000000");
      document.documentElement.style.setProperty("--textBlackColor", "#fff");
      document.documentElement.style.setProperty("--textLightColor", "#fff");
    }
    if (!theme) {
      document.documentElement.style.setProperty("--bgThemeColor", "#ffffff");
      document.documentElement.style.setProperty("--textBlackColor", "#181818");
      document.documentElement.style.setProperty("--textLightColor", "#777777");
    }
  }, [theme, handleTheme]);

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

  useEffect(() => {}, [language]);

  return (
    <AppContext.Provider
      value={{ handleLanguage, handleTheme, language, theme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
export const useCart = () => useContext(AppContext);
