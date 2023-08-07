"use client";

import React, { FC } from "react";
import Styled from "./styled";
import Link from "../Link";
import Image from "next/image";
import LogoText from "../../../public/logo-text.svg";
import { navLinks } from "@/src/constants/header";

const Header: FC = () => {
  return (
    <Styled.Wrapper>
      <Image src={LogoText} alt="aura-logo" />
      <Styled.LinksWrapper>
        {navLinks.map((link, idx) => (
          <Link href={link.href} key={link.href + "-" + idx} variant="text">
            {link.title}
          </Link>
        ))}
      </Styled.LinksWrapper>
      <Link href="/">Get Pricing</Link>
    </Styled.Wrapper>
  );
};

export default Header;
