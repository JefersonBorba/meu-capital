import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #494984;
  width: 200px;
  border-radius: 10px;
  margin: 20px 0;
  background-color: #1d1d42;
  color: white;
`;

export const Content = styled.div`
  padding: 15px;

  h1 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LinearProgress = styled.div`
  background-color: white;
  height: 5px;
  width: 100%;
  margin-top: 5px;
`;

export const Bar = styled.div`
  background-color: #494984;
  height: 100%;
`;
