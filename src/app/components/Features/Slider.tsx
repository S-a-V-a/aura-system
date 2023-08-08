'use client';

import React, { FC } from 'react';
import Styled from './styled';
import SwiperSlider from '@/src/components/Swiper';
import { features } from '@/src/constants/home-page';
import { SwiperSlide } from 'swiper/react';
import Card from './components/Card';

const Slider: FC = () => {
  return (
    <Styled.Wrapper>
      <SwiperSlider slidesPerView={2.5} spaceBetween={32}>
        {features.map((data, idx) => (
          <SwiperSlide key={data.title + '-' + idx}>
            <Card data={data} />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </Styled.Wrapper>
  );
};

export default Slider;
