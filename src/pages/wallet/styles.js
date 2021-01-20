import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const Breakable = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: 2%;
  margin-top: 30px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  h2 {
    margin: 20px 0;
  }
`;
export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Balance = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  justify-content: center;
  align-items: flex-end;
  background-color: #141432;
  border-radius: 30px;
  @media only screen and (max-width: 500px) {
    width: 70%;
  }
`;

export const BalanceContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    margin-right: 30px;
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
    padding: 10px 20px;
    background-color: #2e2e64;
    border-radius: 30px;
  }
  @media only screen and (max-width: 1220px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 960px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 1rem;
      margin-right: 10px;
    }
    h2 {
      font-size: 0.5rem;
    }
  }
`;
export const AddValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #5cc567;
    border-radius: 50%;
    margin-right: 24%;
    @media only screen and (max-width: 500px) {
      width: 20px;
      height: 20px;
    }
`;
