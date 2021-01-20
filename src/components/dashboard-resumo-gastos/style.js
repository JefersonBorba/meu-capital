import styled from "styled-components";

export const Container = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #141432;
  width: 55vw;
  height: 60vh;
  border-radius: 30px;
  margin: 30px;
  h3 {
    color: white;
    margin: 15px 0;
    width: 150px;
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 80vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  @media only screen and (max-width: 500px) {
    width: 70vw;
  }
`;

export const GraphContainer = styled.div`
  width: 60%;
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
  width: 40%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    color: white;
    text-align: center;
  }

  @media only screen and (max-width: 900px) {
    .breakable {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 510px) {
    .breakable {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Income = styled.div`
  padding: 1rem;

  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  background-color: #1b1a43;
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    width: 50vw;
  }
`;

export const Outcome = styled.div`
  margin: 10px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  background-color: #1b1a43;
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    width: 50vw;
  }
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
  .up {
    margin: 15px 0;
  }
  .down {
    margin: 15px 0;
  }
  div {
    width: 50px;
    height: 50px;
  }
`;
