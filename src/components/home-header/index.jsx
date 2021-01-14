import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  StyledDiv,
  StyledLogoContainer,
  StyledSplitButtonContainer,
  StyledNormalButtonContainer,
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
        <Button
          component={Link}
          to="/login"
          size="small"
          variant="contained"
          color="primary"
          style={{ height: "30px" }}
        >
          Login
        </Button>
        <Button
          component={Link}
          to="/register"
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
