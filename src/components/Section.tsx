import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <Container id={id} maxW="container.xl" py="12" flex={1} flexDirection="row">
      <Flex>
        <Box position="sticky" top={0} alignSelf="start" pr="6">
          <Text
            mt={6}
            style={{
              textOrientation: 'revert',
              writingMode: 'vertical-rl'
            }}
            textTransform="uppercase"
            colorScheme="brand"
            textColor="brand"
            color={useColorModeValue('brand.500', 'brand.200')}
            fontWeight="extrabold"
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          >
            {title}
          </Text>
        </Box>
        {children}
      </Flex>
    </Container>
  );
}

export default Section;
