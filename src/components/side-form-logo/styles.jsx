import styled from "styled-components";

export const LogoContainer = styled.figure`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
    color: #fff;

    img,
    figcaption,
    span {
      margin-bottom: 15px;
    }
  }

  img {
    margin: 0 auto;
    width: 100px;
  }

  figcaption {
    font-size: 2rem;
  }
`;
