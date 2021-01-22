import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #494984;
  width: 200px;
  border-radius: 10px;
  margin: 20px 0;
  background-color: #1d1d42;
  color: white;
  margin-bottom: 30px;
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

export const Income = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #2e2e64;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;

export const Outcome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #2e2e64;
  border-radius: 10px;
  padding: 10px;
`;

export const Value = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 30px;
    height: 30px;
  }

  h2 {
    color: white;
    font-size: 18px;
    margin-right: 10px;
  }

  .up {
    display: flex;
    justify-content: center;
    background-color: #5cc567;
    border-radius: 10px;
    margin-right: 10px;
  }

  .down {
    display: flex;
    justify-content: center;
    background-color: #524eee;
    border-radius: 10px;
    margin-right: 10px;
  }

  .info {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }
`;
