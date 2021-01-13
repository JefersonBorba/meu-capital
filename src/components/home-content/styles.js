import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledContainer = styled.div`
  margin: 30px auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  padding: 5px;
`;

export const StyledImageContainer = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledTextContainer = styled.div`
  font-family: Roboto, sans-serif;
  margin-top: 10px;
  padding: 5px;

  h1 {
    margin-bottom: 10px;
    text-align: center;
    color: #183161;
    font-family: Ubuntu;
    font-size: 22px;
  }
`;
