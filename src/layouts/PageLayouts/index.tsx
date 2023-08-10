'use client';

import React, { FC, PropsWithChildren } from 'react';
import Styled from './styled';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </>
  );
};

export default PageLayout;
