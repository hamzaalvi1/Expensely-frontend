import { Link } from 'react-router-dom';
import { Anchor,Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { ROUTES_PATHS } from '@/constants/routes';

const LoginLink = () => {
  const { t } = useTranslation();
  return (
    <Text fz="xs" c="dimmed" ta="center">
      {t("auth.already-have-account")}
    <Anchor fz="xs" component={Link} to={`/${ROUTES_PATHS.LOGIN}`} mis="4px">
      {t("auth.login")}
    </Anchor>
    </Text>

  )
}

export default LoginLink
