import { Flex, SimpleGrid } from '@chakra-ui/react';
import { FaCss3, FaLaravel, FaReact } from 'react-icons/fa';
import { IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { SiChakraui, SiMaterialui, SiNestjs } from 'react-icons/si';
import {
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandReactNative
} from 'react-icons/tb';
import Project from '../Project';

function SectionProject() {
  return (
    <Flex flex={1} pt="6">
      <SimpleGrid columns={{ base: 1, md: 2 }} width="100%" spacing="8">
        <Project
          href="https://github.com/erickkartiadi/lyself"
          src={require('../../assets/lyself.png')}
          description="Mental health app to help people in dealing with their mental
                  health issues through consultations, communities, and tools."
          name="LYSELF"
          year="2022 - PRESENT"
          brands={[
            { icon: <TbBrandReactNative />, label: 'React Native' },
            { icon: <TbBrandFirebase />, label: 'Firebase' },
            { icon: <TbBrandFigma />, label: 'Figma' }
          ]}
        />
        <Project
          href="https://github.com/erickkartiadi/treloor-backend"
          src={require('../../assets/treloor.png')}
          description="Kanban board for project, workflow and task management (Trello)."
          name="Treloor"
          year="2021 - PRESENT"
          brands={[
            { icon: <FaReact />, label: 'ReactJS' },
            { icon: <SiChakraui />, label: 'Chakra UI' },
            { icon: <SiNestjs />, label: 'NestJS' }
          ]}
        />
        <Project
          href="https://dribbble.com/shots/15704975-FUNDSTACK-Crowdfunding-Mobile-App-Design"
          src={require('../../assets/fundstack.png')}
          description="Crowdfunding website that enables everyone to raise money for their products."
          name="FUNDSTACK"
          year="2021"
          brands={[{ icon: <TbBrandFigma />, label: 'Figma' }]}
        />
        <Project
          href="https://erickkartiadi.github.io/ababa-steak/"
          src={require('../../assets/ababa-steak.png')}
          description="Abuba Steak landing page redesign, displays various menus that are currently being promoted or are currently popular and book a reservation."
          name="ABABA STEAK"
          year="2021"
          brands={[
            { icon: <IoLogoHtml5 />, label: 'HTML' },
            { icon: <FaCss3 />, label: 'CSS' },
            { icon: <IoLogoJavascript />, label: 'Javascript' }
          ]}
        />
        <Project
          href="https://github.com/erickkartiadi/AlphaBook"
          src={require('../../assets/alphabook.png')}
          description="Simple responsive library management website."
          name="ALPHABOOK"
          year="2020"
          brands={[
            { icon: <FaLaravel />, label: 'Laravel' },
            { icon: <FaCss3 />, label: 'CSS' }
          ]}
        />
        <Project
          href="https://erickkartiadi.github.io/movie-app/"
          src={require('../../assets/movie-app.png')}
          description="Website for searching movies and show movie details"
          name="MOVIE NEWS"
          year="2020"
          brands={[
            { icon: <FaReact />, label: 'ReactJS' },
            { icon: <SiMaterialui />, label: 'Material UI' }
          ]}
        />
        <Project
          href="https://erickkartiadi.github.io/Todo-List/"
          src={require('../../assets/todo.png')}
          description="Simple todo list app."
          name="TODO LIST"
          year="2020"
          brands={[
            { icon: <FaReact />, label: 'ReactJS' },
            { icon: <SiMaterialui />, label: 'Material UI' }
          ]}
        />
      </SimpleGrid>
    </Flex>
  );
}

export default SectionProject;
