import { styled } from 'styled-components';
import RootLink from '@/src/components/Link';
import Typography from '@/src/components/Typography';

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: minmax(0, 2fr) 1fr;
  column-gap: 80px;
`;

const ImageWrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.hex.base.black};

  aspect-ratio: 2 / 1.25;
`;

const DetailsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 33px;

  border-block: 1px solid ${({ theme }) => theme.colors.hex.gray[50]};
`;

const DetailsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled(Typography)`
  font-size: 40px;
`;

const Description = styled(Typography)`
  font-size: 17px;
`;

const Link = styled(RootLink)`
  background: transparent;
  color: ${({ theme }) => theme.colors.hex.primary[400]};

  box-shadow: none;

  border: 1px solid transparent;

  padding: 0;

  font-size: 19px;

  &:hover {
    background: transparent;

    border-bottom: 1px solid ${({ theme }) => theme.colors.hex.primary[400]};
    border-radius: 0px;
  }
`;

const SliderWrapper = styled('div')`
  img {
    width: 100%;
    height: 100%;
  }
`;

const Styled = {
  Wrapper,
  ImageWrapper,
  DetailsWrapper,
  DetailsContainer,
  Title,
  Description,
  Link,
  SliderWrapper,
};

export default Styled;
