import { useForm, schemaResolver } from '@mantine/form';
import { signupFields } from '@/constants/form-fields';
import { signupFormSchema } from '@/validations/auth.validation';
import type { SignupFormValues } from './types';
import { useRegisterUser } from '@/queries/auth.queries';
import { ROUTES_PATHS } from '@/constants/routes';
import { useLocalizedNavigate } from '@/hooks/use-localized-navigate';

const { NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD } = signupFields;

const useSignupFormController = () => {
  const { mutateAsync: registerUser, isPending: isRegisteringUser } =
    useRegisterUser();
  const navigate = useLocalizedNavigate();
  const {
    key: formKey,
    getInputProps,
    onSubmit: handleFormSubmit,
  } = useForm<SignupFormValues>({
    mode: 'uncontrolled',
    initialValues: {
      [NAME]: '',
      [EMAIL]: '',
      [PASSWORD]: '',
      [CONFIRM_PASSWORD]: '',
    },
    validate: schemaResolver(signupFormSchema),
  });

  const handleSignup = async (values: SignupFormValues) => {
    await registerUser(values).then(() => {
    }).then(() => {
      navigate(ROUTES_PATHS.LOGIN);
    })
  };

  return {
    isRegisteringUser,
    formKey,
    handleSignup,
    getInputProps,
    handleFormSubmit,
  };
};

export default useSignupFormController;
