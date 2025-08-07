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
  user: IFormInputs | undefined;
  loginToken: boolean;
  addUser: (data: IFormInputs) => void;
  ExitUser: () => void;
}

export interface ISliderProps {
  images: ISliderImage;
}

export interface ISliderImage {
  id: string;
  src: string;
}

export interface IFormInputs {
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  password: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}
