import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #1d1d42;
  color: white;
`;

export const Content = styled.div``;

export const Card = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: background-color 0.5s;

  :hover {
    background-color: #2e2e64;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }

  h2 {
    font-size: 15px;
  }

  p {
    font-size: 10px;
  }
`;
