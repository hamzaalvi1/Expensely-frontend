import { ActionIcon, Button, Tooltip } from '@mantine/core';
import { FaCirclePlus, FaPlus } from 'react-icons/fa6';

import { useMediaQuery } from '@/hooks/use-media-query';
import type { AddButtonProps } from './types';

const AddButton = ({ label, color, handleClick }: AddButtonProps) => {
  const { isMobile } = useMediaQuery();

  return isMobile ? (
    <Tooltip
      withArrow
      label={label}
      transitionProps={{ duration: 200 }}
    >
      <ActionIcon
        aria-label={label}
        color={color}
        onClick={handleClick}
        size="lg"
        radius="xl"
      >
        <FaPlus />
      </ActionIcon>
    </Tooltip>
  ) : (
    <Button
      color={color}
      onClick={handleClick}
      leftSection={<FaCirclePlus />}
      fw={500}
      size="lg"
    >
      {label}
    </Button>
  );
};

export default AddButton;
