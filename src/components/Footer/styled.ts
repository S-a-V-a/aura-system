import { styled } from "styled-components";

const Wrapper = styled("div")`
  background-color: ${({ theme }) => theme.colors.rgba.gray[4]};

  padding: 24px 10px 56px 10px;
`;

const Container = styled("div")`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 5px;

  max-width: 1240px;

  & > * {
    height: 100%;
  }
`;

const Col = styled("div")`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Rows = styled("div")`
  justify-content: flex-start;

  display: flex;
  flex-direction: column;
`;

const LinksWrapper = styled("div")`
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
