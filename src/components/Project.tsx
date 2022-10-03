import {
  AspectRatio,
  Box,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  UseImageProps
} from '@chakra-ui/react';
import BrandIcon, { BrandIconProps } from './BrandIcon';

interface ProjectProps {
  href: string | undefined;
  src: UseImageProps['src'];
  year: string;
  name: string;
  description: string;
  brands: BrandIconProps[];
}

function Project({ src, year, name, description, brands, href }: ProjectProps) {
  return (
    <Box role="group">
      <LinkBox cursor="pointer">
        <AspectRatio borderWidth="1px" maxW="100%" ratio={16 / 9}>
          <Image objectFit="cover" src={src} />
        </AspectRatio>
        <Box py="4">
          <Text fontSize={{ base: 'xl', lg: '2xl' }} color="gray.500">
            {year}
          </Text>
          <LinkOverlay
            isExternal
            href={href}
            _groupHover={{
              color: useColorModeValue('brand.500', 'brand.200')
            }}
            transition="all .3s"
            textTransform="uppercase"
            fontWeight="extrabold"
            fontSize={{ base: '3xl', lg: '4xl' }}
          >
            {name}
          </LinkOverlay>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            letterSpacing="0.011em"
            lineHeight="24px"
          >
            {description}
          </Text>
        </Box>
      </LinkBox>
      <HStack mt="2" spacing="4">
        {brands.map(({ icon, label }) => {
          return <BrandIcon key={label} icon={icon} label={label} />;
        })}
      </HStack>
    </Box>
  );
}

export default Project;
