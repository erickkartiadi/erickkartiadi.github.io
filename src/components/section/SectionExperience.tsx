import { VStack } from '@chakra-ui/react';
import MyBox from '../MyBox';
function SectionExperience() {
  return (
    <VStack pt="6" w="100%" spacing="8">
      <MyBox
        title="System Analyst"
        subtitle="PT Tera Multi Wahana"
        caption="Feb 2023 - Present"
      />
      <MyBox
        title="Assistan network administrator (intern)"
        subtitle="PT ANGKASA PURA II"
        caption="Nov 2019 - Dec 2019"
      />
    </VStack>
  );
}

export default SectionExperience;
