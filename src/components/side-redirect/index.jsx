import { Link } from "react-router-dom";
import { SideRedirectContainer } from "./styles";

const SideRedirect = ({ type }) => {
  const TypeDecider = (type) => {
    switch (type) {
      case "login":
        return (
          <SideRedirectContainer>
            Ainda não é cadastrado? <Link to="/register">Cadastrar!</Link>
          </SideRedirectContainer>
        );

      case "register":
        return (
          <SideRedirectContainer>
            Você já é cadastrado? <Link to="/login">Entrar!</Link>
          </SideRedirectContainer>
        );

      default:
        return <div>nada</div>;
    }
  };
  return TypeDecider(type);
};

export default SideRedirect;
