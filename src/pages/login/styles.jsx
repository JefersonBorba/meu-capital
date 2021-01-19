import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export const LoginContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;

  & > div {
    width: 100%;

    @media (min-width: 850px) {
      width: 50%;
    }
  }

  img {
    max-width: 70%;
  }
`;

export const StyledFade = styled(Fade)`
  background-color: #1d1d42;
`;
