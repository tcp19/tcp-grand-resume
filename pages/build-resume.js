import {
  Container,
  Box
} from '@chakra-ui/react';
import CVForm from './sections/CVForm';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import PreviewCV from './sections/PreviewCV';
import Settings from './sections/Settings';


export default function BulildResume() {
  return (
    <>
      <Container maxW={'7xl'} mt={'50px'} >
        <Tabs isFitted>
          <TabList>
            <Tab _selected={{ borderColor: "#181C27", color: "#181C27" }} style={{ fontWeight: "bold" }} >Edit your CV</Tab>
            <Tab _selected={{ borderColor: "#181C27", color: "#181C27" }} style={{ fontWeight: "bold" }}>Preview</Tab>
            <Tab _selected={{ borderColor: "#181C27", color: "#181C27" }} style={{ fontWeight: "bold" }}>Settings</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0">
              <CVForm />
            </TabPanel>
            <TabPanel p="0">
              <PreviewCV />
            </TabPanel>
            <TabPanel p="0">
              <Settings />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

    </>
  );
}
