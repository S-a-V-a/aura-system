'use client';

import Tabs from '@/src/components/Tabs';
import { experienceTabs, experienceTabsContent } from '@/src/constants/home-page';
import React, { FC, useState } from 'react';
import Styled from './styled';
import ContentSection from '../ContentSection/index';

const CYE: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = experienceTabsContent.at(activeTab);

  return (
    <Styled.Wrapper>
      <Styled.Title>Customize Your Experience</Styled.Title>
      <Tabs
        tabs={experienceTabs}
        onTabChange={(tIdx) => setActiveTab(tIdx)}
        activeIdx={activeTab}
      />
      {tabContent && <ContentSection.SliderSection data={tabContent} />}
    </Styled.Wrapper>
  );
};

export default CYE;
