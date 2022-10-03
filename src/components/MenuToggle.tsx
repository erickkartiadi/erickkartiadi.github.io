/* eslint-disable multiline-ternary */
import { Box, IconButton } from '@chakra-ui/react';
import { IoClose, IoMenu } from 'react-icons/io5';

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? (
        <IconButton
          variant="ghost"
          icon={<IoClose />}
          size="lg"
          fontSize="2xl"
          aria-label="Close Menu"
        />
      ) : (
        <IconButton
          variant="ghost"
          aria-label="Open Menu"
          size="lg"
          fontSize="2xl"
          icon={<IoMenu />}
        />
      )}
    </Box>
  );
};

export default MenuToggle;
