import styled from "styled-components";

export const StyledH1 = styled.h1`
  margin: 20px 0;
  text-align: center;
  color: #183161;
  font-family: Ubuntu;
  font-size: 22px;

  @media (min-width: 425px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const StyledDiv = styled.div`
  background: aliceblue;

  .boxContainer {
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;
