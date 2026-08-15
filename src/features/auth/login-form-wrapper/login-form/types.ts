import { loginFields } from "@/constants/form-fields";

const { EMAIL, PASSWORD, REMEMBER_ME } = loginFields;

export type LoginFormValues = {
  [EMAIL]: string;
  [PASSWORD]: string;
  [REMEMBER_ME]: boolean;
};

