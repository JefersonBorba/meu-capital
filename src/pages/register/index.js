import SideForm from "../../components/side-form";
import SideImage from "../../components/side-image";
import { LoginContainer } from "./styles";

const Register = () => {
  return (
    <LoginContainer>
      <SideForm type='register'/>
      <SideImage type='register'/>
    </LoginContainer>
  );
};
export default Register;
