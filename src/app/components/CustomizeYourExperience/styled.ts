import RootLink from '@/src/components/Link';
import Typography from '@/src/components/Typography';
import { breakpoints } from '@/src/constants/media';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  padding-inline: 100px;

  margin-top: 200px;
  margin-inline: auto;

  max-width: min(calc(100% - 200px), ${breakpoints.xxl.min});
`;

export const Title = styled('span')`
  display: block;

  font-size: 52px;

  margin-bottom: 48px;
`;

const TabContentWrapper = styled('div')`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 80px;

  margin-top: 96px;
`;

const TabImageWrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.hex.base.black};

  aspect-ratio: 2 / 1.25;
`;

const TabContentDetailsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 33px;

  border-block: 1px solid ${({ theme }) => theme.colors.hex.gray[50]};
`;

const TabContentDetailsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TabContentTitle = styled(Typography)`
  font-size: 40px;
`;

export const TabContentDescription = styled(Typography)`
  font-size: 17px;
`;

export const TabContentLink = styled(RootLink)`
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

const Styled = {
  Wrapper,
  Title,
  TabContentWrapper,
  TabImageWrapper,
  TabContentDetailsWrapper,
  TabContentDetailsContainer,
  TabContentTitle,
  TabContentDescription,
  TabContentLink,
};

export default Styled;
