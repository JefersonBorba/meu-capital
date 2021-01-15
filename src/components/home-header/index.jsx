import { Link } from "react-router-dom";
import {
  StyledDiv,
  StyledLogoContainer,
  StyledSplitButtonContainer,
  StyledNormalButtonContainer,
  StyledButton,
} from "./styles";

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
        <StyledButton
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
        >
          Login
        </StyledButton>
        <StyledButton
          component={Link}
          to="/register"
          variant="contained"
          color="primary"
          style={{ marginLeft: "5px" }}
        >
          Register
        </StyledButton>
      </StyledNormalButtonContainer>
    </StyledDiv>
  );
};

export default HomeHeader;
