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
  padding: 15px;
  font-family: Roboto, sans-serif;
  background-color: #183161;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: white;

  h1 {
    margin: 15px 0;
    text-align: center;
    font-family: Ubuntu;
    font-size: 22px;
  }
`;
