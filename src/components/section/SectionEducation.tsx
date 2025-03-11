import { VStack } from '@chakra-ui/react';
import MyBox from '../MyBox';
function SectionEducation() {
  return (
    <VStack pt="6" w="100%" spacing="8">
      <MyBox
        title="MASTER OF COMPUTER SCIENCE"
        subtitle="BINUS UNIVERSITY"
        caption="Sep 2023 - Mar 2025"
        backgroundUrl="./images/binus.jpeg"
      />
      <MyBox
        title="BACHELOR OF COMPUTER SCIENCE"
        subtitle="BINUS UNIVERSITY"
        caption="Aug 2020 - Sep 2023"
        backgroundUrl="./images/binus.jpeg"
      />
      <MyBox
        title="COMPUTER & NETWORK ENGINEERING"
        subtitle="SMK KRISTEN IMMANUEL PONTIANAK"
        caption="2017 - 2020"
        backgroundUrl="./images/smk.jpg"
      />
    </VStack>
  );
}

export default SectionEducation;
