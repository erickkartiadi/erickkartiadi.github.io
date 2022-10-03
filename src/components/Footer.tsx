import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';

import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import ButtonContact from './ButtonContact';
import SocialIcon from './SocialIcon';

export const Footer = () => (
  <Box py={10} backgroundColor="background">
    <Container maxW="container.xl">
      <Flex flexDir={{ base: 'column-reverse', md: 'row' }} alignItems="center">
        <ButtonContact />
        <Spacer />
        <SocialIcon />
      </Flex>
    </Container>
  </Box>
);
