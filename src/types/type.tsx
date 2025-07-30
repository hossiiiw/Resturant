import React from "react";

export type ChildrenType = {
  children: React.ReactNode;
};
export type LanguageType = "en" | "fa" | undefined;

export type AppContextType = {
  theme: boolean;
  language: LanguageType;
  handleTheme: () => void;
  hanleLanguage: (lang: "en" | "fa") => void;
};

export interface ISliderImage {
  id: string;
  src: string;
}

export interface ISliderProps {
  images: ISliderImage;
}
