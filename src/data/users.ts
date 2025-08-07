import { IFormInputs } from "@/types/type";

export interface User {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  password: string;
}

export const users: IFormInputs[] = [];
