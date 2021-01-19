import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const StyledDiv = styled.div`
  background: #1d1d42;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const StyledLogoContainer = styled.div`
  height: 40px;
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
    font-size: 24px;
  }

  @media (min-width: 425px) {
    span {
      display: inline;
    }
  }
`;

export const StyledSplitButtonContainer = styled.div`
  height: 35px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledNormalButtonContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    height: 35px;
    display: flex;
  }
`;

export const StyledButton = styled(Button)`
  transition: 0.3s !important;
  text-transform: capitalize !important;
  font-family: Ubuntu !important;
  font-size: 20px !important;
  background-color: #1d1d42 !important;
  color: white !important;
  border: 1px solid white !important;

  :hover {
    background-color: #6dfa7b !important;
    color: black !important;
  }
`;
