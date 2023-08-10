'use client';

import React, { FC } from 'react';
import Styled from './styled';

type TDefaultSectionProps = {
  data: {
    title: string;
    description: string;
    images: string;
    link: { href: string; title: string };
  };
};

const DefaultSection: FC<TDefaultSectionProps> = ({ data }) => {
  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper></Styled.ImageWrapper>
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

export default DefaultSection;
