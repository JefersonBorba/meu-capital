import styled from "styled-components";

export const StyledDiv = styled.div`
  background: #1d1d42;
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 10px 6px;
  font-family: Ubuntu, monospace;
  color: white;
  text-align: center;

  .copyright {
    margin: 10px 0;
  }
`;

export const StyledSocialDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  padding-bottom: 10px;
  border-bottom: 1px solid white;

  @media (min-width: 425px) {
    width: 340px;
  }
`;
