import React, { FC } from 'react';
import Styled from './styled';
import Link from '../Link';
import { navMobileLinks } from '@/src/constants/header';
import { useMediaQuery } from 'usehooks-ts';
import { devices } from '@/src/constants/media';
import { theme } from '@/src/theme';

type TBurgerProps = {
  opened: boolean;
};

const BurgerMenu: FC<TBurgerProps> = ({ opened }) => {
  const sm = useMediaQuery(devices.sm);

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
          <Link href={'/'} type='text' size='xxl' color={theme.colors.hex.primary[600]}>
            Buy Aura Camera
          </Link>
        )}
      </Styled.LinksWrapper>
    </Styled.Wrapper>
  );
};

export default BurgerMenu;
