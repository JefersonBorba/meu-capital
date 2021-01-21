import {
  Container,
  Content,
  Profile,
  Name,
  ImageProfile,
  StyledContent,
  StyledLogoutButton,
  LogoAndTitleContainer,
} from "./styles";

import logo from "../../assets/img/logo.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userAllowed } from "../../store/modules/authenticated-user/actions";

const Header = ({ title }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user);

  return (
    <Container>
      <Content>
        <LogoAndTitleContainer>
          <img src={logo} alt="logo" />
          <h1>{title}</h1>
        </LogoAndTitleContainer>
        <StyledContent>
          <Profile>
            <ImageProfile
              src="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
              alt="profile"
            />
            <Name>{dataUser[0].data.name}</Name>
          </Profile>
          <StyledLogoutButton
            onClick={() => {
              history.push("/");
              window.localStorage.clear();
              dispatch(userAllowed(false));
            }}
          >
            Logout
          </StyledLogoutButton>
        </StyledContent>
      </Content>
    </Container>
  );
};

export default Header;
