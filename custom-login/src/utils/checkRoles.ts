import { RolesEnum } from "../enums";

export const isRole = (role: string) => {
  if (
    role === RolesEnum.admin ||
    role === RolesEnum.operator ||
    role === RolesEnum.salesman ||
    role === RolesEnum.trainee
  ) {
    return true;
  }
  return false;
};
