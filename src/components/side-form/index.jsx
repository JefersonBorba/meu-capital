import LoginForm from "../login-form"
import RegisterForm from "../register-form";
import SideImage from "../side-image";
import SideRedirect from "../side-redirect";

const SideForm = ({type}) =>{

  const TypeDecider = (type) => {
    switch(type){
      case "login":
        return <LoginForm/>;

        case "register":
          return <RegisterForm/>;

      default:
      return <div>nada</div>
    }
  }

  

  return (<>
  <SideImage/>
    {TypeDecider(type)}
    <SideRedirect type={type}/>
    </>
  )
}

export default SideForm