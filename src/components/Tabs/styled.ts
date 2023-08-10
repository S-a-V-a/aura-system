import { styled } from 'styled-components';
import RootButton from '@/src/components/Button';

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 24px;
`;

const Button = styled(RootButton)`
  width: 100%;

  padding-block: 8px;
  padding-inline: 14px;
`;

const Styled = { Button, Wrapper };

export default Styled;
