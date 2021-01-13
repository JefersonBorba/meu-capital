import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledContainer = styled.div`
  margin: 30px auto;
  width: 250px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: justify;
  padding: 15px;
  font-family: Roboto, sans-serif;
  background-color: #1d1d42;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  h1 {
    margin: 15px 0;
    text-align: center;
    font-family: Ubuntu;
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    width: 330px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 18px;
    }
  }
`;
