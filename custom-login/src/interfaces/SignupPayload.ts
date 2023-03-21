import { RolesEnum } from "../enums";

export interface ISignupPayload {
  email: string;
  password: string;
  role: RolesEnum;
}
