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
      justify-content: space-around;
    }

    @media (min-width: 1360px) {
      justify-content: center;
      width: 1360px;
      margin: 0 auto;
    }
  }
`;

export const StyledHr = styled.hr`
  margin: 50px auto;
  background-color: #1d1d42;
  border-color: #1d1d42;
`;
