import Tabs from '@/src/components/Tabs/styled';
import { breakpoints } from '@/src/constants/media';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  margin-top: 200px;
  margin-inline: auto;

  max-width: min(calc(100% - 200px), ${breakpoints.xxl.min});

  ${Tabs.Wrapper} {
    margin-bottom: 96px;
  }

  margin-bottom: 115px;
`;

export const Title = styled('span')`
  display: block;

  font-size: 52px;

  margin-bottom: 48px;
`;

const Styled = {
  Wrapper,
  Title,
};

export default Styled;
