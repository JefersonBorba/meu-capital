import { FaSearch } from "react-icons/fa";

import {
  Container,
  Content,
  Profile,
  Name,
  ImageProfile,
  StyledContent,
  InputStyled,
  Input,
} from "./styles";

import logo from "../../assets/img/logo.svg";

const Header = ({ title }) => (
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
          <Name>Fulano</Name>
        </Profile>
        <InputStyled>
          <Input placeholder="Search" />
          <FaSearch className="iconSearch" />
        </InputStyled>
      </StyledContent>
    </Content>
  </Container>
);

export default Header;
