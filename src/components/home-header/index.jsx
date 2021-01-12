import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

import SplitButton from "./split-button";

const HomeHeader = () => {
  return (
    <StyledDiv>
      <StyledLogoContainer>
        <img src={logo} alt="logo" />
        <span>Meu Capital</span>
      </StyledLogoContainer>
      <StyledSplitButtonContainer>
        <SplitButton />
      </StyledSplitButtonContainer>
      <StyledNormalButtonContainer>
        <Button
          component={Link}
          to="/register"
          size="small"
          variant="contained"
          color="primary"
          style={{ height: "30px" }}
        >
          Login
        </Button>
        <Button
          component={Link}
          to="/login"
          size="small"
          variant="contained"
          color="primary"
          style={{ height: "30px", marginLeft: "5px" }}
        >
          Register
        </Button>
      </StyledNormalButtonContainer>
    </StyledDiv>
  );
};

export default HomeHeader;

const StyledDiv = styled.div`
  background: #183161;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 4px 6px;
`;

const StyledLogoContainer = styled.div`
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

const StyledSplitButtonContainer = styled.div`
  height: 35px;

  @media (min-width: 425px) {
    display: none;
  }
`;

const StyledNormalButtonContainer = styled.div`
  display: none;
  @media (min-width: 425px) {
    height: 35px;
    display: flex;
  }
`;
