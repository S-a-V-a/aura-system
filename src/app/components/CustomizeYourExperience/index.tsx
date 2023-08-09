'use client';

import Tabs from '@/src/components/Tabs';
import { experienceTabs, experienceTabsContent } from '@/src/constants/home-page';
import React, { FC, useState } from 'react';
import Styled from './styled';

const CustomizeYourExperience: FC = () => {
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
      {tabContent && (
        <Styled.TabContentWrapper>
          <Styled.TabImageWrapper></Styled.TabImageWrapper>
          <Styled.TabContentDetailsWrapper>
            <Styled.TabContentDetailsContainer>
              <Styled.TabContentTitle size='xxl'>{tabContent.title}</Styled.TabContentTitle>
              <Styled.TabContentDescription>{tabContent.description}</Styled.TabContentDescription>
            </Styled.TabContentDetailsContainer>
            <Styled.TabContentLink href={tabContent.link.href}>
              {tabContent.link.title}
            </Styled.TabContentLink>
          </Styled.TabContentDetailsWrapper>
        </Styled.TabContentWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default CustomizeYourExperience;
