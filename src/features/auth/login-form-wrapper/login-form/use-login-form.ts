import { useForm,schemaResolver } from "@mantine/form";
import { loginFields } from "@/constants/form-fields";
import { loginFormSchema } from "@/validations/auth.validation";
import type { LoginFormValues } from "./types";
import { useLoginUser } from "@/queries/auth.queries";
import { ROUTES_PATHS } from "@/constants/routes";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";

const { EMAIL, PASSWORD, REMEMBER_ME } = loginFields;

export const useLoginFormController = () => {
  const { mutateAsync: loginUser, isPending: isLoggingInUser } = useLoginUser();
  const navigate = useLocalizedNavigate();
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

  const handleLogin = async (values: LoginFormValues) => {
    await loginUser(values).then(() => {
    }).then(() => {
      navigate(ROUTES_PATHS.DASHBOARD);
    });
  }

  return {
    isLoggingInUser,
    formKey,
    handleLogin,
    getInputProps,
    handleFormSubmit,
  };
};
