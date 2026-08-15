import { signupFields } from "@/constants/form-fields";

const { NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD } = signupFields;

export type SignupFormValues = {
    [NAME]: string;
    [EMAIL]: string;
    [PASSWORD]: string;
    [CONFIRM_PASSWORD]: string;
  };
  