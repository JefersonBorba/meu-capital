import styled from "styled-components";

export const StyledDiv = styled.div`
  background: #1d1d42;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 4px 6px;
`;

export const StyledLogoContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;

  img {
    max-height: 100%;
    height: auto;
  }

  span {
    margin-left: 5px;
    font-family: Ubuntu;
    color: white;
    display: none;
  }

  @media (min-width: 425px) {
    span {
      display: inline;
    }
  }
`;

export const StyledSplitButtonContainer = styled.div`
  height: 35px;

  @media (min-width: 425px) {
    display: none;
  }
`;

export const StyledNormalButtonContainer = styled.div`
  display: none;
  @media (min-width: 425px) {
    height: 35px;
    display: flex;
  }
`;
