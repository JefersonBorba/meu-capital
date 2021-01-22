import styled from "styled-components";

export const SideFormContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1d1d42;

  @media (min-width: 850px) {
    width: 40vw;
  }
`;
