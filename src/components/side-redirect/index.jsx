import { Link } from "react-router-dom";

const SideRedirect = ({ type }) => {

  const TypeDecider = (type) => {
    switch (type) {
      case "login":
        return <span>Ainda não é cadastrado? <Link to='/register'>Cadastrar!</Link></span>;

      case "register":
        return <span>Você já é cadastrado? <Link to='/login'>Entrar!</Link></span>;

      default:
        return <div>nada</div>;
    }
  };
  return TypeDecider(type);
};

export default SideRedirect;
