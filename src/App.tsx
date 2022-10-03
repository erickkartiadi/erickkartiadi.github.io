import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';

import { Box, ChakraProvider, Divider } from '@chakra-ui/react';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import SectionCertification from './components/section/SectionCertification';
import SectionEducation from './components/section/SectionEducation';
import SectionExperience from './components/section/SectionExperience';
import SectionProject from './components/section/SectionProject';
import theme from './theme/theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box scrollBehavior="smooth">
      <Header />
      <Box w="100%" backgroundColor="background">
        <Section id="project" title="projects">
          <SectionProject />
        </Section>
        <Section id="experience" title="EXPERIENCE">
          <SectionExperience />
        </Section>
        <Section id="education" title="Education">
          <SectionEducation />
        </Section>
        <Section id="certification" title="Certification">
          <SectionCertification />
        </Section>
      </Box>
      <Divider />
      <Footer />
    </Box>
  </ChakraProvider>
);
