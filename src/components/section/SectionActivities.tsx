import { VStack } from '@chakra-ui/react';
import MyBox from '../MyBox';
function SectionActivities() {
  return (
    <VStack pt="6" w="100%" spacing="8">
      <MyBox
        title="PARTICIPANT IN WEB TECHNOLOGIES"
        subtitle="13TH NATIONAL SELECTION FOR ASEAN SKILL COMPETITION"
        caption="20 - 23 August 2019"
      />
      <MyBox
        title="3rd WINNER OF EDUCATIONAL GAME DEV"
        subtitle="SEA CREATIVE CAMP, NATIONAL STUDENTS SKILLS COMPETITION XXVI"
        caption="6 - 12 May 2018"
      />
    </VStack>
  );
}

export default SectionActivities;
