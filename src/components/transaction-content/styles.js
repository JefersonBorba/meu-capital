import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #141432;
  width: 100%;
  height: auto;
  border-radius: 30px;
  margin: 0 20px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 80vw;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 500px) {
    width: 60vw;
  }
`;

export const Content = styled.div`
  width: 80%;
`;

export const Card = styled.div`
  padding: 10px;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: background-color 0.5s;

  .divider {
    display: flex;
    width: 20%;
  }

  :hover {
    background-color: #2e2e64;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 20%;
  }

  h2 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
  }
`;
