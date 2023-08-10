'use client';

import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import Styled from './styled';
import { TFontSizeKeys } from '@/src/types/theme/fontSize';
import { TType } from '@/src/types/theme';
import { HTMLMotionProps } from 'framer-motion';

type TButtonProps = PropsWithChildren &
  HTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<'button'> & {
    size?: TFontSizeKeys;
    disabled?: boolean;
    variant?: TType;
  };

const Button: FC<TButtonProps> = ({
  size = 'sm',
  variant = 'primary',
  disabled = false,
  ...rest
}) => {
  return <Styled.Button variant={variant} size={size} disabled={disabled} {...rest} />;
};

export default Button;
