import { devices } from '@/src/constants/media';
import { styled } from 'styled-components';

const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.colors.rgba.gray[4]};

  padding: 0 48px 56px 48px;

  @media only screen and ${devices.md} {
    padding: 91px 64px 32px 64px;
  }

  @media only screen and ${devices.sm} {
    padding: 91px 24px 32px 24px;
  }
`;

const Container = styled('div')`
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;

  max-width: 1240px;

  & > * {
    height: 100%;
  }

  @media only screen and ${devices.md} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
  }

  @media only screen and ${devices.sm} {
    row-gap: 0px;
    grid-template-columns: 1fr;
  }
`;

const Col = styled('div')`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 24px;
`;

const Rows = styled('div')`
  justify-content: flex-start;

  display: flex;
  flex-direction: column;
`;

const LinksWrapper = styled('div')`
  display: flex;
  flex-direction: column;

  margin: 16px 0;
`;

const ContactsCol = styled(Col)`
  gap: 16px;
`;

const Styled = {
  Wrapper,
  Col,
  Rows,
  Container,
  LinksWrapper,
  ContactsCol,
};

export default Styled;
