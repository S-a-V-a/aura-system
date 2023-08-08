'use client';

import React, { FC } from 'react';
import Styled from './styled';
import Link from '@/src/components/Link';
import { useMediaQuery } from 'usehooks-ts';
import { devices } from '@/src/constants/media';

const Greeting: FC = () => {
  const md = useMediaQuery(devices.md);

  return (
    <Styled.Wrapper>
      <Styled.Title>
        Propel Your Wellness <br /> Business Forward
      </Styled.Title>
      <Styled.Subtitle>
        The AuraCloud® 3D is a revolutionary multimedia real-time human aura and chakra analisis
        system.
      </Styled.Subtitle>
      <Styled.Actions>
        <Link href='/' size='lg'>
          Buy Aura Camera
        </Link>
        <Link href='/' size='lg' type='secondary'>
          Contact Sales
        </Link>
      </Styled.Actions>
    </Styled.Wrapper>
  );
};

export default Greeting;
