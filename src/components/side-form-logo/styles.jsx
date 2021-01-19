import styled from "styled-components";

export const LogoContainer = styled.figure`
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
    color: #fff;

    img {
      margin: 0 auto;
      margin-bottom: 20px;
      width: 100px;
    }

    figcaption {
      margin-bottom: 5px;
      font-size: 2rem;
    }
  }
`;
