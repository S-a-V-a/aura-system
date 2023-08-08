'use client';

import React, { FC, PropsWithChildren } from 'react';
import Styled from './styled';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Styled.Main>
      <Header />
      {children}
      <Footer />
    </Styled.Main>
  );
};

export default PageLayout;
