import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { LogoContainer } from "./styles";

const SideFormLogo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="logo-meu-capital" />
        <figcaption>Meu Capital</figcaption>
      </Link>
    </LogoContainer>
  );
};

export default SideFormLogo;
