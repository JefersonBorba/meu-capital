import styled from "styled-components";

export const ImageContainer = styled.div`
  color: #fff;
  background-color: #1d1d42;
  display: none;

  img {
    width: 50vw;
    max-width: 600px
  }

  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vw;
  }
`;
