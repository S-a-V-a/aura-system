import React, { FC, PropsWithChildren } from 'react';
import Styled from './styled';
import { LinkProps as RootProps } from 'next/link';
import { TVariant } from '@/src/types/theme';
import {} from '@/src/types/components/link';
import { TFontSizeKeys } from '@/src/types/theme/fontSize';
import { theme } from '@/src/theme';

type TLinkProps = PropsWithChildren &
  RootProps & {
    size?: TFontSizeKeys;
    disabled?: boolean;
    variant?: TVariant;
    color?: string;
  };

const Link: FC<TLinkProps> = ({
  variant = 'contained',
  size = 'sm',
  disabled = false,
  color = theme.colors.hex.base.black,
  ...rest
}) => {
  return (
    <Styled.Link size={size} variant={variant} aria-disabled={disabled} color={color} {...rest} />
  );
};

export default Link;
