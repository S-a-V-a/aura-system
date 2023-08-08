import { devices } from '@/src/constants/media';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  justify-content: center;

  margin-top: 200px;

  padding-inline: 100px;

  @media screen and ${devices.md.minmax} {
    padding: 0;

    & > .swiper {
      padding-inline: 64px;
    }
  }

  @media screen and ${devices.sm.max} {
    flex-direction: column;

    margin-top: 120px;

    padding-inline: 24px;
  }
`;

const Styled = { Wrapper };

export default Styled;
