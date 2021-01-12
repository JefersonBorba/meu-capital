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
            src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
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
