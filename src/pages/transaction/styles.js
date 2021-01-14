import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Breakable = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 2%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
