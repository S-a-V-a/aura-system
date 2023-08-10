'use client';

import React, { FC } from 'react';
import Styled from './styled';

type TTabsProps = {
  tabs: string[];
  onTabChange: (tabIdx: number) => void;
  activeIdx: number;
};

const Tabs: FC<TTabsProps> = ({ tabs, onTabChange, activeIdx }) => {
  return (
    <Styled.Wrapper>
      {tabs.map((t, tIdx) => (
        <Styled.Button
          key={t + '-' + tIdx}
          onClick={() => onTabChange(tIdx)}
          variant={activeIdx === tIdx ? 'primary' : 'secondary'}
          size='lg'
        >
          {t}
        </Styled.Button>
      ))}
    </Styled.Wrapper>
  );
};

export default Tabs;
