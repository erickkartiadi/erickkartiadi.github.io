import { VStack } from '@chakra-ui/react';
import MyBox from '../MyBox';
function SectionCertification() {
  return (
    <VStack pt="6" w="100%" spacing="8">
      <MyBox
        title="ALIBABA CLOUD CERTIFIED ASSOCIATE"
        subtitle="ALIBABA CLOUD"
        caption="2024"
      />
      <MyBox
        title="JUNIOR NETWORK ADMINISTRATOR"
        subtitle="BADAN NASIONAL SERTIFIKASI PROFESI"
        caption="2020"
      />
      <MyBox
        title="INSTRUCTOR OF EDUCATIONAL GAME DEVELOPMENT"
        subtitle="2ND PHASE OF sea creative camp"
        caption="July 2018"
        href="https://ecertificate.seameo.org/verify?certificate_no=SEAMEO/2018/07/2ndSEACC-EDUGAME-I/000008"
        label="Show Credentials"
      />
    </VStack>
  );
}

export default SectionCertification;
