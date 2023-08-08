import React, { FC } from 'react';
import Styled from './styled';
import Link from '../Link';
import { navMobileLinks } from '@/src/constants/header';
import { useMediaQuery } from 'usehooks-ts';
import { devices } from '@/src/constants/media';

type TBurgerProps = {
  opened: boolean;
};

const BurgerMenu: FC<TBurgerProps> = ({ opened }) => {
  const sm = useMediaQuery(devices.sm.max);

  if (!opened) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <Styled.LinksWrapper>
        {navMobileLinks.map((link, idx) => (
          <Link href={link.href} key={link.href + '-' + idx} type='text' size='xxl'>
            {link.title}
          </Link>
        ))}
        {sm && (
          <Styled.Link href={'/'} type='text' size='xxl'>
            Buy Aura Camera
          </Styled.Link>
        )}
      </Styled.LinksWrapper>
    </Styled.Wrapper>
  );
};

export default BurgerMenu;
