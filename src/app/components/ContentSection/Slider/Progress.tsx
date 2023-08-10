'use client';

import React, { FC } from 'react';
import Styled from './styled';
import { theme } from '@/src/theme';
import { cYESliderOptions } from '@/src/constants/home-page';

type TProgressProps = {
  count: number;
  activeSlide: number;
};

const Progress: FC<TProgressProps> = ({ count, activeSlide }) => {
  return (
    <Styled.SlidePlayProgressWrapper slot='container-end'>
      <Styled.SlidePlayNumberWrapper>
        {Array.from({ length: count }).map((_, idx) => (
          <Styled.SlidePlayNumber key={'play-number-' + idx} isActive={activeSlide === idx}>
            {idx < 10 ? '0' + (idx + 1) : idx + 1}
          </Styled.SlidePlayNumber>
        ))}
      </Styled.SlidePlayNumberWrapper>
      <svg viewBox='0 0 200 1'>
        <rect height='1px' width='100%' stroke={theme.colors.hex.base.white} opacity={0.4} />
        <Styled.Rect
          width='0px'
          height='1px'
          stroke='white'
          initial={cYESliderOptions.animation.rectProggress.initial}
          animate={cYESliderOptions.animation.rectProggress.animate}
          transition={{ duration: cYESliderOptions.duration / 1000 }}
          key={activeSlide}
        />
      </svg>
    </Styled.SlidePlayProgressWrapper>
  );
};

export default Progress;
