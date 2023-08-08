import { devices } from '@/src/constants/media';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  margin-top: 152px;
  margin-inline: auto;

  max-width: calc(100% - 200px);

  display: flex;
  flex-direction: column;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);

  @media only screen and ${devices.md} {
    max-width: calc(100% - 128px);
  }

  @media only screen and ${devices.sm} {
    max-width: calc(100% - 48px);
  }
`;

const Title = styled('span')`
  font-size: 85px;
  font-weight: 500;

  line-height: 1.1;

  @media only screen and ${devices.md} {
    font-size: 70px;
  }

  @media only screen and ${devices.sm} {
    font-size: 56px;
  }
`;

const Subtitle = styled('span')`
  margin-top: 40px;

  font-size: 21px;

  max-width: 500px;

  @media only screen and ${devices.md} {
    max-width: 100%;
  }

  @media only screen and ${devices.md} {
    font-size: 19px;
  }
`;

const Actions = styled('div')`
  display: flex;
  align-items: center;
  gap: 24px;

  margin-top: 56px;

  @media only screen and ${devices.sm} {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

const Styled = { Wrapper, Title, Subtitle, Actions };

export default Styled;
