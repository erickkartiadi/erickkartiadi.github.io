import { Button, Tooltip } from '@chakra-ui/react';

function ButtonContact() {
  return (
    <Tooltip label="erickcartiady@gmail.com">
      <Button
        onClick={() => {
          location.href = 'mailto:erickcartiady@gmail.com';
        }}
        colorScheme="brand"
        textTransform="uppercase"
        size="lg"
        mt={{ base: '8', md: '0' }}
        fontWeight="medium"
      >
        Contact Me
      </Button>
    </Tooltip>
  );
}

export default ButtonContact;
