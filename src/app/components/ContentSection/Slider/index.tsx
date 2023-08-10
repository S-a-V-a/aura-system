'use client';

import React, { FC, useState } from 'react';
import Styled from '../styled';
import { Autoplay } from 'swiper/modules';
import SwiperSlider from '@/src/components/Swiper';
import Image from 'next/image';
import Slide from './Slide';
import { SwiperSlide } from 'swiper/react';
import Progress from './Progress';
import { cYESliderOptions } from '@/src/constants/home-page';

type TSliderSectionProps = {
  data: {
    title: string;
    description: string;
    images: string[];
    link: { href: string; title: string };
  };
};

const SliderSection: FC<TSliderSectionProps> = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Styled.Wrapper>
      <Styled.SliderWrapper>
        <SwiperSlider
          modules={[Autoplay]}
          slidesPerView={1}
          allowTouchMove={false}
          autoplay={{
            delay: cYESliderOptions.duration,
            disableOnInteraction: cYESliderOptions.disableOnInteraction,
            waitForTransition: cYESliderOptions.waitForTransition,
          }}
        >
          {data.images.map((img, idx) => (
            <SwiperSlide key={img + '-' + idx}>
              {() => (
                <Slide onActiveSlideChange={setActiveSlide}>
                  <Image alt='slider-section-image' src={img} />
                </Slide>
              )}
            </SwiperSlide>
          ))}
          {data.images.length > 1 && (
            <Progress activeSlide={activeSlide} count={data.images.length} />
          )}
        </SwiperSlider>
      </Styled.SliderWrapper>
      <Styled.DetailsWrapper>
        <Styled.DetailsContainer>
          <Styled.Title size='xxl'>{data.title}</Styled.Title>
          <Styled.Description>{data.description}</Styled.Description>
        </Styled.DetailsContainer>
        <Styled.Link href={data.link.href}>{data.link.title}</Styled.Link>
      </Styled.DetailsWrapper>
    </Styled.Wrapper>
  );
};

export default SliderSection;
