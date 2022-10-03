import {
  Box,
  Container,
  Flex,
  HStack,
  Spacer,
  useColorModeValue,
  useToken,
  VStack
} from '@chakra-ui/react';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnchorLink from './AnchorLink';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import MenuToggle from './MenuToggle';
const MotionFlex = motion(Flex);

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  function update() {
    if (scrollY.get() < scrollY?.getPrevious()) {
      setHidden(false);
    } else if (
      scrollY?.get() > 100 &&
      scrollY?.get() > scrollY?.getPrevious()
    ) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -99 }
  };

  const [gray200, gray700] = useToken('colors', ['gray.200', 'gray.700']);
  return (
    <Box w="100%">
      <MotionFlex
        py={{ base: '2', md: '3', lg: '4' }}
        alignSelf="flex-start"
        w="100%"
        backgroundColor="background"
        borderBottom="1px"
        borderBottomColor={useColorModeValue(gray200, gray700)}
        position="fixed"
        zIndex={1000}
        variants={variants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <Container maxW="container.xl">
          <Flex w="100%">
            <HStack
              spacing="12"
              w="100%"
              display={{ base: 'none', md: 'flex' }}
            >
              <AnchorLink section="project" />
              <AnchorLink section="experience" />
              <AnchorLink section="education" />
              <AnchorLink section="certification" />
            </HStack>
            <MenuToggle isOpen={isMenuOpen} toggle={toggleMenu} />
            <Spacer />
            <ColorModeSwitcher />
          </Flex>
          <Flex
            w="100%"
            py="2"
            display={{ base: isMenuOpen ? 'flex' : 'none', md: 'none' }}
          >
            <VStack spacing="12" w="100%">
              <AnchorLink section="project" />
              <AnchorLink section="experience" />
              <AnchorLink section="education" />
              <AnchorLink section="certification" />
            </VStack>
          </Flex>
        </Container>
      </MotionFlex>
    </Box>
  );
}

export default Nav;
