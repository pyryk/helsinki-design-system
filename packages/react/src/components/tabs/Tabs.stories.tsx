import React from 'react';

import { Tabs } from './Tabs';

export default {
  component: Tabs,
  title: 'Components/Tabs',
  decorators: [
    (storyFn) => (
      <div>
        <style>{`.example-tablist { margin-bottom: var(--spacing-m); }`}</style>
        {storyFn()}
      </div>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => (
  <Tabs>
    <Tabs.TabList className="example-tablist">
      <Tabs.Tab>Daycare</Tabs.Tab>
      <Tabs.Tab>Pre-school</Tabs.Tab>
      <Tabs.Tab>Basic education</Tabs.Tab>
      <Tabs.Tab>Upper secondary</Tabs.Tab>
      <Tabs.Tab>University</Tabs.Tab>
    </Tabs.TabList>
    <Tabs.TabPanel>
      Daytime care for people who cannot be fully independent, such as children or elderly people.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      A pre-school is an educational establishment offering early childhood education to children before they begin
      compulsory education at primary school.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      The objective of basic education in Finland is to support pupils&#39; growth towards humanity and ethically
      responsible membership of society.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      Upper secondary school studies last three to four years, preparing the students for the matriculation examination.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      A high-level educational institution in which students study for degrees and academic research is done.
    </Tabs.TabPanel>
  </Tabs>
);

export const Small = () => (
  <Tabs small>
    <Tabs.TabList className="example-tablist">
      <Tabs.Tab>Daycare</Tabs.Tab>
      <Tabs.Tab>Pre-school</Tabs.Tab>
      <Tabs.Tab>Basic education</Tabs.Tab>
      <Tabs.Tab>Upper secondary</Tabs.Tab>
      <Tabs.Tab>University</Tabs.Tab>
    </Tabs.TabList>
    <Tabs.TabPanel>
      Daytime care for people who cannot be fully independent, such as children or elderly people.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      A pre-school is an educational establishment offering early childhood education to children before they begin
      compulsory education at primary school.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      The objective of basic education in Finland is to support pupils&#39; growth towards humanity and ethically
      responsible membership of society.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      Upper secondary school studies last three to four years, preparing the students for the matriculation examination.
    </Tabs.TabPanel>
    <Tabs.TabPanel>
      A high-level educational institution in which students study for degrees and academic research is done.
    </Tabs.TabPanel>
  </Tabs>
);

export const WithCustomTheme = () => {
  const theme = {
    '--tab-color': 'var(--color-black-90)',
    '--tab-active-border-color': 'var(--color-metro)',
  };

  return (
    <Tabs theme={theme}>
      <Tabs.TabList className="example-tablist">
        <Tabs.Tab>Daycare</Tabs.Tab>
        <Tabs.Tab>Pre-school</Tabs.Tab>
        <Tabs.Tab>Basic education</Tabs.Tab>
        <Tabs.Tab>Upper secondary</Tabs.Tab>
        <Tabs.Tab>University</Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanel>
        Daytime care for people who cannot be fully independent, such as children or elderly people.
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        A pre-school is an educational establishment offering early childhood education to children before they begin
        compulsory education at primary school.
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        The objective of basic education in Finland is to support pupils&#39; growth towards humanity and ethically
        responsible membership of society.
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        Upper secondary school studies last three to four years, preparing the students for the matriculation
        examination.
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        A high-level educational institution in which students study for degrees and academic research is done.
      </Tabs.TabPanel>
    </Tabs>
  );
};
