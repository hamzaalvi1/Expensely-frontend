import { useForm,schemaResolver } from "@mantine/form";
import { loginFields } from "@/constants/form-fields";
import { loginFormSchema } from "@/validations/auth.validation";
import type { LoginFormValues } from "./types";

const { EMAIL, PASSWORD, REMEMBER_ME } = loginFields;

export const useLoginFormController = () => {
  const {
    key: formKey,
    getInputProps,
    onSubmit: handleFormSubmit,
  } = useForm<LoginFormValues>({
    mode: "uncontrolled",
    initialValues: {
      [EMAIL]: "",
      [PASSWORD]: "",
      [REMEMBER_ME]: false,
    },
    validate: schemaResolver(loginFormSchema),
  });

  const handleLogin = (values: LoginFormValues) => {
    console.log(values);
    
  }

  return {
    formKey,
    handleLogin,
    getInputProps,
    handleFormSubmit,
  };
};
