import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141432;
  width: 98%;
  height: auto;
  border-radius: 30px;
  margin-bottom: 30px;
  padding: 2rem 0;

  h3 {
    color: white;
    margin: 15px 0;
    width: 150px;
    text-align: center;
  }

  @media only screen and (max-width: 1155px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  @media only screen and (max-width: 500px) {
    width: 70vw;
  }
`;

export const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const ExpensesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
  p {
    color: white;
    text-align: center;
    margin-top: 10px;
  }

  @media only screen and (max-width: 510px) {
    .breakable {
      width: 100%;

      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Income = styled.div`
  width: 80%;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #1b1a43;
  border-radius: 10px;
`;

export const Outcome = styled.div`
  width: 80%;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #1b1a43;
  border-radius: 10px;
`;
export const Value = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  div {
    width: 40px;
    height: 40px;
    margin: 1rem;
  }
  h2 {
    color: white;
    padding: 0.3rem;
    font-size: 43px;
  }
  .up {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5cc567;
    border-radius: 10px;
  }
  .down {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #524eee;
    border-radius: 10px;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }

  div {
    width: 50px;
    height: 50px;
  }
`;
