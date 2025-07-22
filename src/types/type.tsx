import React from "react";

export type ChildrenType = {
  children: React.ReactNode;
};
export type LanguageType = "EN" | "FA";

export type AppContextType = {
  language: LanguageType;
  theme: boolean;
  handleLanguage: (value: LanguageType) => void;
  handleTheme: () => void;
};
