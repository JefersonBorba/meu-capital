import styled from "styled-components";

export const StyledDiv = styled.div`
  background: #1d1d42;
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 10px 6px;
  font-family: Ubuntu, monospace;
  color: white;
  text-align: center;

  .copyright {
    margin: 10px 0;
  }
`;

export const StyledSocialDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  padding-bottom: 10px;
  border-bottom: 1px solid white;

  @media (min-width: 425px) {
    width: 340px;
  }

  @media (min-width: 768px) {
    width: 640px;
  }

  @media (min-width: 1024px) {
    width: 740px;
  }
`;

export const LinkedInDiv = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    display: none;
  }

  @media (min-width: 768px) {
    p {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    p {
      display: block;
    }
  }
`;
