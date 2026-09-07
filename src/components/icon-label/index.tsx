import { Text, Flex, ThemeIcon } from '@mantine/core';
import type { IconLabelProps } from './types';

const IconLabel = ({
  icon,
  label,
  labelSx,
  iconSx,
  wrapperSx,
  description,
  descriptionSx,
}: IconLabelProps) => {
  return (
    <Flex align="center" gap="xs" {...wrapperSx}>
      <ThemeIcon variant="outline" size='lg' radius='xl'{...iconSx}>{icon}</ThemeIcon>
      <Flex direction="column" gap='none'>
        <Text size='sm' {...labelSx}>{label}</Text>
        {description && <Text size='xs' c='dimmed' {...descriptionSx}>{description}</Text>}
      </Flex>
    </Flex>
  );
};

export default IconLabel;