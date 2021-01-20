import {
  Container,
  Content,
  Profile,
  Name,
  ImageProfile,
  StyledContent,
  StyledLogoutButton,
} from "./styles";

import logo from "../../assets/img/logo.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = ({ title }) => {
  const history = useHistory();
  const dataUser = useSelector((state) => state.user);
  const isAllowedSelector = useSelector((state) => state.isAllowed);

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <h1>{title}</h1>
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
              window.localStorage.clear();
              history.push("/login");
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
