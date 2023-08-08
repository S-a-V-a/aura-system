import { height } from '@/src/constants/header';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  padding: 20px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: ${height};

  &[active='true'] {
    background-color: ${({ theme }) => theme.colors.hex.base.white};
  }
`;

const LinksWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const MenuButton = styled('button')`
  width: 48px;
  aspect-ratio: 1;

  border-radius: 100%;
  border: none;

  background: ${({ theme }) => theme.colors.rgba.gray[4]};

  position: relative;

  & > div {
    position: absolute;

    width: 33.3%;
    height: 1px;

    top: 50%;
    left: 50%;

    height: 1px;

    transform: translate(-50%, -50%);

    background-color: #000;

    &::before,
    &::after {
      content: '';

      position: absolute;

      left: 50%;

      width: 100%;
      height: 100%;

      background-color: #000;

      transform: translateX(-50%);
    }

    &::before {
      top: -6px;
    }

    &::after {
      top: 6px;
    }
  }
`;

const Actions = styled('div')`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Styled = { Wrapper, LinksWrapper, MenuButton, Actions };

export default Styled;
