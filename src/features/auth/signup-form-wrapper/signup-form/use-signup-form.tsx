import { useForm, schemaResolver } from '@mantine/form';
import { signupFields } from '@/constants/form-fields';
import { signupFormSchema } from '@/validations/auth.validation';
import type { SignupFormValues } from './types';

const { NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD } = signupFields;

const useSignupFormController = () => {
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

  const handleSignup = (values: SignupFormValues) => {
    console.log(values);
  };

  return {
    formKey,
    handleSignup,
    getInputProps,
    handleFormSubmit,
  };
};

export default useSignupFormController;
