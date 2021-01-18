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
  width: 100%;
  height: 300px;
  margin: 30px auto;
  background-color: #141432;
  border-radius: 30px;
`;
