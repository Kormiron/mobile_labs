import React from "react";
import { Container, Tab, Tabs, TabHeading, Text } from "native-base";

import TabA from "./TabA";
import TabB from "./TabB";

const Drawing = () => {
  return (
    <Container>
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Text>Graphic</Text>
            </TabHeading>
          }
        >
          <TabA />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>Diagram</Text>
            </TabHeading>
          }
        >
          <TabB />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Drawing;
