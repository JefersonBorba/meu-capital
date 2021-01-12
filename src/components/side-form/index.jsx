import LoginForm from "../login-form";
import RegisterForm from "../register-form";
import SideRedirect from "../side-redirect";
import SideFormLogo from "../side-form-logo";
import { SideFormContainer } from "./styles";

const SideForm = ({ type }) => {
  const TypeDecider = (type) => {
    switch (type) {
      case "login":
        return <LoginForm />;

      case "register":
        return <RegisterForm />;

      default:
        return <div>nada</div>;
    }
  };

  return (
    <SideFormContainer>
      <SideFormLogo />
      {TypeDecider(type)}
      <SideRedirect type={type} />
    </SideFormContainer>
  );
};

export default SideForm;
