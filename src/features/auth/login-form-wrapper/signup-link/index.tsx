import { Anchor,Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ROUTES_PATHS } from '@/constants/routes';
import { LocalizedLink } from '@/components/localized-link';

const SignupLink = () => {
  const { t } = useTranslation();
  return (
    <Text fz="xs" c="dimmed" ta="center">
      {t("auth.dont-have-account")}
    <Anchor fz="xs" component={LocalizedLink} to={ROUTES_PATHS.REGISTER} mis="4px">
      {t("auth.signup")}
    </Anchor>
    </Text>

  )
}

export default SignupLink
