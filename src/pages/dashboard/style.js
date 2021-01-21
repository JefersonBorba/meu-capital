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
  margin-top: 2%;

  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: 2%;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Graphs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
