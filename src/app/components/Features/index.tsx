'use client';

import { devices } from '@/src/constants/media';
import React, { FC, memo } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Slider from './Slider';
import Static from './Static';

const Fearutes: FC = memo(() => {
  const md = useMediaQuery(devices.md);

  return md ? <Slider /> : <Static />;
});

Fearutes.displayName = 'Fearutes';

export default Fearutes;
