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

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledImageContainer = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;

  .img {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 425px) {
    height: 310px;

    .img {
      margin: auto;
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    height: 360px;
  }

  @media (min-width: 1360px) {
    height: 460px;
    width: 60%;
  }
`;

export const StyledTextContainer = styled.div`
  font-family: Roboto, sans-serif;
  margin-top: 10px;
  padding: 5px;
  width: 95%;

  h1 {
    margin-bottom: 10px;
    text-align: center;
    color: #183161;
    font-family: Ubuntu;
    font-size: 22px;
  }

  @media (min-width: 425px) {
    width: 350px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    width: 550px;

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 22px;
    }
  }

  @media (min-width: 1360px) {
    width: 40%;
  }
`;
