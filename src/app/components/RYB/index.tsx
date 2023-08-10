'use client';

import React, { FC } from 'react';
import ContentSection from '../ContentSection';
import { RYBSectionData } from '@/src/constants/home-page';
import Styled from './styled';

const RYB: FC = () => {
  return (
    <Styled.Wrapper>
      <ContentSection.DefaultSection data={RYBSectionData} />
    </Styled.Wrapper>
  );
};

export default RYB;
