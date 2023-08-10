import { breakpoints } from '@/src/constants/media';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  max-width: min(calc(100% - 200px), ${breakpoints.xxl.min});

  margin-inline: auto;
`;

const Styled = { Wrapper };

export default Styled;
