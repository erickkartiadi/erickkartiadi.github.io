import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import * as React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(IoMoon, IoSunny);

  return (
    <Tooltip label={`Switch to ${text} mode`}>
      <IconButton
        fontSize="2xl"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    </Tooltip>
  );
};
