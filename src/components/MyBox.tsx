import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link, Text, useColorModeValue, useToken } from '@chakra-ui/react';
interface ExperienceBoxProps {
  title: string;
  subtitle: string;
  caption: string;
  backgroundUrl?: string;
  href?: string;
  label?: string;
}

function MyBox({
  title,
  subtitle,
  caption,
  backgroundUrl,
  href,
  label
}: ExperienceBoxProps) {
  const [blackAlpha800, whiteAlpha800] = useToken('colors', [
    'blackAlpha.800',
    'whiteAlpha.800'
  ]);

  const linear1 = useColorModeValue(whiteAlpha800, blackAlpha800);

  return (
    <Box
      backgroundImage={
        backgroundUrl !== undefined
          ? `linear-gradient(${linear1},${linear1}), url(${backgroundUrl})`
          : undefined
      }
      backgroundColor={useColorModeValue('gray.100', 'gray.900')}
      backgroundSize="cover"
      backgroundPosition="center"
      w="100%"
      p="6"
      display="flex"
      flexDir={{ base: 'column-reverse', md: 'row' }}
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
    >
      <Box flex={1}>
        <Text
          textTransform="uppercase"
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          textTransform="uppercase"
        >
          {subtitle}
        </Text>
        {href !== undefined && (
          <Link
            mt={3}
            color={useColorModeValue('brand.500', 'brand.200')}
            display="flex"
            flexDir="row"
            alignItems="center"
            fontSize={{ base: 'md', md: 'lg' }}
            href={href}
            isExternal
          >
            {label} <ExternalLinkIcon mx={1} />
          </Link>
        )}
      </Box>
      <Box>
        <Text
          fontSize={{ base: 'md', lg: 'lg' }}
          textAlign={{ base: 'left', md: 'right' }}
          color={useColorModeValue('gray.600', 'gray.500')}
          mb={{ base: '1.5', md: '0' }}
        >
          {caption}
        </Text>
      </Box>
    </Box>
  );
}

export default MyBox;
