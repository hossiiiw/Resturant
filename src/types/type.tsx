import React from "react";

export type ChildrenType = {
  children: React.ReactNode;
};
export type LanguageType = "EN" | "FA";

export type AppContextType = {
  language: LanguageType;
  handleLanguage: (value: LanguageType) => void;
};
