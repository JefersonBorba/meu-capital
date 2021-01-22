import SideForm from "../../components/side-form";
import SideImage from "../../components/side-image";
import { LoginContainer, StyledFade } from "./styles";

const Login = () => {
  return (
    <StyledFade>
      <LoginContainer>
        <SideForm type="login" />
        <SideImage type="login" />
      </LoginContainer>
    </StyledFade>
  );
};
export default Login;
