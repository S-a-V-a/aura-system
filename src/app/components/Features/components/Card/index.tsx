import Typography from '@/src/components/Typography';
import Image from 'next/image';
import React, { FC } from 'react';
import Styled from './styled';

type TCardProps = {
  data: {
    image: string;
    title: string;
    description: string;
  };
};

const Card: FC<TCardProps> = ({ data }) => {
  return (
    <Styled.Wrapper>
      <Image src={data.image} alt='card-image' />
      <Typography size='xxl'>{data.title}</Typography>
      <Typography color='gray'>{data.description}</Typography>
    </Styled.Wrapper>
  );
};

export default Card;
