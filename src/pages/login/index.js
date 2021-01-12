
import SideForm from "../../components/side-form";
import SideImage from "../../components/side-image";
import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <SideForm type='login'/>
      <SideImage/>
      
    </LoginContainer>
  );
};
export default Login;
