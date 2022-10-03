import { VStack } from '@chakra-ui/react';
import MyBox from '../MyBox';
function SectionEducation() {
  return (
    <VStack pt="6" w="100%" spacing="8">
      <MyBox
        title="BINUS UNIVERSITY"
        subtitle="Master Track of Computer Science"
        caption="2020 - Present"
        backgroundUrl="./images/binus.jpeg"
      />
      <MyBox
        title="SMK KRISTEN IMMANUEL"
        subtitle="COMPUTER & NETWORK ENGINEERING"
        caption="2017 - 2020"
        backgroundUrl="./images/smk.jpg"
      />
    </VStack>
  );
}

export default SectionEducation;
