import { Flex, Text, ThemeIcon } from '@mantine/core';
import { FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6';
import type { DirectionLabelProps } from './types';
import { ARROW_DIRECTION } from '@/constants/arrow-direction';

const DirectionLabel = ({
  title,
  direction,
  backgroundColor = 'secondary.6',
  iconColor = 'primary.4',
  wrapperProps,
}: DirectionLabelProps) => {
  const Chevron = direction === ARROW_DIRECTION.UP ? FaArrowUpLong : FaArrowDownLong;

  return (
    <Flex gap="xs" wrap="nowrap" align="center" {...wrapperProps}>
      <ThemeIcon size={26} radius="xl" bg={backgroundColor} c={iconColor}>
        <Chevron size={12} aria-hidden />
      </ThemeIcon>
      <Text c="dimmed" fz="xs" fw="medium" lh="16.8px" lts={0}>
        {title}
      </Text>
    </Flex>
  );
};

export default DirectionLabel;
