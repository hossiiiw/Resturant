"use client";
import "../i18n";

import { AppContextType, ChildrenType, LanguageType } from "@/types/type";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({} as AppContextType);

function AppContextProvider({ children }: ChildrenType) {
  // -------------------State-----------------------------
  const [theme, setTheme] = useState<boolean>(false);
  const [language, setLanguage] = useState<LanguageType>();
  const [hasMounted, setHasMounted] = useState(false);

  // -------------------State-----------------------------

  // ----------------------Theme---------------------------------
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

  // ----------------------Theme---------------------------------

  // --------------------------Language-------------------
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const hanleLanguage = (lang: "fa" | "en") => {
    setLanguage(lang);
    if (lang === "en") {
      document.body.dir = "ltr";
    }

    if (lang === "fa") {
      document.body.dir = "rtl";
    }
  };
  if (!hasMounted) return null; // یا یه لودر ساده
  // --------------------------Language-------------------

  return (
    <AppContext.Provider
      value={{ handleTheme, hanleLanguage, theme, language }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
export const useCart = () => useContext(AppContext);
