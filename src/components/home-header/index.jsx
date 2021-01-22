import { Link } from "react-router-dom";
import {
  StyledDiv,
  StyledLogoContainer,
  StyledSplitButtonContainer,
  StyledNormalButtonContainer,
  StyledButton,
} from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userAllowed } from "../../store/modules/authenticated-user/actions";
import { useHistory } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import SplitButton from "./split-button";

const HomeHeader = () => {
  const isAllowedSelector = useSelector((state) => state.isAllowed);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    history.push("/");
    window.localStorage.clear();
    dispatch(userAllowed(false));
  };

  return (
    <StyledDiv>
      <StyledLogoContainer>
        <img src={logo} alt="logo" />
        <span>Meu Capital</span>
      </StyledLogoContainer>
      <StyledSplitButtonContainer>
        <SplitButton />
      </StyledSplitButtonContainer>
      {isAllowedSelector ? (
        <StyledNormalButtonContainer>
          <StyledButton
            component={Link}
            to="/dashboard"
            variant="contained"
            color="primary"
          >
            Dashboard
          </StyledButton>
          <StyledButton
            variant="contained"
            style={{ marginLeft: "5px" }}
            onClick={handleLogout}
          >
            Logout
          </StyledButton>
        </StyledNormalButtonContainer>
      ) : (
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
      )}
    </StyledDiv>
  );
};

export default HomeHeader;
