import SideForm from "../../components/side-form";
import SideImage from "../../components/side-image";
import { LoginContainer, StyledFade } from "./styles";

const Register = () => {
  return (
    <StyledFade>
      <LoginContainer>
        <SideForm type="register" />
        <SideImage type="register" />
      </LoginContainer>
    </StyledFade>
  );
};
export default Register;
