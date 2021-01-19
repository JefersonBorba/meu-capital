import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  color: white;
  h2 {
    margin: 20px 0;
  }
`;

export const Breakable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Balance = styled.div`
  width: 85%;
  margin: 30px auto;
  background-color: #141432;
  border-radius: 30px;
  padding: 30px;
`;

export const BalanceContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
