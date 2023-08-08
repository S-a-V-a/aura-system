'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import Styled from './styled';
import Link from '../Link';
import Image from 'next/image';
import LogoText from '../../../public/logo-text.svg';
import { navLinks } from '@/src/constants/header';
import { useMediaQuery } from 'usehooks-ts';
import { devices } from '@/src/constants/media';
import BurgerMenu from '../BurgerMenu';

const Header: FC = () => {
  const sm = useMediaQuery(devices.sm.max);
  const md = useMediaQuery(devices.md.max);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    const scrollHandler = () => {
      if (!wrapperRef.current) {
        return;
      }

      if (window.scrollY > 10) {
        wrapperRef.current.setAttribute('active', 'true');
      } else {
        wrapperRef.current.setAttribute('active', 'false');
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [wrapperRef]);

  const [burger, setBurger] = useState(false);

  return (
    <Styled.Wrapper ref={wrapperRef}>
      <Image src={LogoText} alt='aura-logo' />
      {!md && (
        <Styled.LinksWrapper>
          {navLinks.map((link, idx) => (
            <Link href={link.href} key={link.href + '-' + idx} type='text' size='lg'>
              {link.title}
            </Link>
          ))}
        </Styled.LinksWrapper>
      )}
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
