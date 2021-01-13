import styled from "styled-components";

export const StyledDiv = styled.div`
  background: #183161;
  height: 80px;
  display: flex;
  flex-direction: column;
  padding: 10px 6px;

  div {
    text-align: center;
    font-family: Ubuntu, monospace;
    color: white;
  }
`;

export const StyledSocialDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;

  img {
    padding-bottom: 10px;
    height: 80%;
  }
`;
