'use client';

import React, { FC, useState } from 'react';
import Styled from './styled';
import Link from '../Link';
import Image from 'next/image';
import LogoText from '../../../public/logo-text.svg';
import { navLinks } from '@/src/constants/header';
import { useMediaQuery } from 'usehooks-ts';
import { devices } from '@/src/constants/media';
import BurgerMenu from '../BurgerMenu';
import { theme } from '@/src/theme';

const Header: FC = () => {
  const sm = useMediaQuery(devices.sm);
  const md = useMediaQuery(devices.md);

  const [burger, setBurger] = useState(false);

  return (
    <Styled.Wrapper>
      <Image src={LogoText} alt='aura-logo' />
      <Styled.LinksWrapper>
        {!md &&
          navLinks.map((link, idx) => (
            <Link href={link.href} key={link.href + '-' + idx} type='text' size='lg'>
              {link.title}
            </Link>
          ))}
      </Styled.LinksWrapper>
      <Styled.Actions>
        {!sm && (
          <Link href='/' size={'md'}>
            Get Pricing
          </Link>
        )}

        {md && (
          <Styled.MenuButton onClick={() => setBurger(!burger)}>
            <div />
          </Styled.MenuButton>
        )}
      </Styled.Actions>
      {md && <BurgerMenu opened={burger} />}
    </Styled.Wrapper>
  );
};

export default Header;
