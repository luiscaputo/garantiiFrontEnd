import styled, { css } from "styled-components";
import { Button } from "reactstrap";

interface Props {
  primary?: boolean;
}

export const Btn = styled(Button)<Props>`
  padding: 14px;
  background: rgb(49, 0, 125);
  background: linear-gradient(
    90deg,
    rgba(49, 0, 125, 1) 0%,
    rgba(60, 21, 132, 1) 52%,
    rgba(49, 0, 125, 1) 100%
  );

  font-family: "Fredoka One", sans-serif;
  font-size: 14px;

  ${(props) =>
    props.primary &&
    css`
      background: rgb(49, 0, 125);
      background: linear-gradient(
        90deg,
        rgba(49, 0, 125, 1) 0%,
        rgba(60, 21, 132, 1) 52%,
        rgba(49, 0, 125, 1) 100%
      );
      color: #ffffff;
    `}
`;
