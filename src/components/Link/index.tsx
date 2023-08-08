import React, { FC, PropsWithChildren } from 'react';
import Styled from './styled';
import { LinkProps as RootProps } from 'next/link';
import { TType, TVariant } from '@/src/types/theme';
import {} from '@/src/types/components/link';
import { TFontSizeKeys } from '@/src/types/theme/fontSize';
import { theme } from '@/src/theme';

type TLinkProps = PropsWithChildren &
  RootProps & {
    size?: TFontSizeKeys;
    disabled?: boolean;
    type?: TType;
  };

const Link: FC<TLinkProps> = ({ size = 'sm', disabled = false, type = 'primary', ...rest }) => {
  return <Styled.Link type={type} size={size} aria-disabled={disabled} {...rest} />;
};

export default Link;
