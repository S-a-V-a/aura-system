import { styled } from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;

  & > img {
    width: 100%;
    height: min-content;

    object-fit: contain;

    margin-bottom: 12px;
  }

  & > span {
    margin-top: 16px;
  }
`;

const Styled = { Wrapper };

export default Styled;
