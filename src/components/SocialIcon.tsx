import { HStack, Icon, Link, useColorModeValue } from '@chakra-ui/react';

import { AiFillDribbbleCircle } from 'react-icons/ai';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWordpress } from 'react-icons/io';
function SocialIcon() {
  return (
    <HStack spacing="8" wrap="wrap">
      <Link
        href="https://github.com/erickkartiadi"
        fontSize="lg"
        fontWeight="medium"
        isExternal
        transition="all .3s"
        _hover={{
          color: useColorModeValue('brand.500', 'brand.200')
        }}
      >
        <Icon as={IoLogoGithub} w="10" h="10" />
      </Link>
      <Link
        href="https://dribbble.com/erickkartiadi"
        fontSize="lg"
        fontWeight="medium"
        isExternal
        transition="all .3s"
        _hover={{
          color: useColorModeValue('brand.500', 'brand.200')
        }}
      >
        <Icon as={AiFillDribbbleCircle} w="10" h="10" />
      </Link>
      <Link
        href="https://techsion.wordpress.com/"
        fontSize="lg"
        fontWeight="medium"
        isExternal
        transition="all .3s"
        _hover={{
          color: useColorModeValue('brand.500', 'brand.200')
        }}
      >
        <Icon as={IoLogoWordpress} w="10" h="10" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/erick-kartiadi/"
        fontSize="lg"
        fontWeight="medium"
        transition="all .3s"
        isExternal
        _hover={{
          color: useColorModeValue('brand.500', 'brand.200')
        }}
      >
        <Icon as={IoLogoLinkedin} w="10" h="10" />
      </Link>
    </HStack>
  );
}

export default SocialIcon;
