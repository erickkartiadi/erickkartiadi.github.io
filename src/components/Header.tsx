import {
  Box,
  chakra,
  Container,
  Flex,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ButtonContact from './ButtonContact';
import Nav from './Nav';
import SocialIcon from './SocialIcon';

import bgDark from '../assets/bg-dark.jpg';
import bgLight from '../assets/bg-light.jpg';

const ChakraTypeAnimation = chakra(TypeAnimation);

function Header() {
  useEffect(() => {
    document.title = 'Erick   Portfolio';
  }, []);

  const bgImage = useColorModeValue(bgLight, bgDark);

  return (
    <Box
      w="100%"
      minH="100vh"
      backgroundImage={bgImage}
      backgroundPosition="center"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
    >
      <Nav />
      <Container
        maxW="container.xl"
        display="flex"
        flexGrow={1}
        justifyContent="center"
      >
        <VStack width="100%">
          <Flex alignItems="center" w="100%" justifyContent="center" flex="1">
            <Box alignItems="center" w="100%">
              <Box mb="6">
                <Text
                  textAlign="left"
                  fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                  fontWeight="extrabold"
                >
                  HI, I&apos;M ERICK. <br />
                  <Text
                    color={useColorModeValue('brand.500', 'brand.200')}
                    as="span"
                    display="inline-flex"
                  >
                    <ChakraTypeAnimation
                      sequence={[
                        'A PASSIONATE',
                        1000,
                        'AN ENTHUSIASTIC',
                        2000,
                        'A CREATIVE',
                        3000
                      ]}
                      // wrapper="p"
                      repeat={Infinity}
                      fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                    />
                  </Text>
                  <br />
                  WEB DEVELOPER
                </Text>
              </Box>
              <ButtonContact />
            </Box>
          </Flex>
          <Box w="100%" py="4">
            <SocialIcon />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Header;
