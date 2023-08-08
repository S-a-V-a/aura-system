'use client';

import React, { FC } from 'react';
import Card from './components/Card';
import Styled from './styled';
import { features } from '@/src/constants/home-page';

const Static: FC = () => {
  return (
    <Styled.Wrapper>
      {features.map((data, idx) => (
        <Card key={data.title + '-' + idx} data={data} />
      ))}
    </Styled.Wrapper>
  );
};

export default Static;
