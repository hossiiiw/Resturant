import { User } from "@/data/users";
import React from "react";
import z, { Schema } from "zod";

export type ChildrenType = {
  children: React.ReactNode;
};
export type LanguageType = "en" | "fa" | undefined | string | null;

export type AppContextType = {
  theme: boolean;
  language: LanguageType;
  money: string | null | undefined;
  handleTheme: () => void;
  hanleLanguage: (lang: "en" | "fa") => void;
};

export interface IAuthContextType {
  addUser: (data: User) => void;
}

export interface ISliderProps {
  images: ISliderImage;
}

export interface ISliderImage {
  id: string;
  src: string;
}

export type TSingUpForm = {
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  password: string;
};
