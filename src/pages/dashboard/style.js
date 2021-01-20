import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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
  flex-direction: row;
  justify-content: space-between;
  margin: 2%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Graphs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
