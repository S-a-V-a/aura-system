import { height } from '@/src/constants/header';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  position: absolute;

  inset: 0;

  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.hex.base.white};

  z-index: -1;

  padding-top: ${height};
`;

const LinksWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 64px;
`;

const Styled = { Wrapper, LinksWrapper };

export default Styled;
