import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import Styled from './styled';
import { TFontSizeKeys } from '@/src/types/theme/fontSize';
import { TType } from '@/src/types/theme';

type TButtonProps = {
  size?: TFontSizeKeys;
  disabled?: boolean;
  type?: TType;
} & PropsWithChildren &
  HTMLAttributes<HTMLButtonElement>;

const Button: FC<TButtonProps> = ({ size = 'sm', type = 'primary', disabled = false, ...rest }) => {
  return <Styled.Button type={type} size={size} disabled={disabled} {...rest} />;
};

export default Button;
